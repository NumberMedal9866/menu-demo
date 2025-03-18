<template>
  <div>
    <router-link to="/menu" class="menu-btn container">{{ t("look") }}</router-link>
    
    <div class="header">
      <router-link to="/"><img src="@/assets/img/back.svg" alt="Back"></router-link>
      <select v-model="locale" @change="changeLanguage">
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="uz">O'zbekcha</option>
      </select>
    </div>

    <div class="container home">
      <Info />
      <div class="breakfast">
        <h2>{{ t(title) }}</h2>

        <div class="breakfast-holder">
          <div v-for="food in menu" :key="food.id" class="breakfast-holder-card" :class="{ 'is-loading': isLoading[food.id] }">
            
            <!-- Image with Lazy Loading & Blur Effect -->
            <div class="image">
              <img 
                v-lazy="resolveImagePath(food.category, food.file)"
                alt="Item Image"
                class="lazy-image"
                @load="onImageLoad(food.id)"
              />
            </div>

            <!-- Content Skeleton Loader -->
            <div class="breakfast-holder-card-info">
              <h3 v-if="!isLoading[food.id]">{{ food.name }}</h3>
              <h3 v-else></h3>
              
              <h4 v-if="!isLoading[food.id]">{{ food.descr }}</h4>
              <h4 v-else></h4>

              <div class="breakfast-holder-card-info-cart">
                <span class="price" v-if="!isLoading[food.id]">{{ food.price }}</span>
                <span class="price" v-else></span>

                <div v-if="!isLoading[food.id]">
                  <div class="breakfast-holder-card-info-cart-amount" v-if="food.add === '1'">
                    <button @click="openModal(food)" class="btn">
                      <img src="@/assets/img/menu.svg" alt="Add to Cart" class="opt"/>
                    </button>
                  </div>
                  <div class="breakfast-holder-card-info-cart-amount" v-else>
                    <button v-if="!isInCart(food.id)" @click="addToCart(food.id)" class="btn">
                      <img src="@/assets/img/pw.svg" alt="Add to Cart" />
                    </button>
                    <div v-else class="amount">
                      <button @click.stop="decrease(food.id)">
                        <img src="@/assets/img/minus.svg" alt="Decrease" />
                      </button>
                      <p>{{ getQuantity(food.id) }}</p>
                      <button @click.stop="increase(food.id)">
                        <img src="@/assets/img/plus.svg" alt="Increase" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal  
    :show="isModalOpen" 
    :food="selectedFood" 
    @close="closeModal" 
    @confirm="addToCartWithExtras" 
  />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import Info from '@/components/Info/Info.vue';
import Modal from '@/components/Modal/Modal.vue';
import breakfastData from '@/data/menu.json';

const { t, locale } = useI18n();
const allMenus = breakfastData;
const route = useRoute();
const isLoading = ref({});

const title = computed(() => route.params.type || "menu");

const menu = computed(() => {
  return allMenus[title.value]?.map(food => ({
    ...food,
    name: t(`menuItems.${food.category}.${food.id}.name`),
    descr: t(`menuItems.${food.category}.${food.id}.descr`)
  })) || [];
});

const isModalOpen = ref(false);
const selectedFood = ref(null);
const cart = ref({});

// ✅ Fix Lazy Load Animation Delay
const onImageLoad = (id) => {
  isLoading.value[id] = false;
};

// ✅ Preload All Images Before User Sees Them
const preloadImage = (url) => {
  const img = new Image();
  img.src = url;
};



// const resolveImagePath = (category, file) => {
//   try {
//     return new URL(`/src/assets/img/${category}/${file}`, import.meta.url).href;
//   } catch (error) {
//     console.error('Error resolving image path:', error);
//     return '';
//   }
// };

const loadCartFromLocalStorage = () => {
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  if (savedCart) {
    cart.value = savedCart;
  }
};

const saveCartToLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value));
};
const addToCart = (id) => {
  const product = menu.value.find(item => item.id === id);
  if (cart.value[id]) {
    cart.value[id].quantity++;
  } else {
    cart.value[id] = { ...product, quantity: 1 };
  }
  saveCartToLocalStorage();
};

const increase = (id) => {
  if (cart.value[id]) {
    cart.value[id].quantity++;
    saveCartToLocalStorage();
  }
};

const decrease = (id) => {
  if (cart.value[id]) {
    cart.value[id].quantity--;
    if (cart.value[id].quantity === 0) {
      delete cart.value[id];
    }
    saveCartToLocalStorage();
  }
};

const getQuantity = (id) => cart.value[id]?.quantity || 0;
const isInCart = (id) => !!cart.value[id];
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      preloadImages(); // Load all images in the background
      observer.disconnect(); // Prevent repeated executions
    }
  });
});
const changeLanguage = (event) => {
  const newLang = event.target.value;
  locale.value = newLang;
  localStorage.setItem("lang", newLang);
};

onMounted(() => {
  loadCartFromLocalStorage();
  menu.value.forEach((food) => {
    isLoading.value[food.id] = true;
  });

  const savedLang = localStorage.getItem("lang");
  if (savedLang) {
    locale.value = savedLang;
  }
  const target = document.querySelector(".container.home"); // Main page container
  if (target) observer.observe(target);
});

const resolveImagePath = (category, file) => {
  try {
    return new URL(`/src/assets/img/${category}/${file}`, import.meta.url).href;
  } catch (error) {
    console.error('Error resolving image path:', error);
    return '';
  }
};

const openModal = (food) => {
  selectedFood.value = food;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const addToCartWithExtras = ({ food, check, toggle, uniqueKey }) => {
  const selectedCheckKey = check || "";
  const selectedCheck = food.check?.[selectedCheckKey]?.name || "";

  // 🔥 FIX: Use `selectedCheckKey` instead of `selectedCheck`
  const translatedCheck = selectedCheck
    ? t(`menuItems.${food.category}.${food.id}.check.${selectedCheckKey}.name`, selectedCheck)
    : t("noExtras");

  const selectedToppingsKeys = toggle || [];
  
  // 🔥 FIX: Use the **toggle key** (`key`), NOT the value (`name`)
  const translatedToppings = selectedToppingsKeys.map(key =>
    t(`menuItems.${food.category}.${food.id}.toggle.${key}.name`, food.toggle?.[key]?.name || "")
  );

  // Remove undefined translations and join correctly
  const filteredTranslations = translatedToppings.filter(Boolean);
  const extrasText = [translatedCheck, ...filteredTranslations].filter(Boolean).join(", ") || t("noExtras");

  const checkPrice = parseInt(food.check?.[selectedCheckKey]?.price.replace(/\s/g, ""), 10) || 0;
  const toppingsPrice = selectedToppingsKeys.reduce((total, key) => {
    return total + (parseInt(food.toggle?.[key]?.price.replace(/\s/g, ""), 10) || 0);
  }, 0);

  const basePrice = parseInt(food.price.replace(/\s/g, ""), 10);
  const totalPrice = basePrice + checkPrice + toppingsPrice;

  if (cart.value[uniqueKey]) {
    cart.value[uniqueKey].quantity++;
    cart.value[uniqueKey].totalPrice = (cart.value[uniqueKey].quantity * totalPrice).toLocaleString("ru-RU");
  } else {
    cart.value[uniqueKey] = {
      ...food,
      quantity: 1,
      extras: extrasText, // ✅ Now always translated properly
      totalPrice: totalPrice.toLocaleString("ru-RU"),
    };
  }

  saveCartToLocalStorage();
  closeModal();
};
</script>

<style lang="scss" scoped>
// .is-loading .image,
// .is-loading h3,
// .is-loading h4,
// .is-loading .price {
//   background: #eee;
//   background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
//   border-radius: 5px;
//   background-size: 200% 100%;
//   animation: 1.5s shine linear infinite;
// }

// .is-loading .image {
//   height: 200px;
//   border-bottom-left-radius: 0;
//   border-bottom-right-radius: 0;
// }

// .is-loading h3 {
//   height: 30px;
// }

// .is-loading h4 {
//   height: 20px;
// }

// .is-loading .price {
//   height: 20px;
//   width: 50px;
// }

// /* ✅ Animation Effect */
// @keyframes shine {
//   to {
//     background-position-x: -200%;
//   }
// }

// /* ✅ Lazy Load Blur Effect */
// .lazy-image {
//   filter: blur(10px);
//   transition: filter 0.5s ease-in-out;
// }

// .lazy-image[lazy="loaded"] {
//   filter: blur(0);
// }
.lazy-image{
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  // border-radius: 5px;
  background-size: 200% 100%;
  animation: 0.75ms shine linear infinite;
}
@keyframes shine {
  to {
    background-position-x: -200%;
  }
}

</style>
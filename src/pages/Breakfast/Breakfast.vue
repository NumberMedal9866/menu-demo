<template>
  <div>
    <router-link to="/menu" class="menu-btn container">Посмотреть заказ</router-link>
    <div class="header">
      <router-link to="/"><img src="@/assets/img/back.svg" alt=""></router-link>
    </div>
    <div class="container home">
      <Info />
      <div class="breakfast">
        <h2>{{ naming }}</h2>
        <div class="breakfast-holder">
          <div v-for="food in menu" :key="food.id" class="breakfast-holder-card">
            <img :src="resolveImagePath(food.category, food.file)" alt="Item Image" />
            <div class="breakfast-holder-card-info">
              <h3>{{ food.name }}</h3>
              <h4>{{ food.descr }}</h4>
              <div class="breakfast-holder-card-info-cart">
                <span class="price">{{ food.price }}</span>
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
import Info from '@/components/Info/Info.vue';
import Modal from '@/components/Modal/Modal.vue';
import breakfastData from '@/data/menu.json';

const allMenus = breakfastData;
const route = useRoute();

const title = computed(() => {
  switch (route.params.type) {
    case 'breakfast': return 'breakfast';
    case 'hot': return 'hot';
    case 'salad': return 'salad';
    case 'dessert': return 'dessert';
    case 'cocktail': return 'cocktail';
    case 'wine': return 'wine';
    case 'beer': return 'beer';
    case 'non': return 'non';
    default: return 'Menu';
  }
});

const naming = computed(() => {
  switch (title.value) {
    case 'breakfast': return 'ЗАВТРАКИ (8:00 - 10:00)';
    case 'hot': return 'ГОРЯЧЕЕ';
    case 'salad': return 'САЛАТЫ';
    case 'dessert': return 'ДЕССЕРТЫ';
    case 'wine': return 'ВИНО';
    case 'beer': return 'ПИВО';
    case 'non': return 'БЕЗАЛКОГОЛЬНЫЕ';
    case 'cocktail': return 'КОКТЕЛИ';
    default: return 'Menu';
  }
});

const menu = computed(() => allMenus[title.value] || []);
const isModalOpen = ref(false);
const selectedFood = ref(null);
// Reactive cart object to store items with their quantities
const cart = ref({});

// Load cart data from localStorage on component mount
const loadCartFromLocalStorage = () => {
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  if (savedCart) {
    cart.value = savedCart;
  }
};

// Save cart data to localStorage
const saveCartToLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value));
};

// Add item to the cart
const addToCart = (id) => {
  const product = menu.value.find(item => item.id === id);
  if (cart.value[id]) {
    cart.value[id].quantity++;
  } else {
    cart.value[id] = { ...product, quantity: 1 };
  }
  saveCartToLocalStorage();
};

// Increase item quantity
const increase = (id) => {
  if (cart.value[id]) {
    cart.value[id].quantity++;
    saveCartToLocalStorage();
  }
};

// Decrease item quantity and remove if it reaches 0
const decrease = (id) => {
  if (cart.value[id]) {
    cart.value[id].quantity--;
    if (cart.value[id].quantity === 0) {
      delete cart.value[id];
    }
    saveCartToLocalStorage();
  }
};

// Get the quantity of a specific product in the cart
const getQuantity = (id) => cart.value[id]?.quantity || 0;

// Check if a product is in the cart
const isInCart = (id) => !!cart.value[id];
// const opt = (id) => !!cart.value.add[id];
// console.log(menu.value[0].add);
if (menu.value[0].add) {
  console.log('данунафиг');
  
}


const resolveImagePath = (category, file) => {
  try {
    return new URL(`/src/assets/img/${category}/${file}`, import.meta.url).href;
  } catch (error) {
    console.error('Error resolving image path:', error);
    return '';
  }
};

// Load cart when the component is mounted
onMounted(() => {
  loadCartFromLocalStorage();
});

const openModal = (food) => {
  selectedFood.value = food;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};


const addToCartWithExtras = ({ food, check, toggle, uniqueKey }) => {
  const selectedCheck = food.check?.[check]?.name || "";
  const checkPrice = parseInt(food.check?.[check]?.price.replace(/\s/g, ""), 10) || 0;

  const selectedToppings = toggle?.map(key => food.toggle?.[key]?.name) || [];
  const toppingsPrice = toggle?.reduce((total, key) => {
    return total + (parseInt(food.toggle?.[key]?.price.replace(/\s/g, ""), 10) || 0);
  }, 0) || 0;

  const basePrice = parseInt(food.price.replace(/\s/g, ""), 10);
  const totalPrice = basePrice + checkPrice + toppingsPrice;

  // Store item using the unique key
  if (cart.value[uniqueKey]) {
    cart.value[uniqueKey].quantity++;
    cart.value[uniqueKey].totalPrice = (cart.value[uniqueKey].quantity * totalPrice).toLocaleString("ru-RU");
  } else {
    cart.value[uniqueKey] = {
      ...food,
      quantity: 1,
      extras: [selectedCheck, ...selectedToppings].filter(Boolean).join(", ") || "Без добавок",
      totalPrice: totalPrice.toLocaleString("ru-RU")
    };
  }

  saveCartToLocalStorage();
  closeModal();
};
</script>

<style lang="scss" scoped>
/* Your styles here */
</style>

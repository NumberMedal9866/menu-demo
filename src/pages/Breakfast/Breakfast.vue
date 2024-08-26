<template>
  <div>
      <router-link to="/menu" class="menu-btn container">
    Посмотреть заказ
  </router-link>
    <div class="header">
      <router-link to="/">←</router-link>
    </div>
    <div class="container home">
      <Info />
      <div class="breakfast">
        <!-- <h2>ЗАВТРАКИ (8:00-10:00)</h2> -->
        <h2>{{ naming }}</h2>
        <div class="breakfast-holder">
          <div v-for="food in menu" :key="food.id" class="breakfast-holder-card">
            <img :src="food.url" alt="">
            <div class="breakfast-holder-card-info">
              <h3>{{ food.name }}</h3>
              <h4>{{ food.descr }}</h4>
              <div class="breakfast-holder-card-info-cart">
                <span class="price">{{ food.price }}</span>
                <div class="breakfast-holder-card-info-cart-amount">
                  <button v-if="!isInCart(food.id)" @click="addToCart(food.id)"  class="btn"><img src="@/assets/img/pw.svg" alt=""></button>
                  <div v-else class="amount">
                    <button @click.stop="decrease(food.id)"><img src="@/assets/img/minus.svg" alt=""></button>
                    <p>{{ getQuantity(food.id) }}</p>
                    <button @click.stop="increase(food.id)"><img src="@/assets/img/plus.svg" alt=""></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Info from '@/components/Info/Info.vue';
import breakfastData from '@/data/menu.json';

const allMenus = breakfastData;
const route = useRoute();
const naming = ref('init val')

const title = computed(() => {
  switch (route.params.type) {
    case 'breakfast':
      return 'breakfast'; naming.value = 'jfjfjfjfjf';
    case 'hot':
      return 'hot';
    case 'salad':
      return 'salad';
    case 'dessert':
      return 'dessert';
    case 'cocktail':
      return 'cocktail'; naming.value = 'jfjfjfjfjf';
    case 'wine':
      return 'wine';
    case 'beer':
      return 'beer';
    case 'non':
      return 'non';
    default:
      return 'Menu';
  }
});
function irim() {
  if (title.value == 'breakfast') {
    naming.value = 'ЗАВТРАКИ (8:00 - 10:00)'   
  }else if (title.value == 'hot') {
    naming.value = 'ГОРЯЧЕЕ' 
  }else if (title.value == 'salad') {
    naming.value = 'САЛАТЫ' 
  }else if (title.value == 'dessert') {
    naming.value = 'ДЕССЕРТЫ' 
  }else if (title.value == 'wine') {
    naming.value = 'ВИНО' 
  }else if (title.value == 'beer') {
    naming.value = 'ПИВО' 
  }else if (title.value == 'non') {
    naming.value = 'БЕЗАЛКОГОЛЬНЫЕ' 
  }else if (title.value == 'cocktail') {
    naming.value = 'КОКТЕЛИ' 
  }
  
  
}

const menu = computed(() => {
  return allMenus[title.value] || [];
});

// Reactive cart object to store items with their quantities
const cart = reactive({});

// Load cart data from localStorage on component mount
const loadCartFromLocalStorage = () => {
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  if (savedCart) {
    Object.assign(cart, savedCart);
  }
};

// Save cart data to localStorage
const saveCartToLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Add item to the cart
const addToCart = (id) => {
  // Get the selected product
  const product = menu.value.find(item => item.id === id);

  // Check if product is already in the cart
  if (cart[id]) {
    // Update quantity if product is already in the cart
    cart[id].quantity = (cart[id].quantity || 0) + 1;
  } else {
    // Add new product with quantity 1 and include id and type
    cart[id] = { ...product, quantity: 1, type: title.value };
  }

  // Save updated cart to localStorage
  saveCartToLocalStorage();
};

// Increase item quantity
const increase = (id) => {
  if (cart[id]) {
    cart[id].quantity++;
    saveCartToLocalStorage();
  }
};

// Decrease item quantity and remove if it reaches 0
const decrease = (id) => {
  if (cart[id]) {
    cart[id].quantity--;
    if (cart[id].quantity === 0) {
      delete cart[id];
    }
    saveCartToLocalStorage();
  }
};

// Get the quantity of a specific product in the cart
const getQuantity = (id) => {
  return cart[id]?.quantity || 0;
};

// Check if a product is in the cart
const isInCart = (id) => {
  return !!cart[id];
};

// Load cart when the component is mounted
onMounted(() => {
  console.log(menu.value);
  console.log(route.params.type);
  
  loadCartFromLocalStorage();
  irim()
});
</script>

<style lang="scss" scoped>
/* Your styles here */
</style>


<style lang="scss" scoped>
  // Add item to the cart
  // const addToCart = (productId) => {
  //   console.log(productId);
    
  //   if (!cart[productId]) {
  //     cart[productId] = 1;
  //   }
  //   saveCartToLocalStorage();
  // };

</style>
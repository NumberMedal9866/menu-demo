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
                <div class="breakfast-holder-card-info-cart-amount">
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
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Info from '@/components/Info/Info.vue';
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
</script>

<style lang="scss" scoped>
/* Your styles here */
</style>

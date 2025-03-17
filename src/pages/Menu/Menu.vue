<template>
    <div class="header">

      <router-link to="/"><img src="@/assets/img/left.svg" alt=""></router-link>
      <select v-model="locale" @change="changeLanguage">
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="uz">O'zbekcha</option>
      </select>
    </div>
    <div class="container home">
      <Info/>
      <h2 v-if="cartItems.length" class="clash">МОЙ ЗАКАЗ:</h2>
      <div v-else>
        <p class="empty">Ваш заказ пуст.</p>
      </div>        
      <div class="cart-holder" v-if="cartItems.length">
    <div v-for="item in cartItems" :key="item.cartKey" class="cart">
      <h3 v-show="!item.extras" class="alt">{{ item.name }}</h3>
      <h3 v-show="item.extras">{{ item.name }}</h3>
      <h4 v-show="item.extras">{{ item.extras }}</h4>
      <div class="cart-price">
        <span>{{ item.totalPrice || item.price }} сум</span>
        <!-- <p v-if="item.extras">Дополнения: {{ item.extras }}</p> -->
        <div class="amount amount-men">
          <button @click="decrease(item.cartKey)">
            <img src="@/assets/img/minus.svg" alt="Decrease quantity">
          </button>
          <p>{{ item.quantity }}</p>
          <button @click="increase(item.cartKey)">
            <img src="@/assets/img/plus.svg" alt="Increase quantity">
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="emp container">
    <img src="@/assets/img/empty.svg" alt="">
    <router-link to="/">Вернуться в меню</router-link>
  </div>
</div>
<div class="cart-total container" v-if="cartItems.length">
  <span>Всего:</span>
  <p>{{totalCartPrice }}</p>
</div>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import Info from '@/components/Info/Info.vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
// Reactive cart object to store items with their quantities
const newObject = ref({});

// Load cart data from localStorage
const loadCartFromLocalStorage = () => {
  const cartData = JSON.parse(localStorage.getItem('cart')) || {};
  newObject.value = cartData;
};

// Save cart data to localStorage
const saveCartToLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(newObject.value));
};

const increase = (cartKey) => {
  if (newObject.value[cartKey]) {
    newObject.value[cartKey].quantity++;
    saveCartToLocalStorage();
  }
};

const decrease = (cartKey) => {
  if (newObject.value[cartKey]) {
    newObject.value[cartKey].quantity--;

    if (newObject.value[cartKey].quantity === 0) {
      delete newObject.value[cartKey]; // Remove from cart if quantity is 0
    }

    saveCartToLocalStorage();
  }
};

// Compute cart items from newObject
const cartItems = computed(() => {
  return Object.entries(newObject.value).map(([key, item]) => {
    return { ...item, cartKey: key }; // Keep key for lookup
  });
});


// Compute the length of cartItems
const cartItemsLength = computed(() => {
  return cartItems.value.length;
});

// Load the cart data when the component is mounted
onMounted(() => {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) {
    locale.value = savedLang;
  }
  loadCartFromLocalStorage();
});
// console.log(newObject.value[0].extra);
const totalCartPrice = computed(() => {
  return cartItems.value.reduce((total, item) => {
    const itemPrice = parseInt((item.totalPrice || item.price).replace(/\s/g, ""), 10) || 0;
    return total + (itemPrice * item.quantity);
  }, 0).toLocaleString("ru-RU") + " сум"; // Format price
});
const changeLanguage = (event) => {
  const newLang = event.target.value;
  locale.value = newLang;
  localStorage.setItem("lang", newLang);
};
</script>

<style lang="scss" scoped>
/* Add your styles here */
</style>

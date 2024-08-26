<template>
    <div class="header">
        <router-link to="/">←</router-link>
    </div>
    <div class="container home">
        <Info/>
        <h2>МОЙ ЗАКАЗ:</h2>
        <div class="cart-holder" v-if="cartItems.length">
            <div v-for="item in cartItems" :key="item.id" class="cart">
                <h3>{{ item.name }}</h3>
                <div class="cart-price">
                    <span>{{ item.price }}</span>
                    <div class="amount">
                        <button @click="decrease(item.id)">
                            <img src="@/assets/img/minus.svg" alt="Decrease quantity">
                        </button>
                        <p>{{ item.quantity }}</p>
                        <button @click="increase(item.id)">
                            <img src="@/assets/img/plus.svg" alt="Increase quantity">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Ваш заказ пуст.</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import Info from '@/components/Info/Info.vue';

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

// Increase item quantity
const increase = (id) => {
  if (newObject.value[id]) {
    newObject.value[id].quantity++;
    saveCartToLocalStorage();
  }
};

// Decrease item quantity and remove if it reaches 0
const decrease = (id) => {
  if (newObject.value[id]) {
    newObject.value[id].quantity--;
    if (newObject.value[id].quantity === 0) {
      delete newObject.value[id];
    }
    saveCartToLocalStorage();
  }
};

// Compute cart items from newObject
const cartItems = computed(() => {
  return Object.values(newObject.value);
});

// Compute the length of cartItems
const cartItemsLength = computed(() => {
  return cartItems.value.length;
});

// Load the cart data when the component is mounted
onMounted(() => {
  loadCartFromLocalStorage();
});
</script>

<style lang="scss" scoped>
/* Add your styles here */
</style>

<template>
  <div class="header">
    <router-link to="/"><img src="@/assets/img/left.svg" alt="Back"></router-link>
    <select v-model="locale" @change="changeLanguage">
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="uz">O'zbekcha</option>
    </select>
  </div>

  <div class="container home">
    <Info/>
    <h2 v-if="cartItems.length" class="clash">{{ t("cart") }}:</h2>
    <div v-else>
      <p class="empty">{{ t("emptyCart") }}</p>
    </div>

    <div class="cart-holder" v-if="cartItems.length">
      <div v-for="item in cartItems" :key="item.cartKey" class="cart">
        <h3>{{ item.translatedName }}</h3>
        <h4 v-if="item.translatedExtras">{{ t("extras") }}: {{ item.translatedExtras }}</h4>

        <div class="cart-price">
          <span>{{ item.totalPrice || item.price }} сум</span>
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
      <img src="@/assets/img/empty.svg" alt="Empty cart">
      <router-link to="/">{{ t("goback") }}</router-link>
    </div>
  </div>

  <div class="cart-total container" v-if="cartItems.length">
    <span>{{ t("total") }}</span>
    <p>{{ totalCartPrice }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import Info from '@/components/Info/Info.vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
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
      delete newObject.value[cartKey];
    }
    saveCartToLocalStorage();
  }
};

// Compute cart items with translation
const cartItems = computed(() => {
  return Object.entries(newObject.value).map(([key, item]) => {
    return {
      ...item,
      cartKey: key,
      translatedName: t(`menuItems.${item.category}.${item.id}.name`, item.name),
      translatedExtras: item.extras
        ? item.extras.split(", ").map(extra => t(`menuItems.${item.category}.${item.id}.toggle.${extra}.name`, extra)).join(", ")
        : "",
    };
  });
});

// Compute total price
const totalCartPrice = computed(() => {
  return cartItems.value.reduce((total, item) => {
    const itemPrice = parseInt((item.totalPrice || item.price).replace(/\s/g, ""), 10) || 0;
    return total + (itemPrice * item.quantity);
  }, 0).toLocaleString("ru-RU") + " сум";
});

// Change language and save to localStorage
const changeLanguage = (event) => {
  const newLang = event.target.value;
  locale.value = newLang;
  localStorage.setItem("lang", newLang);
};

// Load cart & language on mount
onMounted(() => {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) {
    locale.value = savedLang;
  }
  loadCartFromLocalStorage();
});
</script>

<style lang="scss" scoped>
/* Add your styles here */
</style>

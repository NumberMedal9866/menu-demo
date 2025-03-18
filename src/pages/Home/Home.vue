<template>
<div>
      <router-link to="/menu" class="menu-btn container">
    Посмотреть заказ
  </router-link>
    <div class="header">
        <select v-model="locale" @change="changeLanguage">
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uz">O'zbekcha</option>
        </select>
    </div>
    <div class="container home">
        <Info/>
        <div class="home-btn">
            <p 
                @click="main = true"
                :class="{'active': main, 'inactive': !main}"
            >{{ $t ("main") }}</p>
            <p 
                @click="main = false"
                :class="{'inactive': main, 'active': !main}"
            >{{ $t ("bar") }}</p>
        </div>
        <div class="card-holder" v-if="main">
            <router-link to="/breakfast" class="card break">
                <span>{{ $t ("breakfast") }}</span>
            </router-link>
            <router-link  to="/hot" class="card hot">
                <span>{{ $t ("hot") }}</span>
            </router-link>
            <router-link to="/salad" class="card salad">
                <span>{{ $t ("salad") }}</span>
            </router-link>
            <router-link to="/dessert" class="card des">
                <span>{{ $t ("dessert") }}</span>
            </router-link>
        </div>
        <div class="card-holder" v-else>
            <router-link to="/cocktail" class="card cocktail">
                <span>{{ $t ("cocktail") }}</span>
            </router-link>
            <router-link  to="/wine" class="card wine">
                <span>{{ $t ("wine") }}</span>
            </router-link>
            <router-link to="/beer" class="card beer">
                <span>{{ $t ("beer") }}</span>
            </router-link>
            <router-link to="/non" class="card non">
                <span>{{ $t ("non") }}</span>
            </router-link>
        </div>
    </div>
</div>
</template>

<script setup>
import Info from '@/components/Info/Info.vue';
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const main = ref(true);
const cart = ref({});

// ✅ Function to preload images
const preloadImage = (url) => {
  const img = new Image();
  img.src = url;
};

// ✅ Preload all background images
const preloadBackgroundImages = () => {
  const imageUrls = [
    '/src/assets/img/breakfast.png',
    '/src/assets/img/steak.png',
    '/src/assets/img/salad.png',
    '/src/assets/img/dessert.png',
    '/src/assets/img/cocktail/c3.png',
    '/src/assets/img/wine/w3.png',
    '/src/assets/img/beer/b3.png',
    '/src/assets/img/non/n2.png'
  ];

  imageUrls.forEach(preloadImage);
};

onMounted(() => {
  preloadBackgroundImages(); // ✅ Preload background images
  // ✅ Load cart from localStorage
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  if (savedCart) {
      cart.value = savedCart;
    }
    
    // ✅ Load saved language
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
        locale.value = savedLang;
    }
    setTimeout(() => {
    document.querySelectorAll(".card").forEach(el => el.classList.add("loaded"));
  }, 500); // Add a delay for smooth transition
});

// ✅ Function to change language
const changeLanguage = (event) => {
  const newLang = event.target.value;
  locale.value = newLang;
  localStorage.setItem("lang", newLang);
};
</script>

<style lang="scss" scoped>
.card {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.card.loaded {
  opacity: 1;
}
</style>
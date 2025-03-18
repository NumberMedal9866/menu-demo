<template>
    <div>
        <router-link to="/menu" class="menu-btn container">
            {{ t("look") }}
        </router-link>
        <div class="header">
            <select v-model="locale" @change="changeLanguage">
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="uz">O'zbekcha</option>
            </select>
        </div>
        <div class="container home">
            <Info />
            <div class="home-btn">
                <p 
                    @click="main = true"
                    :class="{ 'active': main, 'inactive': !main }"
                >{{ t("main") }}</p>
                <p 
                    @click="main = false"
                    :class="{ 'inactive': main, 'active': !main }"
                >{{ t("bar") }}</p>
            </div>
            <div class="card-holder" v-if="main">
                <router-link to="/breakfast" class="card" :style="setBackground(breakfastImg)">
                    <span>{{ t("breakfast") }}</span>
                </router-link>
                <router-link to="/hot" class="card" :style="setBackground(hotImg)">
                    <span>{{ t("hot") }}</span>
                </router-link>
                <router-link to="/salad" class="card" :style="setBackground(saladImg)">
                    <span>{{ t("salad") }}</span>
                </router-link>
                <router-link to="/dessert" class="card" :style="setBackground(dessertImg)">
                    <span>{{ t("dessert") }}</span>
                </router-link>
            </div>
            <div class="card-holder" v-else>
                <router-link to="/cocktail" class="card" :style="setBackground(cocktailImg)">
                    <span>{{ t("cocktail") }}</span>
                </router-link>
                <router-link to="/wine" class="card" :style="setBackground(wineImg)">
                    <span>{{ t("wine") }}</span>
                </router-link>
                <router-link to="/beer" class="card" :style="setBackground(beerImg)">
                    <span>{{ t("beer") }}</span>
                </router-link>
                <router-link to="/non" class="card" :style="setBackground(nonImg)">
                    <span>{{ t("non") }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import Info from "@/components/Info/Info.vue";
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

// ✅ Import images for Vite compatibility
import breakfastImg from "@/assets/img/breakfast.png";
import hotImg from "@/assets/img/steak.png";
import saladImg from "@/assets/img/salad.png";
import dessertImg from "@/assets/img/dessert.png";
import cocktailImg from "@/assets/img/cocktail/c3.png";
import wineImg from "@/assets/img/wine/w3.png";
import beerImg from "@/assets/img/beer/b3.png";
import nonImg from "@/assets/img/non/n2.png";

const { t, locale } = useI18n();
const main = ref(true);
const cart = ref({});

// ✅ Function to dynamically set background images
const setBackground = (img) => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
});

// ✅ Function to preload images
const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
    console.log("Preloading:", img.src);
};

// ✅ Preload all background images
const preloadBackgroundImages = () => {
    const images = [breakfastImg, hotImg, saladImg, dessertImg, cocktailImg, wineImg, beerImg, nonImg];
    images.forEach(preloadImage);
};

onMounted(() => {
    preloadBackgroundImages(); // ✅ Preload images

    // ✅ Load cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
        cart.value = savedCart;
    }

    // ✅ Load saved language
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
        locale.value = savedLang;
    }
});

// ✅ Function to change language
const changeLanguage = (event) => {
    const newLang = event.target.value;
    locale.value = newLang;
    localStorage.setItem("lang", newLang);
};
</script>
    
    <style lang="scss" scoped>
    
    </style>
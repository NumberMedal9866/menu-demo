<template>
<div>
      <router-link to="/menu" class="menu-btn container">
    Посмотреть заказ
  </router-link>
    <div class="header">
        <select v-model="locale" @change="changeLanguage">
            <option value="ru">Русский</option>
            <option value="en">English</option>
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
                <p>(8:00 - 10:00)</p>
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
    import Info from '@/components/Info/Info.vue'
    import { ref, onMounted } from 'vue'
    const main = ref(true)
    import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const changeLanguage = (event) => {
  const newLang = event.target.value;
  locale.value = newLang;  // ✅ Updates the language in Vue I18n
  localStorage.setItem("lang", newLang); // ✅ Stores the selected language
};
const cart = ref({});

// Load cart data from localStorage on component mount
const loadCartFromLocalStorage = () => {
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  if (savedCart) {
    cart.value = savedCart;
  }
};
onMounted(() => {
  loadCartFromLocalStorage();

  // ✅ Load saved language and apply it
  const savedLang = localStorage.getItem("lang");
  if (savedLang) {
    locale.value = savedLang; // ✅ Use `locale.value` instead of `$i18n.locale`
  }
});
</script>

<style lang="scss" scoped>

</style>
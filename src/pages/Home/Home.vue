<template>
<div>
      <router-link to="/menu" class="menu-btn container">
    Посмотреть заказ
  </router-link>
    <div class="header"></div>
    <div class="container home">
        <Info/>
        <div class="home-btn">
            <p 
                @click="main = true"
                :class="{'active': main, 'inactive': !main}"
            >Основное меню</p>
            <p 
                @click="main = false"
                :class="{'inactive': main, 'active': !main}"
            >Бар</p>
        </div>
        <div class="card-holder" v-if="main">
            <router-link to="/breakfast" class="card break">
                <span>завтраки (8:00 - 10:00)</span>
            </router-link>
            <router-link  to="/hot" class="card hot">
                <span>горячие блюда</span>
            </router-link>
            <router-link to="/salad" class="card salad">
                <span>салаты</span>
            </router-link>
            <router-link to="/dessert" class="card des">
                <span>дессерты</span>
            </router-link>
        </div>
        <div class="card-holder" v-else>
            <router-link to="/cocktail" class="card cocktail">
                <span>коктели</span>
            </router-link>
            <router-link  to="/wine" class="card wine">
                <span>вино</span>
            </router-link>
            <router-link to="/beer" class="card beer">
                <span>пиво</span>
            </router-link>
            <router-link to="/non" class="card non">
                <span>безалкогольное</span>
            </router-link>
        </div>
    </div>
</div>
</template>

<script setup>
    import Info from '@/components/Info/Info.vue'
    import { ref } from 'vue'
    const main = ref(true)
    // import ref
</script>

<style lang="scss" scoped>

</style>
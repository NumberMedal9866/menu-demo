<template>
  <router-view></router-view>
  <!-- Button should be displayed if turn is true -->
  <!-- <router-link to="/menu" class="menu-btn container" v-if="title">
    Посмотреть меню
  </router-link> -->
</template>

<script setup>
// import { ref, watch, onMounted, computed } from 'vue';
// import { useRoute } from 'vue-router';

// const route = useRoute()

// // Define a computed property to check if the current path is '/menu'
// // Define a computed property to check if the current route's name is 'menu'
// const turn = computed(() => {
//   return route.name === 'menu'
// })
// onMounted(() => {
//   console.log('Route name:', route.name); // Log route name to check
//   console.log('Turn value:', turn.value); // Log computed turn value
// });
</script>

<style lang="scss" scoped>
.menu-btn{
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;align-items: center;
  padding: 20px; 
  border-radius: 35px 35px 0 0;
  background: orange;
  color: white;
  font-weight: 600;
  font-size: 25px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
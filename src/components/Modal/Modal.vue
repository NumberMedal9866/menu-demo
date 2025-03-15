<template>
    <div v-if="show" class="modal-overlay" @click.self="close">
        <div class="wrapper container">
            <div class="modal-content">
                <!-- <div class="modal-content"> -->
                    <button class="close-btn" @click="close">
                        <img src="@/assets/img/close.svg" alt="">
                    </button>
                    <img :src="resolveImagePath(food.category, food.file)" alt="" class="modal-content-main">
                    <h2>{{ food?.name }}</h2>
                    <h4>{{ food.descr }}</h4>
                    
                    <div v-if="food?.check" class="toggle">
                        <p>Выберите вариант:</p>
                        <ul>
                            <li v-for="(value, key) in food.check" :key="key">
                                <label>
                                    <div class="toggle-org">
                                    <div class="toggle-org-coc">
                                    <input type="radio" :name="'check-' + food.id" :value="key" v-model="selectedCheck" required>
                                    {{ value.name }}
                                    </div>
                                    +{{ value.price }}
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <!-- <div v-if="food?.check">
                        <p>Выберите вариант:</p>
                        <label v-for="(value, key) in food.check" :key="key">
                            <input type="radio" :name="'check-' + food.id" :value="key" v-model="selectedCheck">
                            {{ value }}
                        </label>
                    </div> -->
                    
                    <div v-if="food?.toggle"  class="toggle">
                        <p>Добавить:</p>
                        <!-- <label v-for="(value, key) in food.toggle" :key="key">
                            <input type="checkbox" v-model="selectedToggle" :value="key">
                            {{ value }}
                        </label> -->
                        <ul>
                            <li v-for="(value, key) in food.toggle" :key="key">
                                <label :for="'toggle-' + key">
                                    <div class="toggle-org">
                                        <div class="toggle-org-coc">
                                            <input type="checkbox" v-model="selectedToggle" :value="key" :id="'toggle-' + key">
                                            {{ value.name }}
                                        </div>
                                        +{{ value.price }}
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                    
                <!-- </div> -->
                
            </div>
            <div class="modal-content-btn">
                <button @click="confirmSelection" class="beten">Добавить в корзину</button>

            </div>

        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Receive props
  const props = defineProps({
    show: Boolean,
    food: Object
  });
  
  // Emit events
  const emit = defineEmits(["close", "confirm"]);
  
  // Reactive state for selected options
  const selectedCheck = ref(null);
  const selectedToggle = ref([]);
  
  const close = () => {
    emit("close");
  };
  
  const confirmSelection = () => {
  if (!selectedCheck.value) {
    alert("Пожалуйста, выберите один вариант в чек-листе!"); // You can replace this with a modal error message
    return;
  }

  const extrasKey = `${selectedCheck.value || "0"}-${selectedToggle.value.sort().join("-")}`;
  emit("confirm", { 
    food: props.food, 
    check: selectedCheck.value, 
    toggle: selectedToggle.value, 
    uniqueKey: `${props.food.id}-${extrasKey}`
  });

  // ✅ Clear selections after submission
  selectedCheck.value = null;
  selectedToggle.value = [];
  
  close();
};
  const resolveImagePath = (category, file) => {
  try {
    return new URL(`/src/assets/img/${category}/${file}`, import.meta.url).href;
  } catch (error) {
    console.error('Error resolving image path:', error);
    return '';
  }
};
  </script>
  
  <style scoped lang="scss">
  .wrapper{
    overflow: hidden;
    background: white;
    padding: 20px 20px 0 20px;
    // padding-bottom: 200px;
    /* border-radius: 10px; */
    border-radius: 20px;
    width: 100%;
    margin-top: 80px;
    margin-bottom: 80px;
    height: 88vh;
    // padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center; align-items: center;
    // position: relative;
    // overflow-y: auto;
  }
  .beten{
        padding: 10px 15px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 500;
        color: #fff;
        background: orange;
        height: max-content;
        border-radius: 5px;
    }
  .modal-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    // overflow: hidden;
    // background: white;
    // padding: 20px;
    // // padding-bottom: 200px;
    // /* border-radius: 10px; */
    // border-radius: 20px;
    // width: 100%;
    // margin-top: 80px;
    // margin-bottom: 80px;
    // height: 88vh;
    position: relative;
    overflow-y: auto;
    &-main{
        width: 100%;
        border-radius: 20px;
        height: 235px;
        object-fit: cover;
        filter: brightness(90%);
    }
    &-btn{
        height: 90px;
        display: flex;
        align-items: center;
        // padding: 5px 10px;
        // font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        // font-weight: 500;
        // color: #fff;
        // background: orange;
    }

    h2{
        margin-bottom: 0;
    }
    h4{
        margin-bottom: 10px;
        font-weight: 300;
    }
  }
  h4{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    font-weight: 400;
    }
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-cover{
    overflow: hidden;
  }
  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 100%;
    cursor: pointer;
    width: 35px;
    height: 35px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;align-items: center;
    img{
        width: 16px;
        height: 16px;
    }
  }
  .toggle{
    label{
        width: 100%;
    }
    ul{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        display: flex;
        flex-direction: column;
        gap: 7px;
    }
    li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
    }
    p{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 10px 0;
        font-weight: 400;
    }
    &-org{
        display: flex;
        justify-content: space-between !important;
        li{
            align-items: center;
            justify-content: space-between;
            width: 100%;

        }
        &-coc{
            
        }
    }
  }
  * {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1; /* thumb color | track color */
}

  </style>
  
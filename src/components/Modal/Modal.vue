<template>
  <div v-if="show" class="modal-overlay" @click.self="close">
    <div class="wrapper container">
      <div class="modal-content">
        <button class="close-btn" @click="close">
          <img src="@/assets/img/close.svg" alt="Close" />
        </button>

        <img :src="resolveImagePath(food.category, food.file)" alt="Food Image" class="modal-content-main" />

        <h2>{{ t(`menuItems.${food.category}.${food.id}.name`) }}</h2>
        <h4>{{ t(`menuItems.${food.category}.${food.id}.descr`) }}</h4>

        <!-- Check options (Radio Buttons) -->
        <div v-if="food?.check" class="toggle">
          <p>{{ t("chooseOption") }}</p>
          <ul>
            <li v-for="(value, key) in food.check" :key="key">
              <label>
                <div class="toggle-org">
                  <div class="toggle-org-coc">
                    <input type="radio" :name="'check-' + food.id" :value="key" v-model="selectedCheck" required />
                    {{ t(`menuItems.${food.category}.${food.id}.check.${key}.name`) }}
                  </div>
                  <span>+{{ value.price }}</span>
                </div>
              </label>
            </li>
          </ul>
        </div>

        <!-- Toggle options (Checkboxes) -->
        <div v-if="food?.toggle" class="toggle">
          <p>{{ t("extras") }}</p>
          <ul>
            <li v-for="(value, key) in food.toggle" :key="key">
              <label :for="'toggle-' + key">
                <div class="toggle-org">
                  <div class="toggle-org-coc">
                    <input type="checkbox" v-model="selectedToggle" :value="key" :id="'toggle-' + key" />
                    {{ t(`menuItems.${food.category}.${food.id}.toggle.${key}.name`) }}
                  </div>
                  <span>+{{ value.price }}</span>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div class="modal-content-btn">
        <button @click="confirmSelection" class="beten">{{ t("addToCart") }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n(); // ✅ Import translation function

const props = defineProps({
  show: Boolean,
  food: Object
});

const emit = defineEmits(["close", "confirm"]);

const selectedCheck = ref(null);
const selectedToggle = ref([]);

const close = () => {
  emit("close");
};

const confirmSelection = () => {
  if (!selectedCheck.value) {
    alert(t("chooseOption"));
    return;
  }

  const extrasKey = `${selectedCheck.value || "0"}-${selectedToggle.value.sort().join("-")}`;
  emit("confirm", {
    food: props.food,
    check: selectedCheck.value,
    toggle: selectedToggle.value,
    uniqueKey: `${props.food.id}-${extrasKey}`
  });

  selectedCheck.value = null;
  selectedToggle.value = [];

  close();
};

const resolveImagePath = (category, file) => {
  try {
    return new URL(`/src/assets/img/${category}/${file}`, import.meta.url).href;
  } catch (error) {
    console.error("Error resolving image path:", error);
    return "";
  }
};
</script>
  
  <style scoped lang="scss">
  
  </style>
  
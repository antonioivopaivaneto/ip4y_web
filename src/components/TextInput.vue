<template>
    <div class="relative z-0 mb-6 group">
      <input v-model="value" :type="type" :name="name" :id="id" :class="inputClass" required />
      <label :for="id" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark-text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{ label }}</label>
      <span class="text-red-500">{{ error }}</span>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from "vue";
  
  const { value, type, name, id, label, error } = defineProps([
    "value", "type", "name", "id", "label", "error"
  ]);
  
  const inputClass = ref("block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer");
  </script>
  
  <style scoped>
  /* Estilos específicos do componente TextInput.vue */
  </style>
  
<template>


  <div class="min-h- flex items-center justify-center">
    <!-- Container -->
    
    <div class="container mx-auto p-4 mt-10  shadow-lg rounded-lg">
        <RouterLink class="bg-yellow-600 px-5 py-3 rounded font-bold text-white mb-10" to="/">Voltar</RouterLink>

        <img :src="logo" alt="" width="300" class="mt-10">

        <h1 class="text-2xl font-bold mb-4">Dados cadastrados</h1>
      <Card />
    </div>
  </div>




</template>
<script setup>
import logo from './../assets/img/logo.svg'
import Card from '../components/card.vue';


</script>
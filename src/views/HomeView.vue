<script setup>
import logo from './../assets/img/logo.svg'
</script>

<template>

  <div class="grid h-screen place-items-center">


    
<div class="grid grid-flow-col justify-center  flex justify-center items-center">
    <img :src="logo" alt="" width="300" class="mt-10">

    <nav class="mt-10">
      <RouterLink class="bg-green-600 px-5 py-3 rounded font-bold text-white mx-5" to="/cadastrar">Cadastrar</RouterLink>
      <RouterLink class="bg-green-600 px-5 py-3 rounded font-bold text-white" to="/listar">Listar</RouterLink>
    </nav>
  </div>
  </div>


</template>

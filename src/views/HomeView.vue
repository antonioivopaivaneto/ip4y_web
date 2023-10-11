<script setup>
import logo from './../assets/img/logo.svg'
import buttonClick from '../components/ButtonClick.vue';
</script>

<template>

  <div class="grid h-screen place-items-center">


<div class="grid grid-flow-col justify-center  flex justify-center items-center">
      <span class="justify-center align-baseline mx-2">Bem vindo</span>

  <img :src="logo" alt=""  class="mt-10 w-96">

    <nav class="mt-10">
      <buttonClick nome="Cadastrar" link="/Cadastrar" />
      <buttonClick nome="Listar" link="/listar" />
      
    </nav>
  </div>
  </div>


</template>

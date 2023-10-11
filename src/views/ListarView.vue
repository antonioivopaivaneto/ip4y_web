<template>


  <div class="min-h- flex items-center justify-center">
    <!-- Container -->
    
    <div class="container mx-auto p-4 mt-10  shadow-lg rounded-lg">
        <div class="flex justify-between">
            <RouterLink class="bg-yellow-600 px-5 py-3 rounded font-bold text-white mb-5" to="/">Voltar</RouterLink>
        <RouterLink class="bg-yellow-600 px-5 py-3 rounded font-bold text-white mb-5" to="/cadastrar">Cadastrar</RouterLink>

        </div>
   
        <img :src="logo" alt="" width="300" class="mt-10">

        <h1 class="text-2xl font-bold mb-4">Dados cadastrados</h1>
      
            <div class="grid grid-cols-4 gap-3">
                <span v-if="pessoas==''">Carregando..</span>
                
                <div v-for="pessoa in pessoas" :key="pessoa.id">
                    
                    <Card @remove="remove" :id="pessoa.id" :nome="pessoa.nome" :cpf="pessoa.cpf" :sobreNome="pessoa.sobrenome" :dataNascimento="pessoa.data_de_nascimento" :email="pessoa.email" :genero="pessoa.genero"  />

                </div>

            </div>
    </div>
  </div>




</template>
<script setup>
import logo from './../assets/img/logo.svg'
import Card from '../components/card.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue';
import resource from '../http/pessoas';

const remove = async (id) => {
    const confirm = window.confirm('Tem certeza que deseja remover ? ')
    
    if(confirm){
        try {
    await axios.delete(resource + id);
    
    pessoas.value = pessoas.value.filter(pessoas => pessoas.id !== id)
  } catch (error) {
    console.error('Erro ao remover pessoa:', error);
  }

    }

}

const pessoas = ref([])
const getData = async () => {
    const {data} = await axios.get(resource)
    pessoas.value = data.data

}

onMounted(getData);


</script>
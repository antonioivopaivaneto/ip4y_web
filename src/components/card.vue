<template>
    
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#252525] dark:border-green-700">
    <div class="flex justify-end px-4 pt-4">
        
        
    </div>
    <div class="flex flex-col items-center pb-10">
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ props.nome }}  {{ props.sobreNome }}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">CPF: {{ props.cpf }}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">Data de Nascimento : {{ props.dataNascimento }}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">Email: {{ props.email }}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">Genero: {{ props.genero }}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <router-link :to="'/Editar/' + props.id" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none">Editar</router-link>
            <a href="#" @click="remove(props.id)" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Remover</a>
        </div>
    </div>
</div>

</template>

<script setup>
import axios from 'axios';
import resource from '../http/pessoas';

const props = defineProps({
    id:Number,
    nome:String,
    sobreNome:String,
    cpf:String,
    dataNascimento:String,
    email:String,
    genero:String,

})

const emit = defineEmits();

const remove = async (id) =>{
    emit('remove',id)
}




</script>
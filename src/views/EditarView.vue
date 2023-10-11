<template>
  <div class="p-10">
    <div class="  ">


      <div class="w-3/4 ml-60 dark:bg-[#252525] rounded dark:border-gray-9000 p-5   ">
        <RouterLink class="bg-yellow-600 px-5 py-3 rounded font-bold text-white mb-10" to="/listar">Voltar</RouterLink>

        <img :src="logo" alt="" width="300" class="mt-16">

        <h1 class="text-2xl font-semibold mb-4 text-white">Formulário de Cadastro</h1>
        <form @submit.prevent="submit()">
          <div class="relative z-0  mb-6 group">
            <input v-mask="'###.###.###-##'" v-model="formData.cpf" type="text" name="cpf" id="cpf"
              class="block py-2.5 px-0 w-full text- text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              required />

            <label for="cpf"
              class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CPF:</label>
            <span class="text-red-500">{{ errors.cpf && errors.cpf[0] }}</span>

          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input v-model="formData.nome" type="text" name="nome" id="nome"
              class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              required />
            <label for="nome"
              class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark-text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome:</label>
            <span class="text-red-500">{{ errors.nome && errors.nome[0] }}</span>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input v-model="formData.sobrenome" type="text" name="sobrenome" id="sobrenome"
              class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              required />
            <label for="sobrenome"
              class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark-text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sobrenome:</label>
            <span class="text-red-500">{{ errors.sobrenome && errors.sobrenome[0] }}</span>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input v-model="formData.data_de_nascimento" type="date" name="data_de_nascimento" id="data_de_nascimento"
              class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              required />
            <label for="data_de_nascimento"
              class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark-text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Data
              de Nascimento:</label>
            <span class="text-red-500">{{ errors.data_de_nascimento && errors.data_de_nascimento[0] }}</span>

          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input v-model="formData.email" type="email" name="email" id="email"
              class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              required />
            <label for="email"
              class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark-text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail:</label>
            <span class="text-red-500">{{ errors.email && errors.email[0] }}</span>

          </div>
          <div class="relative z-0 w-full mb-6 group">
            <select v-model="formData.genero" name="genero" id="genero"
              class="block py-2.5 px-0 w-full text-lg text-green-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:text-green-500 focus:ring-0 focus:border-green-600 peer"
              required>
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
            <label for="genero"
              class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark-text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gênero:</label>
            <span class="text-red-500">{{ errors.genero && errors.genero[0] }}</span>
          </div>

          <div class="flex">
            <button type="submit" class="bg-green-600 px-5 py-3 rounded font-bold text-white ">Atualizar</button>
            
          </div>
        </form>

        <div v-if="status"
          class="p-4 mb-4 text-lg text-green-800 rounded-lg bg-green-50 dark:bg-transparent dark:text-green-400"
          role="alert">
          <span class="font-bold">Sucesso</span> Cadastro Salvo com sucesso.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from './../assets/img/logo.svg'
import resource from '../http/pessoas';
import { onMounted, reactive, ref } from "vue";
import axios from 'axios';
import {useRoute} from 'vue-router';

const route = useRoute();
const errors = ref({})
const status = ref(false)

const formData = reactive({
  cpf: '',
  nome: '',
  sobrenome: '',
  data_de_nascimento: '',
  email: '',
  genero: ''
});

const recomecar = () => {
  formData.cpf = '',
    formData.nome = '',
    formData.sobrenome = '',
    formData.data_de_nascimento = '',
    formData.email = '',
    formData.genero = ''
  status.value = false

}

const getData = async () => {
    const {data} = await axios.get(resource+ route.params.id)
    formData.cpf = data.data.cpf,
    formData.nome = data.data.nome,
    formData.sobrenome = data.data.sobrenome,
    formData.data_de_nascimento = data.data.data_de_nascimento,
    formData.email = data.data.email,
    formData.genero = data.data.genero

}

onMounted(getData);

const submit = async () => {
  errors.value= ({})

  try {
    const id = route.params.id
    const data = await axios.put(resource +id, formData)
    status.value = true

  } catch (error) {
    errors.value = error.response.data.errors
    console.log(error.value)

  }




};

</script>

<style>
.bg-dark {
  background-color: #1a202c;
  /* Cor de fundo escuro */
  color: #ffffff;
  /* Cor do texto no fundo escuro */
}
</style>

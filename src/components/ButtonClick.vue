<template>
          <RouterLink class="px-5 py-3 rounded font-bold mx-5 bg-gradient-to-r from-[#00d7bd] to-[#0be554] text-white hover:from-[#0be554] hover:to-[#00d7bd]" :to="props.link">{{ props.nome }}</RouterLink>

</template>
<script setup>

const props = defineProps({
    link:String,
    nome:String
})
</script>

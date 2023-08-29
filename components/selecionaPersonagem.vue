<template>
    <!-- <button @click="selecao">Clicar</button> -->
</template>

<script setup>



   const emit = defineEmits(['seleciona']);

   function selecao(){
    emit('seleciona');
   }


    

</script>
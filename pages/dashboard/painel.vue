<template>
    <!-- <div>
        <h1>Esta logado</h1>
        <button @click="signOut">Sair</button>
        <div>
           <Personagens />
        </div>
    </div> -->



<div>
    <Cabecalho />

    <Personagens />
</div>












</template>

<script setup>

definePageMeta({
  middleware: 'auth'
})

</script>

<style scoped>
</style>
<template>
    <div class="grid grid-cols-3 flex justify-center mt-2">

        <!--Coluna 01-->

        <div class="flex justify-center items-center col-span-3 from-gray-500">
            <div v-if="selectPerson" class="w-60 flex justify-center">
                <img :src="selectPerson" class="w-52 h-52 object-contain">

            </div>
            <div v-else class="flex justify-center">
                <img src="../public/imagensCapa/default.jpg" class="rounded-lg w-60 h-60 object-contain">

            </div>

        </div>


        <!--Coluna 02-->

        <div class="col-span-3 bg-black flex justify-center items-center">

            <div v-if="nome" class="grid grid-cols-3 gap-2 p-2 flex items-center h-32">
                <div>
                    <p class="text-white text-sm font-bold">Nome: {{ nome }}</p>
                </div>
                <div>
                    <p class="text-white text-sm font-bold">Codinome: {{ codinome }}</p>
                </div>
                <div>
                    <p class="text-white text-sm font-bold">Habilidades: {{ poder }}</p>
                </div>

            </div>
            <div v-else class="col-span-4 bg-black flex justify-center items-center p-2">
                <div>
                    <p class="text-white text-sm ">Selecione um personagem para saber mais</p>
                </div>
            </div>

        </div>





        <!--Coluna 03 Galeria de personagens-->

        <div class="col-span-3 bg-indigo-700 p-4 flex justify-center items-center">

            <div class="grid grid-cols-7 gap-10">

                <div v-for="user in dadosUser" class="border-2 hover:border-amber-400 hover:cursor-pointer p-2">

                    <img :src="user.imgCard" class="rounded w-16 h-16" @click="selecionaPersonagem(user)">
                </div>

            </div>

        </div>




    </div>
</template>

<script setup>
import { ref } from 'vue';
import dadosUser from '/xmen.json'

const { data } = await useFetch(dadosUser);


let selectPerson = ref('');
let codinome = ref('');
let nome = ref('');
let poder = ref('');


function selecionaPersonagem(user) {
    selectPerson.value = user.img;
    codinome.value = user.codinome;
    nome.value = user.nome;
    poder.value = user.poder;
}

</script>
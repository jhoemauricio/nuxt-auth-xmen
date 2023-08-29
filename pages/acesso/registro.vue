<!-- <template>
    <div>
        <h1>CADASTRO</h1>
        <form @submit.prevent="cadastrar">
            <input v-model="credentials.email" type="email" placeholder="email">
            <input v-model="credentials.password" type="password" placeholder="senha">
            <button>Cadastrar</button>
        </form>

    </div>
</template> -->


<template>
    <div class="grid grid-cols-2 flex justify-center items-center">

        <div class="h-screen">

            <img class="object-cover w-screen h-screen" src="../../public/imagensCapa/fundo-xmen.jpg">

        </div>
        <div class="flex justify-center">
            <Form @submit="cadastrar" :validation-schema="validarDados">


                <div class="bg-white w-96 py-2 -mt-56 -space-y-16 rounded-lg drop-shadow-lg">
                    <div class="mb-12">
                        <h1 class="font-medium text-4xl text-gray-700 text-center">Criar uma conta</h1>
                    </div>

                    <div>
                        <Field name="email" v-model="credentials.email" class="font-medium rounded-lg bg-gray-200 w-72 p-4 m-12" type="email" placeholder="Email" />
                       
                            <p class="text-rose-500 -m-4 -mt-14 p-6 ml-8"><ErrorMessage name="email"></ErrorMessage></p>
                    
                     
                      
                    </div>
                    <div>
                        <Field name="senha" v-model="credentials.password" class="font-medium rounded-lg bg-gray-200 w-72 p-4 m-12" type="password" placeholder="Password" />
                      
                        <p class="text-rose-500 -m-4 -mt-14 p-6 ml-8"><ErrorMessage name="senha"></ErrorMessage></p>  
                       
                    </div>

                    <div role="alert" v-if="sucessoCadastro">
                       
                       <p class="font-sm rounded-lg bg-gray-200 w-72 p-4 m-12 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">Te enviamos um email! Confirme-o!</p> 
                   </div>
               
                    <div>
                        <button
                            class="text-white font-medium rounded-lg bg-blue-400 w-72 p-4 m-12 font-bold hover:bg-blue-800">Confirmar</button>
                    </div>
                    <div class="grid grid-cols-2 space-x-14 p-6 m-8">
                   
                    </div>




                </div>
            </Form>
        </div>
    </div>
</template>











<script setup>

import { Form, Field, ErrorMessage } from 'vee-validate';
import {ref} from 'vue';

let sucessoCadastro= ref(false);


//Validação
const validarDados = {

    email(value) {
        //Regex para validar email
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!regexEmail.test(value)) {

            return 'Precisa ser um email!'

        }

        //se tudo ocorrer bem retorna true
        return true;

    },

    senha(value) {

        if (!value) {
            return 'Senha Inválida'

        }

        return true;

    }

}



const supabase = useSupabaseClient()

const credentials = {
    email: '',
    email_confirmations: false,
    // email_confirm: true,
    password: ''

}
const cadastrar = async () => {

    const { error } = await supabase.auth.signUp(credentials)

    if (error) {

        alert('Impossível cadastrar, '+error);

    } 
    sucessoCadastro.value = true;
    // return navigateTo('/');



}


</script>

<style scoped>
</style>
<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { ref } from 'vue';


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

let alertaErro = ref(false);

const supabase = useSupabaseClient()


const credentials = {
    email: '',
    password: ''
}

const login = async () => {
    const { error } = await supabase.auth.signInWithPassword(credentials)

    if (error) {

        // alert('erro ao logar');
        alertaErro.value=true;

    }

    return navigateTo('/dashboard/painel');
}

</script>


<template>



    <div class="grid grid-cols-2 flex justify-center items-center">

        <div class="h-screen ">

            <img class="object-cover w-screen h-screen" src="../public/imagensCapa/x-men-blue-team-90s-4k-so.jpg">

        </div>
        <div class="flex justify-center">
            <Form @submit="login" :validation-schema="validarDados">


                <div class="bg-white w-96 py-2 -mt-56 -space-y-16 rounded-lg drop-shadow-lg">
                    <div class="mb-12">
                        <h1 class="font-medium text-4xl text-gray-700 text-center">Login</h1>
                    </div>

                    <div>
                        <Field name="email" v-model="credentials.email" class="font-medium rounded-lg bg-gray-200 w-72 p-4 m-12" type="email" placeholder="Email" />
                       
                            <p class="text-rose-500 -m-4 -mt-14 p-6 ml-8"><ErrorMessage name="email"></ErrorMessage></p>
                    
                     
                      
                    </div>
                    <div>
                        <Field name="senha" v-model="credentials.password" class="font-medium rounded-lg bg-gray-200 w-72 p-4 m-12" type="password" placeholder="Password" />
                      
                        <p class="text-rose-500 -m-4 -mt-14 p-6 ml-8"><ErrorMessage name="senha"></ErrorMessage></p>  
                       
                    </div>


                    <div role="alert" v-if="alertaErro">
                        <p class="font-medium rounded-lg bg-gray-200 w-72 p-4 m-12 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-40">Email ou senha inválidos!</p> 
                    </div>

                   

                 
               
                    <div>
                        <button
                            class="text-white font-medium rounded-lg bg-blue-400 w-72 p-4 m-12 font-bold hover:bg-blue-800">Entrar</button>
                    </div>
                    <div class="grid grid-cols-2 space-x-14 p-6 m-8">
                        <div class="">
                            <p class="font-medium hover:underline hover:underline-offset-4 hover:decoration-pink-500"><NuxtLink to="acesso/verificaEmail">Esqueceu a senha?</NuxtLink>
                            </p>
                        </div>
                        <div class="">
                            <p class="font-medium hover:underline hover:underline-offset-4 hover:decoration-pink-500"><NuxtLink to="acesso/registro">Registra-te</NuxtLink></p>
                        </div>

                    </div>




                </div>
            </Form>
        </div>
    </div>









    












</template>


<style scoped></style>


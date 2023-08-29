<!-- <template>
    <div>
        <h1>Nova Senha</h1>
        <form @submit.event="redefinir">
            <input v-model="senhaNova.password" type="password" placeholder="Nova senha">
            <button>Enviar</button>
        </form>

    </div>
</template> -->

<template>
    <div class="grid grid-cols-2 flex justify-center items-center">
  
        <div class="h-screen">
  
            <img class="object-cover w-screen h-screen" src="../../public/imagensCapa/fundo-xmen.jpg">
  
        </div>
        <div class="flex justify-center">
            <Form @submit="redefinir" :validation-schema="validarDados">
  
  
                <div class="bg-white w-96 py-2 -mt-56 -space-y-16 rounded-lg drop-shadow-lg">
                    <div class="mb-12">
                        <h1 class="font-medium text-4xl text-gray-700 text-center">Nova senha</h1>
                    </div>
  
                    <div>
                        <Field name="email" v-model="senhaNova.email" class="font-medium rounded-lg bg-gray-200 w-72 p-4 m-12" type="email" placeholder="Email" />
                       
                            <p class="text-rose-500 -m-4 -mt-14 p-6 ml-8"><ErrorMessage name="email"></ErrorMessage></p>
                    
                     
                      
                    </div>
                    <div>
                        <Field name="senha" v-model="senhaNova.new_password" class="font-medium rounded-lg bg-gray-200 w-72 p-4 m-12" type="password" placeholder="Nova Senha" />
                      
                        <p class="text-rose-500 -m-4 -mt-14 p-6 ml-8"><ErrorMessage name="senha"></ErrorMessage></p>  
                       
                    </div>
                    <div role="alert" v-if="alertaErroEmailSenha">
                        <p class="font-medium rounded-lg bg-gray-200 w-72 p-4 m-12 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-40">Email ou senha inválidos!</p> 
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

import { Field, ErrorMessage, Form} from 'vee-validate';
import { ref } from 'vue';

let alertaErroEmailSenha = ref(false);

//Validação
const validarDados = {

    senha(value) {

            if (!value) {
                return 'Senha Inválida'

            }

        return true;

},

email(value) {
    //Regex para validar email
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!regexEmail.test(value)) {

        return 'Precisa ser um email!'

    }

    //se tudo ocorrer bem retorna true
    return true;

},


}

const senhaNova = {
    email: '',
    new_password: ''
}
const supabase = useSupabaseClient()

const redefinir = async () => {
    const { data, error } = await supabase.auth.updateUser({
        email: senhaNova.email,
        password: senhaNova.new_password
    })

    if(error){

        // alert('algo deu errado '+error)
        alertaErroEmailSenha.value = true;

    } 

   return navigateTo('/');
}


</script>

<style scoped></style>
<!-- <template>
    <div>
      <h1>Verificar Email</h1>
      <form @submit.prevent="enviarEmail">
        <input v-model="dados.email" type="email" placeholder="email">
        <button>Enviar link</button>
      </form>

    </div>
</template> -->


<template>
  <div class="grid grid-cols-2 flex justify-center items-center">

      <div class="h-screen">

          <img class="object-cover w-screen h-screen" src="../../public/imagensCapa/fundo-xmen.jpg">

      </div>
      <div class="flex justify-center">
          <Form @submit="enviarEmail" :validation-schema="validarDados">


              <div class="bg-white w-96 py-2 -mt-56 -space-y-16 rounded-lg drop-shadow-lg">
                  <div class="mb-12">
                      <h1 class="font-medium text-4xl text-gray-700 text-center">Confirme seu email</h1>
                  </div>

                  <div>
                      <Field name="email" v-model="dados.email" class="font-medium rounded-lg bg-gray-200 w-72 p-4 m-12" type="email" placeholder="Email" />
                     
                          <p class="text-rose-500 -m-4 -mt-14 p-6 ml-8"><ErrorMessage name="email"></ErrorMessage></p>
                  
                   
                    
                  </div>
                  <div>
                    <div role="alert" v-if="emailEnviado">
                       
                        <p class="font-medium rounded-lg bg-gray-200 w-72 p-4 m-12 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">Email enviado com sucesso!</p> 
                    </div>
                     
                  </div>
             
                  <div>
                      <button
                          class="text-white font-medium rounded-lg bg-blue-400 w-72 p-4 m-12 font-bold hover:bg-blue-800">Enviar link</button>
                  </div>
                  <div class="grid grid-cols-2 space-x-14 p-6 m-8">
                 
                  </div>




              </div>
          </Form>
      </div>
  </div>
</template>









<script setup lang="ts">

import {  Form, Field, ErrorMessage } from 'vee-validate';
import { ref } from 'vue';


let emailEnviado = ref(false);

//validar dados
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

}

// senha(value) {

//     if (!value) {
//         return 'Senha Inválida'

//     }

//     return true;

// }

}













const dados = {
  email: ''
}
const supabase = useSupabaseClient() 



const enviarEmail = async () => {

const { error } = await supabase.auth.resetPasswordForEmail(dados.email,{
  redirectTo: 'http://localhost:3000/acesso/redefinirSenha'

})

if(error){

  console.log(error);

}

// alert('enviaado com sucesso');
emailEnviado.value = true
}


</script>

<style scoped>
</style>
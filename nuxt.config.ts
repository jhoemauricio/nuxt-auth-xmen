// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase',
  '@nuxtjs/tailwindcss'],




 
  //configuração do módulo supabase
  supabase: {

    redirectOptions: {
      login: '/',
      // callback: '/',

      //Rotas a serem excluídas do redirecionamento padrão de login
      exclude: ['/about','/acesso/registro','/acesso/redefinirSenha','/acesso/verificaEmail']
    }

  }


})

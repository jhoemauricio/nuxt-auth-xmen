export default defineNuxtRouteMiddleware(() => {

    const user = useSupabaseUser()
   //se usuario nao estiver logado retorna para a index
    if (!user.value) {
        return navigateTo('/')
      }
  })
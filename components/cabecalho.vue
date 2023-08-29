<template>
    <div class="columns-2 flex justify-between">
        <div>

        </div>
        <div>
            <button class="text-blue-800 font-medium rounded-lg bg-white w-72 p-4 m-4 font-bold hover:bg-gray-400 hover:text-white" @click="signOut">Logout</button>
        </div>

    </div>
</template>

<script setup>

const supabase = useSupabaseClient()
const signOut = async() =>{
    const {error} = await supabase.auth.signOut()
    if(error){
        alert('erro ao deslogar')

    }

    return navigateTo('/');
}
</script>
<template>
    <div :class="`h-95v ${isMenuOpen ? 'w-20v' : 'w-16'} bg-gray-800 text-white flex flex-col transition-width duration-300 ease-in-out`" >
            <button  class="p-2 text-white">
            <svg v-if="isMenuOpen" @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            <svg v-else @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>

        </button>
        <div class="p-4" v-if="isMenuOpen">
            <h2 class="text-2xl">Lista de Ejercicios</h2>
            <ul>
                <li v-for="item in items" :key="item" class="py-2">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
            items: ['Ejercicio 1', 'Ejercicio 2', 'Ejercicio 3'], // Añade tus elementos aquí
        };
    },
    methods: {
        toggleMenu() {
            console.log("Clcik!!!");
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>


<style scoped>

</style>

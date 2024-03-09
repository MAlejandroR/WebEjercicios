<template>
    <div class="h-10v bg-gray-400 text-white w-full flex flex-row  p-10 justify-between ">
        <h1> Propuesta de Ejercicios para el desarrollo web</h1>
        <button class="btn btn-primary">Admin</button>
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

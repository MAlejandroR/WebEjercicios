<script setup>

import Menu from "@/Components/Personal/Menu.vue";
import Header from "@/Components/Personal/Header.vue";
import Enunciado from "@/Components/Personal/Enunciado.vue";
import Ejecucion from "@/Components/Personal/Ejecucion.vue";
</script>

<template>
    <div class="flex flex-col">
        <Header></Header>
        <div class="flex flex-row">
            <Menu>
            </Menu>
            <div class="flex flex-col">
                <Enunciado>
                    Aquí el enunciado
                </Enunciado>
                <Ejecucion>
                    Aquí la ejecución
                </Ejecucion>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

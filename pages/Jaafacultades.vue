<script setup>
const facultades = {
    nombre: "EduTLan",
    Facultad: "Educación y Ciencias Humanas",
    semilleros: [
            "AVI",
            "Laboratorio IA",
    ]
}
</script>

<template>
    <h1>Facultades</h1>
    <Jaafacultades :facultades="facultades" />
</template>
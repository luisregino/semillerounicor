<template>
    <Accordion :multiple="true" v-model:selectedKeys="selection">
        <template v-for="(facultad, index) in data.children" :key="index">
            <AccordionTab :header="facultad.data.name">
                <div class="flex flex-column align-items-center">
                    <img :alt="facultad.data.name" :src="facultad.data.image" class="mb-3 w-3rem h-3rem" />
                    <span class="font-bold mb-2">{{ facultad.data.name }}</span>
                    <span>{{ facultad.data.title }}</span>
                </div>
            </AccordionTab>
        </template>
    </Accordion>
</template>

<script setup>
import { ref } from 'vue';
import { Accordion, AccordionTab } from 'primevue/accordion';

const facultades = [
    {
        nombre: "Facultad de Ingeniería",
        titulo: "Ingeniería"
    },
    {
        nombre: "Facultad de Ciencias de la Salud",
        titulo: "Ciencias de la Salud"
    },
    {
        nombre: "Facultad de Educación y Ciencias Humanas",
        titulo: "Educación y Ciencias Humanas"
    },
    {
        nombre: "Facultad de Ciencias Básicas",
        titulo: "Ciencias Básicas"
    },
    {
        nombre: "Facultad de Medicina Veterinaria y Zootecnia",
        titulo: "Medicina Veterinaria y Zootecnia"
    },
    {
        nombre: "Facultad de Ciencias Agrícolas",
        titulo: "Ciencias Agrícolas"
    },
    {
        nombre: "Facultad de Ciencias Económicas, Jurídicas y Administrativas",
        titulo: "Ciencias Económicas, Jurídicas y Administrativas"
    }
];

const data = ref(facultades.map((facultad, index) => {
    return {
        key: `0_${index}`,
        type: 'person',
        data: {
            image: 'https://static.vecteezy.com/system/resources/thumbnails/000/495/460/small/22_Profile.jpg',
            name: facultad.nombre,
            title: facultad.titulo
        }
    };
}));

const selection = ref([]);
</script>

<template>
  <OrganizationChart v-model:selectionKeys="selection" :value="data" collapsible selectionMode="multiple">        
      <template #person="slotProps">
          <div class="flex flex-column">
              <div class="flex flex-column align-items-center">
                  <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-3rem h-3rem" />
                  <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                  <span>{{ slotProps.node.data.title }}</span>
              </div>
          </div>
      </template>
      <template #default="slotProps">
          <span>{{ slotProps.node.label }}</span>
      </template>
  </OrganizationChart>
</template>

<script setup>
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

const data = ref({
  key: '0',
  type: 'person',
  data: {
      image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
      name: 'Universidad',
      title: 'Principal'
  },
  children: facultades.map((facultad, index) => {
      return {
          key: `0_${index}`,
          type: 'person',
          data: {
              image: 'https://static.vecteezy.com/system/resources/thumbnails/000/495/460/small/22_Profile.jpg',
              name: facultad.nombre,
              title: facultad.titulo
          }
      };
  })
});

const selection = ref({});
</script>

<style>
/* Puedes agregar tus estilos personalizados aquí */
</style>

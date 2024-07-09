<script setup>
import dataSemilleros from '../data/dataSemilleros'
</script>

<template>
    <div class="container px-4">
      <Micomponente :semillero="dataSemilleros" facultad="Facultad de Ingeniería" />
      <Micomponente :semillero="dataSemilleros" facultad="Facultad de Ciencias de la Salud" />
      <Micomponente :semillero="dataSemilleros" facultad="Facultad de Educación y Ciencias Humanas" />
      <Micomponente :semillero="dataSemilleros" facultad="Facultad de Ciencias Básicas" />
      <Micomponente :semillero="dataSemilleros" facultad="Facultad de Medicina Veterinaria y Zootecnia" />
      <Micomponente :semillero="dataSemilleros" facultad="Facultad de Ciencias Agrícolas" />
      <Micomponente :semillero="dataSemilleros" facultad="Facultad de Ciencias Económicas, Jurídicas y Administrativas" />
    </div>
  </template>
  
  
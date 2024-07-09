<script setup>
const props = defineProps({
    semillero: Object
});
let estudiante = ref(props.semillero.integrantes.estudiantes[0]);
</script>

<template>
  <div class="informacion">
  <div class="w-100">
        <div class="flex gap-4">

          <DataTable :value="props.semillero.integrantes.estudiantes" scrollable scrollHeight="95vh" class="w-1/3"
          v-model:selection="estudiante" selectionMode="single"  dataKey="nombre" :metaKeySelection="false">
            <Column field="nombre" header="Estudiantes">
              <template #body="slotProps">
                <Avatar :label="slotProps.data.nombre[0]" class="mr-2" style="background-color: #dee9fc; color: #1a2551"
                shape="circle" />
                {{ slotProps.data.nombre }}
              </template>
            </Column>
          </DataTable>
          <Card class="w-2/3 border-white">
            <template #title>
              <Avatar :label="estudiante.nombre[0]" class="mr-2" style="background-color: #dee9fc; color: #1a2551"
              shape="circle" />
              {{ estudiante.nombre }}
            </template>
            <template #subtitle>
              {{ estudiante.niveldeFormacion  }}
            </template>
            <template #content>
              <p class="m-0">
                {{  estudiante.identificacion  }}
              </p>
              <Divider />
              <p class="m-0">
                {{  estudiante.correoElectronico  }}
              </p>
              <Divider />
              <p class="m-0">
                {{  estudiante.telefono  }}
              </p>
              <Divider />
              <p class="m-0">
                {{  estudiante.fechadeVinculacion  }}
              </p>
              <Divider />
            </template>
          </Card>
        </div>
    </div>
  </div>
</template>
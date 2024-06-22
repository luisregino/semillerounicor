<script setup>
import semillero from "../data/dataSemilleros.json";	const props = defineProps({
    semillero: Object
});
let estudiante = ref(semillero[0].facultades[0]);	

</script>
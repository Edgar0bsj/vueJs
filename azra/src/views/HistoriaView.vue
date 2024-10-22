<template>
  <HistoriaCompo/>
  <GaleriaCompo/>
</template>

<script>
import GaleriaCompo from '@/components/GaleriaCompo.vue';
import HistoriaCompo from '@/components/HistoriaCompo.vue';
export default {
    name:'HistoriaView',
    components:{
        GaleriaCompo,
        HistoriaCompo
    }
}
</script>
<style>

</style>
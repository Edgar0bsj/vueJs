<template>
  <carouselComponenet/>
  <footerComponente/>
</template>

<script>
import footerComponente from '@/components/Footer.vue';
import carouselComponenet from '@/components/Carousel.vue';
export default {
  name: 'InicioView',
    components:{
      footerComponente,
      carouselComponenet,
    }
}
</script>

<style>

</style>
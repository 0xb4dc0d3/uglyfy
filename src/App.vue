<template>
<div id="app">
  <header class="container text-success">
    <h1>Uglyfy - Proveedor de Remington</h1>
    <ul class="breadcrumb">
      <li>Productos</li>
      <li>Carro de compras</li>
    </ul>
    </header>
  <b-container>
    <b-row>
      <b-col v-for="item in items">

        <!--
        <b-card header="Remington 1911" header-text-variant="white" header-tag="header" style="max-width:20rem;" header-bg-variant="success" header-border-variant="dark" footer="<p>Precio: $ <b>560.000</b></p>" footer-tag="footer" img-fluid footer-bg-variant="light"
          footer-border-variant="dark">
          <b-carousel id="carousel" controls indicators background="white" :interval="2000" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide img-src="src/assets/1911r1c-1.png"></b-carousel-slide>
            <b-carousel-slide img-src="src/assets/1911r1c-2.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="src/assets/1911r1c-3.jpg"> </b-carousel-slide>
          </b-carousel> -->
          <div>
            <br>
            <div class="text-center">
              <b-btn v-b-toggle.collapse1 variant="success">Ver más</b-btn>
              <b-collapse id="collapse1" class="text-justify">
                <br>
                <p>Modelo: <b>{{item.model}}</b></p>
                <p>{{item.description}}</p>
              </b-collapse>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
  return {
    items: [
      { invId: 1, model: '1911 R1 Carry', description: 'The proven accuracy of the Model 1911 completely de-horned for everyday carry. It packs a checkered front strap for a more positive grip and Novak® tritium front night sight so your aim stays sure in moments of duress. Also features an ambidextrous safety, a machined skeletonized aluminum trigger and cocobolo grips.' },
      { invId: 2, model: 'An Item', description: 'ioioioi' },
      { invId: 3, model: 'An Item', description: 'klklklk' },
      { invId: 4, model: 'An Item', description: 'asasasa' },
    ],
  };
},
};
</script>


<style lang="scss">
</style>

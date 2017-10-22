<template>
<div id="app">
  <header class="container text-success">
    <h1>Uglyfy - Proveedor de Remington</h1>
    <ul class="breadcrumb">
      <li>Productos</li>
      <li>Carro de compras</li>
    </ul>
    <button @click="showCart = !showCart" v-show="!verified">
      {{ items.length + (items.length > 1 || items.length === 0 ? " items" : " item") }}
    </button>
    </header>
  <b-container>
    <b-row>
      <b-col>
        <b-card header="Remington 1911" header-text-variant="white" header-tag="header" style="max-width:20rem;" header-bg-variant="success" header-border-variant="dark" footer="<p>Precio: $ <b>560.000</b></p>" footer-tag="footer" img-fluid footer-bg-variant="light"
          footer-border-variant="dark">
          <b-carousel id="carousel" controls indicators background="white" :interval="2000" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide img-src="src/assets/1911r1c-1.png"></b-carousel-slide>
            <b-carousel-slide img-src="src/assets/1911r1c-2.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="src/assets/1911r1c-3.jpg"> </b-carousel-slide>
          </b-carousel>
          <div>
            <br>
            <div class="text-center">
              <b-btn v-b-toggle.collapse1 variant="success">Ver más</b-btn>
              <b-collapse id="collapse1" class="text-justify">
                <br>
                <p>Modelo: <b>R1 Carry</b></p>
                <p>The proven accuracy of the Model 1911 completely de-horned for everyday carry. It packs a checkered front strap for a more positive grip and Novak® tritium front night sight so your aim stays sure in moments of duress. Also features an
                  ambidextrous safety, a machined skeletonized aluminum trigger and cocobolo grips.</p>
              </b-collapse>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col>
        <b-card header="Remington 1911" header-text-variant="white" header-tag="header" img-fluid header-bg-variant="success" header-border-variant="dark" style="max-width:20rem;" footer="<p>Precio: $ <b>560.000</b></p>" align="justify" footer-tag="footer" footer-bg-variant="light"
          footer-border-variant="dark">
          <b-carousel id="carousel" controls indicators background="white" :interval="2000" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide img-src="src/assets/1911r1ect-1.png"></b-carousel-slide>
            <b-carousel-slide img-src="src/assets/1911r1ect-2.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="src/assets/1911r1ect-3.jpg"> </b-carousel-slide>
          </b-carousel>
          <div>
            <br>
            <div class="text-center">
              <b-btn v-b-toggle.collapse2 variant="success">Ver más</b-btn>
              <b-collapse id="collapse2" class="text-justify">
                <br>
                <p>Modelo: <b>R1 Enhanced</b></p>
                <p>The Model 1911 R1 Enhanced is a clear competitive standout. Its long list of accuracy-enhancing features includes adjustable rear sight with red fiber-optic front sight and anodized aluminum match trigger. </p>
              </b-collapse>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col>
        <b-card header="Remington 1911" header-text-variant="white" header-tag="header" header-bg-variant="success" style="max-width:20rem;" header-border-variant="dark" footer="<p>Precio: $ <b>560.000</b></p>" align="justify" img-fluid footer-tag="footer"
          footer-bg-variant="light" footer-border-variant="dark">
          <b-carousel id="carousel" controls indicators background="white" :interval="2000" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide img-src="src/assets/1911r1etb-1.png"></b-carousel-slide>
            <b-carousel-slide img-src="src/assets/1911r1etb-2.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="src/assets/1911r1etb-3.jpg"> </b-carousel-slide>
          </b-carousel>
          <div>
            <br>
            <div class="text-center">
              <b-btn v-b-toggle.collapse3 variant="success">Ver más</b-btn>
              <b-collapse id="collapse3" class="text-justify">
                <br>
                <p>Modelo: <b>R1 Enhanced Threaded Barrel</b></p>
                <p>The .45 ACP is loud and proud by nature but certain scenarios require a quieter approach. It ups the ante of the R1 Enhanced’s features with a threaded barrel to easily accept silencers. Also adds a tall two-dot rear sight for use with
                  a silencer, and two 8-round magazines with bumper pads.</p>
              </b-collapse>
            </div>
          </div>

        </b-card>
      </b-col>
      <b-col>
        <b-card header="Remington 1911" header-text-variant="white" header-tag="header" header-bg-variant="success" style="max-width:20rem;" img-fluid header-border-variant="dark" footer="<p>Precio: $ <b>560.000</b></p>" align="justify" footer-tag="footer" footer-bg-variant="light"
          footer-border-variant="dark">
          <b-carousel id="carousel" controls indicators background="white" :interval="2000" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide img-src="src/assets/1911r1s-1.png"></b-carousel-slide>
            <b-carousel-slide img-src="src/assets/1911r1s-2.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="src/assets/1911r1s-3.jpg"> </b-carousel-slide>
          </b-carousel>
          <div>
            <br>
            <div class="text-center">
              <b-btn v-b-toggle.collapse4 variant="success">Ver más</b-btn>
              <b-collapse id="collapse4" class="text-justify">
                <br>
                <p>Modelo: <b>R1 Enhanced Threaded Barrel</b></p>
                <p>The .45 ACP is loud and proud by nature but certain scenarios require a quieter approach. It ups the ante of the R1 Enhanced’s features with a threaded barrel to easily accept silencers. Also adds a tall two-dot rear sight for use with
                  a silencer, and two 8-round magazines with bumper pads.</p>
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
  data: {
    showCollapse: true,
    slide: 0,
    sliding: null
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
}
</script>



<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 20px;
}

body {
    background: #414d0b;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #727a17, #414d0b);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #727a17, #414d0b);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

/* --- HEADER --- */
header.container {
    margin-bottom: 1.5rem;
}

header .breadcrumb {
    color: #7d7d7d;
}

header .breadcrumb li {
    float: left;
    padding: 0 6px;
}
header .breadcrumb li:first-child {
    padding-left: 2px;
}
header .breadcrumb li:not(:last-child)::after {
    content: " \276f";
    padding-left: 8px;
}

header .count {
    float: right;
    color: #ffffff;
}
</style>

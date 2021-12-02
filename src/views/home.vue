<template>
  <div>
    
    <b-carousel :indicator-inside="false">
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <b-image class="image" :src="carousel.imagem"></b-image>
        </b-carousel-item>
       
    </b-carousel>
    <br>
    <section class="section has-text-centered">
        <h1 class="title">Facilitamos o seu processo de doação, <br>atendendo a real necessidade das entidades </h1>
        <hr style="width:70px;margin:auto; background-color:#ff0000">
        <br>
        
        <p class= "is-size-5">Já imaginou doar sem preocupações, para a causa que você apoia com agilidade e transparencia? <br>A Doei chegou para isso!</p>
        <br>
        <a href="#/instituicoesparceiras">
          <button class="button is-danger">Quero doar</button>
        </a>
    </section>
    <br>
    <br>
    
          <nav class="level ">
        <div class="level-item has-text-centered">
          <div>
            <a href="#/sobrenos">
              <figure class="image is-128x128">
                <img class="is-rounded" src="@/assets/transparencia.png">
              </figure>
              <br>
              <p class="heading has-text-Gray">Transparência</p>
            </a>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <a href="#/sobrenos">
              <figure class="image is-128x128">
                <img class="is-rounded" src="@/assets/praticidade.png">
              </figure>
              <br>
              <p class="heading has-text-Gray">Praticidade</p>
            </a>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <a href="#/sobrenos">
              <figure class="image is-128x128">
                <img class="is-rounded" src="@/assets/sustentabilidade.png">
              </figure>
              <br>
              <p class="heading has-text-Gray">Sustentabilidade</p>
            </a>
          </div>
        </div>
        
        <div class="level-item has-text-centered">
          <div>
            <a href="#/sobrenos">
              <figure class="image is-128x128">
                <img class="is-rounded" src="@/assets/gerenciamento.png">
              </figure>
                            <br>
              <p class="heading has-text-Gray">Gerenciamento</p>
            </a>
          </div>
        </div>
      
      </nav>
    
    <br>
    <br>   


  <div>

    <section class="hero" :style="{ height: '200px', backgroundImage: 'url(' + require('@/assets/container.png') + ')' }">
      <div class="hero-body">
        <p class="title has-text-centered has-text-white">
          Com a Pandemia
        </p>
        <hr style="width:70px;margin:auto; background-color:#ff0000">
        <br>
        <p class="subtitle has-text-centered has-text-white is-size-4">
          Cerca de 67% das OSC perderam mais da metade das arrecadações.
        </p>
      </div>
    </section>

  <br>
  <br>
  <br>
  <br>
  </div>
  <br>
  <br>







    <div class="columns">
          <!-- Primeira coluna -->
          <div class="column is-6">
            
            <div class="columns has-text-centered">
              <div class="column ">
                <figure class="image is-5by3">
                  <img src="@/assets/vantagem.png">
                </figure>              
              <h1 class="title"></h1>
              </div>
            </div>
          </div>

          <!-- Segunda coluna -->
          <div class="column is-6">

            <div class="columns has-text-centered">
              <div class="column">
              <h1 class="title has-text-centered">Vantagens</h1>
              <hr style="width:70px;margin:auto; background-color:#ff0000">
              <br>
              <br>
              <br>
            
              <h2 class="subtitle has-text-centered">Pela Doei você pode ajudar as OSC de sua casa,<br>com apenas alguns cliques tenha liberdade na escolha da entidade,<br>variedade nas opções de compra e doações com confiança.</h2>
              <br>
              <a href="#/perguntasfrequentes">
                <button class="button is-danger">Saber mais</button>
              </a>
              </div>
            </div>
          </div>
       </div>

















    
  </div>
</template>








<script>
export default {
    data(){
        return {
            carousels: [
                { imagem: require('@/assets/1.png') },
                { imagem: require('@/assets/2.png') },
                { imagem: require('@/assets/3.png') },
                { imagem: require('@/assets/4.png') }
            ]
        }
    }
}
</script>

<style>
.is-active .al img {
    border: 1px solid #fff;
    filter: grayscale(0%);
}
.al img {
    border: 1px solid transparent;
    filter: grayscale(100%);
}

.sobre{
  background-color:#555555;
}

</style>




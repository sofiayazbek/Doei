<template>
    <div>
     <figure class="image is-720x180">
      <img src="@/assets/transparenciapag.png">
    </figure>

    <hr>


        <div class="level-item has-text-centered">
          <div>

              
              <h1 class="is-size-4 has-text-black">A transparência é um de nossos principais valores. <br> Assim, compartilharemos aqui todas as nossas ações! </h1>
          </div>
        </div>

        <br>
        <br>



    <div class="columns has-text-centered">
          <!-- Primeira coluna -->
          <div class="column has-text-centered is-4">
            
            <div class="box has-text-centered">
              <div class="columns has-text-centered">
                <div class="column has-text-centered">
                  <figure class="image is-2by1">
                    <img 
                    src="@/assets/sopadatiacelina.png">
                </figure>  
                <br>            
                <h1 class="title">Sopa da Tia Celina</h1>
                <br>
                  <div class="buttons has-text-auto">
                    <b-button
                        label="Veja o que já foi feito"
                        type="is-primary"
                        size="is-medium"
                        @click="isCardModalActive1 = true" />
                  </div>

                    <b-modal v-model="isCardModalActive1" :width="640" scroll="keep">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="@/assets/tiacelinacampanha.png" alt="Image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">

                                    <div class="media-content">
                                        <p class="title is-4">Primeira campanha</p>
                                        <p class="subtitle is-6">26 Jun 2021</p>
                                    </div>
                                </div>

                                <div class="content">
                                    Foi totalizado 100kg de feijão!<br>
                                    Essa quantidade fornece sopas para aproximadamente 6 finais de semana para pessoas em situação de rua.
                                <br>
                                </div>
                            </div>
                        </div>
                    </b-modal>

                </div>
              </div>
            </div>

          </div>



          <!-- Segunda coluna -->
          <div class="column is-4">

            <div class="box">
              <div class="columns has-text-centered">
                <div class="column">
                  <figure class="image is-2by1">
                  <img src="@/assets/institutoficacomigo.png">
                  </figure>  
                <br>            
                <h1 class="title">Instituto Fica Comigo</h1>
                <br>
            
                  <div class="buttons has-text-centered">
                    <b-button
                        label="Veja o que já foi feito"
                        type="is-primary"
                        size="is-medium"
                        @click="isCardModalActive2 = true" />
                  </div>

                    <b-modal v-model="isCardModalActive2" :width="640" scroll="keep">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="@/assets/ficacomigocampanha.png" alt="Image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">

                                    <div class="media-content">
                                        <p class="title is-4">Primeira campanha</p>
                                        <p class="subtitle is-6">03 Ago 2021</p>
                                    </div>
                                </div>

                                <div class="content">
                                    Os resultados desta campanha estão em andamento.
                                <br>
                                </div>
                            </div>
                        </div>
                    </b-modal>

                </div>
              </div>
            </div>


          </div>

          <!-- Terceira coluna -->
          <div class="column is-4">

              <div class="columns has-text-centered">
                <div class="column">
                </div>
              </div> 
          </div>
    </div>

    

  </div>
</template>




<style>
.transparencia{
  background-color:#fbcdcf;
}

</style>



<script>
    export default {
        data() {
            return {
                isCardModalActive1: false,
                isCardModalActive2: false
            }
        }
    }
</script>
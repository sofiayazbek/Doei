<template>
  <div>


    <div class="columns">
          <!-- Primeira coluna -->
          <div class="column is-4">
            
            <div class="columns has-text-centered">
              <div class="column ">
                <figure class="image is-5by3">
                  <img src="@/assets/sopadatiacelina.png">
                </figure>              
              <h1 class="title"></h1>
              </div>
            </div>

          <br>
          <br>
          <h1 class="title">Monte sua cesta de doação</h1>


           <div class="columns has-text-centered">
              <div class="column ">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-5by3">
                      <img src="@/assets/feijao.png">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                      </div>
                      <div class="media-content">
                        <p class="title is-4">Feijão 1 kg</p>
                        <p class="subtitle is-6">preço</p>
                      </div>
                    </div>

                    <div class="content">

                      <br>
                      <a href="#/carrinho">
                        <b-button type="is-primary">Adicionar</b-button>
                      </a>
                      
                    </div>
                  </div>
                </div>
                
              </div>




            </div>

          </div>



          <!-- Segunda coluna -->
          <div class="column is-8">

            <div class="columns">
              <div class="column">
             
              <h1 class="title">Saiba mais sobre a {{instituicao.nome}}</h1>
              <br>
              <h2 class="subtitle">{{instituicao.descricao}}</h2>
              </div>
            </div>

            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>


           <div class="columns has-text-centered">
              <div class="column ">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-5by3">
                      <img src="@/assets/arroz.png">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                      </div>
                      <div class="media-content">
                        <p class="title is-4">Arroz 1 kg</p>
                        <p class="subtitle is-6">preço</p>
                      </div>
                    </div>

                    <div class="content">
                      <br>
                      <a href="#/carrinho">
                        <b-button type="is-primary">Adicionar</b-button>
                      </a>

                    </div>
                  </div>
                </div>
              </div>









              <div class="column ">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-5by3">
                      <img src="@/assets/spaghetti.png">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                      </div>
                      <div class="media-content">
                        <p class="title is-4">Macarrão 500 g</p>
                        <p class="subtitle is-6">preço</p>
                      </div>
                    </div>

                    <div class="content">
                      <br>
                      <a href="#/carrinho">
                        <b-button type="is-primary">Adicionar</b-button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>


          







            </div>
      

          </div>
  
       </div>

  </div>
</template>


<script>
    export default {
        data() {
            return {
                instituicao: {}
            }
        },
        created() {
          var self = this;
          this.axios.get('instituicoes/'+ this.$route.params.id).then((response) => {
            self.instituicao = response.data;
          })
        }
    }
        
</script>
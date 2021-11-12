<template>
  <div>

    <section class="section has-text-centered">
      <h1 class="title">Como ajudar?</h1>
      <hr style="width:70px;margin:auto; background-color:#ff0000">
    </section>

      <div class="columns has-text-centered">
        <div class="column has-text-centered">  
          
            <img class="is-rounded" style="height:128px"
            src="@/assets/instituicao.png">
             
                  
        <h4 class="title is-4">Escolha uma Instituição</h4>
        <h5 class="subtitle is-5">Veja a lista de Instituições cadastradas e escolha uma delas para fazer sua doação.</h5>
        </div>

        <div class="column">   

            <img class="is-rounded" style="height:128px"
            src="@/assets/cesta.png">        
        <h4 class="title is-4">Monte sua cesta de doação</h4>
        <h5 class="subtitle is-5">Confira a lista de produtos que a Instituição mais precisa. Você pode doar um ou mais produtos.</h5>
        </div>

        <div class="column"> 

            <img class="is-rounded" style="height:128px"
            src="@/assets/pagar.png">
                     
        <h4 class="title is-4">Escolha a forma de pagamento</h4>
        <h5 class="subtitle is-5">A Instituição receberá o pedido em alguns dias após a confirmação do pagamento. O frete é por nossa conta!</h5>
        </div>
      </div>
    



    <hr>

    <section class="section has-text-centered">
      <h1 class="title">Escolha uma Instituição</h1>
      <hr style="width:70px;margin:auto; background-color:#ff0000">
    </section>

    <div class="columns">
          <!-- Primeira coluna -->
          <div v-for="(instituicao, index) in instituicoes" :key="index" class ="column is-4">
            
            <div class="box">
              <div class="columns has-text-centered">
                <div class="column ">
                  <figure class="image is-2by1">
                    <img v-if="instituicao.fotoCapa" :src="instituicao.fotoCapa">
                </figure>  
                <br>            
                <h1 class="title">{{instituicao.nome}}</h1>
                <br>
                <h5 class="subtitle is-5">{{instituicao.descricao}}</h5>
                <a href="#/sopadatiacelina">
                  <router-link :to="{name:'Instituicao',params:{id:instituicao.id}}" class="button is-normal">Ajudar</router-link>
                  </a>
                </div>
              </div>
            </div>

            
  
            

          </div>




          <!-- Terceira coluna -->
          <div class="column is-4">

            <div class="box">
              <div class="columns has-text-centered">
                <div class="column">
                  <figure class="image is-2by1">
                  <img src="@/assets/novainstituicaoparceira.png">
                </figure>    
                <br>          
                <h1 class="title">Faça parte da Doei</h1>
                <br>
                <h2 class="subtitle">Entre em contato com a gente e se torne uma Instituição Parceira!</h2>
                <br>
                <br>
                <a href="#/contato">
                  <button class="button is-normal">Contato</button>
                  </a>
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
                instituicoes: []
            }
        },
        created() {
          var self = this;
          this.axios.get('instituicoes/').then((response) => {
            self.instituicoes = response.data;
          })
        }
    }
        
</script>

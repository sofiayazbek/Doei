<template>
<div>


<div class="columns has-text-centered">
      <div class="column is-4">
        <figure class="image is-5by3">
          <img v-if="instituicao.fotoCapa" :src="instituicao.fotoCapa">
        </figure>              
      </div>

      <div class="column">
        <h1 class="title">Saiba mais sobre a {{instituicao.nome}}</h1>
        <br>
        <h2 class="subtitle">{{instituicao.sobre}}</h2>
      </div>
    </div>

    <h1 class="title">Monte sua cesta de doação</h1>

    <div class="columns">

      <div v-for="(produto,index) in instituicao.produtos" :key="index" class="column is-4">
        <div class="card">
          <div class="card-image">
            <figure class="image is-5by3">
              <img v-if="produto.fotoCapa" :src="produto.fotoCapa">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
              </div>
              <div class="media-content has-text-centered">
                <p class="title is-4">{{produto.nome}}</p>
                <p class="subtitle is-6">{{produto.descricao}}</p>
                <p class="subtitle is-6">{{produto.preco | f-currency}}</p>
              </div>
            </div>

            <div class="content has-text-centered">

              <br>
              <a href="#/carrinho">
                <b-button type="is-primary" @click="adicionarCarrinho(produto)">Adicionar </b-button>
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
                instituicao: {}
            }
        },
        created() {
          var self = this;
          this.axios.get('instituicoes/'+ this.$route.params.id).then((response) => {
            self.instituicao = response.data;
          })
        },
        methods: {
          adicionarCarrinho(produto) {
            var self = this;
            var item = {
              produto: produto.id,
              instituicao:this.instituicao.id
            }
            //Chama a api para criar o usuário
            this.axios.post('item-pedido-create/', item).then((response) => {
              console.log(response);

              //Mostra a mensagem de sucesso
              self.$buefy.dialog.alert('Produto adicionado com sucesso!')

              //Navega para o MeusPedidos
              self.$router.push({ name: 'Carrinho', force:true, refresh:true });
            })            
          }
        }        
    }
        
</script>
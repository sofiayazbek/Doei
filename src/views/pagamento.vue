<template>
    <section v-id="pedido">


      <h1 class="title">Pedido Nº {{pedido.id}}</h1>
      <h1 class="title">Valor: {{pedido.valorTotal | f-currency}}</h1>

      <div v-if="pedido.finalizado">
        Pedido finalizado/pago
      </div>
      <div v-else>
        <h1 class="title">Finalizar pagamento</h1>
        <hr style="width:70px; background-color:#ff0000">
        
        <p class= "is-size-6">Nosso modelo de pagamento por enquanto é o pix, estamos em fase de desenvolvimento e logo teremos outras formas para melhor atendê-los. <br></p>
        <br>
        <br>
      
        <h1 class="title has-text-centered"> PIX: 106.576.769-26 </h1>
        <br>
        <br>
        <br>
        <p class= "is-size-6">Após o pagamento, envie seu comprovante para o nosso WhatsApp: <br></p>
        <br>

        <nav class="level">
          <div class="level-left">
            <p class="level-item">

              <a class="button is-danger" href="https://web.whatsapp.com/send?phone=5599111112222" target="_blank">
              Enviar comprovante</a>

            </p>
          </div>


        </nav>
      </div>


    </section>
</template>


<script>
    export default {
        data() {
          return {
            pedido: null
          }
        },
        created() {
          var self = this;
          var id = this.$route.query.id;
          this.axios.get(`pedidos/${id}/`).then((response) => {
              console.log(response);
              self.pedido = response.data;
          })
        },


        methods: {
            finalizar() {
                this.$buefy.dialog.alert('Doação feita com sucesso!')
            },

        }
    }
</script>

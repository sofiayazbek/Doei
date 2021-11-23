<template>
    <section>

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
            <a>
              <button class="button is-danger">Enviar comprovante</button>
            </a>
          </p>
        </div>

        <div class="level-right">
          <p class="level-item">
            <a href="#/">
              <b-button type="is-danger" @click="finalizar()">Finalizar </b-button>
            </a>
          </p>
        </div>
      </nav>


    </section>
</template>


<script>
    export default {
        methods: {
            finalizar() {
                this.$buefy.dialog.alert('Doação feita com sucesso!')
            },

        }
    }
</script>

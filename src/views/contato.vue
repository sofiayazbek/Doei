<template>
    <section class="section">
        <h1 class="title">Entre em contato com a Doei</h1>
        <hr style="width:70px; background-color:#ff0000">

        <section>
            <b-field label="Nome">
                <b-input v-model="contato.nome">
                </b-input>
            </b-field>

            <b-field label="Email"
               message=" ">
                <b-input v-model="contato.email" type="email"
                   value="">
               </b-input>
           </b-field>

            <b-field label="Telefone para contato"
               message=" ">
               <b-input v-model="contato.telefone" value="" >
               </b-input>
           </b-field>

            <b-field label="Assunto">
              <b-select placeholder="--Selecione--">
                <option value="1">Dúvidas</option>
                <option value="2">Virar uma Instituição Parceira</option>
                <option value="3">Sugestões</option>
                <option value="4">Reclamações</option>
                <option value="5">Elogios</option>
                <option value="6">Outro</option>
              </b-select>
            </b-field>

           <b-field label="Sua Mensagem">
                <b-input v-model="contato.mensagem"  type="textarea"></b-input>
           </b-field>
           
           <b-button @click="enviar()" type="is-primary">Enviar</b-button>
        </section>

    </section>
</template>




<script>
export default {
    props: ['canCancel'],
    data(){
        return {
            contato: {
              nome: '',
              email: '',
              telefone: '',
              mensagem: '',
            }
        }
    },  

    methods: {
      enviar() {
          var self = this;
          //Chama a api para criar a mensagem
          this.axios.post('contatos-create/', this.contato).then((response) => {
            console.log(response);

            //Mostra a mensagem de sucesso
            self.$buefy.dialog.alert('Mensagem enviada com sucesso!')
          })        
      }
    }  
}
</script>

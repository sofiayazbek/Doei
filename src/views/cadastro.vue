<template>
    <section>
      <h1 class="title has-text-centered">Dados Pessoais</h1>

      <b-field label="Nome" :label-position="labelPosition">
          <b-input v-model="doador.nome" ></b-input>
      </b-field>
      <b-field label="Sobrenome" :label-position="labelPosition">
          <b-input v-model="doador.sobrenome" ></b-input>
      </b-field>

      <b-field label="Data de Nascimento" :label-position="labelPosition">
          <date-pick v-model="doador.data"
                         :format="'YYYY-MM-DD'"
                         :displayFormat="'DD/MM/YYYY'"
                         >

          </date-pick>        
      </b-field>


      <h1 class="title has-text-centered">Dados de Acesso ao Site</h1>
      <b-field label="Email" 
          :label-position="labelPosition">
          <b-input v-model="doador.email" type="email"
              readonly="true"
              disabled
              >
          </b-input>
      </b-field>

      <b-field>
        <b-checkbox>Quero receber mensagens de novas campanhas para as Instituições.</b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="termos">Eu concordo com os Termos e Condições de Uso da Doei.</b-checkbox>
      </b-field>
      
      <b-button @click="cadastrar()" type="is-primary">Cadastrar</b-button>


    </section>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
export default {
    components: {DatePick},
    data() {
        return {
            labelPosition: 'on-border',
            doador: {
              email:''
            },
            currentUser: null,
            termos: false
        };
    },

    created() {
        var self = this;
        //Busca o usuario logado para já preencher o e-mail na tela de cadastro
        this.axios.get('currentuser/').then((response) => {
            console.log(response);
            self.currentUser = response.data;
            if (response.data) {
                self.doador.email = response.data.username;
            }
        });
    },

    methods: {
        cadastrar() {
            var self = this;
            if(!this.termos) {
              self.$buefy.dialog.alert('Você precisa aceitar os termos para se cadastrar!');
            }else{
              //Chama a api para criar o usuário
              this.axios.post('doadores-create/', this.doador).then((response) => {
                  console.log(response);

                  //Mostra a mensagem de sucesso
                  self.$buefy.dialog.alert('Cadastro realizado com sucesso!');

                  //Navega para a home após o cadastro, pode ser alterado para qualquer rota
                  self.$router.replace({ name: 'Home', force:true });
              });
            }
        },
    },
};
</script>
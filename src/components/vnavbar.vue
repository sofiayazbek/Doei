<template>
  <div>
  <div style="background-color:#FFFFFF">

    <b-navbar style="background-color:#FF4968">

    
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }"> 
                <img
                    src= "@/assets/doei.png" style="width:150px;max-height:none"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item> 
        </template>
        <hr>
        <template #start>
            
        </template>
        <template #end>
          <b-navbar-item tag="div">
                <b-input v-model="name" placeholder="Busca"></b-input>
            </b-navbar-item>
            <b-navbar-item tag="div">
                <a href="#/carrinho">
                  <b-button class="cart-button"
                  icon-right="shopping-cart" />
                </a>
            </b-navbar-item>
            <template v-if="currentUser">
              <b-navbar-item tag="div">
                  {{currentUser.username}}
              </b-navbar-item>  
              <b-navbar-item tag="div">
                  <div class="buttons">
                      <a class="button" @click="sair()">
                          <strong>Sair</strong>
                      </a>
                  </div>
              </b-navbar-item>                                        
            </template>
            <template v-else>
              <b-navbar-item tag="div">
                  <div class="buttons">
                      <a class="button is-primary" @click="entrarCadastrar()">
                          <strong>Entrar/Cadastrar</strong>
                      </a>
                  </div>
              </b-navbar-item>                      
            </template>
        </template>
    </b-navbar>

    <br>

    <nav class="level">
  <p class="level-item has-text-centered">
    <a href="#/" class="link has-text-danger">Home</a>
  </p>
  <p class="level-item has-text-centered">
    <a href="#/sobrenos" class="link has-text-danger">Sobre Nós</a>
  </p>
  <p class="level-item has-text-centered">
    <a href="#/instituicoesparceiras" class="link has-text-danger">Instituições Parceiras</a>
  </p>
  <p class="level-item has-text-centered">
    <a href="#/transparencia" class="link has-text-danger">Transparência</a>
  </p>
    <p class="level-item has-text-centered">
    <a href="#/perguntasfrequentes" class="link has-text-danger">Perguntas Frequentes</a>
  </p>
    <p class="level-item has-text-centered">
    <a href="#/contato" class="link has-text-danger">Contato</a>
  </p> 

 










</nav>
<hr>
  </div>

        


  </div>
</template>

<style>
  .cart-button:{
    border:none;background:none;
  }
</style>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
    computed: {
      currentUser () {
        return this.$store.getters.currentUser
      }
    },  
    methods: {
      entrarCadastrar() {
        var provider = new GoogleAuthProvider();
        var self = this;
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
            console.log(result.user);
            var pass = result.user.uid;
            var email = result.user.email;
            console.log(email, pass);
            const formData = new FormData();
            formData.append('username', email);
            formData.append('password', pass);
            
            self.axios.post('login/', formData).then((response) => {
              console.log('resposta do login');
              console.log('logado', response);
              document.location.reload(true);
              //self.duvidas = response.data;
            }).catch(function (error) {
              console.log('error', error);
              if (error.response && error.response.data) {
                var user = {
                  username: email,
                  password: pass
                };
                self.axios.post('user-registration/', user).then((responseUr) => {
                  console.log(responseUr);
                  self.axios.post('login/', formData).then((responseLogin) => {
                    console.log('logado', responseLogin);
                    document.location.reload(true);
                  });
                });
              }
              
            });
        }).catch((error) => {
            console.log(error);
        });
      },
      sair() {      
        this.axios.get('logout/').then((responseLogout) => {
          console.log('logout', responseLogout);
          document.location.reload(true);
        });
      }
    }
}
</script>
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
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a href="#/cadastro" class="button is-primary">
                        <strong>Cadastro</strong>
                    </a>
                    <a class="button is-light" @click="isLoginModalActive = true">

                        Log in
                    </a>
                </div>
            </b-navbar-item>
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

        <b-modal
            v-model="isLoginModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-label="Login"
            aria-modal>
            <template #default="props">
                <modal-login @close="props.close"></modal-login>
            </template>
        </b-modal>


  </div>
</template>

<style>
  .cart-button:{
    border:none;background:none;
  }
</style>

<script>
import ModalLogin from './modal-login.vue'

export default {
    data(){
        return {
            isLoginModalActive: false
        }
    },
    components: {
        'modal-login': ModalLogin
    }
}
</script>
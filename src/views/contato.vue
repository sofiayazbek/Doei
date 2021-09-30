\<template>
    <section class="section">
        <h1 class="title">Entre em contato com a Doei</h1>
        <hr style="width:70px; background-color:#ff0000">

        <section>
            <b-field label="Nome">
                <b-input v-model="name"></b-input>
            </b-field>

            <b-field label="Email"
               message=" ">
                <b-input type="email"
                   value="nome@mail.com"
                    maxlength="30">
               </b-input>
           </b-field>

            <b-field label="Telefone para contato"
               message=" ">
               <b-input value="(XX) XXXXX-XXXX" maxlength="15"></b-input>
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
                <b-input maxlength="200" type="textarea"></b-input>
           </b-field>
           <b-button type="is-primary">Enviar</b-button>
        </section>

    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Nome Completo'
            }
        }
    }
</script>

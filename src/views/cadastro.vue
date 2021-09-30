<template>
    <section>

        <b-steps
            v-model="activeStep"
            :animated="isAnimated"
            :rounded="isRounded"
            :has-navigation="hasNavigation"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            :label-position="labelPosition"
            :mobile-mode="mobileMode">


            <b-step-item step="1" label="Perfil" :clickable="isStepsClickable" :type="{'is-success': isProfileSuccess}">
                <h1 class="title has-text-centered">Dados Pessoais</h1>

              <b-field label="Nome" :label-position="labelPosition">
                  <b-input value="  "></b-input>
              </b-field>
              <b-field label="Sobrenome" :label-position="labelPosition">
                  <b-input value=" "></b-input>
              </b-field>

              <b-field label="Data de Nascimento" :label-position="labelPosition">
                  <b-datepicker
                      placeholder="Aperte para selecionar..."
                      icon="calendar-today"
                      trap-focus>
                  </b-datepicker>
              </b-field>
            </b-step-item>


            <b-step-item step="2" :visible="showSocial" label="Login" :clickable="isStepsClickable">
                <h1 class="title has-text-centered">Dados de Acesso ao Site</h1>

              <b-field label="Email"
                  :label-position="labelPosition">
                  <b-input type="email"
                      value=""
                      maxlength="30">
                  </b-input>
              </b-field>

              <b-field label="Senha"
                  :label-position="labelPosition">
                  <b-input value="" type="password" maxlength="30"></b-input>
              </b-field>
            </b-step-item>

            <b-step-item :step="showSocial ? '4' : '3'" label="Finish" :clickable="isStepsClickable" disabled>
                <h1 class="title has-text-centered">Finalizar</h1>
              <b-field>
                <b-checkbox>Quero receber mensagens de novas campanhas para as Instituições.</b-checkbox>
              </b-field>
              <b-field>
                <b-checkbox>Eu concordo com os Termos e Condições de Uso da Doei.</b-checkbox>
              </b-field>
              <b-button type="is-primary">Cadastrar</b-button>

            </b-step-item>



            <template
                v-if="customNavigation"
                #navigation="{previous, next}">
                <b-button
                    outlined
                    type="is-danger"
                    icon-pack="fas"
                    icon-left="backward"
                    :disabled="previous.disabled"
                    @click.prevent="previous.action">
                    Previous
                </b-button>
                <b-button
                    outlined
                    type="is-success"
                    icon-pack="fas"
                    icon-right="forward"
                    :disabled="next.disabled"
                    @click.prevent="next.action">
                    Next
                </b-button>
            </template>
        </b-steps>










    </section>
</template>

<script>
export default {
    data() {
        return {
            labelPosition: 'on-border'
        }
    }
}
</script>

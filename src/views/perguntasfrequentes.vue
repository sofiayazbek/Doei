<template>

    <section>

      <h1 class="title">Perguntas Frequentes</h1>
      <hr style="width:70px; background-color:#ff0000">
      <br>

        <b-collapse
            class="card"
            animation="slide"
            v-for="(duvida, index) of duvidas"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button"
                >
                    <p class="card-header-title">
                        {{ duvida.pergunta }}
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>
            <div class="card-content">
                <div class="content">
                    {{ duvida.resposta }}
                </div>
            </div>
        </b-collapse>

    </section>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: 0,
                duvidas: []
            }
        },
        created() {
          var self = this;
          this.axios.get('duvidas/').then((response) => {
            self.duvidas = response.data;
          })
        }
    }
        
</script>
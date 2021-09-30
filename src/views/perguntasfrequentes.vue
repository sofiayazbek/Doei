<template>

    <section>

      <h1 class="title">Perguntas Frequentes</h1>
      <hr style="width:70px; background-color:#ff0000">
      <br>

        <b-collapse
            class="card"
            animation="slide"
            v-for="(collapse, index) of collapses"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button"
                >
                    <p class="card-header-title">
                        {{ collapse.title }}
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
                    {{ collapse.text }}
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
                collapses: [
                {
                    title: 'Posso ajudar mais de uma Instituição por vez?',
                    text: 'Não, por motivos de logística, no momento, para fazer uma doação para mais de uma instituição você terá que fazer compras separadas.'
                },
                {
                    title: 'Posso comprar outros produtos para a ONG que não estão na lista?',
                    text: 'Não, as listas de compras criadas pelas ONGs são baseadas em produtos que as instituições estão precisando no momento, por isso, só é possível escolher entre os itens apontados na página de cada uma das instituições. Essa é uma forma de evitar compras desnecessárias e ajudar de um modo mais efetivo, enviando somente o que está em falta naquela ocasião.'
                },
                {
                    title: 'Como posso ter certeza de que a Instituição de minha escolha vai receber os produtos que comprei?',
                    text: 'Nós da Doei, temos contato direto com as Instituições e garantimos que todas as compras feitas neste modelo de doação sejam devidamente entregues para a instituição de sua escolha dentro do prazo apontado ao final da transação. No site postamos fotos, recibos e vídeos para você sempre estar por dentro de tudo que acontece.'
                },
                {
                    title: 'Como será gerenciado os prazos e metas das campanhas de doações?',
                    text: 'As compras de cada campanha serão realizadas no final de cada mês, assim você, doador, poderá realizar o pagamento neste período e a Doei fará as entregas no início do próximo mês.'
                },
                {
                    title: 'Como faço para inscrever minha organização?',
                    text: 'Por conta do nosso processo de estudo e análise, recomendamos apenas organizações com base em estudos de avaliação de impacto e análise da organização. Assim ainda não é possível o cadastramento pela organização em nossa plataforma. Porém como compromisso de fortalecimento do setor encorajamos as organizações a entrarem em contato conosco e mantermos um relacionamento.'
                }
                ]
            }
        }
    }
</script>
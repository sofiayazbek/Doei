<template>
    <section>

      <h1 class="title">Seu carrinho de compras</h1>
      <hr style="width:70px; background-color:#ff0000">
      <br>
      

      <section class="section" v-for="(pedido, index) in pedidos" :key="index">
        <h1 class="title">Pedido Nº {{pedido.id}}</h1>
        <h1 class="subtitle"><b>Total do pedido:</b> {{pedido.valorTotal}}</h1>
        <b-table
            :data="isEmpty ? [] : pedido.itens"
            :bordered="isBordered"
            :striped="isStriped"
            :narrowed="isNarrowed"
            :hoverable="isHoverable"
            :loading="isLoading"
            :focusable="isFocusable"
            :mobile-cards="hasMobileCards">

            <b-table-column field="id" label="ID" width="40" :td-attrs="columnTdAttrs" numeric centered v-slot="props">
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="produto" label="Produto" :td-attrs="columnTdAttrs" centered v-slot="props">
                {{ props.row.produto.nome }}
            </b-table-column>

            <b-table-column field="quantidade" label="Quantidade" :td-attrs="columnTdAttrs" centered v-slot="props">
                {{ props.row.quantidade }}
            </b-table-column>

            <!--
            <b-table-column field="date" label="Data de entrega para a Instituição" :th-attrs="dateThAttrs" :td-attrs="columnTdAttrs" centered v-slot="props">
                <span class="tag is-success">
                    {{ new Date(props.row.date).toLocaleDateString() }}
                </span>
            </b-table-column>
            -->

            <b-table-column label="Preço" :td-attrs="columnTdAttrs" left v-slot="props">
                <span>
                    {{ props.row.preco }}
                </span>
            </b-table-column>

            <b-table-column label="Remover" :td-attrs="columnTdAttrs" centered v-slot="props">
                <span>
                  <button class="delete" @click="removerCarrinho(props.row)"></button>
                    {{ props.row.remover }}
                </span>
            </b-table-column>



            <template #empty>
                <div class="has-text-centered">Seu carrinho está vazio :( </div>
            </template>


        </b-table>
      </section>

        
        
      <br>
      <a href="#/pagamento">
        <button class="button is-danger">Continuar</button>
      </a>

    </section>
</template>

<script>
    export default {
        data() {
            const data = [
                { 'id': 1, 'produto': 'Feijão 1kg', 'quantidade': '2x', 'date': '2021/10/01 13:43:27', 'preco': 'R$' },
                { 'id': 2, 'produto': 'Macarrão 500g', 'quantidade': '2x', 'date': '2021/10/01 06:00:53', 'preco': 'R$' },
                { 'id': 3, 'produto': 'Ração seca 1kg', 'quantidade': '1x', 'date': '2021/10/05 06:26:28', 'preco': 'R$' },
                { 'id': 4, 'produto': 'Ração umida', 'quantidade': '1x', 'date': '2021/10/05 10:28:46', 'preco': 'R$' },
                { 'id': 'Total', 'preco': 'R$' },

            ]

            return {
                data,
                isEmpty: false,
                isBordered: false,
                isStriped: false,
                isNarrowed: false,
                isHoverable: false,
                isFocusable: false,
                isLoading: false,
                hasMobileCards: true,
                pedidos: []
            }
        },
        created() {
          this.loadPedidos();
        },

        methods: {
          loadPedidos() {
            var self = this;
            this.axios.get('pedidos/').then((response) => {
              console.log(response);
              self.pedidos = response.data;
            })

          },
          removerCarrinho(item) {
            var self = this;
            //Chama a api para criar o usuário
            this.axios.delete(`item-pedido-create/${item.id}`, item).then((response) => {
              console.log(response);
              //Mostra a mensagem de sucesso
              self.$buefy.dialog.alert('Produto removido com sucesso!')
              self.loadPedidos();
            })            
          },
          dateThAttrs(column) {
              return column.label === 'Date' ? {
                  title: 'This title is sponsored by "th-attrs" prop',
                  class: 'has-text-success'
              } : null
          },

          columnTdAttrs(row, column) {
              if (row.id === 'Total') {
                  if (column.label === 'ID') {
                      return {
                          colspan: 4,
                          class: 'has-text-weight-bold',
                          style: {
                              'text-align': 'left !important'
                          }
                      }
                  } else if (column.label === 'Preço') {
                      return {
                          class: 'has-text-weight-semibold'
                      }
                  } else {
                      return {
                          style: {display: 'none'}
                      }
                  }
              }
              return null
          }
        } 
    }
</script>










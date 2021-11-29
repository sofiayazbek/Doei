import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home.vue';
import Sobrenos from '@/views/sobrenos.vue';
import Instituicoesparceiras from '@/views/instituicoesparceiras.vue';
import Transparencia from '@/views/transparencia.vue';
import Perguntasfrequentes from '@/views/perguntasfrequentes.vue';
import Contato from '@/views/contato.vue';

import Cadastro from '@/views/cadastro.vue';
import Carrinho from '@/views/carrinho.vue';
import Pagamento from '@/views/pagamento.vue';
import Meuspedidos from '@/views/meuspedidos.vue';

import Sopadatiacelina from '@/views/sopadatiacelina.vue';
import Institutoficacomigo from '@/views/institutoficacomigo.vue';
import Instituicao from '@/views/instituicao.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {  }
    },
    {
        path: '/sobrenos',
        name: 'Sobre nós',
        component: Sobrenos,
        meta: {  }
    },
    {
        path: '/instituicoesparceiras',
        name: 'Instituições Parceiras',
        component: Instituicoesparceiras,
        meta: {  }
    },
   {
        path: '/transparencia',
        name: 'Transparência',
        component: Transparencia,
        meta: {  }
    },
   {
        path: '/perguntasfrequentes',
        name: 'Perguntas Frequentes',
        component: Perguntasfrequentes,
        meta: {  }
    },
   {
        path: '/contato',
        name: 'Contato',
        component: Contato,
        meta: {  }
    },
   {
        path: '/cadastro',
        name: 'Cadastro',
        component: Cadastro,
        meta: {  }
    },
   {
        path: '/carrinho',
        name: 'Carrinho',
        component: Carrinho,
        meta: {  }
    },
   {
        path: '/pagamento',
        name: 'Pagamento',
        component: Pagamento,
        meta: {  }
    },
   {
        path: '/meuspedidos',
        name: 'Meus Pedidos',
        component: Meuspedidos,
        meta: {  }
    },
   {
        path: '/sopadatiacelina',
        name: 'Sopa da Tia Celina',
        component: Sopadatiacelina,
        meta: {  }
    },
   {
        path: '/institutoficacomigo',
        name: 'Instituto Fica Comigo',
        component: Institutoficacomigo,
        meta: {  }
    },
   {
        path: '/instituicao/:id',
        name: 'Instituicao',
        component: Instituicao,
        meta: {  }
    }      
]
Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
});

export default router;

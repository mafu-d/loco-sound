import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'
import './app.v2.scss'

export const EventBus = new Vue()

import Loco from './components/Loco'

const app = new Vue({
    el: '#app',
    data: {
        locos: [],
        activeLoco: null,
    },
    components: {
        Loco,
        EventBus
    },

    mounted() {
        for (var i = 0; i < 5; i++) {
            this.addLoco()
        }
  },
    methods: {
        addLoco() {
            this.locos.push({
                name: `Loco ${this.locos.length + 1}`,
            })
        },
    }
})
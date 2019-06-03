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
        activeLoco: null
    },
    components: {
        Loco,
        EventBus
    },

    mounted() {
        this.addLoco()
        EventBus.$on('removeLoco', index => {
            this.locos.splice(index, 1)
        })
        EventBus.$on('updateLocoName', data => {
            this.locos.splice(data.index, 1, {
                name: data.name
            })
        })
    },
    methods: {
        addLoco() {
            this.locos.push({
                name: `Loco ${this.locos.length + 1}`,
            })
        }
    }
})
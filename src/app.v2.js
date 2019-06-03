import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'
import './app.v2.scss'

import Loco from './components/Loco'

const app = new Vue({
    el: '#app',
    data: {
        locos: [],
        activeLoco: null
    },
    components: {
        Loco
    },

    mounted() {
        this.addLoco()
    },
    methods: {
        addLoco() {
            this.locos.push({
                name: `Loco ${this.locos.length + 1}`,
                speed: 0,
                active: false,
                accelerating: false,
                blower: false,
                whistle: false
            })
        },
        removeLoco(index) {
            this.locos.splice(index, 1)
        }
    }
})
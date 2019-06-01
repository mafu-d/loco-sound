const app = new Vue({
    el: '#app',
    data: {
        locos: [],
        activeLoco: null
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
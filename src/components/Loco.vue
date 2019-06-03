<template>
    <div>
        <p>
            <v-text-field type="text" label="Loco name" v-model="name"></v-text-field>
        </p>
        <v-switch label="Active" v-model="active"></v-switch>
        <v-btn color="info">Whistle</v-btn>
        <v-slider v-model="speed" step="0" min="0" max="100" label="Speed"></v-slider>
        <p>
            <v-btn @click="removeLoco(index)" color="warning">Remove</v-btn>
        </p>
    </div>
</template>
<script>
    import {
        Howl,
        Howler
    } from 'howler'
    import {EventBus} from '../app.v2'

    export default {
        props: ['loco', 'index'],
        components: {
            EventBus
        },
        data(){
            return {
                name: '',
                speed: 0,
                active: false,
                accelerating: false,
                blower: false,
                whistle: false
            }
        },

        mounted() {
            this.name = this.loco.name
        },

        watch: {
            name() {
                EventBus.$emit('updateLocoName', {
                    index: this.index,
                    name: this.name
                })
            }
        },

        methods: {
            removeLoco() {
                EventBus.$emit('removeLoco', this.index)
            }
        }
    }
</script>
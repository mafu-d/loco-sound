<template>
    <div>
        <v-switch label="Active" v-model="active"></v-switch>
        <v-btn color="info">Whistle</v-btn>
        <v-slider v-model="speed" step="0" min="0" max="100" label="Speed"></v-slider>
        
    </div>
</template>
<script>
    import {
        Howl,
        Howler
    } from 'howler'

    export default {
        props: ['loco'],
        data(){
            return {
                speed: 0,
                active: false,
                accelerating: false,
                blower: false,
                whistle: false
            }
        },
    }
</script>
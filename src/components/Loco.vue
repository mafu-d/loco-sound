<template>
    <div>
        <p>
            <v-text-field type="text" label="Loco name" v-model="loco.name"></v-text-field>
        </p>
        <v-switch label="Active" v-model="loco.active"></v-switch>
        <v-btn color="info">Whistle</v-btn>
        <v-slider v-model="loco.speed" step="0" min="0" max="100" label="Speed"></v-slider>
        <p>
            <v-btn @click="removeLoco(index)" color="warning">Remove</v-btn>
        </p>
    </div>
</template>
<script>
    export default {
        props: ['loco']
    }
</script>
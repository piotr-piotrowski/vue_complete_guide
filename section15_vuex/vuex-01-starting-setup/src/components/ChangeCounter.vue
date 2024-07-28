<template>
    <button @click="inc">Add 2</button>
    <button @click="increase({value: 11})">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        // addOne() {
        //     // this.$store.commit('increase', { value: 10 });
        //     this.$store.dispatch({
        //         type: 'increase', 
        //         value: 10
        //     });
        // },
        // ...mapActions(['increment', 'increase']),
        ...mapActions({
            inc: 'increment',
            increase: 'increase'
        }),
    }
}
</script>
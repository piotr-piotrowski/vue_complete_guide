<template>
    <button @click="addOne">Add 2</button>
</template>

<script>
export default {
    methods: {
        addOne() {
            // this.$store.commit('increase', { value: 10 });
            this.$store.commit({
                type: 'increase', 
                value: 10
            });
        },
    }
}
</script>
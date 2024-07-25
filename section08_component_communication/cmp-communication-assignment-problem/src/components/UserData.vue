<template>
    <h2>UserData component</h2>
    <form @submit.prevent="sendData">
        <div><input type="text" v-model="form.username"></div>
        <div><input type="text" v-model="form.age"></div>
        <div><button type="submit">Submit</button></div>
    </form>
</template>

<script>
export default {
    emits: ['user-data-changed'],
    data() {
        return {
            form: {
                username: '',
                age: ''
            }
        }
    },
    methods: {
        sendData() {
            this.$emit('user-data-changed', this.form);
        }
    }
}
</script>
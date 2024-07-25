<template>
    <form @submit.prevent="submitForm">
        <div><label for="user-id">User ID: </label><input type="text" id="user-id" v-model="form.id"></div>
        <div><label for="user-name">Username: </label><input type="text" id="user-name" v-model="form.name"></div>
        <div><label for="user-phone">User phone: </label><input type="tel" id="user-phone" v-model="form.phone"></div>
        <div><label for="user-email">User email: </label><input type="email" id="user-email" v-model="form.email"></div>
        <div><button type="submit">Submit</button></div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                id: '',
                name: '',
                phone: '',
                email: '',
            }
        }
    },
    emits: ['add-contact'],
    methods: {
        submitForm() {
            this.$emit('add-contact', this.form);
        }
    }
}
</script>
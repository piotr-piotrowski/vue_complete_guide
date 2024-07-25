<template>
    <h2>App component</h2>
    <active-user :username="username" :age="age"></active-user>
    <user-data @user-data-changed="changeActiveUser"></user-data>
</template>

<script>
export default {
    data() {
        return {
            username: 'Jan Kowalski',
            age: 125
        }
    },
    methods: {
        changeActiveUser(form) {
            console.log(form);
            this.username = form.username;
            this.age = form.age;
        }
    }
}
</script>
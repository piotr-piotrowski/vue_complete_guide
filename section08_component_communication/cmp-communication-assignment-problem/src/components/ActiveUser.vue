<template>
    <h2>ActiveUser component</h2>
    <h2>Username: {{ username }}</h2>
    <h3>Age: {{ age }}</h3>
</template>

<script>
export default {
    props: ['username', 'age'],
    data() {
        return {

        }
    },
}
</script>
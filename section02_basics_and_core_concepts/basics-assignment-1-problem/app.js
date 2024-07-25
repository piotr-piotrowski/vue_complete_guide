const app = Vue.createApp({
    data() {
        return {
            name: 'Piotr',
            age: 49,
            imageUrl: 'https://picsum.photos/200/300',
        };
    },
    methods: {
        favoriteNumber() {
            return "" + Math.random();
        }
    }
});

app.mount('#assignment');
const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'jank',
                    name: 'Jan',
                    phone: '3434332',
                    email: 'test@test.com'
                },
                {
                    id: 'piotrp',
                    name: 'Piotr',
                    phone: '123456',
                    email: 'test1@test.com'
                }
            ]
        }
    },

});

app.component('friend-contact', {
    template: `
    <li v-for="friend in friends" :key="friend.id">
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails(friend.id)">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {
                    id: 'jank',
                    name: 'Jan',
                    phone: '3434332',
                    email: 'test@test.com'
                },
            ]
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');
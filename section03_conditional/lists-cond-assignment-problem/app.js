const app = Vue.createApp({
    data() {
        return {
            task: '',
            tasks: [],
            visibility: true,
        }
    },
    computed: {
        caption() {
            return this.visibility ? 'Hide' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.task);
            this.task = '';
        },
        toggleList() {
            this.visibility = !this.visibility;
        }
    }
});

app.mount('#assignment');
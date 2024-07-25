const app = Vue.createApp({
    data() {
        return {
            value: 0
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(() => {
                that.value = 0;
            }, 5000);
        }
    },
    computed: {
        result() {
            if (this.value < 37) {
                return 'Not there yet!';
            } else if (this.value > 37) {
                return 'Too much!';
            } else {
                return this.value;
            }
        }
    },
    methods: {
        add(value) {
            this.value += value;
        }
    }

});

app.mount('#assignment');
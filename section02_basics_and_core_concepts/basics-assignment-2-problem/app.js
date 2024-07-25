const app = Vue.createApp({
    data() {
        return {
            msg: '',
            msg1: '',
        };
    },
    methods: {
        showAlert() {
            alert('Any alert!');
        },
        keyDownOnInput(event) {
            this.msg = event.target.value;
        },
        keyDownOnInput1(event) {
            this.msg1 = event.target.value;
        },
        keyUpEnter(event) {
            this.msg1 = event.target.value;
        }
    }
});

app.mount('#assignment')
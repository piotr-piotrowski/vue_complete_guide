const app = Vue.createApp({
    data() {
        return {
            pClass: '',
            pState: true,
            activeClass: '',
            classVisibility: '',
            backgroundColor: '',
        };
    },
    computed: {
    },
    watch: {
        pClass(val) {
            if (val === 'user1') {
                this.activeClass = val;
            } else if (val === 'user2') {
                this.activeClass = val;
            } else {
                this.activeClass = '';
            }
        }
    },
    methods: {
        toggleP() {
            this.pState = !this.pState;
            if (this.pState) {
                this.classVisibility = 'visible';
            } else {
                this.classVisibility = 'hidden';
            }
        }
    }
});

app.mount('#assignment')
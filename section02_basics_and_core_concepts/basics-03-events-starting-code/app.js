const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement() {
      this.counter = this.counter - 5;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName; 
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');

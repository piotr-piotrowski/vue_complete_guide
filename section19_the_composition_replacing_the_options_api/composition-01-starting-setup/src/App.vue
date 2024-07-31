<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
// import { ref } from 'vue';
import { reactive, ref, isRef, isReactive, toRefs } from 'vue';

export default {
  setup() {
    // ref for any value
    // const uName = ref('Maximilian');
    const uAge = ref(31);
    // reactive for objects
    const user = reactive({
      name: 'Maximilian',
      age: 31
    });

    console.log(isRef(uAge.value));
    console.log(isRef(uAge));
    console.log(isReactive(user.name), user.age);
    console.log(isReactive(user));

    setTimeout(function () {
      // for distinct values
      // uName.value = 'Max';
      // uAge.value = 32;
      // for ref
      // user.value.name = 'Max';
      // user.value.age = 32;
      // for reactive (object)
      user.name = 'Max';
      user.age = 32;
    }, 2000);

    const userRefs = toRefs(user);

    // return { userName: user.value.name, age: user.value.age, user: user };
    // return { user: user };
    return { user: user, userName: userRefs.name, age: userRefs.age };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
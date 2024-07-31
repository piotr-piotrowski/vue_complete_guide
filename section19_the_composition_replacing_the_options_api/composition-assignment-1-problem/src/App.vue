<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="courseGoal.isVisible">{{ courseGoal.val }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleCourseGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
// Separete refs
// import { ref } from 'vue';

// const courseGoal = ref('Vue Mastering');
// const courseGoalVisible = ref(true);

// function toggleCourseGoal() {
//   courseGoalVisible.value = !courseGoalVisible.value;
// }

// Ref object
// import { ref } from 'vue';

// const courseGoal = ref({val: 'Vue Mastering', isVisible: true});

// function toggleCourseGoal() {
//   courseGoal.value.isVisible = !courseGoal.value.isVisible;
// }

// Reactive object
import { reactive } from 'vue';

const courseGoal = reactive({val: 'Vue Mastering', isVisible: true});

function toggleCourseGoal() {
  courseGoal.isVisible = !courseGoal.isVisible;
}
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 3rem;
  text-align: center;
}
</style>
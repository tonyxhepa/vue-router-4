<template>
  <h1>Course Name: {{ course.name }}</h1>
  <router-link to="/courses/1">Course 1</router-link>
  <router-link to="/courses/2">Course 2</router-link>
  <router-link to="/courses/3">Course 3</router-link>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

export default {
  setup() {
    const route = useRoute();
    const course = ref();

    // fetch the user information when params change
    watch(
      () => route.params.id,
      () => {
        getCourse();
      }
    );

    const courses = [
      { id: 1, name: "Laravel" },
      { id: 2, name: "Vuejs" },
      { id: 3, name: "Tailwind css" },
    ];
    function getCourse() {
      return (course.value = courses.find(
        ({ id }) => id === parseInt(route.params.id)
      ));
    }

    getCourse();

    return { course };
  },
};
</script>

<style>
</style>
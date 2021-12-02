<template>
  <div>
    <h1 class="text-2xl text-green-700 p-8">
      Course Name: <span class="text-red-500">{{ course.name }}</span>
    </h1>
    <router-link to="/courses/1" class="p-2 m-2 bg-green-300 rounded"
      >Course 1</router-link
    >
    <router-link to="/courses/2" class="p-2 m-2 bg-green-300 rounded"
      >Course 2</router-link
    >
    <router-link to="/courses/3" class="p-2 m-2 bg-green-300 rounded"
      >Course 3</router-link
    >
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: ["cid"],
  setup(props) {
    const course = ref();

    // fetch the user information when params change
    watch(
      () => props.cid,
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
        ({ id }) => id === parseInt(props.cid)
      ));
    }

    getCourse();

    return { course };
  },
};
</script>

<style>
</style>
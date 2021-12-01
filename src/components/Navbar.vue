<template>
  <nav class="bg-gray-300 p-2 space-x-3 mb-8">
    <router-link to="/" active-class="p-2 rounded bg-gray-600 text-gray-200"
      >Vuejs</router-link
    >
    <router-link
      to="/laravel"
      active-class="p-2 rounded bg-blue-400 text-blue-100"
      >Laravel</router-link
    >
    <router-link
      to="/tailwind"
      active-class="p-2 rounded bg-indigo-500 text-indigo-200"
      >Tailwind</router-link
    >
  </nav>
</template>

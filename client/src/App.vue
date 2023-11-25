<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg d-block">
    <div class="container-md d-block pt-2 border-bottom border-danger-subtle">
      <h1>Link Up: Connect and Engage</h1>
      <p>Building Connections, Fostering Engagement</p>
    </div>
    <div class="container-md" data-bs-theme="dark">
      <router-link class="navbar-brand" to="/">Home</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-nav collapse navbar-collapse" id="navbarSupportedContent">
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/games">Games</router-link>
        <div class="ms-auto">
          <div class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Account
            </router-link>

            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/login">Login</router-link>
              <router-link class="dropdown-item" to="/signup">Registration</router-link>
            </div>

          </div>
        </div>
      </div>
    </div>
  </nav>
  <RouterView class="container-md pt-5" />
</template>

<style scoped>
.navbar{
  background-color: rgba(152,42,203,.2);
  border-color: blueviolet;
  color: black;
}
</style>

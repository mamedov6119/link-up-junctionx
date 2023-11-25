<script setup>
import BirdGame from '../components/GappyBird.vue'
import ProfileDetails from '../components/ProfileDetails.vue'
</script>

<template>
  <div>
    <h2>Game: Quizzes</h2>
    <hr />

    <div class="row">
      <div class="col-8">
        <BirdGame class="border" style="min-height: 500px;" />
      </div>
      <div class="col-4 border">
        <ProfileDetails />
      </div>
    </div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

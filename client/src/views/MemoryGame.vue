<script setup>
import MemoryGame from '../components/MemoryGame.vue'
import ProfileDetails from '../components/ProfileDetails.vue'

</script>

<template>
  <div>
    <h2>Game: Memory game</h2>
    <hr />

    <div class="row">
      <div class="col-8">
        <MemoryGame class="border" />
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

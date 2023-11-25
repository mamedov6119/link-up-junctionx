<script setup>
import GameInfo from '../components/GameInfo.vue';
</script>

<template>
  <div>
    <h2>Games</h2>
    <hr />

    <div class="row">
      <GameInfo
        title="Memory game"
        rewards="15 points"
        desc="In this game, you will be presented with a series of cards. The aim is to find all the matching pairs of cards. Game ends when all pairs are found or when the time runs out."
        link="/games/memory"
      />
      <GameInfo
        title="Quiz"
        rewards="0-15 points"
        desc="In this game, you will be presented with a series of questions. The aim is to answer all the questions correctly. Game ends when all questions are answered or when the time runs out."
        link="/games/quiz"
      />
      <GameInfo
        title="GappyBird"
        rewards="0+ points"
        desc="GappyBird"
        link="/games/gappybird"
      />
    </div>
  </div>
</template>

<style>
</style>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  rewards: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="col-6">
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          Rewards: {{ rewards }}
        </h6>
        <p class="card-text">
          {{ desc }}
        </p>
        <router-link style="background-color: #77249E; border-color: blueviolet;" class="btn btn-primary px-5" :to="link">Play</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card{
  background-color: rgba(152,42,203,.2);
}

</style>


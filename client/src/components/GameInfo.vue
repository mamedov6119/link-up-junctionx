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
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          Rewards: {{ rewards }}
        </h6>
        <p class="card-text">
          {{ desc }}
        </p>
        <router-link class="btn btn-primary px-5" :to="link">Play</router-link>
      </div>
    </div>
  </div>

</template>


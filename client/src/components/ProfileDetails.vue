<script>
import { ref, onMounted } from 'vue';

export default {
  components: {},
  setup() {
    const user = ref(null);
    const getUser = async () => {
      const res = await fetch('/api/profile');
      if (res.ok) {
        user.value = await res.json();
      }
    };
    onMounted(getUser);
    return {
      user,
      getUser
    };
  }
};
</script>

<template>
    <div v-if="user">
        <h3>Phone *{{ user.phone.slice(-4) }}</h3>
        <p>
            Available money: {{ user.money }} Ft. <br>
            Current packages: {{ user.packages.length }}
        </p>
        <ul>
            <li v-for="p in user.packages.slice(0, 3)" :key="p.id">
                {{ p.name }} - {{ p.price }} Ft.
            </li>
        </ul>
    </div>
</template>


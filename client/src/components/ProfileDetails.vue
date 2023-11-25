<script setup>

let short = '1234';
let money = 1000;
let packages = [
    { id: 1, name: 'Basic', price: 100 },
    { id: 2, name: 'Premium', price: 200 },
    { id: 3, name: 'Ultimate', price: 300 }
];

</script>

<template>
    <h3>Profile *{{ short }}</h3>
    <p>
        Available money: {{ money }} Ft. <br>
        Current packages: {{ packages.length }}
    </p>
    <ul>
        <li v-for="p in packages.slice(0, 3)" :key="p.id">
            {{ p.name }} - {{ p.price }} Ft.
        </li>
    </ul>
</template>


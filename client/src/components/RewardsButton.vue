<script setup>
const props = defineProps({
    amount: {
        type: Number,
        required: true
    }
});

let collected = false;
async function collect() {
    if (collected) {
        alert("You have already collected your reward!");
        return;
    }
    let amount = props.amount;
    fetch("/api/operations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount })
    })
    .then(res => {
        if (res.ok) {
            alert("You have collected your reward!");
            collected = true;
        }
    });
}

</script>

<template>
    <div v-if="amount > 0">
        <p class="m-0">You can collect your reward here</p>
        <button @click="collect" class="btn btn-success" :disabled="collected">Collect ({{ amount }} pts.)</button>
    </div>
</template>

<style scoped>
</style>


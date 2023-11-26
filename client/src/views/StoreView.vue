<template>
    <div>
        <h2>Internet Package Store</h2>
        <hr>
        <ProfileDetails class="text-center" />
        <hr>
        <div class="card card-body mt-3" v-for="(pack, index) in internetPackages" :key="index">
            <h3>{{ pack.name }}</h3>
            <p>{{ pack.description }}</p>
            <p>Price: {{ pack.price }} Points</p>
            <button @click="buyPackage(index)">Buy Package</button>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import ProfileDetails from '../components/ProfileDetails.vue';

// Function to initialize the lastPurchaseTime property
const initializePackages = () => {
    return [
        { name: 'Basic Plan', description: 'Suitable for light usage', price: 50, lastPurchaseTime: 0 },
        { name: 'Standard Plan', description: 'Ideal for regular usage', price: 100, lastPurchaseTime: 0 },
        { name: 'Premium Plan', description: 'Unlimited high-speed internet', price: 200, lastPurchaseTime: 0 },
    ];
};

// Sample data for internet packages
const internetPackages = ref(initializePackages());

// Function to handle buying packages
const buyPackage = (index) => {
    const selectedPackage = internetPackages.value[index];

    // Check if the cooldown period has passed (1 minute)
    const currentTime = new Date().getTime();
    const cooldownPeriod = 1 * 60 * 1000; // 1 minute in milliseconds

    if (currentTime - selectedPackage.lastPurchaseTime >= cooldownPeriod) {
        // Check if the user has enough points
        if (selectedPackage.price <= userPoints.value) {
            // Deduct points, update the last purchase time, and provide the internet package
            userPoints.value -= selectedPackage.price;
            selectedPackage.lastPurchaseTime = currentTime;

            alert(`Congratulations! You've purchased the ${selectedPackage.name} package. Your new balance: ${userPoints.value} points.`);
        } else {
            alert("You don't have enough points to buy this package.");
        }
    } else {
        // Display a message indicating that the user needs to wait before buying the same package again
        const remainingTime = Math.ceil((cooldownPeriod - (currentTime - selectedPackage.lastPurchaseTime)) / 1000);
        alert(`Please wait ${remainingTime} seconds before buying the ${selectedPackage.name} package again.`);
    }
};

// Sample user points (replace with actual user points)
const userPoints = ref(300);
</script>
  
<style scoped>
.internet-package {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
}

button {
    cursor: pointer;
    background-color: rgb(119, 36, 158);
    color: white;
    border: none;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 4px;
}

button:hover {
    background-color: white;
    color: black;
    border: 1px solid #4caf50;
}
</style>
  
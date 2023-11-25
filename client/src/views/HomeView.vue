<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>



    <section class="sp_selection">
      <h2>Welcome to our Innovative Telecom Experience!</h2>
      <p>Join us in creating a unique and engaging environment where young adults connect with telecom services in a fun
        and rewarding way.</p>
      <p>Explore our challenges, earn badges, and be part of an exclusive community!</p>
      <RouterLink to="/signup" class="signupbutton">Get Started</RouterLink>
    </section>

    <section class="general_section">
      <h2>Why Participate?</h2>
      <ul class="accent">
        <li>Unlock exclusive rewards and offers</li>
        <li>Participate in exciting games and quizzes</li>
        <li>Connect with like-minded individuals</li>
        <li>Shape the future of telecom engagement</li>
      </ul>
    </section>

    <section class="general_section">
      <h2>How It Works</h2>
      <ul class="accent">
        <li>Sign up and create your profile</li>
        <li>Explore challenges and earn badges</li>
        <li>Engage in games, quizzes, and community activities</li>
        <li>Enjoy exclusive rewards and offers</li>
      </ul>
    </section>

    <section class="general_section">
      <h2>Get in Touch</h2>
      <p>Have questions or suggestions? Contact us!</p>
      <!-- mail to -->
      <a href="mailto:test@gmail.com">test@gmail.com</a>
    </section>
  </main>
</template>


<style scoped>

.sp_selection{
  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  font-family: 'Roboto', sans-serif;
}
section{
  font-family: 'Roboto', sans-serif;
}
.general_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  font-family: 'Roboto', sans-serif;
  background-color: rgba(152, 42, 203, 0.2); /* Half translucent background */

  border-radius: 5rem;
  padding: 2rem;
  color: black;
  width:50%;
  overflow: hidden;
  margin-left: 25%;
}
.accent{
color: #77249E;
font-size: 1.2rem;
}
.secondary{
  color:  #982ACB;
}
</style>



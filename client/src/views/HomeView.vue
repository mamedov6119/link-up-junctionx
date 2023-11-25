<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>


    <section>
      <h2>Welcome to our Innovative Telecom Experience!</h2>
      <p>Join us in creating a unique and engaging environment where young adults connect with telecom services in a fun
        and rewarding way.</p>
      <p>Explore our challenges, earn badges, and be part of an exclusive community!</p>
      <RouterLink to="/signup" class="signupbutton">Get Started</RouterLink>
    </section>

    <section>
      <h2>Why Participate?</h2>
      <ul>
        <li>Unlock exclusive rewards and offers</li>
        <li>Participate in exciting games and quizzes</li>
        <li>Connect with like-minded individuals</li>
        <li>Shape the future of telecom engagement</li>
      </ul>
    </section>

    <section>
      <h2>How It Works</h2>
      <ol>
        <li>Sign up and create your profile</li>
        <li>Explore challenges and earn badges</li>
        <li>Engage in games, quizzes, and community activities</li>
        <li>Enjoy exclusive rewards and offers</li>
      </ol>
    </section>

    <section>
      <h2>Get in Touch</h2>
      <p>Have questions or suggestions? Contact us!</p>
      <!-- mail to -->
      <a href="mailto:test@gmail.com">test@gmail.com</a>
    </section>
  </main>
</template>



<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <header>
      <h1>Link Up: Connect and Engage</h1>
      <p>Building Connections, Fostering Engagement</p>
    </header>

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


<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
  color: black;
}

header {
  background-color: #333;
  color: #fff;
  padding: 1em;
  text-align: center;
}

section {
  max-width: 800px;
  margin: 2em auto;
  padding: 1em;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

h2 {
  color: #333;
}

p {
  color: #666;
}

button {
  background-color: #4285f4;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #2d76e8;
}

.signupbutton {
  background-color: #4285f4;
  color: #fff;
  border: none;
  margin-top: 20px !important;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
}
</style>
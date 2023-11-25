<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>

  <main>
    
    <section class="main container-md text-center">
      <h2>Welcome to our Innovative Telecom Experience!</h2>
      <p>Join us in creating a unique and engaging environment where young adults connect with telecom services in a fun
        and rewarding way.</p>
      <p>Explore our challenges, earn badges, and be part of an exclusive community!</p>
      <RouterLink to="/signup" class="signupbutton">Get Started</RouterLink>
    </section>


    <div class="d-flex justify-content-center">
      <div class="custom_bg col-7 text-center">
        <section class="card card-body mt-4">
          <h2>Why Participate?</h2>
          <ul class="accent">
            <li>Unlock exclusive rewards and offers</li>
            <li>Participate in exciting games and quizzes</li>
            <li>Connect with like-minded individuals</li>
            <li>Shape the future of telecom engagement</li>
          </ul>
        </section>
    
        <section class="card card-body mt-4">
          <h2>How It Works</h2>
          <ul class="accent">
            <li>Sign up and create your profile</li>
            <li>Explore challenges and earn badges</li>
            <li>Engage in games, quizzes, and community activities</li>
            <li>Enjoy exclusive rewards and offers</li>
          </ul>
        </section>
    
        <section class="card card-body mt-4">
          <h2>Get in Touch</h2>
          <p>Have questions or suggestions? Contact us!</p>
          <!-- mail to -->
          <a href="mailto:test@gmail.com">test@gmail.com</a>
        </section>
      </div>
    </div>
  </main>
</template>


<style scoped>

section:not(.main) {
  border-radius: 5rem;
  padding: 2rem;
  color: black;
  background-color: rgba(152,42,203,.2);
}

.accent{
color: #77249E;
font-size: 1.2rem;
}
.secondary{
  color:  #982ACB;
}

ul {
  list-style-type: square;
  text-align: left;
}

.spacer{
  aspect-ratio: 960/300;
  width: 100% ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.layer1{
  background-image: url(../assets/wave-haikei.svg);
} 

</style>



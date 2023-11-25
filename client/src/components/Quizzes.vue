<script setup>

// extract a random question, options and answer from the questions.json
// file
import { ref, computed } from 'vue';
import quizzes from './questions.json';

let data = JSON.parse(JSON.stringify(quizzes));

let quizzesArr = data.quizzes;

let selectedOptions = ref({});


// select 3 random questions
let randomQuestions = computed(() => {
    let questions = [];
    let randomIndices = [];
    while (randomIndices.length < 3) {
        let randomIndex = Math.floor(Math.random() * quizzesArr.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
            questions.push(quizzesArr[randomIndex]);
        }
    }
    return questions;
});

console.log(randomQuestions.value);


// quizzesArr.forEach(quiz => {
//     console.log('Question:', quiz.question);
//     console.log('Options:', quiz.options);
//     console.log('Answer:', quiz.answer);
// });



</script>

<template>
    <div class="quiz-card" v-for="(quiz, index) in randomQuestions" :key="index">
        <h2>{{ quiz.question }}</h2>
        <ul>
            <li v-for="(option, index) in quiz.options" :key="index">
                <input type="radio" :name="'option' + quiz.id" :id="'option' + index" :value="option"
                    v-model="selectedOptions[quiz.id]">
                <label :for="'option' + index">{{ option }}</label>
            </li>
        </ul>
    </div>
</template>
  
  
<style scoped>
.quiz-card {
    border: 1px solid #000;
    padding: 20px;
    margin-bottom: 20px;
}

li {
    list-style: none;
}
</style>
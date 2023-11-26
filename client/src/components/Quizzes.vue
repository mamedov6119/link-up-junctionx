<template>
    <div>
        <div v-for="(question, index) in randomQuestions" :key="index" class="quiz-card">
            <h3>{{ question.question }}</h3>
            <ul>
                <li v-for="(option, optionIndex) in question.options" :key="optionIndex">
                    <label :class="{
                        'correct': quizSubmitted && optionIndex === question.answer,
                        'incorrect': quizSubmitted && selectedOptions[index] === optionIndex && optionIndex !== question.answer
                    }">
                        <input type="radio" :name="'quiz' + index" :value="optionIndex" v-model="selectedOptions[index]"
                            :disabled="quizSubmitted" />
                        {{ option }}
                    </label>
                </li>
            </ul>
        </div>
        <div class="text-center">
            <button @click="submitQuiz" class="btn btn-success w-50" :disabled="quizSubmitted">Submit Quiz</button>
        </div>
        <div v-if="quizSubmitted" class="result">
            <p>
                {{ correctCount === 3 ? 'Congratulations! All answers are correct.' : `You got ${correctCount} out of 3
                questions correct.` }}
            </p>
            <RewardsButton :amount="correctCount * 5" />
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';
import quizzes from './questions.json';

let data = JSON.parse(JSON.stringify(quizzes));

let quizzesArr = data.quizzes;

let selectedOptions = ref({});
let quizSubmitted = ref(false);
let correctCount = ref(0);

// select 3 random questions but make sure they are not the same
let randomQuestions = computed(() => {
    let questions = [];
    while (questions.length < 3) {
        let randomIndex = Math.floor(Math.random() * quizzesArr.length);
        if (!questions.includes(quizzesArr[randomIndex])) {
            questions.push(quizzesArr[randomIndex]);
        }
    }
    return questions;
});

const submitQuiz = () => {
    // Check if answers are stored
    if (!data.answers) {
        data.answers = [];
    }

    // Store the selected options indices
    const selectedAnswers = Object.values(selectedOptions.value);
    data.answers.push(selectedAnswers);

    // Compare with correct answers
    const correctAnswers = randomQuestions.value.map(question => question.answer);
    correctCount.value = selectedAnswers.reduce(
        (count, selected, index) => (selected === correctAnswers[index] ? count + 1 : count),
        0
    );

    quizSubmitted.value = true;
};

</script>
  
<style scoped>
.quiz-card {
    border: 1px solid #000;
    padding: 20px;
    margin-bottom: 20px;
}

.correct {
    color: green;
    font-weight: bold;
}

.incorrect {
    color: red;
    font-weight: bold;
}

li {
    list-style: none;
}

.result {
    margin-top: 20px;
}
</style>
  
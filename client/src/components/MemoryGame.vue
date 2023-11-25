<script setup>
import { ref, computed } from 'vue';

let values = [
    '3GB',
    '5GB',
    '10GB',
    '15GB',
    '20GB',
    '25GB',
    '30GB',
    '35GB',
    '40GB',
    '45GB',
    '50GB',
    '55GB',
    '60GB',
    '65GB',
    '70GB',
    '75GB',
    '80GB',
    '85GB',
    '90GB',
    '95GB',
    '100GB',
    '105GB'
]
let cards = ref([]);

// randomize the values
values.sort(() => Math.random() - 0.5);

let idctr = 0;
values.slice(0, 10).forEach(v => {
    // add tp cards ref
    let card = {
        id: idctr++,
        prize: v,
        isFlipped: false,
        isMatched: false
    };
    cards.value.push(card);
    card.id = idctr++;
    cards.value.push({ ...card });
});

let reward = cards.value[0].prize;

let flippedCards = ref([]);
let matchedPairs = ref(0);

let shuffleCards = () => {
    cards.value.sort(() => Math.random() - 0.5);
};

let flipCard = (card) => {
    if (flippedCards.value.length < 2 && !card.isFlipped) {
        card.isFlipped = true;
        flippedCards.value.push(card);
        if (flippedCards.value.length === 2) {
            checkMatch();
        }
    }
};

let checkMatch = () => {
    if (flippedCards.value[0].prize === flippedCards.value[1].prize) {
        flippedCards.value[0].isMatched = true;
        flippedCards.value[1].isMatched = true;
        matchedPairs.value++;
        flippedCards.value = [];
    } else {
        setTimeout(() => {
            flippedCards.value[0].isFlipped = false;
            flippedCards.value[1].isFlipped = false;
            flippedCards.value = [];
        }, 1000);
    }
};

let isGameOver = computed(() => {
    return matchedPairs.value === cards.value.length / 2;
});

shuffleCards();
</script>

<template>
    <div v-if="!isGameOver" class="game-board">
        <div v-for="card in cards" :key="card.id" class="card" @click="flipCard(card)">
            <div class="card-inner" :class="{ flipped: !card.isFlipped, matched: card.isMatched }">
                <div class="card-front"></div>
                <div class="card-back">{{ card.prize }}</div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Congrats! You won {{ reward }} </p>
    </div>
</template>

<style scoped>
.game-board {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    max-width: 700px;
}

.card {
    width: 100px;
    height: 100px;
    position: relative;
    perspective: 1000px;
}

.card-inner {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
}

.card-inner.flipped {
    transform: rotateY(180deg);
}


.card-inner.matched {
    pointer-events: none;
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.card-front {
    background: #ccc;
    /* Front face styling */
}

.card-back {
    background: #fff;
    /* Back face styling */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
}
</style>

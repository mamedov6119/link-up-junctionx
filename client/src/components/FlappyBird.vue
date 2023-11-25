<template>
    <div>
        <div v-if="!gameStarted">
            <button style="display: flex; justify-content: center; align-items: center;" @click="startGame">Start
                Game</button>
        </div>
        <div v-else>
            <div style="display: flex; justify-content: center; align-items: center; " id="game" @click="jump"
                :class="{ 'game-over': gameOver }">
                <div class="bird" :style="{ top: `${birdTop}px` }"></div>
                <div class="pipe" v-for="(pipe, index) in pipes" :key="index"
                    :style="{ left: `${pipe.left}px`, top: `${pipe.top}px`, height: `${pipe.height}px` }"></div>

            </div>
            <div style="font-size: xx-large; " v-if="gameOver">Game Over! Your score is: {{ points }}
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            birdTop: 200,
            birdVelocity: 0,
            gravity: 0.5,
            pipes: [],
            gameOver: false,
            points: 0,
            gameStarted: false,
            gameLoop: null,
            pipeInterval: null
        };
    },
    methods: {
        startGame() {
            this.gameStarted = true;
            this.gameOver = false;
            this.birdTop = 200;
            this.birdVelocity = 0;
            this.pipes = [{ left: 500, top: 0, height: 200 }];
            this.points = 0;
            this.gameLoop = setInterval(this.updatePosition, 20);
            this.pipeInterval = setInterval(this.addPipe, 2000);
        },
        jump() {
            this.birdVelocity = -8;
        },
        updatePosition() {
            this.birdVelocity += this.gravity;
            this.birdTop += this.birdVelocity;
            this.pipes.forEach(pipe => {
                pipe.left -= 2;

                if (
                    this.birdTop + 20 > pipe.top &&
                    this.birdTop < pipe.top + pipe.height &&
                    pipe.left < 70 &&
                    pipe.left + 50 > 30
                ) {
                    this.gameOver = true;
                    this.endGame();
                }

                if (pipe.left === 30) {
                    this.points++;
                }
            });
            if (this.birdTop >= 380 || this.birdTop <= 0) {
                this.gameOver = true;
                this.endGame();
            }
        },
        addPipe() {
            let height = Math.random() * 100 + 100;
            this.pipes.push({ left: 500, top: 0, height: height });
            this.pipes.push({ left: 500, top: height + 100, height: 400 - height });
        },
        endGame() {
            clearInterval(this.gameLoop);
            clearInterval(this.pipeInterval);
        }
    },
    mounted() { }
};
</script>
  
<style scoped>
#game {
    position: relative;
    height: 420px;
    width: 600px;
    border: 1px solid black;
    overflow: hidden;
}

.bird {
    position: absolute;
    width: 20px;
    height: 20px;
    background: red;
    left: 50px;
}

.pipe {
    position: absolute;
    width: 50px;
    background: green;
}

.game-over {
    display: none;
}
</style>
  
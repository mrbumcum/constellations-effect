const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'white';



class Particle {
    constructor(effect) {
        this.effect = effect;
        this.x = Math.random() * this.effect.width;
        this.y = Math.random() * this.effect.height;
        this.radius = 15;
    }
}

class Effect {
    constructor(canvas) {
        this.canvas = canvas;
        this.height = this.canvas.height;
        this.width = this.canvas.width;
        this.particlesArray = [];
    }

}

function animate() {

}
//collaborating with: Richard, Anthony, Daisy, Kye, Viviana, Josh



class Ninja {
    constructor(name, health = 90, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`The ninja's name is ${this.name}`)
    }

    showStats() {
        console.table(this)
        // console.log(`[ name: ${this.name}, strength: ${this.strength}, speed: ${this.speed}, health: ${this.health}`]) 
    }

    drinkSake() {
        this.health += 10
        console.log(`My health is now ${this.health}! I am unstoppable!!!!!`)
    }

}


// ninja1.sayName();
const ninja1 = new Ninja("Hyabusa");

// ninja1.showStats();
// ninja1.drinkSake();


class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10)
        // this.health=200, 
        // this.speed = 10, 
        // this.strength = 10, 
        this.wisdom = 10
    }


    speakWisdom() {
        super.drinkSake()
        console.log("A wise message.")
    }
}

const superSensei = new Sensei("Chicken");
superSensei.speakWisdom()

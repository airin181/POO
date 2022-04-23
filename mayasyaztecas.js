class Warrior {
    constructor(life, power) {
        this.life = life;
        this.attack = power;
    }
    defend(damage) {
        this.life = this.life - damage;
        console.log(this.life)
    }
    /* attack(attack){
        
    } */
}


class Maya extends Warrior {
    constructor(life, power) {
        super(life, power);
    }
    drinkColaCao() {
        this.life = this.life + 10;
        console.log(`guerrero maya tiene ${this.life}`)
    }
}

const mayaWarrior = new Maya(100,30)


class Aztec extends Warrior {
    constructor(life, power) {
        super(life, power)
    }
    drinkNesquik() {
        this.life = this.life + 10
        console.log(`guerrero azteca tiene ${this.life}`)
    }
}

const aztecWarrior = new Aztec(60,10)



//Maya bebe Cola Cao
aztecWarrior.drinkNesquik()
mayaWarrior.drinkColaCao()

//Maya ataca a azteca. Azteca se defiende.

aztecWarrior.defend(mayaWarrior.attack)
console.log(`Azteca  tiene ${aztecWarrior.life} de vida`)

//Azteca ataca a Maya. Maya se defiende.

mayaWarrior.defend(aztecWarrior.attack)
console.log(`Maya  tiene ${mayaWarrior.life} de vida`)
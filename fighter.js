// Game Fighter
// author Serhii Havryliuk

class Fighter {
    constructor(name, attack, hp) {
        this.name = name;
        this.attack = attack;
        this.hp = hp;
        this.wins = 0;
        this.loses = 0;
    }

    // Get fighter name
    getFightName() {
        return this.name
    }

    // Block. This function either returns true or false (random). If returned value is true the incoming attack is blocked.
    isBlock() {
        return Math.random() < 0.5;
    }

    // Get fighter stats. This function returns an object with properties of fighter (eg. name, attack, HP).
    getFighterStats() {
        return {
            name: this.name,
            attack: this.attack,
            hp: this.hp
        };
    }

    // Get combat history. Return an object witch contains information about wins and loses of the fighter.
    getCombatHistory() {
        return `Combat History: wins ${this.wins}, loses: ${this.loses}`
    }

    // Show Fighter Result. Return all information about fighter: name, attack, hp, wins and loses.
    showFighterResult() {
        return `
         Fighter ${this.name} 
         - Combat stats: { wins: ${this.wins}, loses: ${this.loses} }
         - Properties: { name: ${this.name}, attack: ${this.attack}, hp: ${this.hp} }   
        `
    }

    // This function should return ‘true’ if the defender is damaged, otherwise false (e.g. if attack was blocked).
    fight(fighter_2) {

        // если атака отклонена
        if (fighter_2.isBlock()) {
            console.log("Returns false, fighter2 block damage of fighter1, HP remains the same ")
            return false;
        } else {
            // если атака удалась
            if (this.attack >= fighter_2.getFighterStats().hp) {
                fighter_2.hp -= this.attack; // уменьшаем хп

                // чтобы не было отрицательного hp при проигрыше
                if (fighter_2.hp < 0) {
                    fighter_2.hp = 0;
                }
                console.log("If true, fighter 1 dealt damage to fighter 2 (боец 2 проиграл)");

            } else {
                console.log("fighter_2  проиграл");
            }

            this.wins++; // обновляем кол-во побед
            fighter_2.loses++; // обновляем кол-во проигрышей

            console.log("Returns true, fighter1 deal damage to fighter2, than fighter2 will lose HP equal to damage dealt")
            return true;
        }
    }
}

// function ‘fighter’ which takes an object with properties of a fighter and returns interface with fighter methods
function fighter(newFighter) {
    return new Fighter(newFighter.name, newFighter.attack, newFighter.hp);
}

// show Results attacks selected fighter
function showResult(fighter) {
    console.log(fighter.showFighterResult());
}

// -------------- For testing --------------
var fighter1 = fighter({name: 'John', attack: 100, hp: 100});
var fighter2 = fighter({name: 'Kayn', attack: 50, hp: 30});
var fighter3 = fighter({name: 'Bill', attack: 40, hp: 100});

// -------------- First fight --------------
fighter1.fight(fighter2);
console.log("fighter1 ----------------");
showResult(fighter1);

console.log("fighter2 ----------------");
showResult(fighter2);

// -------------- Second fight --------------
fighter1.fight(fighter3);
console.log("fighter1 ----------------");
showResult(fighter1);

console.log("fighter3 ----------------");
showResult(fighter3);
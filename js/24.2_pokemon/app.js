function Pokemon(pokemonName,pokemonType,pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }
    Pokemon.prototype.callPokemon = function () {
        console.log(`I choose you, ${this.name}`);
    }

    Pokemon.prototype.attack=function (attackNum) {
        console.log(`${this.name} used ${this.attackList[attackNum]}`);
    }
    
   
const charazard = new Pokemon("charazard","fire",["jump","slash","flameThrower","dig"])
const picachoo = new Pokemon("picachoo","electric",["jump","slash","lightning-strike","dig"])
const Squirtile = new Pokemon("Squirtile","water",["jump","slash","Bubble"])

charazard.callPokemon()
picachoo.callPokemon()
picachoo.attack(2)




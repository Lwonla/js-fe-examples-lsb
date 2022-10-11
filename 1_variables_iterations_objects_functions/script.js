// Funktion för förfrågan till användaren om denne vill spela, returnerar antingen true eller false
let game = 0;
let runProgram;
function welcomeMsg() {
    if (game === 0) {
        runProgram = confirm("Welcome to the magic world of Utopia!\nDo you want to play?");
        if(!runProgram){
            alert("We will meet again!");
        }
        else{
            alert("Let the game ... begin.");
            game++
        }
    }
    else {
        return runProgram = confirm("You have played " + game + " times. Do you want to play again?", game++);
    }
}

// Anrop av funktion
welcomeMsg();

// här startar själva spelet, med en global iteration,
// som blir false först om spelaren så väljer; efter genomfört spel
while(runProgram) {
    // Tre objekt
    const ladyBianca = {
        name: "Lady Bianca",
        health: 100,
        experience: 3,
    };
    const masterKen = {
        name: "Master Ken",
        health: 70,
        experience: 1,
    };

    const birdMonster = {
        name: "RiffRaff",
        health: 40,
        experience: 2,
    };

    // funktion som tar ett objekt, och visar karaktärens status 
    function showCharacterStatus(character) {
        console.log(`${character.name} has ${character.health} in health left.`);
    }

    // funktion som tar två objekt, för attack och försvar 
    function attack(attacker, defender) {
        let damage;
        let fightContinues = true;

        // funktion för att ge ett random nummer vid varje attack
        function getRndDamage(max) {
            return Math.floor(Math.random() * max + 1);
        }

        // en funktion för att visa resultatet av en attack 
        function fight(attacker, defender, damage) {
            let hit = damage * defender.experience;
            console.log(`${attacker.name} attacks ${defender.name} and causes ${hit} in damage`);
            defender.health = defender.health - hit;
        }

        while (fightContinues) {
            if (defender.health > 0 && attacker.health > 0) {
                
                damage = getRndDamage(10);
                fight(attacker, defender, damage);
                showCharacterStatus(defender);

                if(defender.health <= 0) {
                    console.log(`${attacker.name} has slain ${defender.name}.`)
                    break;
                }

                if(attacker.health <= 0){
                    console.log(`${attacker.name} died a dishonorable death\n 
                and ${defender.name} stands victorious on the battlefield.`)
                    break;
                }

                damage = getRndDamage(1, 10);
                fight(defender, attacker, damage); // lägga märke till att defender/attacker bytt plats
                showCharacterStatus(attacker);
            }
        }
    }

    console.log("A monster showed up. Defend yourself!");

    // funktionen attack() tar två objekt. 
    // Det första är det som attackerar, det andra är försvararen
    // vilket syns i funktionshuvudet på rad 55
    attack(birdMonster, ladyBianca);

    if(ladyBianca.health <= 0){
        console.log(`${masterKen.name}: \"I demand revenge!\"`)
        attack(masterKen, birdMonster);
    }
    else{
        console.log(`${ladyBianca.name}: \"I need a potion now ...\"`)
    }

    runProgram = welcomeMsg();
}
console.log("Bye bye.");
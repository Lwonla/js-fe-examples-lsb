let runProgram = confirm("Welcome to the magic world of Utopia!\nDo you want to play?");

// här startar själva spelet, med en global iteration,
// som blir false först om spelaren så väljer; efter genomfört spel
while(runProgram) {
    // Två objekt
    const ladyBianca = {
        name: "Lady Bianca",
        health: 100,
        experience: 3,
    };
    const birdMonster = {
        name: "RiffRaff",
        health: 25,
        experience: 2,
    };

    // funktion som tar ett objekt, och visar karaktärens namn och hälsa 
    function showCharacterStatus(character) {
        console.log(`${character.name} has ${character.health} in health.`);
    }

    function getRndDamage(max) {
        return Math.floor(Math.random() * max + 1);
    }

    console.log(`${ladyBianca.name} is in a splended mood, with a experience of ${ladyBianca.experience}`);
    console.log("A monster! My lady, defend yourself!");
  
    let hit = getRndDamage(10);
    console.log(`${birdMonster.name} attacks ${ladyBianca.name} and causes ${hit} in damage`);
    ladyBianca.health = ladyBianca.health - hit;
    showCharacterStatus(ladyBianca);

    hit = getRndDamage(10);
    console.log(`${ladyBianca.name} attacks ${birdMonster.name} and causes ${hit} in damage`);
    birdMonster.health = birdMonster.health - hit;
    showCharacterStatus(birdMonster);
    
    hit = getRndDamage(10);
    console.log(`${birdMonster.name} attacks ${ladyBianca.name} and causes ${hit} in damage`);
    ladyBianca.health = ladyBianca.health - hit;
    showCharacterStatus(ladyBianca);
    
    hit = getRndDamage(10);
    console.log(`${ladyBianca.name} attacks ${birdMonster.name} and causes ${hit} in damage`);
    showCharacterStatus(birdMonster);
    birdMonster.health = birdMonster.health - hit;

            
    // Dessa meddelande visas efter attackerna
    if(ladyBianca.health > 0){
        console.log(`You are too strong my Lady. I beg you to spare my life! ${birdMonster.name} shouted.`);
        console.log(`${ladyBianca.name}: \"I need a potion now ...\"`)
    }
    else{
        console.log(`${birdMonster.name}: \"Another one bites the dust. I need a potion now ...\"`)
    }

    runProgram = confirm("Do you want o play again?");
}
console.log("Bye bye.");
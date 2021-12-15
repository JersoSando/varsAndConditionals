/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jonSnowHealth = 100;
let jonSnowDefense = 0;

let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack){
    console.log("Jon has a better attack than Jamie")
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log("Jamie has a better attack than Jon")
} else {
    console.log ('Jon and Jamie have the same attack')
}

jonSnowDefense += 25

if(jonSnowHealth <= jamieLannisterAttack){
    console.log("Jon has been slain")
} else {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    console.log(`Jon's health is now ${jonSnowHealth}`)
}

if ((jonSnowHealth + 50) > 100){
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

// while(jonSnowHealth > 0){
//     jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
//     console.log(`Jon's health is ${jonSnowHealth}`)
//     if(jonSnowHealth <=0){
//         console.log("Jon has been slain")
//     }
// }

for (let i = 0; i < 5; i++){
    if (jonSnowHealth <= 0){
        console.log('Jon was slain')
    } else {
        jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
        console.log(`Jon Snow's health is ${jonSnowHealth}`)
    }
}
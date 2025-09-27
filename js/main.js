var Health = 100;
var Gold = 0;

var MoneyMount = Math.floor(Math.random() * 35) + 15;

var goblinHealth = 35;

var damage = Math.floor(Math.random() * 15) + 15;

var runChance = Math.floor(Math.random() * 10) + 1;

var mercyChance = 0;

var loot = Math.floor(Math.random() * 15) + 15;

var goldchest = `<img src="images/chest.jiff" id="goldchest"/>`; 



function random(){
    document.getElementsById("dice").innerHTML = Math.floor(Math.random() * 20)+1;
}

function bars(){
    document.getElementById("health").innerHTML = `Health: ${Health}`;

    document.getElementById("gold").innerHTML = `Gold: ${Gold}`;

    document.getElementById("goblinHealth").innerHTML = `Goblin: ${goblinHealth}`
}

function chest(){
    document.getElementById("chest").innerHTML = `${goldchest}`;

    document.getElementById("button").innerHTML = `<h2>You've found ${MoneyMount} gold pieces</h2>`;

    Gold = Gold + MoneyMount;

    bars();

}

function Fight(){

    goblinHealth = goblinHealth - damage;

    mercyChance = mercyChance + damage;

    damage = Math.floor(Math.random() * 15) + 15;

    Health = Health - damage;

    bars();

    if(goblinHealth < 1){
        Enemydeath()
    }

}

function Run(){
    if(runChance < 5){
        runChance = Math.floor(Math.random() * 10) + 1;

        Health = Health - damage;

        bars();

        alert("You've failed to run")        
    } else {
        window.location.href="Room1.html";

        runChance = Math.floor(Math.random() * 10) + 1;
    }
}

function Mercy(){
    if(mercyChance > 20){
        alert("Goblin accepted your mercy")

        Gold = Gold + loot/2;
    } else {
        alert("Goblin refused your mercy")

        Health = Health - damage

    }
    bars();
}
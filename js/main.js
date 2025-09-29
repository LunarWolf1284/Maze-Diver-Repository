var Health = 100;
var Gold = 0;

var MoneyMount = Math.floor(Math.random() * 35) + 15;

var goblinHealth = 35;

var damage = Math.floor(Math.random() * 15) + 15;

var runChance = Math.floor(Math.random() * 10) + 1;

var mercyChance = 0;

var loot = Math.floor(Math.random() * 15) + 15;

var goldchest = `<img src="https://codehs.com/uploads/e829ee4826409cb818022bea4c957bed" id="goldchest"/>`;

var Mimic = `<img src="https://codehs.com/uploads/b8fd71313116f47f1afbe7534acfd9b3" id="mimic"/>`;

var IsDead = 1;

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

function trap(){
    document.getElementById("trappedChest").innerHTML = `${Mimic}`;

    document.getElementById("button").innerHTML = `<h2>Uh oh! You've been tricked by a mimic and took ${damage} damage!`

    document.getElementById("choice").innerHTML = `<h1 id="choice">You've found a mimic</h1>`

    Health = Health - damage

    bars()

}

function Fight(){
    if(IsDead > 4){

        alert("Fine if you want to kill the goblin again so bad then go ahead")

        IsDead = 1;

        document.getElementById("Goblin").innerHTML = `<img src= "https://codehs.com/uploads/fb527882ecbbed6f0d86997025e7c03a"/>`

        goblinHealth = 50;

        bars()

 } else if(IsDead > 3){
        alert("Why are are you trying to kill the already dead goblin so much!?")

        IsDead = IsDead + 0.2

    } else if(IsDead > 1){
        alert("The Goblin is already dead")
       
        IsDead = IsDead + 0.2;

    } else {

        goblinHealth = goblinHealth - damage;

        mercyChance = mercyChance + damage;

        damage = Math.floor(Math.random() * 15) + 15;

        Health = Health - damage;

        bars();
   
        if(goblinHealth < 1){
            Enemydeath()

            goblinHealth = 0;
           
            Health = Health + damage;

            bars();
        }
    }
}

function Enemydeath(){
    alert("goblin is dead");

    IsDead = 2;
   
    document.getElementById("Goblin").innerHTML = `<img src= "https://codehs.com/uploads/7dfb063a9921589bc14fce1c03e7fa93"/>`

    Gold = Gold + loot;
}

function Run(){
    if(IsDead>1){
        runChance = 10;
    }
    if(runChance < 5){
        runChance = Math.floor(Math.random() * 10) + 1;

        Health = Health - damage;

        bars();

        alert("You've failed to run")        
    } else {
        alert("You got away!")
       
        window.location.href="https://zachmarkcodehsme-15565893.codehs.me/Room1.html";

        runChance = Math.floor(Math.random() * 10) + 1;
    }
}

function Mercy(){
    if(IsDead>1){
        alert("Goblin is already dead, you can't spare him.")
    } else {
        if(mercyChance > 20){
            alert("Goblin accepted your mercy")

            Gold = Gold + loot/2;

            Gold = Math.round(Gold);

        } else {
            alert("Goblin refused your mercy")

            Health = Health - damage

        }
    }
    bars();
}
        Health = Health - damage

    }
    bars();
}

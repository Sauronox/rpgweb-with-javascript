// var warrior = {

// };
function Ennemy(name, lvl, hp, force, forcemag, dodge, shield, shieldmag) {
    this.name = name;
    this.lvl = lvl;
    this.hp = hp;
    this.forcemag = forcemag;
    this.force = force;
    this.dodge = dodge;
    this.shield = shield;
    this.shieldmag = shieldmag;

    this.getName = function () {
        return this.name;
    }
    this.getLvl = function () {
        return this.lvl;
    }
    this.getHp = function () {
        return this.hp;
    }
    this.getForcemag = function () {
        return this.forcemag;
    }
    this.getForce = function () {
        return this.force;
    }
    this.getDodge = function () {
        return this.dodge + "%"
    }
    this.getShield = function () {
        return this.shield;
    }
    this.getShieldmag = function () {
        return this.shieldmag;
    }

    this.takeDamage = function(damage){
        this.hp -= damage;
    }
    this.attack = function (target) {
        //if (this.typeof(target)) {
            if (targer.getHp() > 0) {
                var randNum = Math.random() * (this.lvl + 1);
                target.takeDamage(this.force+randNum);
            } else {
                delete target;
            }
        // } else {
        //     console.log('Il y a un  problème sur la cible qui n\'est pas un objet.');
        // }
    }
}

// ------------------------------------------------------------

function Perso(name) {
    this.name = name;
    this.lvl = 1;
    this.xp = 0;
    this.gold = 0;
    this.hp = 5;
    this.mana = 5;
    this.forcemag = 3;
    this.force = 5;
    this.dodge = 10;
    this.shield = 1;
    this.shieldmag = 1;

    this.setName = function (value) {
        this.name = value;
    }

    this.getName = function () {
        return this.name;
    }
    this.getLvl = function () {
        return this.lvl;
    }
    this.getXp = function () {
        return this.xp;
    }
    this.getGold = function () {
        return this.gold;
    }
    this.getHp = function () {
        return this.hp;
    }
    this.getMana = function () {
        return this.mana;
    }
    this.getForcemag = function () {
        return this.forcemag;
    }
    this.getForce = function () {
        return this.force;
    }
    this.getDodge = function () {
        return this.dodge + "%"
    }
    this.getShield = function () {
        return this.shield;
    }
    this.getShieldmag = function () {
        return this.shieldmag;
    }

    this.displayCard = function () {
        var content = "Name : " + this.name + "<br /> lvl : " + this.lvl + "<br />  xp : " + this.xp + "<br />  gold : " + this.gold + "<br />  hp : " + this.hp + "<br />  mana : " + this.mana + "<br />  Force Magic : " + this.forcemag + "<br />  force : " + this.force + "<br />  dodge : " + this.dodge + "<br />  shield : " + this.shield + "<br />  Shield Magic : " + this.shieldmag;
        return content;
    }
    this.takeDamage = function(damage){
        this.hp -= damage;
    }
    this.attack = function (target) {
        //if (this.typeof(target)) {
            if (targer.getHp() > 0) {
                var randNum = Math.random() * (this.lvl + 1);
                target.takeDamage(this.force+randNum);
            } else {
                delete target;
            }
        // } else {
        //     console.log('Il y a un  problème sur la cible qui n\'est pas un objet.');
        // }
    }
}

var newCaracter;
console.log('test1');
var myForm = document.getElementById('creator');

myForm.addEventListener('submit', function (e) {
    var name = document.getElementById('name').value;
    alert(name);
    console.log('test2');
    newCaracter = new Perso(name);
    console.log(newCaracter.displayCard());
    var hideContent = document.getElementById('content-creator');
    hideContent.style.display = 'none';
    var changeContent = document.getElementById('caracter');
    changeContent.style.display = 'block';
    changeContent.innerHTML += newCaracter.displayCard();
    changeContent.innerHTML += '<br /> <form id=\"combat\"><input type=\"submit\" value=\"Fight !\" /></form>';
    e.preventDefault();
});
console.log('test3');

var combatForm = document.getElementById('combat');

combatForm.addEventListener('submit', function (e){
    alert('test');
});

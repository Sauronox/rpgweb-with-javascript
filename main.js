// var warrior = {

// };

function Perso(name){
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

    this.setName =  function(value)
    {
        name = value;
    }

    this.getName = function()
    {
        return this.name;
    }
    this.getLvl = function()
    {
        return lvl;
    }
    this.getXp = function()
    {
        return xp;
    }
    this.getGold = function()
    {
        return gold;
    }
    this.getHp = function()
    {
        return hp;
    }
    this.getMana = function()
    {
        return mana;
    }
    this.getForcemag = function()
    {
        return forcemag;
    }
    this.getForce = function(){
        return force;
    }
    this.getDodge = function(){
        return dodge+"%"
    }
    this.getShield = function()
    {
        return shield;
    }
    this.getShieldmag = function()
    {
        return shieldmag;
    }

    this.displayCard = function()
    {
        var content = "Name : "+name+"\n lvl : "+lvl+"\n xp : "+xp+"\n gold : "+gold+"\n hp : "+hp+"\n mana : "+mana+"\n Force Magic : "+forcemag+"\n force : "+force+"\n dodge : "+dodge+"\n shield : "+shield+"\n Shield Magic : "+shieldmag;
        return content;
    }
}

var newCaracter;
console.log('test1');
var myForm = document.getElementById('creator');
  
    myForm.addEventListener('submit', function(e) {
        var name = document.getElementById('name').value;
        alert(name);
        console.log('test2');
        newCaracter = new Perso(name);
        console.log(newCaracter.getName());
        var hideContent = document.getElementById('content-creator');
        hideContent.style.display = 'none';
        var changeContent = document.getElementById('caracter');
        changeContent.style.display = 'block';
        e.preventDefault();
    });
    console.log('test3');

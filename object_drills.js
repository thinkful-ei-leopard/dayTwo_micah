//Object inits and methods

const loaf = {
    flour: 300,
    water: 210,
    hydration: function () {
 return this.water / this.flour * 100;
    },
};

loaf.hydration();

//iterating over an object's properties

const fooBar = {
    foo: "foo",
    bar: "bar",
    fum: "fum",
    quux: "quux",
    spam: "spam" 
}

for (const property in fooBar) {
    console.log(fooBar[property]);
  };

//Arrays in objects
  const myObj = {
   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']  
 
  };

  console.log(myObj.meals[3]);

  //Arrays of objects & properties that aren't there

  const array = [
      {name: "Goku", jobTitle: "Farmer", Boss: "Sr Boss" },
      {name: "Karen", jobTitle: "Manager", Boss: "Sir Boss"},
      {name: "Cat", jobTitle: "Demolition"},
      {name: "Sr Boss", jobTitle: "Boss"}
  ];

  array.forEach(obj => {
    if (!obj.Boss) {
        console.log(`${obj.jobTitle} ${obj.name} doesn't report to anybody.`);
    }
    else {
        console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.Boss}`);
    }
});

//Factory Functions with lOTR


function createCharacter(name, nickname, race, origin, attack, defense) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe() {
            console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
        },
        evaluateFight(character) {
            let result1 = 0;
            let result2 = 0;
            if (character.defense < this.attack) {  // 1  10
                result1 = Math.abs(character.defense - this.attack);
            } 
            else if (this.defense < character.attack) {
                result2 = Math.abs(this.defense - character.attack);
            }
            return `Your opponent takes ${result1} damage and you receive ${result2} damage`;
        }
    }
}

const characters = [
    {
        name: 'Gandalf the White',
        nickname: 'gandalf',
        race: 'Wizard',
        origin: 'Middle Earth',
        attack: 10,
        defense: 6
    },
    {
        name: 'Bilbo Baggins',
        nickname: 'bilbo',
        race: 'Hobbit',
        origin: 'The Shire',
        attack: 2,
        defense: 1
    },
    {
        name: 'Frodo Baggins',
        nickname: 'frodo',
        race: 'Hobbit',
        origin: 'The Shire',
        attack: 3,
        defense: 2
    },
    {
        name: 'Aragorn son of Arathorn',
        nickname: 'aragorn',
        race: 'Man',
        origin: 'Dunnedain',
        attack: 6,
        defense: 8
    },
    {
        name: 'Legolas',
        nickname: 'legolas',
        race: 'Elf',
        origin: 'Woodland Realm',
        attack: 8,
        defense: 5
    },
    {
        name: 'Arwen Undomiel',
        nickname: 'elfie',
        race: 'Half-Elf',
        origin: 'Rivendell',
        attack: 12,
        defense: 22
    },
];

character.forEach(char => createCharacter(char));

const frodo = createCharacter('Frodo', 'froyo', 'hobbit', 'the shire', 220, 10);
const gimli = createCharacter('gimli', 'dwarf', 'dwarf', 'the mountain', 22, 2220);

const whosWins = frodo.evaluateFight(gimli);
console.log(whosWins);
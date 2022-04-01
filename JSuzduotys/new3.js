//  UZDUOTIS NR1
function futbolistas(vardas, pavarde, greitis, ugis, amzius, ypatybes) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.greitis = greitis;
    this.ugis = ugis;
    this.amzius = amzius;
    this.ypatybes = ypatybes;
  }
  
  zaidejas1 = new futbolistas('Leo', 'Mesis', 45, 188, 33, 'treniruotes');
  zaidejas2 = new futbolistas('Sigis', 'bekojis', 37, 175, 35, 'vaizdo medziaga');
  zaidejas3 = new futbolistas('David', 'Bekhem', 55, 193, 27, 'pro nereikia');
  zaidejas4 = new futbolistas('Karim', 'Benzema', 60, 191, 25, 'pro nereikia');

var komanda = [zaidejas1, zaidejas2, zaidejas3, zaidejas4];
 
  komanda.sort(function(a, b){
    if(a.vardas < b.vardas) { return -1; }
    if(a.vardas > b.vardas) { return 1; }
    return 0;
});

komanda.forEach((item, index) => {
    var divas = document.createElement("div");
    divas.innerHTML = komanda[index].vardas + ", " + komanda[index].pavarde + ", " + komanda[index].greitis + ", " + komanda[index].ugis + ", " + komanda[index].amzius + ", " + komanda[index].ypatybes;
    document.body.appendChild(divas);
  });

  komanda.sort(function(a, b){return a.greitis - b.greitis});

  komanda.forEach((item, index) => {
    var divas = document.createElement("div");
    divas.innerHTML = komanda[index].greitis;
    document.body.appendChild(divas);
  });

  //  UZDUOTIS NR2
// MASINU konstruktoriaus objektas:

class Car {
  // Masinu konstruktorius
  constructor(brand, speed, time) {
    this.brand = brand;
    this.speed = speed;
    this.time = time;
    var self = this
    // Masinos kelias
    this.road = (function(){
      return self.speed * self.time;
    })()
  };
};
// const Car1 = new Car('BMW', 150, 1);
// console.log(Car1.brand + "  speed " + Car1.speed + "km/h and time " + Car1.time + " nuvaziuotas kelias " + Car1.road);

// Mygtuko sukurimas
var mygtukas = document.createElement("button");
document.body.appendChild(mygtukas);
mygtukas.setAttribute("id", "carButton")
// Mygtuko stilius
carButton.innerHTML = '5 Car list';
carButton.style.width = '100px';
carButton.style.height = '80px';
carButton.style.margin = '50px 100px';
carButton.style.textAlign = 'center';
carButton.style.margin = '0 auto';
carButton.style.display = 'block';


// Mygtuko paspaudimo funkcija
mygtukas.addEventListener('click', function(){
  // Markiu pavadinimai
  let carBrand = ['opel', 'audi', 'bmw', 'mazda', 'reno', 'volvo', 'toyota', 'subaru', 'ford', 'fiat', 'tesla'];
  // 5 masinu masyvas
  let carList = ['Car1', 'Car2', 'Car3', 'Car4', 'Car5'];
  // const Car1 = new Car('BMW', 150, 1);
  for (let i = 0; i < carList.length; i++){
    // random masinu pavadinimai
    let carBrands = carBrand[Math.floor(Math.random() * carBrand.length)];
    // parametrai
  let time = Math.floor(Math.random() * (50 - 1) + 1);
  let speed = Math.floor(Math.random() * (200 - 10) + 10);
// skirtingu masinu sukurimas
    let car1 = carList[i] = new Car(carBrands, speed, time);
// pavaizdavimo vietos sukurimas
    let divas = document.createElement("div");
    divas.innerText = `Masinos marke ${carList[i].brand}, greitis ${carList[i].speed}km/h, vaziavimo laikas ${carList[i].time}h, nuvaziuotas kelias ${carList[i].road}km`;
    document.body.appendChild(divas);
  }
 console.log(carList[1])
});






  // mygtuko sukurimas
  // var mygtukas = document.createElement("button");
  // document.body.appendChild(mygtukas);
  // mygtukas.setAttribute("id", "masinos5")
  // masinos5.innerHTML = 'masinos5';
  // masinos5.style.width = '100px';
  // masinos5.style.height = '80px';
  // masinos5.style.margin = '50px 100px';
  // masinos5.style.textAlign = 'center';
  // masinos5.style.margin = '0 auto';
  // masinos5.style.display = 'block';

 
// Ivarikius pavadinimai 
// var masinuPav = ['opel', 'audi', 'bmw', 'mazda', 'reno', 'volvo', 'toyota', 'subaru', 'ford', 'fiat', 'tesla'];
// var pavadinimas = masinuPav[Math.floor(Math.random() * masinuPav.length)];
// var laikas = Math.floor(Math.random() * (2990 - 30) + 30);
// var kelias = Math.floor(Math.random() * (200000 - 120000) + 120000);


// kelias per valanda
//   var keliasPerValanda = function keliasPerValanda(kelias, laikas) {
//   var keliasPerValanda = kelias / laikas;
//   return keliasPerValanda;
// };
//  var keliasLaikas = keliasPerValanda(kelias, laikas);
// Masinu masyvas





// -----------------------------------------
// console.log('10' - 1);
// console.log(10 + '1');
// console.log(10 / '0');
// console.log('15 + 15' * '2');
// const printHelloWorld = () => console.log('hello world');


// Array.of(1);         // [1]
// Array.of(1, 2, 3);   // [1, 2, 3]
// Array.of(undefined); // [undefined]
// console.log(Array);
// let NewItem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// NewItem.of(5, 6, 7);
// console.log(NewItem);






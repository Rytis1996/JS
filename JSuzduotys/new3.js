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

  // Masinu objekto konstruktorius
  function masina(pavadinimas, laikas, kelias, keliasPerValanda) {
    this.pavadinimas = pavadinimas;
    this.laikas = laikas;
    this.kelias = kelias;
    this.keliasPerValanda =   function keliasPerValanda() {
      var keliasPerValanda = this.kelias / this.laikas;
      return keliasPerValanda;
    };
  };

// kelias per valanda
  // function keliasPerValanda(laikas, kelias) {
  //   var keliasPerValanda = kelias / laikas;
  //   return keliasPerValanda;
  // };

  // mygtuko sukurimas
  var mygtukas = document.createElement("button");
  document.body.appendChild(mygtukas);
  mygtukas.setAttribute("id", "masinos5")
  masinos5.innerHTML = 'masinos5';
  masinos5.style.width = '100px';
  masinos5.style.height = '80px';
  masinos5.style.margin = '50px 100px';
  masinos5.style.textAlign = 'center';
  masinos5.style.margin = '0 auto';
  masinos5.style.display = 'block';


// Ivarikius pavadinimai ir parametrai
var masinuPav = ['opel', 'audi', 'bmw', 'mazda', 'reno', 'volvo', 'toyota', 'subaru', 'ford', 'fiat', 'tesla'];
var pavadinimas = masinuPav[Math.floor(Math.random() * masinuPav.length)];
var laikas = Math.floor(Math.random() * (2990 - 30) + 30);
var kelias = Math.floor(Math.random() * (200000 - 120000) + 120000);

// masinu masyvas
var masinos = [masina0, masina1, masina2, masina3, masina4];
var masina0 = new masina('pavadinimas', 'laikas', 'kelias');
var masina1 = new masina('pavadinimas', 'laikas', 'kelias');
var masina2 = new masina('pavadinimas', 'laikas', 'kelias');
var masina3 = new masina('pavadinimas', 'laikas', 'kelias');
var masina4 = new masina('pavadinimas', 'laikas', 'kelias');

console.log(masinos);

  // mygtukas.addEventListener('click', function(){
  //   var divas = document.createElement("div");
  //   var newMasina = new masina(pavadinimas, laikas, kelias, keliasPerValanda) * 5;

  //   masinos.push(newMasina);

  //   masinos.forEach((item, index) => {

  //   })
  //   document.body.appendChild(divas);
  // });




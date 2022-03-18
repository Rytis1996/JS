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
  //  UZDUOTIS NR2

  function masina(pavadinimas, greitis, kelias) {
    this.pavadinimas = pavadinimas;
    this.greitis = greitis;
    this.kelias = kelias;
  };


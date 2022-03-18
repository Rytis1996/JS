function futbolistas(greitis, vardas, pavarde, ugis, amzius, ypatybes) {
    this.greitis = greitis;
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.ugis = ugis;
    this.amzius = amzius;
    this.ypatybes = ypatybes;
  }
  
  var zaidejas1 = new futbolistas(45, 'Leo', 'Mesis', 188, 33, 'treniruotes');
  var zaidejas2 = new futbolistas(37, 'Sigis', 'bekojis', 175, 35, 'vaizdo medziaga');
  var zaidejas3 = new futbolistas(44, 'David', 'Bekhem', 193, 27, 'pro nereikia');
  console.log(zaidejas1);
  console.log(zaidejas2);
  console.log(zaidejas3);
  document.getElementById("teamas").innerHTML = zaidejas1.vardas;

//   var komanda = [zaidejas1, zaidejas2, zaidejas3];
//   console.log(komanda);
//   document.getElementById("teamas").innerHTML = komanda;
//   document.getElementById("teamas").innerHTML = zaidejas1;
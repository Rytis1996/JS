var y = 15;
var x = 15;

var MarytesObouoliai = x;
var JonukoObuoliai = y;

var bendraiObuoliu = MarytesObouoliai + JonukoObuoliai;
console.log(bendraiObuoliu);


console.log(y);
console.log(y += 5);
console.log(y -= 5);

if (MarytesObouoliai > JonukoObuoliai) {
    console.log("Maryte turi daugiau obuoliu negu Jonukas");
}
else if (MarytesObouoliai == JonukoObuoliai) {
    console.log("Jonukas turi lygiai obuoliu kiek ir Maryte");
}
else {
    console.log("Jonukas turi daugiau obuoliu negu Maryte");
}

var obuoliai = "neaisku";

switch (obuoliai) {
    default:
        console.log("Obuoliu kiekis nera nurodytas");
      break;
    case 15:
        console.log("Jus turite 15 obuoliu");
      break;
    case 0:
        console.log("Jus neturite obuoliu");
  }

  const vaisiai = [
      "bananas",
      "obuolys",
      "kivis",
      "apelsinas",
      "nektarinas",
      "kriause",
      "ananasas"
  ];

  console.log (vaisiai[2] + " " + vaisiai[4]);


  for (let i = 0; i < vaisiai.length ; i++) {
    console.log (vaisiai[i]);
  }


  function daiktas(k, p) {
      console.log('daikto kaina', k);
      console.log('daikto pavadinimas', p)
  }
  
  daiktas(50, "batai");

 
//  2JS 1 uzduotis
 megstuProg = function(){
  return "Megstu programuoti. Yey :)";
};

document.getElementById("prog").innerHTML = megstuProg();

//  2JS 2 uzduotis
var penkiVaisiai = function(pavadinimas, vaisiuKaina) {

  return `2 UZDUOTIS -  5 ${pavadinimas} kaina yra ${vaisiuKaina * 5} `;
};
console.log(penkiVaisiai('obuoliu', 6));

//  2JS 3 uzduotis
  document.getElementById("calc").addEventListener("click", function(pav, kiekis, kaina){
    var pav = document.getElementById("pav").value;
    var kiekis = document.getElementById("kiekis").value;
    var kaina = document.getElementById("kaina").value;

    return document.getElementById("bendraKaina").innerHTML = `${pav} kaina yra ${kaina * kiekis} is viso pirkta ${kiekis} `;
  })

  //  2JS 4 uzduotis

var herojai = ['Thor', 'Halk', 'Batman', 'Spiderman'];

 herojai.forEach(element =>{
  var divas = document.createElement("div");
  divas.innerText = element;
  document.body.appendChild(divas);
  divas.style.display = 'block';
  divas.style.backgroundColor = 'blue';
  divas.style.color = 'white';
  });


  // for (let i = 0; i < herojai.length; i + 2) {
  //   divas.style.backgroundColor = 'white';
  //   divas.style.color = 'black';
  //   "<br>";
  // };
 




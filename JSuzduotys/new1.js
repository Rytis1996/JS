var moku = document.getElementById('moku');

moku.style.backgroundColor = "green";
moku.innerHTML = 'Valio pavyko';
moku.style.width = '300px';
moku.style.height = '300px';
moku.style.margin = '0 auto';


var nemoku = document.createElement("div");
nemoku.innerText = "Valio pavyko)";
document.body.appendChild(nemoku);
nemoku.setAttribute("id", "nemoku");

nemoku.style.backgroundColor = "yellow";
nemoku.innerHTML = 'Valio pavyko';
nemoku.style.width = '300px';
nemoku.style.height = '300px';
nemoku.style.margin = '0 auto';

var mygtukas = document.createElement("button");
document.body.appendChild(mygtukas);
mygtukas.setAttribute("id", "spaudaliukas")

spaudaliukas.innerHTML = 'spaudaliukas';
spaudaliukas.style.width = '100px';
spaudaliukas.style.height = '80px';
spaudaliukas.style.margin = '50px 100px';
spaudaliukas.style.textAlign = 'center';
spaudaliukas.style.margin = '0 auto';
spaudaliukas.style.display = 'block';

mygtukas.addEventListener("click", function() {
    nemoku.remove();
    spaudaliukas.remove();
  });

  var karamba = document.getElementById("KARAMBA");
  karamba.style.color = 'red';
  karamba.style.margin = '0 auto';
  karamba.style.display = 'block';

  karamba.addEventListener("click", function() {
    var ekranas = document.createElement("iframe");
    document.body.appendChild(ekranas);
    ekranas.setAttribute("id", "youtube")
    ekranas.innerHTML = 'veikia';
    ekranas.style.width = '500px';
    ekranas.style.height = '500px';
    ekranas.style.border = 'solid 2px';
    ekranas.style.margin = '0 auto';
    ekranas.style.display = 'block';
    youtube.src = "https://www.youtube.com/embed/5Q9UF0Tstww"; 
  });





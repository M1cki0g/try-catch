let x = Number(prompt("Donner un numero entre 5 et 10"));
try {

 if (x == "") throw "vide";

  if (isNaN(x)) throw "Ce n'est pas un numero";
  x = Number(x);
  if (x < 5) throw "trop petit";
  if (x > 10) throw "trop grand";
} catch (e) {
  console.log("e");
}

const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m


//ici on manipule le DOM en appelant le formulaire
const form = document.querySelector("form")
//ici on ajoute un evenement
form.addEventListener("submit", handleForm)
//ici on créer une fonction qui va gérer l'evenement
function handleForm(event) {

  event.preventDefault();
//ici on appelle la fonction
  calculateBMI()

}
//ici on appelle les inputs
const inputs = document.querySelectorAll("input")
console.log(inputs)
//ici on créer une fonction qui va calculer l'IMC
function calculateBMI() {
//ici on appelle les inputs dans la fonction
  const height = inputs[0].value
  const weight = inputs[1].value

//ici on appelle la fonction dans la console
if (!height || !weight || height <= 0 || weight <= 0) {
  handleError()
  return;
}

}
//ici on appelle le resultat
const displayBMI = document.querySelector(".bmi-value");
//ici on appelle le resultat
const result = document.querySelector(".bmi-result"); 
//ici on créer une fonction qui va gérer les erreurs
function handleError() {
  displayBMI.textContent = "Oups, il y a une erreur !"
  result.textContent = "Remplissez correctement les champs!"
}
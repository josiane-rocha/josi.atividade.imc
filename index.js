console.log("Bem vindo!")
let rs = require("readline-sync")
let = rs.question("Digite o seu sexo: ")
let = rs.question("Digite a sua idade: ")
let peso = rs.questionFloat("Digite o seu peso:\n")
let altura = rs.questionFloat("Digite a sua altura:\n")

let imc = peso / (altura  * altura)
console.log("Seu imc é " + imc)

if (imc <= 18.5) {
    console.log ("Você está muito abaixo do peso, por favor consulte um nutricionista")
}
else if (imc > 18.5 && imc < 24.9) {
    console.log ("Parabéns, o seu peso está normal")
}
else if (imc > 24.9 && imc < 30) {
    console.log ("Voce está ligeiramente acima do peso, por favor pratique exercícios")
}
else if (imc > 30 && imc < 35) {
    console.log ("Voce está na fase 1 da obesidade, por favor procure um médico e cuide-se")
}
else if (imc > 35.1 && imc < 39) {
    console.log ("Voce está na fase 2 da obesidade (severa), que leva riscos a saúde ,por favor procure um médico e cuide-se")
}
else if (imc > 39.1) {
    console.log ("Voce está na fase 3 da obesidade (mórbida), cuide-se, muitas pessoas te amam e querem o seu bem")
}
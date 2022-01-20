// Programa para calcular a média dos Alunos

const aluno1 = "Michell"
const nota1 = 6.8
const aluno2 = "Kassia"
const nota2 = 8.6
const media = (nota1 + nota2) / 2

if (media < 7.5) {
    console.log(`A Média ${media}. Vocês foram reprovados!`)
} else {
    console.log(`A Média foi ${media}! Parabéns!`)
}
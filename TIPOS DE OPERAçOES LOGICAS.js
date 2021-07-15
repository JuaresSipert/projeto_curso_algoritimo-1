/*Algoritmo "tipos de opera�oes logicas"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 24/06/2021
Var
// Se��o de Declara��es das vari�veis
   nota01, nota02, nota03, media: real
   nome: caracter

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("digite o nome do aluno; ")
   leia(nome)
   escreval("digite a nota 01 do aluno; ")
   leia(nota01)
   escreval("digite a nota 02 do aluno; ")
   leia(nota02)
   escreval("digite a nota 03 do aluno; ")
   leia(nota03)
   
   media := (nota01 + nota02) / 2

   se media >= 7 entao
      escreval("aprovado!", nome)
   senao
      escreval("reprovado!", nome)
   fimse

Fimalgoritmo*/
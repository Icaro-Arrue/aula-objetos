/*1.a. 
Matheus Nachtergaele
Matheus Nachtergaele, Selton Mello, Denise Fraga, Virginia Cavendish 4
canal: Globo, horario: 14h

2.a. 
nome: Juca, idade: 3, raca: "SRD"
nome: Juba, idade: 3, raca: "SRD"
nome: Jubo, idade: 3, raca: "SRD"

2.b. copia as informações do objeto informado 
depois das reticências, possibilitando que o código possa ser limpo e de fácil leitura,
além de maior facilidade ao modificar itens

3.a.
false
undefined

3.b. o objeto que a função receberia foi definido como pessoa e,
já que a função tinha a estrutura para acessar uma propriedade,
foi possível acessar "backender". Altura não existe.


*/

//1.a.
const pessoa = {
    nome: "Ícaro",
    apelidos: ["Ica", "Tio Ico", "Cocudo"]
}

frase = (objeto) => {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)

}

frase(pessoa)
//1.b.
const maisApelidos = {
    ...pessoa,
    apelidos: ["Ame", "Cocos", "Ycro"]
}

frase(maisApelidos)
 
//2.
const pessoaDois = {
    nome: "Wagner",
    idade: 33,
    profissão: "Desenvolvedor"
}

const pessoaTres = {
    nome: "Rafael",
    idade: 36,
    profissão: "Professor"
}

arrayMaker = (objeto) => {
    array = []
    array.push(objeto.nome)
    array.push(objeto.nome.length)
    array.push(objeto.idade)
    array.push(objeto.profissão)
    array.push(objeto.profissão.length)
    console.log(array)
}

arrayMaker(pessoaDois)
arrayMaker(pessoaTres)

const carrinho = []

/*const fruta = {
    nome: "Abacaxi",
    disponibilidade: true
}

const frutaDois = {
    nome: "Maçã",
    disponibilidade: true
}

const frutaTres = {
    nome: "Manga",
    disponibilidade: true
}

lotaCarrinho = (obj) => {
    carrinho.push(obj.nome, obj.disponibilidade)
    console.log(carrinho)
}

lotaCarrinho(fruta)
lotaCarrinho(frutaDois)
lotaCarrinho(frutaTres)
*/

const sacolao = [
    {nome: "Abacaxi", disponibilidade: true},
    {nome: "Manga", disponibilidade: true},
    {nome: "Maçã", disponibilidade: true}
]

lotaCarrinho = (objeto) => {
    carrinho.push(objeto)
    console.log(carrinho)
}

lotaCarrinho(sacolao[0])
lotaCarrinho(sacolao[1])
lotaCarrinho(sacolao[2])

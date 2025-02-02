let herois = ["Wolverine" ,"Capitão America" , "Hulk", "Thor", "Homem Aranha" , "flash" , "Homem de Ferro"]
let vitorias = [20, 35 , 40 , 70 , 95 , 100 ,15]
let derrotas = [5 , 10 , 15 , 18 , 22 , 10 , 6 ]

function SaldoRankeada (vitorias , derrotas , herois) {
        let resultados = []
for (let i = 0 ; i < vitorias.length ; i++) {
        let SaldoVitoria = vitorias[i] - derrotas[i]
        let NivelRankeada =""

if (vitorias[i] < 10){
        NivelRankeada = "Ferro"
}else if (vitorias[i] >= 11 && vitorias[i]<=20) {
        NivelRankeada = "Bronze"
}else if (vitorias[i] >= 21 && vitorias[i]<=50) {
        NivelRankeada = "Prata" 
}else if (vitorias[i] >= 51 && vitorias[i]<=80) {
        NivelRankeada = "Ouro"
}else if (vitorias[i] >= 81 && vitorias[i]<=90) {
        NivelRankeada = "Diamante"
}else if (vitorias[i] >= 91 && vitorias[i]<=100) {
        NivelRankeada = "lendário"

    }      resultados.push({heroi:herois[i] ,
               SaldoVitoria:SaldoVitoria , 
               NivelRankeada:NivelRankeada}) 
  }
        return resultados
}let resultados = SaldoRankeada (vitorias , derrotas , herois)

for(let resultado of resultados) {
console.log(`O herói ${resultado.heroi} tem saldo de ${resultado.SaldoVitoria} vitórias e está no nível de ${resultado.NivelRankeada}`) 
}
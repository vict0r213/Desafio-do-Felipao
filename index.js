let heroi = [ "Superman" , "Batman" , "Lanterna verde" , "Arqueiro"]
let XpHeroi = [5500 , 1500 , 800 , 4000]
let ClassificaçãoHeroi = ""

for(let i = 0 ; i < heroi.length; i++) { 
if (XpHeroi[i] < 1000){
ClassificaçãoHeroi = "Ferro"
}else if ( XpHeroi[i] >= 1001 && XpHeroi[i] <= 2000 ) {
  ClassificaçãoHeroi = "Bronze"
}else if ( XpHeroi[i] >= 2001 && XpHeroi[i] <= 5000 ) {
  ClassificaçãoHeroi = "Prata"
}else if ( XpHeroi[i] >= 5001 && XpHeroi[i] <= 7000 ) {
  ClassificaçãoHeroi = "Ouro"
}console.log( "O Herói " + heroi[i] + " está no nível de " +  ClassificaçãoHeroi )
} 
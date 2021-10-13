console.log("inizio dadi")

// function dadoN1(6) {
//     return Math.ceiling(Math.random(6))
// }

const you = Math.ceil(Math.random()* 6 )
const PC = Math.ceil(Math.random()* 6 )

console.log(`Dado utente: ${you}, Dado PC ${PC}`)

if (you > PC){
    console.log("Hai vinto")
    alert("Hai vinto")
    location.reload()
} else if (you === PC){
    console.log("Pareggio")
    alert("Pareggio")
    location.reload()

} else {
    console.log("Vince il PC")
    alert("Vince il PC")
    location.reload()
}
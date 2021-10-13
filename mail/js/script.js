console.log("inizio esercizio mail")

const mailInserita = prompt("Inserisci la tua mail")
const mailConsentite = ["alice", "stefano"]

console.log(`mail consentite: ${mailConsentite}`)

for (let x = 0; x <= mailConsentite.length; x++){
    console.log(x)
    
    if (mailInserita === mailConsentite[x]){
        alert("benvenuto")
    } else  {
        alert("error")
    }
}

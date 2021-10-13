console.log("inizio esercizio mail")

const mailInserita = prompt("Inserisci la tua mail")
const mailConsentite = ["alice@gmail.com", "stefano@gmail.com", "alessandro@gmail.com", "simona@gmail.com"]

console.log(`mail inserita: ${mailInserita} mail consentite: ${mailConsentite}`)

let mailExist = false

for (let x = 0; x <= mailConsentite.length; x++){
    console.log(x)
    
    if (mailInserita === mailConsentite[x]){
        mailExist = true
    } 
}

if (mailExist) {
    alert("Benvenuto.")
    document.querySelector("main").innerHTML += `   <div>
                                                        <h1>Benvenuto</h1>
                                                        <p>è bello rivederti.</p>
                                                    </div>`
} else {
    alert("Error. Mail non accettata")
    
}
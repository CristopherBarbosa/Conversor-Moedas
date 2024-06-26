const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value")//valor em Real
    const currencyValueConverted = document.querySelector(".currency-value-to-convert")//Outras moedas


    const dolarToday = 5.08
    const euroToday = 5.47


    if(currencySelect.value == "dolar"){ // Se o select estiver com o valor de dolar, faça isso
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday )
    }
    if(currencySelect.value == "euro"){ // Se o select estiver com o valor de euro, faça isso
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)




}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = "./assets/Dolar.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = "./assets/Euro.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
function priceCheck(price){
    if (price == 1.50){
        document.getElementById('result').innerHTML = `match`;
    }
}
function strictPriceCheck(price){
    if (price === 1.50){
        document.getElementById('result').innerHTML = `match`;
    }
}
document.getElementById('result').innerHTML = priceCheck(1.50)

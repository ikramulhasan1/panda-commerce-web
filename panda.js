// Shows Background color change
const shoesCards = document.getElementsByClassName('shoes-card');

for (const shoesCard of shoesCards) {
    shoesCard.addEventListener("click", function (event) {
        event.target.style.backgroundColor = 'red';
    })
}


// Panda button disable
const pandaBtnBuyNows = document.getElementsByClassName('panda-btn-buy-now');

for (const pandaBtnBuyNow of pandaBtnBuyNows) {
    pandaBtnBuyNow.addEventListener("click", function (event) {
        event.target.parentNode.removeChild(pandaBtnBuyNow)
    })
}

// button enable confirm

document.getElementById('exampleInputEmail1').addEventListener("keyup", function (event) {
    const btnDisable = document.getElementById('btnDisable');

    const value = event.target.value;
    if (value == 'email') {
        btnDisable.removeAttribute('disabled');
    }
    else {
        btnDisable.setAttribute('disabled', true);
    }
})
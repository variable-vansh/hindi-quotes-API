let suvicharBox = document.querySelector(".suvichar_box")

function showQuoteOnCLick(type) {
    fetch(`https://hindi-quotes.vercel.app/random/${type}`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            suvicharBox.innerHTML = response.quote;
        });
}
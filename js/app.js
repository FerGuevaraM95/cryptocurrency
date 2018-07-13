// Instanciar ambas clases
const quoting = new Quoting();
const ui = new UI();

// Obtener el formulario
const form = document.getElementById('form');
// Event Listener cuando se envia el formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Leer moneda selecionada
    const coinSelect = document.getElementById('coin');
    const coinSelected = coinSelect.options[coinSelect.selectedIndex].value;

    // Leer criptomoneda selecionada
    const cryptocurrencySelect = document.getElementById("cryptocurrency");
    const cryptocurrencySelected = cryptocurrencySelect.options[cryptocurrencySelect.selectedIndex].value;

    // Comprobar que ambos campos tengan datos
    if (coinSelected === '' || cryptocurrencySelected === '') {
        ui.showMessage('Ambos campos son obligatorios', 'deep-orange darken-4 card-panel');
    } else {
        // Todo correcto tomar valores del select y ejecutar la cotización
        quoting.getValues(coinSelected, cryptocurrencySelected)
            .then(data => {
                ui.showResult(data.result,
                coinSelected);
            })
    }
})
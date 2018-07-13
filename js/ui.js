class UI {

    constructor() {
        this.init();
    }

    init() {
        this.buildSelect();
    }

    buildSelect() {
        quoting.getCoinsAPI()
            .then(coins => {
                // Crea un select con las opciones
                const arrayCoins = coins.coins.data;
                const select = document.getElementById("cryptocurrency");

                // Construir SELECT desde la REST API
                arrayCoins.forEach(coin => {
                    // Añadir el ID y el valor, despues asignarlo al select
                    const option = document.createElement('option');
                    option.value = coin.id;
                    option.appendChild(document.createTextNode(coin.name));
                    select.appendChild(option);
                })
            })
    }
}
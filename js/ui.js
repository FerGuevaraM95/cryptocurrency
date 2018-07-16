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

    showMessage(message, classList) {
        const div = document.createElement('div');
        div.className = classList;
        div.appendChild(document.createTextNode(message));
        // Div para el mensaje del html
        const divMessage = document.querySelector('.messages');
        // Añadimos el div a messages
        divMessage.appendChild(div);

        // Desaparecer la alerta despues de 3 segundos
        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 3000);
    }

    // Imprime el resultado de la cotización
    showResult(result, coin) {
        // En caso de que haya una consulta anterior, borrarla
        const previousResult = document.querySelector('#result > div');
        if(previousResult) {
            previousResult.remove();
        }
        // Muestra el spinner
        this.showSpinner();
        // Construir la etiqueta de precio según la moneda
        const value = result.data.quotes[coin];
        // Convierte la hora de UNIX  a horas y minutos
        const hour = new Date(result.data.last_updated * 1000);
        const updateHour = `${hour.getHours()}:${hour.getMinutes()}`;
        // Construir el template
        let templateHTML = '';
        templateHTML = `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Resultado:</span>
                    <p>El precio de ${result.data.name} a moneda ${coin} es de: $${value.price}</p>
                    <p>Última hora: ${value.percent_change_1h}%</p>
                    <p>Último día: ${value.percent_change_24h}%</p>
                    <p>Últimos 7 días: ${value.percent_change_7d}%</p>
                    <p>Última actualización: ${updateHour} horas</p>
                </div>
            </div>
        `;

        setTimeout(() => {
            //Imprime el resultado
            document.querySelector("#result").innerHTML = templateHTML;
            // Oculta el spinner
            document.querySelector('.spinner img').remove();
        }, 2500);
    }

    // Muestra el spinner cuando se cotiza
    showSpinner() {
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = './img/spinner.gif';
        document.querySelector(".spinner").appendChild(spinnerGIF);
    }
}
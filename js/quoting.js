class Quoting {

    // Obtiene el JSON con las criptomonedas
    async getCoinsAPI() {
        // Fetch a la API
        const urlGetCoins = await fetch('https://api.coinmarketcap.com/v2/listings/');
        // Respuesta en JSON de las modenas
        const coins = await urlGetCoins.json();

        return {
            coins
        }
    }

    async getValues(coin, cryptocurrency) {
        // Convierte los selects en la url
        const urlConvert = await fetch(`
            https://api.coinmarketcap.com/v2/ticker/${cryptocurrency}/?convert=${coin}`);

        const result = await urlConvert.json();

        return {
            result
        }
    }
}
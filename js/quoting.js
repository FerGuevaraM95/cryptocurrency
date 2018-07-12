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
}
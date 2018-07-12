class UI {

    constructor() {
        this.init();
    }

    init() {
        this.buildSelect();
    }

    buildSelect() {
        quoting.getCoinsAPI()
            .then(data => {
                console.log(data);
            })
    }
}
class App {
    private container: HTMLElement
    constructor() {
        this.container = document.body
    }

    run () {
        this.container.innerText = 'Single Page Application'
    }
}

export default App
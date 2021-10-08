import Page from "../../core/templates/page";
import MainPage from "../main";
import SettingsPage from "../settings";
import StaticPage from "../statistics";

class App {
    private container: HTMLElement
    private initialPage: MainPage

    static renderNewPage(idPage: string){
      document.body.innerHTML = ''
      let page: Page | null = null

       if (idPage === 'main-page') {
           page = new MainPage(idPage)
       } else if (idPage === 'settings-page'){
           page = new SettingsPage(idPage)
       } else if (idPage === 'statistic-page'){
           page = new StaticPage(idPage)
       }
       if (page) {
         const pageHtml = page.render()
         document.body.append(pageHtml)
       }
    }

    private enableRouteChange() {
      window.addEventListener('hashchange', () => {
          const hash = window.location.hash
          console.log('hashchange', hash)
      })
    }

    constructor() {
        this.container = document.body
        this.initialPage = new MainPage('main-page')
    }

    run () {
        // const mainPageHTML = this.initialPage.render()
        // this.container.append(mainPageHTML)
        App.renderNewPage('settings-page')
        this.enableRouteChange()
    }
}

//Main, Settings, Statistics

export default App
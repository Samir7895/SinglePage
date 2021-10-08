import Page from "../../core/templates/page";
import MainPage from "../main";
import SettingsPage from "../settings";
import StaticPage from "../statistics";
import Header from "../../core/components/header";

export const enum PageIds {
    MainPage = 'main-page',
    SettingsPage = 'settings-page',
    StatisticsPage = 'statistic-page'
}

class App {
    private static container: HTMLElement = document.body
    private initialPage: MainPage
    private header: Header

    static renderNewPage(idPage: string){
      App.container.innerHTML = ''
      let page: Page | null = null

       if (idPage === PageIds.MainPage) {
           page = new MainPage(idPage)
       } else if (idPage === PageIds.SettingsPage){
           page = new SettingsPage(idPage)
       } else if (idPage === PageIds.StatisticsPage){
           page = new StaticPage(idPage)
       }
       if (page) {
         const pageHtml = page.render()
           App.container.append(pageHtml)
       }
    }

    private enableRouteChange() {
      window.addEventListener('hashchange', () => {
          const hash = window.location.hash.slice(1)
          App.renderNewPage(hash)
      })
    }

    constructor() {
        this.initialPage = new MainPage('main-page')
        this.header = new Header('header', 'header')
    }

    run () {
        // const mainPageHTML = this.initialPage.render()
        // this.container.append(mainPageHTML)
        App.renderNewPage('settings-page')
        App.container.append(this.header.render())
        this.enableRouteChange()
    }
}

//Main, Settings, Statistics

export default App
import Component from "../../templates/components";
import {PageIds} from "../../../pages/app";

const Buttons = [
    {
        id: PageIds.MainPage,
        text: 'Main-page'
    },
    {
        id: PageIds.SettingsPage,
        text: 'Settings-page'
    },
    {
        id: PageIds.StatisticsPage,
        text: 'Statistic-page'
    }
]

class Header extends Component {
    constructor(tagName: string ,className: string) {
        super(tagName ,className);
    }

    renderPageButtons() {
      const pageButtons = document.createElement('div')
      Buttons.forEach((button) => {
          const buttonHtml = document.createElement('a')
          buttonHtml.href = `#${button.id}`
          buttonHtml.innerText = button.text
          pageButtons.append(buttonHtml)
      })
       this.container.append(pageButtons)
    }

    render() {
      this.renderPageButtons()
      return this.container
    }
}

export default Header
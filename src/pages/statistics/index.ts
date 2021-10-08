import Page from "../../core/templates/page";

class StaticPage extends Page {
    static TextObject = {
       MainTitle: 'Statistic Page'
}
  constructor(id: string) {
    super(id);
}

 render() {
 const title = this.createHeaderTitle(StaticPage.TextObject.MainTitle)
 this.container.append(title)
 return this.container
}
}

export default StaticPage
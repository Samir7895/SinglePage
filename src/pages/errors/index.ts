import Page from "../../core/templates/page";

class ErrorsPage extends Page{
    private errorType: string

    static TextObject: { [prop: string]: string } = {
      '404':  'Error! The page was not found.'
    }
    constructor(id: string, errorType: string) {
        super(id);
        this.errorType = errorType
    }

    render() {
        const title = this.createHeaderTitle(ErrorsPage.TextObject[this.errorType])
        this.container.append(title)
        return this.container
    }
}

export default ErrorsPage
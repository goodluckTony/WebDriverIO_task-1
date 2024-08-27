const Page = require('./page');

class PastebinPage extends Page {
    get codeInput() { return $('#postform-text'); }
    get expirationDropdownOption() { return $('#select2-postform-expiration-container'); }
    get titleInput() { return $('#postform-name'); }
    get createPasteButton() { return $('//button[text()="Create New Paste"]'); }

    async enterCode(code) {
        await this.codeInput.setValue(code);
    }

    async selectExpiration(option) {
        await this.expirationDropdownOption.click();
        const expirationOption = await $(`//li[text()="${option}"]`);
        await expirationOption.click();
    }

    async enterTitle(title) {
        await this.titleInput.setValue(title);
    }

    async submitPaste() {
        // await this.createPasteButton.waitForClickable({ timeout: 5000 });
        await this.createPasteButton.click();
    }

    open() {
        super.open('https://pastebin.com');
    }
}

module.exports = new PastebinPage();
const PastebinPage = require("../pageobjects/pastebin.page.js");

describe("Create New Paste", () => {

  it("should create a new paste with the correct details", async () => {
    await PastebinPage.open();

    await PastebinPage.enterCode("Hello from WebDriver");
    await PastebinPage.selectExpiration("10 Minutes");
    await PastebinPage.enterTitle("helloweb");

    await browser.pause(10000);

    await PastebinPage.submitPaste();
  });
});

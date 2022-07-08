import MessagingPage from "../support/page_object/messagingPage";

const messagingPage = new MessagingPage();

describe("New spam attact", () => {
  it("visit home page", () => {
    cy.login();
  });
  it("Message icon click", () => {
    messagingPage.messageIcon().click();
  });
  it("Message icon click", () => {
    messagingPage.searchIcon().type("Liza{enter}").should("have.value", "Liza").wait(2000);
    cy.get("ul[class*=conversations-list]").children().eq(1).children("div").children("a").click();

    messagingPage
      .headerOfRecipient()
      .invoke("text")
      .then((recipientsName) => {
        const textMessage = `Hello, {backspace}${recipientsName}!We finally made it!!!)))`;

        const accountLetters = (a) => {
          let account = " ";
          for (let i = 0; i < a.length; i++) {
            account += "{backspace}";
          }
          return account;
        };
        const res = accountLetters(recipientsName);
        console.log(res);
        const firstPartOfText = "Hello, ";

        cy.get('div[role="textbox"]').type(firstPartOfText).type(recipientsName).type(`!\nWe finally made it!!!)))`);
      });
    // cy.get('button[type="submit"]').click();
  });
});

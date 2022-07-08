export default class MessagingPage {
  messageIcon = () => cy.get('li-icon[type="nav-small-messaging-icon"]');
  searchIcon = () => cy.get('input[name="searchTerm"]');
  headerOfRecipient = () => cy.get('h2[id="thread-detail-jump-target"]');
  fieldForTextMessage = () => cy.get('div[role="textbox"]');
  sendBtn = () => cy.get('button[type="submit"]');
}

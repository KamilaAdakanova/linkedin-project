export default class LoginPage {
  emailField = () => cy.get('input[id="session_key"]');
  passwordField = () => cy.get('input[id="session_password"]');
  bTnSubmit = () => cy.get('button[data-tracking-control-name="homepage-basic_signin-form_submit-button"]');
  emailField1 = () => cy.get('input[id="username"]');
  passwordField1 = () => cy.get('input[id="password"]');
  bTnSubmit1 = () => cy.get('button[data-litms-control-urn="login-submit"]');
  myNetwork = () => cy.get('[href="https://www.linkedin.com/mynetwork/invitation-manager/"]');
  showMoreBtn = () => cy.get('button[aria-label="Show more invitations"]');
}

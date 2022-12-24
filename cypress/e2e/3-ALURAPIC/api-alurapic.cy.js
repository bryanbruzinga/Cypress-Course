describe("Buscar fotos e dados", () => {
  it("buscar fotos do Flávio", () => {
    cy.request({
      method: "GET",
      url: "https://apialurapic.herokuapp.com/flavio/photos",
    }).then((r) => {
      expect(r.status).to.be.equal(200);
      expect(r.body).is.not.empty;
      expect(r.body[0]).to.have.property("description");
      expect(r.body[0].description).to.be.equal("Farol iluminado");
    });
  });

  it.only("fazer login do Flávio", () => {
    cy.request({
      method: "POST",
      url: "https://apialurapic.herokuapp.com/user/login",
      body: Cypress.env(),
    }).then((r) => {
      expect(r.status).to.be.equal(200);
      expect(r.body).is.not.empty;
      expect(r.body).to.have.property("id");
      expect(r.body.id).to.be.equal(1);
    });
  });
});

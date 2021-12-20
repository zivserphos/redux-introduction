describe("shopping list based on redux App", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });
  it("check out button will be disabled when cart is empty, also by default", function () {
    cy.get(".check-out").should("be.disabled");
  });
  it("check out button should be available when cart is not empty", function () {
    cy.get("button").first().click();
    cy.get(".check-out").should("not.be.disabled");
  });
  it("passing the limit of a product will not increse its amount", function () {
    cy.get("button:first").click();
    cy.get(".product-details:first").should("contain.text", "X 1");
    cy.get("button:first").click();
    cy.get(".product-details:first").should("contain.text", "X 2");
    cy.get("button:first").click();
    cy.get(".product-details:first").should("contain.text", "X 2");
  });
  it("should calcute correctly the price of a user cart", function () {
    let total = 0;
    cy.get(".add-to-cart").click({ multiple: true });
    cy.get(".product-details").then((a) => {
      //   products = Array.from(products);
      //   const a = products[0];
      const price1 = a.text().split("$")[0].split("$");
      console.log(price1);
    });
  });
});

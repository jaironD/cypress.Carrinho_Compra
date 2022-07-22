/// <reference types="cypress" /> 

context('Teste_Adicionar_Itens_Carrinho', ()=>{
    it('Adicionar itens no carrinho de compra', ()=>{
        cy.visit('http://automationpractice.com/index.php')

        cy.get('.sf-with-ul')
            .contains('Women').click()

        cy.get('.sfHoverForce')
            .contains('T-shirt')

        cy.get('#layered_id_attribute_group_1')
            .click()

        cy.get('#layered_id_attribute_group_2')
            .click()

        cy.get('#layered_id_attribute_group_3')
            .click()

        cy.get('#layered_id_attribute_group_14')
            .click()
        
        cy.get('select')
            .select('quantity:desc')
    })
})
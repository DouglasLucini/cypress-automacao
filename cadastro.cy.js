

describe ('Cadastro', () =>{
        it('Usuário deve se conectar', () => {
            
            cy.viewport(1440, 900)
            cy.visit('https://mundoazul.unicesumar.edu.br')
            cy.get('#loginUsuario div div div input').type('douglas.correa')
            cy.get('#loginSenha div div div input').type ('Dgs##40506098')
            cy.get ('#submit-button span p').click()
            cy.get('#mat-dialog-0 app-perfil-selector div div div div img').click()
        })


})
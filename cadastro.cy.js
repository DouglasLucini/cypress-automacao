

describe ('Cadastro', () =>{
        it('Usuário deve se conectar', () => {
            
            cy.viewport(1440, 900)
            cy.visit('https://mundoazul-dev.unicesumar.edu.br')
            cy.get('#loginUsuario div div div input').type('douglas.correa')
            cy.get('#loginSenha div div div input').type ('Dgs##40506098')
            cy.get ('#submit-button span p').click()
            cy.contains('Perfil Completo').click()
        })


})
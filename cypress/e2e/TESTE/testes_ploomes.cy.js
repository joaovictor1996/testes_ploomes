/// <reference types="cypress" />


describe('acessar o sistema, criar um negócio e um cliente', () => {


    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('acessar o sistema', () => {
        //logar no sistema, poderia estar dentro do beforeEach
        cy.viewport(1920, 1080)
        cy.visit('https://app.ploomes.com/Login.aspx?ReturnUrl=')
        cy.get('#Username').type('joaovictordasilvacosta1996@gmail.com')
        cy.get('#Password').type('Bleach0174.')
        cy.get('#Bt_Login').click()

        //asserts
        cy.contains('Publicações').should('exist')
        cy.contains('Tarefas do dia').should('exist')
        cy.contains('Situação dos negócios').should('exist')

    })


    it('cadastrar um cliente', () => {
        //logar no sistema, poderia estar dentro do beforeEach
        cy.viewport(1920, 1080)
        cy.visit('https://app.ploomes.com/Login.aspx?ReturnUrl=')
        cy.get('#Username').type('joaovictordasilvacosta1996@gmail.com')
        cy.get('#Password').type('Bleach0174.')
        cy.get('#Bt_Login').click()

        //criação do cliente
        cy.contains('Clientes').click()
        cy.contains('Novo cliente').click()
        cy.contains('Pessoa').click().wait(2000)
        cy.get('[name="contact_name"]').type('Empresa teste')
        cy.get('#select-fk-contactcompany-13').type('teste').wait(2000).type('{downarrow}').type('{enter}')
        cy.get('[name="contact_phones"]').type('00000000000')
        cy.get('[name="contact_email"]').type('teste@email.com')
        cy.get('#select-fk-contactrole-14').type('teste').wait(2000).type('{downarrow}').type('{enter}')
        cy.get('#select-fk-contactdepartment-15').type('teste').wait(2000).type('{downarrow}').type('{enter}')
        cy.contains('Salvar').click()

        //asserts
        cy.contains('Empresa teste').should('exist').wait(2000)
        cy.contains('Pessoa criada.').should('exist')

    })

    it('cadastrar um negócio', () => {
        //logar no sistema, poderia estar dentro do beforeEach
        cy.viewport(1920, 1080)
        cy.visit('https://app.ploomes.com/Login.aspx?ReturnUrl=')
        cy.get('#Username').type('joaovictordasilvacosta1996@gmail.com')
        cy.get('#Password').type('Bleach0174.')
        cy.get('#Bt_Login').click()

        //criação do negócio
        cy.contains('Negócios').click()
        cy.contains('Novo negócio').click().wait(2000)
        cy.get('[name="deal_title"]').type('Negócio teste')
        cy.get('[name="deal_amount"]').type('10000')
        cy.get('#select-fk-dealcontact-12').type('teste').wait(2000).type('{enter}')
        cy.get('#select-fk-dealperson-13').type('teste').wait(2000).type('{enter}')
        cy.get('#select-fk-dealtags-15').type('teste').wait(2000).type('{enter}')
        cy.get('#select-fk-dealorigin-14').type('site').wait(2000).type('{enter}')
        cy.contains('Salvar').click()

        //asserts
        cy.contains('Negócio teste').should('exist').wait(2000)
        cy.contains('Negócio criado.').should('exist')

    })

    it('teste api POST cliente', () => {
        cy.request({
            method: 'POST',
            url: `https://app52-api2.ploomes.com/Contacts`,
            headers: {
                'user-key': '6B2B83B5A6E6A16554082490727858F7DEEA2B7E51BFCE5EB5CD93B3CB86B81712F5CD90BD8AA77B6DC471B3DA0C02FA7531F550246D073CDA41D65FA3CD4825'
            },
            body: { "Name": "Teste api", "CompanyId": 400633180, "Phones": [{ "Type": { "Id": 1, "Name": "Comercial" }, "TypeId": 1, "PhoneNumber": "(00) 00000-0000", "Country": { "Id": 76, "Short": "BRA", "Short2": "BR", "Name": "BRASIL", "PhoneMask": "(99) 9999?9-9999" }, "CountryId": 76 }], "Email": "teste@email.com", "RoleId": 40019378, "DepartmentId": 40012376, "OwnerId": 40006462, "CityId": null, "CountryId": null, "StateId": null, "TypeId": 2 }
        }).then(res => {
            expect(res.status).to.be.equal(200)
            expect(res.value).is.not.null
        })
    })

    it.only('teste api POST negócio', () => {
        cy.request({
            method: 'POST',
            url: `https://app52-api2.ploomes.com//Deals`,
            headers: {
                'user-key': '6B2B83B5A6E6A16554082490727858F7DEEA2B7E51BFCE5EB5CD93B3CB86B81712F5CD90BD8AA77B6DC471B3DA0C02FA7531F550246D073CDA41D65FA3CD4825'
            },
            body:  {
                "Title": "Novo Negócio",
                "ContactId": 0,
                "Amount": 20,
                "StageId": 0,
                "OtherProperties": [
                    {
                        "FieldKey": "{fieldKey}",
                        "StringValue": "texto exemplo"
                    },
                    {
                        "FieldKey": "{fieldKey}",
                        "IntegerValue": 2
                    }
                ]
            } 
        }).then(res => {
            expect(res.status).to.be.equal(200)
            expect(res.value).is.not.null
        })
    })

})

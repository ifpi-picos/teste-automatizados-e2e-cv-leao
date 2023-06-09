Feature: Criar conta

    Scenario: Campo obrigatório “Nome Completo”
        Given o usuário vai criar uma conta
        And preenche corretamente o campo de ocupação no IFPI
        And preenche corretamente o campo e-mail
        And preenche corretamente o campo senha
        And preenche corretamente o campo de confirmar senha
        Then o botão de cadastrar não é liberado, pois para ser, precisa de todos os campos preenchidos
        When digita algo no campo de nome, o botão de cadastro é liberado
        Then quando apaga o que escreveu no campo nome, surge um mensagem vermelha de alerta avisando sobre a obrigatoriedade do campo

    Scenario: Campo obrigatório “Ocupação no IFPI”
        Given o usuário vai criar uma conta
        And preenche corretamente o campo de nome
        And preenche corretamente o campo de e-mail
        And preenche corretamente o campo senha
        And preenche corretamente o campo de confirmar senha
        Then o botão de cadastrar não é liberado, pois para ser, precisa de todos os campos preenchidos
        And clica no campo de ocupação no IFPI
        And clica em outro local na tela
        Then surge uma mensagem vermelha na tela indicando a obrigatoriedade do campo ocupação no IFPI

    Scenario: Campo obrigatório “E-mail”
        Given o usuário vai criar uma conta
        And preenche corretamente o campo de nome
        And preenche corretamente o campo de ocupação no IFPI
        And preenche corretamente o campo senha
        And preenche corretamente o campo de confirmar senha
        Then o botão de cadastrar não é liberado, pois para ser, precisa de todos os campos preenchidos
        And clica no campo e-mail
        And clica em outro local da tela
        Then surge uma mensagem vermelha na tela indicando a obrigatoriedade do campo e-mail

    Scenario: Campos preenchidos corretamente
        Given o usuário vai criar uma conta
        And preenche corretamente o campo de nome
        And preenche corretamente o campo de ocupação no IFPI
        And preenche corretamente o campo de e-mail
        And preenche corretamente o campo senha
        And preenche corretamente o campo de confirmar senha
        Then clica no botão de cadastrar
        And é direcionado para o feed de publicações de caronas do site

    Scenario: Criar conta que já é cadastrada
        Given o usuário vai criar uma conta
        And preenche o campo de nome com "Teste QA"
        And preenche o campo de ocupação no IFPI com "Aluno"
        And preenche o campo de e-mail com "preenchendocorretamente@gmail.com"
        And preenche o campo senha com "123456"
        And preenche o campo de confirmar senha com "123456"
        Then clica no botão de cadastrar
        And surge uma mensagem vermelha na tela avisando que o e-mail informado já está sendo utilizado
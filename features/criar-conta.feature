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
        When clica no campo de ocupação no IFPI e clica em outro local na tela
        Then surge uma mensagem vermelha na tela indicando a obrigatoriedade do campo ocupação no IFPI


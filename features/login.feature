Feature: Login

    Eu como usuário preciso logar no sistema para ter acesso as funcionalidades.

    Scenario: Login com usuário inexistente
        Given o usuário não possui uma conta
        And acessa a tela de login
        And preenche o campo e-mail com um e-mail não cadastrado
        And Preenche o campo senha
        When clica no botão de login
        Then o sistema apresenta uma mensagem de erro

    Scenario: Logando corretamente
        Given o usuário possui uma conta
        And acessa a tela de login
        And preenche o campo e-mail corretamente com "cv_user@gmail.com"
        And Preenche o campo senha corretamente com "123456"
        When clica no botão de login
        Then o sistema direciona o usuário para o feed de publicações
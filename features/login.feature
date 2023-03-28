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

    Scenario: Campo e-mail obrigatório
        Given o usuário vai fazer login
        And não preenche o campo de e-mail
        And preenche o campo de senha
        Then o botão de entrar não é liberado, pois os dois campos devem estar preenchidos
        When clica no campo de e-mail
        And clica em outro local da tela
        Then surge uma mensagem vermelha na tela informando que é obrigatório preencher o campo e-mail

    Scenario: Senha incorreta
        Given o usuário vai fazer login
        And preenche corretamente o campo de e-mail com "cv_user@gmail.com"
        And preenche o campo senha com "654321"
        When clica no botão entrar
        Then surge uma mensagem vermelha de alerta avisando que a combinação de e-mail/senha está incorreta
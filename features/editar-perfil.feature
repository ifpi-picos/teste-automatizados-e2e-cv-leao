Feature: Editar perfil

    Scenario: Editar nome
        Given o usuário vai editar seu nome no sistema
        And já está na tela de perfil
        And clica em editar perfil
        And modifica o campo de nome
        Then clica em salvar
        Then o nome é modificado na tela
        But ao ir para outro tela
        And voltar para a tela de perfil, o nome não foi atualizado de fato

    Scenario: Editar ocupação no IFPI
        Given o usuário vai editar sua ocupação no IFPI no sistema
        And já está na tela de perfil
        And clica em editar perfil
        And modifica o campo de ocupação no IFPI
        Then clica em salvar
        Then a ocupação é modificada na tela
        But ao ir para outro tela
        And voltar para a tela de perfil, a ocupação não foi atualizada de fato

    Scenario: Editar número do WhatsApp
        Given o usuário vai editar seu número de WhatsApp no sistema
        And já está na tela de perfil
        And clica em editar perfil
        And modifica o campo de número de WhatsApp
        Then clica em salvar
        Then o número de WhatsApp é modificada na tela
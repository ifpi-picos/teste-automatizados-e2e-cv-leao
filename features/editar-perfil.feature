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

    Scenario: Fazer modificações na tela de edição e clicar em cancelar para testar se não modifica algo
        Given o usuário vai editar as informações no perfil
        And já está na tela de perfil
        And clica em editar perfil
        And modifica os campos possíveis
        Then clica em cancelar
        But as informações da tela de perfil foram modificadas para as que o usuário digitou e cancelou
        But ao sair da tela de perfil
        And voltar para a tela de perfil, as informações voltam ao normal, pois não salvou
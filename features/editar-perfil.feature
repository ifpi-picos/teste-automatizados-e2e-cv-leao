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
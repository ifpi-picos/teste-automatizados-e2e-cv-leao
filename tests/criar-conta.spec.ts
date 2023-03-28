import { test, expect } from "@playwright/test";

test("Campo obrigatório “Nome Completo”", async ({ page }) => {
  await page.goto("https://proxima-parada.netlify.app/");
  await page.goto("https://proxima-parada.netlify.app/#/");
  await page.goto("https://proxima-parada.netlify.app/#/signin");
  await page.getByRole("link", { name: "Criar conta" }).click();
  await page.getByLabel("Ocupação no IFPI").click();
  await page.getByText("Aluno(a)").click();
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").fill("teste123456@gmail.com");
  await page.getByText("passwordSenha").click();
  await page.getByText("passwordSenha").click();
  await page.getByLabel("Senha", { exact: true }).fill("123456");
  await page.getByLabel("Comfirmar senha").click();
  await page.getByLabel("Comfirmar senha").fill("123456");
  await page
    .getByText(
      "perm_identityNome Completowork_outlineOcupação no IFPIAluno(a)mail_outlineE-mail"
    )
    .click();
  await page.getByLabel("Nome Completo").click();
  await page
    .getByText(
      "perm_identityNome Completowork_outlineOcupação no IFPIAluno(a)mail_outlineE-mail"
    )
    .click();
  await page.getByLabel("Nome Completo").click();
  await page.getByLabel("Nome Completo").fill("a");
  await page
    .getByText(
      "Erro ao conetar-se a internet!perm_identityNome Completowork_outlineOcupação no "
    )
    .click();
  await page.getByLabel("Nome Completo").click();
  await page.getByLabel("Nome Completo").fill("");
  await page.getByText("Nome Completo").click();
  await page.getByText("Obrigatório.").click();
  await page
    .getByText(
      "Erro ao conetar-se a internet!perm_identityNome CompletoObrigatório.work_outline"
    )
    .click();
});

test("Campo obrigatório “Ocupação no IFPI”", async ({ page }) => {
  await page.goto("https://proxima-parada.netlify.app/");
  await page.goto("https://proxima-parada.netlify.app/#/");
  await page.goto("https://proxima-parada.netlify.app/#/signin");
  await page.getByRole("link", { name: "Criar conta" }).click();
  await page.getByLabel("Nome Completo").click();
  await page.getByLabel("Nome Completo").fill("Teste QA");
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").fill("testeqa@gmail.com");
  await page.getByLabel("Senha", { exact: true }).click();
  await page.getByLabel("Senha", { exact: true }).fill("123456");
  await page.getByLabel("Comfirmar senha").click();
  await page.getByLabel("Comfirmar senha").fill("123456");
  await page
    .getByText(
      "perm_identityNome Completowork_outlineOcupação no IFPImail_outlineE-mailpassword"
    )
    .click();
  await page.getByRole("button", { name: "Ocupação no IFPI" }).click();
  await page
    .locator("section")
    .filter({
      hasText:
        "Próxima Parada O Próxima Parada é um sistema que irá facilitar o deslocamento en",
    })
    .click();
  await page.getByText("Obrigatório.").click();
  await page
    .getByText(
      "perm_identityNome Completowork_outlineOcupação no IFPIObrigatório.mail_outlineE-"
    )
    .click();
});

test("Campo obrigatório “E-mail”", async ({ page }) => {
  await page.goto("https://proxima-parada.netlify.app/");
  await page.goto("https://proxima-parada.netlify.app/#/");
  await page.goto("https://proxima-parada.netlify.app/#/signin");
  await page.getByRole("link", { name: "Criar conta" }).click();
  await page.getByLabel("Nome Completo").click();
  await page.getByLabel("Nome Completo").fill("Teste QA");
  await page.getByLabel("Ocupação no IFPI").click();
  await page
    .getByRole("option", { name: "Aluno(a)" })
    .locator("div")
    .first()
    .click();
  await page.getByLabel("Senha", { exact: true }).click();
  await page.getByLabel("Senha", { exact: true }).fill("123456");
  await page.getByLabel("Comfirmar senha").click();
  await page.getByLabel("Comfirmar senha").fill("123456");
  await page
    .getByText(
      "perm_identityNome Completowork_outlineOcupação no IFPIAluno(a)mail_outlineE-mail"
    )
    .click();
  await page
    .getByText(
      "perm_identityNome Completowork_outlineOcupação no IFPIAluno(a)mail_outlineE-mail"
    )
    .click();
  await page.getByLabel("E-mail").click();
  await page
    .getByText(
      "perm_identityNome Completowork_outlineOcupação no IFPIAluno(a)mail_outlineE-mail"
    )
    .click();
  await page.getByText("Obrigatório.").click();
});

test("Campos preenchidos corretamente", async ({ page }) => {
  await page.goto("https://proxima-parada.netlify.app/");
  await page.goto("https://proxima-parada.netlify.app/#/");
  await page.goto("https://proxima-parada.netlify.app/#/signin");
  await page.getByRole("link", { name: "Criar conta" }).click();
  await page.getByLabel("Nome Completo").click();
  await page.getByLabel("Nome Completo").fill("Preenchendo Corretamente 5");
  await page.getByLabel("Ocupação no IFPI").click();
  await page.getByText("Aluno(a)").click();
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").fill("preenchendocorretamente5@gmail.com");
  await page.getByLabel("Senha", { exact: true }).click();
  await page.getByLabel("Senha", { exact: true }).fill("123456");
  await page.getByLabel("Comfirmar senha").click();
  await page.getByLabel("Comfirmar senha").fill("123456");
  //await page.getByRole("button", { name: "Cadastrar" }).click();
  //await page.locator("div").filter({ hasText: "Erro ao conectar-se ao banco de dados!Nenhuma carona encontrada", }).nth(2).click();
});

test("Criar conta que já é cadastrada", async ({ page }) => {
  await page.goto("https://proxima-parada.netlify.app/");
  await page.goto("https://proxima-parada.netlify.app/#/");
  await page.goto("https://proxima-parada.netlify.app/#/signin");
  await page.getByRole("link", { name: "Criar conta" }).click();
  await page.getByLabel("Nome Completo").click();
  await page.getByLabel("Nome Completo").fill("Teste QA");
  await page.getByLabel("Ocupação no IFPI").click();
  await page.getByText("Aluno(a)").click();
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").fill("preenchendocorretamente5@gmail.com");
  await page.getByLabel("Senha", { exact: true }).click();
  await page.getByLabel("Senha", { exact: true }).fill("123456");
  await page.getByLabel("Comfirmar senha").click();
  await page.getByLabel("Comfirmar senha").fill("123456");
  await page.getByRole("button", { name: "Cadastrar" }).click();
  await page.getByRole("alert").click();
  await page.getByRole("alert").click();
});

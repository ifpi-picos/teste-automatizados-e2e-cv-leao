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

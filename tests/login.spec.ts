import { test, expect } from "@playwright/test";

test("Login com usuário inexistente", async ({ page }) => {
  await page.goto("https://proxima-parada.netlify.app/");
  await page.goto("https://proxima-parada.netlify.app/#/");
  await page.goto("https://proxima-parada.netlify.app/#/signin");
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").fill("testeqa@gmail.com");
  await page.getByLabel("Senha").click();
  await page.getByLabel("Senha").fill("123456");
  await page.getByRole("button", { name: "Entrar" }).click();
  await page.getByRole("alert").click();
});

test("Logando corretamente", async ({ page }) => {
  await page.goto("https://proxima-parada.netlify.app/");
  await page.goto("https://proxima-parada.netlify.app/#/");
  await page.goto("https://proxima-parada.netlify.app/#/signin");
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").fill("cv_user@gmail.com");
  await page.getByLabel("Senha").click();
  await page.getByLabel("Senha").fill("123456");
  await page.getByRole("button", { name: "Entrar" }).click();
  await page
    .locator("div")
    .filter({
      hasText:
        "Erro ao conectar-se ao banco de dados!Nenhuma carona encontradaOrigemCidade: Pic",
    })
    .nth(2)
    .click();
});

test("Campo e-mail obrigatório", async ({ page }) => {
  await page.goto("https://proxima-parada.netlify.app/");
  await page.goto("https://proxima-parada.netlify.app/#/");
  await page.goto("https://proxima-parada.netlify.app/#/signin");
  await page.getByLabel("Senha").click();
  await page.getByLabel("Senha").fill("123456");
  await page
    .getByText(
      "mail_outlineE-mailpasswordSenha Entrar Novo no Próxima Parada? Criar conta"
    )
    .click();
  await page
    .getByText(
      "mail_outlineE-mailpasswordSenha Entrar Novo no Próxima Parada? Criar conta"
    )
    .click();
  await page.getByLabel("E-mail").click();
  await page
    .getByText(
      "mail_outlineE-mailpasswordSenha Entrar Novo no Próxima Parada? Criar conta"
    )
    .click();
  await page.getByText("Obrigatório.").click();
  await page.getByText("Obrigatório.").click();
});

test("Senha incorreta", async ({ page }) => {
  await page.goto("https://proxima-parada.netlify.app/");
  await page.goto("https://proxima-parada.netlify.app/#/");
  await page.goto("https://proxima-parada.netlify.app/#/signin");
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").fill("cv_user@gmail.com");
  await page.getByLabel("Senha").click();
  await page.getByLabel("Senha").fill("654321");
  await page.getByRole("button", { name: "Entrar" }).click();
  await page.getByRole("alert").click();
  await page.getByRole("alert").click();
});

test("E-mail inválido", async ({ page }) => {
  await page.goto("https://proxima-parada.netlify.app/");
  await page.goto("https://proxima-parada.netlify.app/#/");
  await page.goto("https://proxima-parada.netlify.app/#/signin");
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").fill("aaaaaaaaa");
  await page.getByText("E-mail inválido.").click();
  await page.getByText("E-mail inválido.").click();
  await page.getByLabel("Senha").click();
  await page.getByLabel("Senha").fill("123456");
  await page
    .getByText(
      "mail_outlineE-mailE-mail inválido.passwordSenha Entrar Novo no Próxima Parada? C"
    )
    .click();
  await page.getByText("E-mail inválido.").click();
  await page.getByText("E-mail inválido.").click();
});

import { test, expect } from "@playwright/test";

test("Editar nome", async ({ page }) => {
  await page.goto("https://proxima-parada.netlify.app/");
  await page.goto("https://proxima-parada.netlify.app/#/");
  await page.goto("https://proxima-parada.netlify.app/#/signin");
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").fill("preenchendocorretamente@gmail.com");
  await page.getByLabel("Senha").click();
  await page.getByLabel("Senha").fill("123456");
  await page.getByRole("button", { name: "Entrar" }).click();
  await page.waitForTimeout(10000);
  await page.goto("https://proxima-parada.netlify.app/#/home/profile");
  await page.getByRole("button", { name: "Editar Perfil" }).click();
  await page.getByLabel("Nome Completo").click();
  await page.getByLabel("Nome Completo").press("ArrowRight");
  await page.getByLabel("Nome Completo").fill("Editando");
  await page.getByRole("button", { name: "Salvar" }).click();
  await page
    .getByRole("main")
    .locator("div")
    .filter({
      hasText:
        "Editando Aluno(a)preenchendocorretamente@gmail.comVeículo: Nenhum veículo cadast",
    })
    .nth(2)
    .click();
});

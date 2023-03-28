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
});

test("Editar ocupação no IFPI", async ({ page }) => {
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
  await page.getByRole("button", { name: "Ocupação no IFPI Aluno(a)" }).click();
  await page.getByText("Professor(a)").click();
  await page.getByRole("button", { name: "Salvar" }).click();
});

test("Editar número do WhatsApp", async ({ page }) => {
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
  await page.getByLabel("Número de Whatsapp").click();
  await page.getByLabel("Número de Whatsapp").fill("(89) 9 1111-1111");
  await page.getByRole("button", { name: "Salvar" }).click();
});

test("Fazer modificações na tela de edição e clicar em cancelar para testar se não modifica algo", async ({
  page,
}) => {
  await page.goto("https://proxima-parada.netlify.app/");
  await page.goto("https://proxima-parada.netlify.app/#/");
  await page.goto("https://proxima-parada.netlify.app/#/signin");
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").fill("preenchendocorretamente@gmail.com");
  await page.getByLabel("Senha").click();
  await page.getByLabel("Senha").fill("123456");
  await page.getByRole("button", { name: "Entrar" }).click();
  await page.goto("https://proxima-parada.netlify.app/#/home/profile");
  await page.getByRole("button", { name: "Editar Perfil" }).click();
  await page.getByLabel("Nome Completo").click();
  await page.getByLabel("Nome Completo").press("ArrowRight");
  await page.getByLabel("Nome Completo").fill("aaaaaaaa");
  await page.getByLabel("Ocupação no IFPI").click();
  await page.getByText("Professor(a)").click();
  await page.getByLabel("Número de Whatsapp").click();
  await page.getByLabel("Número de Whatsapp").fill("(22) 2 2222-2222");
  await page.getByRole("button", { name: "Cancelar" }).click();
});

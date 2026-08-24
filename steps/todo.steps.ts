import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test';

const { Given, When, Then } = createBdd(test);

Given('I am on the Todo application', async ({ todoPage }) => {
  await todoPage.goto();
});

Given('I have a todo item {string}', async ({ todoPage }, text: string) => {
  await todoPage.addTodo(text);
});

When('I add a todo item {string}', async ({ todoPage }, text: string) => {
  await todoPage.addTodo(text);
});

When('I mark the todo item {string} as completed', async ({ todoPage }, text: string) => {
  await todoPage.completeTodo(text);
});

Then('the todo item {string} should be visible', async ({ todoPage }, text: string) => {
  await todoPage.expectTodoVisible(text);
});

Then('the todo item {string} should be completed', async ({ todoPage }, text: string) => {
  await todoPage.expectTodoCompleted(text);
});

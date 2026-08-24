import { test as base } from 'playwright-bdd';
import { TodoPage } from '../pages/todo.page';

type FrameworkFixtures = {
  todoPage: TodoPage;
};

export const test = base.extend<FrameworkFixtures>({
  todoPage: async ({ page }, use) => {
    await use(new TodoPage(page));
  },
});

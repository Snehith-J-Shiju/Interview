import { expect, type Locator, type Page } from '@playwright/test';

export class TodoPage {
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;

  constructor(private readonly page: Page) {
    this.newTodoInput = page.locator('input.new-todo');
    this.todoItems = page.getByTestId('todo-item');
  }

  async goto(): Promise<void> {
    await this.page.goto('/todomvc/');
  }

  async addTodo(text: string): Promise<void> {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  todo(text: string): Locator {
    return this.todoItems.filter({ hasText: text });
  }

  async completeTodo(text: string): Promise<void> {
    await this.todo(text).getByRole('checkbox').check();
  }

  async expectTodoVisible(text: string): Promise<void> {
    await expect(this.todo(text)).toBeVisible();
  }

  async expectTodoCompleted(text: string): Promise<void> {
    await expect(this.todo(text)).toHaveClass(/completed/);
  }
}

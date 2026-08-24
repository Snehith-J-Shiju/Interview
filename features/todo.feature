@smoke
Feature: Todo management

  As a user
  I want to manage todo items
  So that I can track work I need to complete

  Background:
    Given I am on the Todo application

  Scenario: Add a new todo item
    When I add a todo item "Prepare for my Playwright interview"
    Then the todo item "Prepare for my Playwright interview" should be visible

  Scenario: Complete a todo item
    Given I have a todo item "Review BDD concepts"
    When I mark the todo item "Review BDD concepts" as completed
    Then the todo item "Review BDD concepts" should be completed

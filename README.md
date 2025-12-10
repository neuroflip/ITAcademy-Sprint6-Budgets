# Sprint 6 Budgets

## Introduction
This is the implementation of the ITAcademy Sprint6 - Budgets:

![project screenshot](/etc/screenshot.png)

* Note: the project is deployed in ghpages, but it does not work correctly because ghpages does not manage the app routes: [Budgets app in ghpages](https://neuroflip.github.io/ITAcademy-Sprint6-Budgets/)

### Features

## Install and run

1. Clone this repo:
```bash
$ git clone https://github.com/neuroflip/ITAcademy-Sprint5-ImageGallery.git
```
2. Install the dependencies:
```bash
$ npm install
```
3. Run in dev mode:
```bash
$ npm run dev
```
4. Or run it on production mode:
```bash
$ npm run build
$ npm run preview
```
5. Run the tests:
```bash
$ npm run test
```
6. Run the tests report in browser:
```bash
$ npm run test:ui
```
7. Run the tests coverage
```bash
$ npm run test:coverage
```
8. Run the linter analisis:
```bash
$ npm run lint
```

<br>

## Project structure

The project is structured with the next philosophy:
 - src/components: common components used broadly like ModalInfo, ClipboardCopySharer, Header or ErrorBoundary
 - src/features: components organized by app feature:
    - budgetCreation: creation form, service card, service extras
    - budgetsListing: budget list, order and filter
    - budgetsManagement: main feature that implements the budget services, form and budget list
    - budgetView: detail view for a budget 
 - src/pages for the app router:
    - landing: for the root route / 
    - budgets: for the /budgets route (to create and budget listing)
    - budget: for /budget/:id route (to view a budget using his url link)
 - src/BudgetDataManager: manager using a data provider to manage the budgets data for the app

As always the BudgetDataManager gets the provider using dependency injection to easily add new providers (or for testing).

## Components diagram: 

![Project components diagram](/etc/componentsDiagram.png)

## Considerations
- some components have a custom hook to separate the ui from the logic
- used data types:
  - BudgetService: implements the data needed to manage a budget service and his extras (like in web service to manage languages and pages)
  - BudgetServiceForCard: extends the BudgetService used in the services cards
  - BudgetData: implements a budget with all the data including the request and all the services for that budget.
- BudgetsDataManager is the data controller with get and save functionallity. It uses internally a data provider that is an injected dependency at creation time. The current provider implemented is a LocalStorage data provider, but it is easy to implement and inject a new one using DB, memory or any other method.
- testing:
  - not all the components are fully tested
  - inside features/budgetCreation there are some end2end tests based on load a budgetsManager and interact with it (budget request creation and budget cost after click to add sewrvices to a budget).
  - inside features/budgetsListing there are some end2end tests to check the budget listing feature, including ordering and filtering the budgets.


## CI pipeline

The project is managing a CI process using test execution and eslint execution using github actions. Check file .github/workflows/main.yml for more information. This pipeline is executed when some developer wants creates a PR to integrate into main (as example).

![alt ci pipeline execution result in a correct PR](/etc/ci.png)

<br />

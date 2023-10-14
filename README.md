# RecruitmentApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Comments

As described in task - had timer for 120 minutes so I had to skip few things:

- skipped error handling
- skipped most of the tests - usually I would test business logic from application and some minimal UI testing in components (IMO UI testing should be done by testers if they are in a team in e2e tests)
- skipped hiding of ngrx store/effects logic behind interfaces
- pages could be split into container and page where page is just a plain component used in routing and container has access to store
- data table search should be debounced
- double click on row for some reason was not working for me so I did it on click instead
- update of todos should be done as action not directly in component
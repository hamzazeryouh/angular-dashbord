# AngularDashbord

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Install Tailwind CSS with Angular
Setting up Tailwind CSS in an Angular project.


Create your project
Start by creating a new Angular project if you don’t have one set up already. The most common approach is to use Angular CLI.

Terminal

ng new my-project
cd my-project
Install Tailwind CSS
Install tailwindcss via npm, and then run the init command to generate a tailwind.config.js file.

Terminal

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/styles.css file.

styles.css

@tailwind base;
@tailwind components;
@tailwind utilities;
Start your build process
Run your build process with ng serve.

Terminal

ng serve
Start using Tailwind in your project
Start using Tailwind’s utility classes to style your content.

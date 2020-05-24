# E-commerce

This is an Ecommerce Project implemented using Angular 4.


## How to start

You will need to clone the source code of online-store GitHub repository.

`git clone .....

After the repository is cloned, go inside of the repository directory and install dependencies:

```
cd online-store
npm install
```
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
#### Units to be tested
1. Category Page
    * test shopping cart, add a duplicate item should increment the quantity for that item.
2. Product Page, test add to cart button
    * Add 1 first item.
    * When quantity is null.
    * Add duplicate item.
3. Cart Page
    * change quantity.
    * remove item.


# Giphy Fitness Mood

https://giphy-fitness.web.app

## A simple Vue 3.0 application built in 3~ hours that fetches images with the subject 'fitness' from the giphy API
Using the following tools and techniques:

* Vue 3.0 - https://v3.vuejs.org/
* Vuex - Redux style data storage for Vue https://vuex.vuejs.org/guide/
* Vue CLI - The CLI for Vue for easy project setup https://cli.vuejs.org
* Babel - Used to compile and lint the application
* The Giphy Rest API - https://developers.giphy.com/explorer
* Eslint to lint the code - https://eslint.org/
* NVM and NPM to manage packages - https://github.com/nvm-sh/nvm
* Google Firebase for easy deployment purposes - https://firebase.google.com/

## In a more extensive scenario I would (at least) add

* Either Jest or Mocha for Unit Testing
* A Server side layer to properly hide the key used in the Giphy Helper
* A Service worker to optimize the loading of the calls
* A proper css precompiler like sass or less
* A lightweight css framework like Tailwind

## Project setup
```
nvm install
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

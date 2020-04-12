# ts-lint tester

This is a test project to build an express application plug to an external library

## Goals

* Bundle an express application with webpack & typescript
* Take advantage of Tree-shaking by filtering unused class in final bundle
* Analysing how to decrease bundle size by using 'smart' import on library
* Allow quick development

## Architecture

This project is split into 2 npm module :
* `lib` : Hold the services to package as typescript library. This is not exported in npm repositry yet, so it's needed to use `link`
* `demo` : Express application using the external lib for services

## Get started

### Install

A. **Library :**
1. Go to Library : `cd lib`
2. Library **install :** `npm install`
3. Library **build :** `npm run build`
4. Library **link :** `npm run link`

B. **Application :**
1. Go to application : `cd demo`
2. App **install :** `npm install`
3. App **link previous lib:** `npm run link-lib`


### Build

Go to application : `cd demo`

**Start :** `npm run start`

**Build :** `npm run build`

**Build prod :** `npm run build-prod`

**Analyse bundle :** `npm run analyse` (build-prod first)

## Usefull links : 

* [Build and publish lib with typescript](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c?gi=cfc0e0123d83)
* [Compiling and bundling TypeScript libraries with Webpack](https://marcobotto.com/blog/compiling-and-bundling-typescript-libraries-with-webpack/)
* [Express webpack app](https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334)
* [Express typescript app](https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript)
* [Lib with CI & documentation](https://medium.com/@nilayvishwakarma/build-an-npm-package-with-typescript-by-nilay-vishwakarma-f303d7072f80)
Utils :
* [webpack - tester](https://github.com/cevex/webpack-tester)
* [Script helper](https://github.com/shelljs/shx)


## RentoMojo Server
This is the Backend of the rentomojo_assignment. The server has been developed using Node.Js and Express.
The server is deployed at Heroku with the link provided in the description. The database used is MongoDB using `mongoose` as the connector.

## Deploying the Application
```sh
git clone https://github.com/arealdeadone/rentomojo_server.git
cd rentomojo_server
npm i
npm start
``` 

## Directory Structure
```
|-- rentomojo_server
    |-- .gitignore
    |-- .gitmodules
    |-- app.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- .idea
    |   |-- encodings.xml
    |   |-- jsLibraryMappings.xml
    |   |-- misc.xml
    |   |-- modules.xml
    |   |-- rentomojo_server.iml
    |   |-- vcs.xml
    |   |-- workspace.xml
    |   |-- runConfigurations
    |       |-- bin_www.xml
    |-- bin
    |   |-- www
    |-- config
    |   |-- passport.js
    |-- models
    |   |-- comment.js
    |   |-- db.js
    |   |-- user.js
    |-- public
    |   |-- es2015-polyfills.js
    |   |-- es2015-polyfills.js.map
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- main.js
    |   |-- main.js.map
    |   |-- polyfills.js
    |   |-- polyfills.js.map
    |   |-- runtime.js
    |   |-- runtime.js.map
    |   |-- styles.js
    |   |-- styles.js.map
    |   |-- vendor.js
    |   |-- vendor.js.map
    |-- rentomojo-frontend
    |   |-- .editorconfig
    |   |-- .git
    |   |-- .gitignore
    |   |-- angular.json
    |   |-- directoryList.md
    |   |-- package-lock.json
    |   |-- package.json
    |   |-- README.md
    |   |-- tsconfig.json
    |   |-- tslint.json
    |   |-- e2e
    |   |   |-- protractor.conf.js
    |   |   |-- tsconfig.e2e.json
    |   |   |-- src
    |   |       |-- app.e2e-spec.ts
    |   |       |-- app.po.ts
    |   |-- src
    |       |-- bootstrap.css
    |       |-- browserslist
    |       |-- favicon.ico
    |       |-- index.html
    |       |-- karma.conf.js
    |       |-- main.ts
    |       |-- polyfills.ts
    |       |-- styles.scss
    |       |-- test.ts
    |       |-- tsconfig.app.json
    |       |-- tsconfig.spec.json
    |       |-- tslint.json
    |       |-- app
    |       |   |-- app-routing.module.ts
    |       |   |-- app.component.html
    |       |   |-- app.component.scss
    |       |   |-- app.component.spec.ts
    |       |   |-- app.component.ts
    |       |   |-- app.module.ts
    |       |   |-- components
    |       |   |   |-- comments
    |       |   |   |   |-- comments.component.html
    |       |   |   |   |-- comments.component.scss
    |       |   |   |   |-- comments.component.spec.ts
    |       |   |   |   |-- comments.component.ts
    |       |   |   |-- login
    |       |   |   |   |-- login.component.html
    |       |   |   |   |-- login.component.scss
    |       |   |   |   |-- login.component.spec.ts
    |       |   |   |   |-- login.component.ts
    |       |   |   |-- navbar
    |       |   |   |   |-- navbar.component.html
    |       |   |   |   |-- navbar.component.scss
    |       |   |   |   |-- navbar.component.spec.ts
    |       |   |   |   |-- navbar.component.ts
    |       |   |   |-- post
    |       |   |   |   |-- post.component.html
    |       |   |   |   |-- post.component.scss
    |       |   |   |   |-- post.component.spec.ts
    |       |   |   |   |-- post.component.ts
    |       |   |   |-- register
    |       |   |       |-- register.component.html
    |       |   |       |-- register.component.scss
    |       |   |       |-- register.component.spec.ts
    |       |   |       |-- register.component.ts
    |       |   |-- models
    |       |   |   |-- comments.ts
    |       |   |   |-- dataInterfaces.ts
    |       |   |-- services
    |       |       |-- auth-guard.service.spec.ts
    |       |       |-- auth-guard.service.ts
    |       |       |-- authentication.service.spec.ts
    |       |       |-- authentication.service.ts
    |       |-- assets
    |       |   |-- .gitkeep
    |       |-- environments
    |           |-- environment.prod.ts
    |           |-- environment.ts
    |-- routes
        |-- comments.js
        |-- index.js
        |-- users.js
```

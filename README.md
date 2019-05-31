# Burger Assignment - Node with SQL in Heroku

This is Week 15 assignment and is a Heroku deployed NodeJS application that uses an SQL DB (Heroku JawsDB) to persist data.

## Pre-requisites

Only requirement is an internet connection to get the application to laod.

Application can be accessed at: [https://node-burgers-with-sql.herokuapp.com/](https://node-burgers-with-sql.herokuapp.com/)

## Using The Application

Burgers is an application where you can see a list of Burgers that have been created, a list of burgers that have been devoured, and a section to create a new burger.

### Add a burger

In the section of "Add a Burger" the user can add any special burger order and then hit the button called: "Add a Burger". This will then add the burger in the list of "Burgers that have not been devoured"

### Devouring a burger

Next to each created burger, there is a devour button which allows the user to "virtually devour" the burger. When the burger is "devoured", it will move to the list labeled as: "Burgers that have been devoured"

## Folder and file Structure

Application code can be downloaded and checked at: [Github Link](https://github.com/jckozy86/burger)

```
server.js -> main file to run
package.json -> file containing all dependencies
yarn.lock -> file containing exact module version dependencies
/config 
  |
  | connection.js -> file containing db connection details, for both local dev and production (heroku) deployment
  | orm.js -> file containing the create and update operations, converting objects and strings to SQL queries
  |
/controllers
  |
  | burgerController.js
  |
/db
  |
  | schema.sql
  | seeds.sql
  |
/models
  |
  | burger.js
  |
/public
  |
  | /assets
  |   |
  |   | /css
  |        |
  |        | style.css
  |     /js
  |        |
  |        | burgers.js
  |  
/views
  |
  | /layouts
  |    |
  |    | main.handlebars
  |
  | /partials 
  |    |
  |    | /burgers
  |        |
  |        | burger-block.handlebars
  |
  | index.handlebars
```

### Thanks for checking my application out :D

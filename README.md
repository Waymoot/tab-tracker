# tab-tracker
A Vue.js project to createa fullstack back-end (express, axios, sqllite) and front-end (vue & vuex) for a Tab tracking application.

This project is made possible because of the freeCodeCamp YouTube 7-part course [Full Stack Web App using Vue.js & Express.js](https://www.youtube.com/watch?v=Fa4cRMaTDUI&list=PLP-KyJ8QTba7l57DsNpDPs3ToyhFONtKe&t=3s&index=8)


## Part 1

I am developing this on Windows 10 and that has it's own little problems as most *(read 'all')* of developers showing stuff are Mac *(which I despise)* users. As a long time Webstorm user I thought it would also be fun to get to try Visual Studio Code. This made the start of the project extra hard as I had to spend quite some time getting the development environment up to speed with plug-ins and keybindings.

### Visual Studio Code
The Extensions I downloaded to get comfortable:
* [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) To have the "github" look of the Markdown preview in VSC.
* [Vue.js Extension Pack](https://marketplace.visualstudio.com/items?itemName=mubaidr.vuejs-extension-pack) this seemed to be helpful
* [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets) I watched "Cody" use a similar extension to create the vue scaffolding for new .vue files and wanted the same functionality and this seemed to provide it.

### Problems I encountered
**Postman problems**  
The biggest problem was with the suggested "Postman" addon for chrome to test server endpoints. Cody (the developer) had created a "preset" for Postman where he selected JSON(application/json) from the list of supported post formats.
This effectivly hid the fact that his JSON POST was adding the correct header *(Content-type: application/json)* to use for posting in JSON to the code.
If you followed the course this "little detail" was hidden en not mentioned and created quite the problem for me as the code did not work for me as "body-parser" requires that application/json Content-type header to work so I got an empty "req" every time.  
The current version of Postman is quite different from the one Cody used and I never got the "presets" to work like he had them working so I ended up going back to my trusted Firefox and installed an extension called [Rested](https://addons.mozilla.org/en-US/firefox/addon/rested/?src=github) instead that worked fine for me.

## Part 2

Boy oh boy did I spend way to much time hunting down problems that in the end was typing errors.  
First up I erroneously typed `module.export` instead of `module.exports` which created lots of odd errors.  
Secondly in the User.js model Cody made a small change where he did not define the module.exports with the normal {} for it to be returned automatically 
```javascript
module.exports = (sequelize, DataTypes) => {
    sequelize.define('User',{
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
        })
}
```
and the correct one without the {}
```javascript
module.exports = (sequelize, DataTypes) => 
    sequelize.define('User',{
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
        })
```
I also got errors from the latest sequelize saying:  
`sequelize deprecated String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators`  
no solution just yet, and it seems to work fine so far.


#### Links to sources I used during this project
* [Github MarkDown cheat-sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)
* [Sequelize ](http://docs.sequelizejs.com/)
* [Writing cross-platform Node.js](https://shapeshed.com/writing-cross-platform-node/)
* [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
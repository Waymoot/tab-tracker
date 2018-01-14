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

## Part 3
**Warning: There is a bug (in the latest 4.29.3 sequelize) where the hooks run multiple times so bcrypt hashes the password "more than one time" when saving it so you can never login**  
There are two fixes:
1. Downgrade to "sequelize": "^4.8.0" as it is in the github project for Cody.  
2. Update the code according to the text below.  
 
[Link to comment on YouTube that posted the solution](https://www.youtube.com/watch?v=H6hM_5ilhqw&lc=UgyI8XHGZVvdeA0jV_p4AaABAg.8a6ppCH5pRB8aPi02ABW9a)  
It involves removing two of the hooks from the User object as seen below.  
The code below works for me now.  
```javascript
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
        },{
            hooks: {
                // ### remove these two hooks or it will never work (at the moment) ###
                // beforeCreate: hashPassword,
                // beforeUpdate: hashPassword,
                beforeSave: hashPassword
            }
        })
        User.prototype.comparePassword = function (password) {
            return bcrypt.compareAsync(password, this.password)
        }

        return User
    }
```
## Part 4
No major issues. It is just a lot of typing and looking up what things do.  
Cody uses some fancy "tricks" he learnt like Object.keys and I still are not 100% sure what !! does (never used it).

## Part 5
Finaly getting the hang of some of the vue things. I paued and "did the work" before Cody and it worked most of the time.  
Typing is important and also checking everything. Missing a comma and you end up regretting it.  
Small moves... small moves...

## Part 6
Spelling....  
User - users - user it's important.  
Also some "behind the scene" editing made me comfused.  
This episode was the most hectic and confusing but it was also lots of refactoring.  

Love the seed function but I messed up the json so could not login on the data and I ended up having to install a sqlite file reader to look in the database to see the problem (I thought the sequelize problem was causing the erorr and the password was hased wrong).

## Part 7  
I think I found a "bug" on the SongMetadata.vue after you reworked the bookmarks to be an array.  
The wrong buttons are shown if the song does not have a bookmark because the buttons test for `v-if="isUserLoggedIn && !bookmark"`
The `if (bookmarks.length)` test works if there are items returned, but if there are no bokmark an empty array is returned _(as seen in the video when Cody test the code)_. 
So I simply added `else { this.bookmark = null }` and now when you enter a Song you never bookmarked the correct button is shown.
```javascript
try {
    // rework this to work for bookmarks now returning an arrays
    const bookmarks = (await BookmarksService.index({
        songId: this.song.id,
        userId: this.user.id
    })).data
    if (bookmarks.length) {
        this.bookmark = bookmarks[0]
    } else {
        this.bookmark = null
    }
    } catch (error) {
    console.log(error)
}
```


#### Links to sources I used during this project
* [Github MarkDown cheat-sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Sequelize ](http://docs.sequelizejs.com/)
* [Writing cross-platform Node.js](https://shapeshed.com/writing-cross-platform-node/)
* [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
* [Vuetify Material Component Framework](https://vuetifyjs.com/)
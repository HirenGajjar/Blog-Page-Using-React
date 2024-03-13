# Blog-Page-Using-React
This is a blog post using react and app write.


## Day 1
App write is Back-end As a Services. Tiny MCE is reach text editor.
As we are saving blog text content in HTML which can not be render directly, so we will parse it using react parser.
We will use react forms.

In production, as react is a front end framework, and it will display all the text to browser, therefore there are few variables are created as a system variables which are only for system and not for UI or users.
Such variables are writen in .env files, which are must be created inside the root of the project.
.env file will not be uploaded to github or any open source platform and added as a gitignore.

But then we need some of that data in order to make application function properly therefore we create another file called .env.sample, and all the variable in .env.sample file will always be empty.

The way to access the variables in .env file can be using process.env.variable_name for *** apps which are created using create-react-app ***

for vite it is import.meta.env.variable_name.

### Here all the variable values we recieved from Appwrite are string, but in some case it can be other data type and variables in .env files are only can be string and if the ids are not string then it is good practice to make a saperate js file which configs the same variables values to string and original values in .env remains string, and we do it by making and exporting an onject which convertes all values to string and it is also a good production level practice.


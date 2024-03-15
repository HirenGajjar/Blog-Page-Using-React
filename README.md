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


## Day 2

Vendor loc-in, a situation where an app depends on a vendor's services and it become a challenging to switch to another vendor in future like in this case application is on appwrite but in future if incase of switch to other vendor service provider like firebass, it is logical and easy to use Services class and methods that despite using any vendor maintaince the independency of application.

Secondly appwrite direclty provides the services like authentication and other, but in this app or in generally using direct service from vendor just creates single user account and verifies it, instead , why not create a class and method that can be called to create an account and verify or for authentication.

```js

export class AuthService {

}

const authService = new AuthService();
export default authService;

```

Here we craeted a class for autherising service and instead of exporting class it self we exported the object of class, which means user can direclty access all the services of class without calling class each time while needed.

-> Here auth.js file has a class that creates new client, and account using appwrites service as we have appwrite as a backend. Here note is *** instead of creating single user and varifing login and signup *** we created a method called createAccount(), it takes email, password, and name as arguments - in try block we use appwrite's create method on account to create a new account and class constructor sets the endpoints for appwrite url and project ID.
In create method in documentation, it requires a unique ID which can be get by ID from conf file and using unique() method. Once the account is checked we make it login using email and password. If not created then backs to userAccount.

-> Similarly, login method takes email and password and using createEamilSession method of appwrite we make user login. For logout we delete the session, Here there are two ways one is just deleteSession() and another is deleteSessions(), second one will kill all the login from all the devices.

-> getCurrentUser() is a method that checks any user is logged in or not using get() method of account, because login creates a session for user and get() method returns a session if user is login.
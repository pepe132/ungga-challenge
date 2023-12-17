In this repository, you'll find an existing Backend project. The challenge is to develop the backend for this application, which will function as an interactive bot and communicate with the web interface through an API.


**Objective**: Develop a backend that serves as an assistant using ChatGPT and communicates with the web interface through an API. We extract the message from the user and saved the appointment into the database and if it exists the date appointment chat gpt API helps us to give to the user a message saying that he needs to change the date 

**Language and Technology**: The used language was typescript, integrating express framework and additional libraries and packages that can be installed accessing to the assistant-backend folder and executing the following command: npm install --save

When We have installed all the packages and necessary tools, We can start out project using the following two commands: First of all, npx tsc --watch to have the dist folder in which we can run the typescript project and when we see that dist folder is there, nex to this we can run: npm run dev to run the application

**packages used**

 "body-parser": "^1.20.2",
	"compromise": "^14.10.1",
	"cors": "^2.8.5",
	"dotenv": "^16.3.1",
	"express": "^4.18.2",
	"mongodb": "^6.3.0",
	"mongoose": "^8.0.2",
	"nodemon": "^3.0.1",
	"openai": "^4.20.1"

**Data Storage**: The database uses for this project was MongoDB, Here is the string connection: mongodb+srv://ungga_user:w9DTyJ4KH1UlYux7@cluster0.s4zje.mongodb.net/chatBD

the DataBase name is chatBD and the collection name is conversations 

**Notes**

We need to use an API key for api chat gpt, if you need an api key you can tell me for executing the project correctly


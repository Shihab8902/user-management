## Live Site - https://usermanagementbyshihab.netlify.app/

### Technology used- 
1. React.js
2. Express.js
3. MongoDB (mongoose)


# Things to follow for running the project locally

- ## Server Side
---
<b>Please note</b>: The server side of the project is hosted on vercel. If you want to run the client side only you can skip this part.

- <b>Step-1:</b> Clone the git repository.

```
git clone <repository url>
```

- <b>Step-2:</b> Change your directory to sever folder using ` cd server`.

- <b>Step-3:</b> Run ` npm i` to install all the required dependencies.

- <b>Step-4:</b> Rename the ` .env.example ` file with ".env" and replace ` DB_URI ` with your actual mongodb database uri.


- <b>Step-5:</b> Insert required data in your database. The database name should be ` userDB`. You can find the dummy json data [here](https://codefile.io/f/v4RLTHqf5K).

- <b>Step-6:</b> Create a collection name ` attachments` in your database and insert the dummy data.

- <b>Step-7:</b> Run ` npm start` to start the server.

---

- ## Client Side
<b>Note:</b> If you want to run the client side with local server you need to replace the vercel api domains with ` http://localhost:9000`.

- <b>Step-1:</b> Change your directory to client folder using ` cd client`.

- <b>Step-2:</b> Run ` npm i` to install all the required dependencies.

- <b>Step-3:</b> Run ` npm run dev` to start the project.




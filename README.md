## TODOs
1. Create a server with a healthcheck route
    - X install Express
    - x create app.js
    - x server.js files
    - x create our get / handler (healthcheck route)
    - x listen on a port
    - x listen on a port determined by an envvar

2. Create a /students route

3. Create a /students/:id route

## Questions to answer
### Creating a server
X Why did Jordan set the main entry point to "app" instead of "server" in the package.json and is there a difference?

X What is the difference between response.send("Hello world!") and the response.json?

Should we gitignore the .env file?

If the request gets an error, does it ever make it to the server or does it get an error before it gets to it?

What if a request causes an error and express is no longer running? How are we going to handle this issue?

### Building routes
why is it important to have a return inside of an if block when you already have a response?

Is there a specific order we have to write our routes in our controllers?

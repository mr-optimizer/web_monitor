const app = require("./app");

// Handle Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shuting down the server due to Uncaught Exceptions");
  server.close(() => {
    process.exit(1);
  });
});


const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT}`
  );
});

// Handle unhandled Promise rejection (ex- unexpected change in mongoDB server url)
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shuting down the server due to Unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});

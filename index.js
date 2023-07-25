const express = require("express");
const hbs = require("express-handlebars");
const methodOverride = require("method-override");
const { clientRouter } = require("./routers/client");
const { homeRouter } = require("./routers/home");
const { db } = require("./utils/db");
const { handleError } = require("./utils/errors");

const app = express();

app.use(methodOverride("_method"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.static("public"));

app.engine(".hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use("/", homeRouter);
app.use("/client", clientRouter);
// app.get("/test", (req, res) => {
//   db.update("53457e59-f89b-42a7-a2dc-5cb9184e5584", {
//     name: "Tester2",
//   });
//   res.send(db.getOne("53457e59-f89b-42a7-a2dc-5cb9184e5584").name);
// });

app.use(handleError);

app.listen(3000, "localhost", () => {
  console.log("Listening on http://localhost:3000");
});

// ReplIt
// app.listen(3000, "0.0.0.0")

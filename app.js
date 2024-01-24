const express = require("express");
const redis = require("redis");

const app = express();
const port = 5000;

const client = redis.createClient({
  url: "redis://redis:6379",
});
(async () => await client.connect())();

client
  .on("connect", () => {
    console.log("Redis Connected");
  })
  .on("error", (err) => {
    console.log(err);
  })
  .set("hits", 0);

app.listen(port, () => {
  console.log(`counter app listening on port 5000`);
});

app.get("/", async function (req, res) {
  client.incr("hits");
  const getHits = await client.get("hits");
  res.end(
    `<h1>Welcome From Web Service Container! <br> Hit-Counter reached: ${getHits}</h1>`
  );
});

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/exampleApp", { useNewUrlParser: true })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));

const Cat = mongoose.model("Cat", { name: String });
const kitty = new Cat({ name: "Ironhacker" });

kitty
  .save()
  .then(newCat => console.log(`A new cat is created: ${newCat}!`))
  .catch(err => console.log(`Error when creating a cat: ${err}`));

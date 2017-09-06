const app = "I don't do much."

function Sandwich(bread, ingredients, cut, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  this.name = name;
}

function serve(customer) {
    console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
}

var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "rectangle", "BLT");
var reuben = new Sandwich("rye", ["corned beef", "sauerkraut", "swiss", "russian dressing"], "diagonal", "Reuben");

serve.apply(blt, ["Sara"]);
serve.call(reuben, ["Dylan"]);

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

deliverFood.call(blt, "Terry", "4");
deliverFood.apply(reuben, ["Jesse", "15"]);

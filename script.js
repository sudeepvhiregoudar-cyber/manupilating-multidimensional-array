// Helpers: mimic PHP's print_r() and page output
function printR(value, indent = 0) {
  if (value === null || typeof value !== "object") return String(value);
  const pad = " ".repeat(indent);
  let out = "Array\n" + pad + "(\n";
  Object.keys(value).forEach((key) => {
    out += pad + "    [" + key + "] => " + printR(value[key], indent + 8) + "\n";
  });
  return out + pad + ")\n";
}

const output = document.getElementById("output");

function heading(text) {
  const h = document.createElement("h3");
  h.textContent = text;
  output.appendChild(h);
}

function pre(text) {
  const p = document.createElement("pre");
  p.textContent = text;
  output.appendChild(p);
}

function line(text) {
  output.appendChild(document.createTextNode(text));
  output.appendChild(document.createElement("br"));
}

// ===================================================
// PART 1: Multidimensional INDEXED array (details)
// Fields order: name, address, age, gender
// ===================================================
const details = [
  ["Sudeep", "Hubballi", "21", "Male"],
];

// Add one more array
details.push(["Ash", "Tokyo", "20", "Male"]);

// Delete the first item (name) from the 0th index array
delete details[0][0];

heading("Details after deleting first item of row 0");
pre(printR(details));

// Display only cities (address is at index 1 in every row)
heading("Cities");
details.forEach((row) => line(row[1]));

// Display the entire array from the last index
heading("Last array in $details");
pre(printR(details[details.length - 1]));

// ===================================================
// PART 2: Multidimensional ASSOCIATIVE array (product_details)
// Keys: product_name, price, date, address
// ===================================================
const product_details = [
  { product_name: "Laptop", price: 1000, date: "05-01-2024", address: "Dharwad" },
];

// Add one more array
product_details.push({
  product_name: "TV",
  price: 2000,
  date: "06-01-2024",
  address: "Hubli",
});

// Delete the first array item (first record)
delete product_details[0];

heading("Product details after deleting first item");
pre(printR(product_details));

// Display the product_name of the date 06-01-2024
heading("Product on 06-01-2024");
product_details.forEach((product) => {
  if (product.date === "06-01-2024") line(product.product_name);
});

// Display the last array/list
heading("Last array in $product_details");
pre(printR(product_details[product_details.length - 1]));

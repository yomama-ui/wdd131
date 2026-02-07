const products = [
  { id: "p100", name: "Cordless Drill" },
  { id: "p101", name: "Voltage Tester" },
  { id: "p102", name: "Wire Stripper" },
  { id: "p103", name: "Multimeter" }
];

const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

const prices = document.querySelectorAll(".prices");

let total = 0;

prices.forEach((price) => {
	total += Number(price.textContent);
});

const tr = document.createElement("tr");
tr.id = "ans";

const td = document.createElement("td");
td.colSpan = 2;
td.textContent = total;

tr.appendChild(td);

document.querySelector("table").appendChild(tr);
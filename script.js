const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach((p) => {
    total += parseFloat(p.textContent);
  });

  const table = document.querySelector("table");

  const oldTotal = document.getElementById("total-row");
  if (oldTotal) oldTotal.remove();

  const row = document.createElement("tr");
  row.id = "total-row";

  const cell = document.createElement("td");
  cell.colSpan = 2;
  cell.textContent = total;

  row.appendChild(cell);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
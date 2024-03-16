//-------------------FETCHING DATA-------------------
async function fetchFunc() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const myData = await response.json();
    const parsedData = myData.data;

    create(parsedData);
    style();
  } catch (error) {
    console.log(error);
  }
}

fetchFunc();

//-------------------CREATING ELEMENTS-------------------
function create(data) {
  const body = document.body;
  const table = document.createElement("table");
  table.classList = "myStyle";
  body.appendChild(table);

  const tr = document.createElement("tr");
  table.appendChild(tr);
  tr.classList = "myStyle";

  for (let e = 0; e < Object.keys(data[0]).length; e++) {
    const th = document.createElement("th");
    tr.appendChild(th);
    th.classList = "myStyle";
    th.innerText = Object.keys(data[0])[e];
  }

  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");
    table.appendChild(tr);
    tr.classList = "myStyle";
    for (let e = 0; e < Object.values(data[i]).length; e++) {
      const td = document.createElement("td");
      tr.appendChild(td);
      td.classList = "myStyle";
      td.innerText = Object.values(data[i])[e];
    }
  }
}

//-------------------STYLING ELEMENTS-------------------
function style() {
  const body = document.body;
  body.style.cssText = `
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Courier New;
  `;
  const myStyle = document.querySelectorAll(".myStyle");
  myStyle.forEach(({ style }) => {
    style.cssText = `
    border: solid lightgray 2px;
    border-collapse: collapse;
    padding: 20px`;
  });
}

"use strict";

let donates = [];

function Donate(name, amount, age) {
  this.name = name;
  this.amount = amount;
  this.age = age;
  daonates.push(this);
  
  console.log("donates", donates);
}

let parentEl = document.getElementById("form-donation");

let table = document.createElement("table");

  let th1 = document.createElement("th");
  table.appendChild(th1);
  th1.textContent = "Donator Name";

  let th2 = document.createElement("th");
  table.appendChild(th2);
  th2.textContent = "Donataion Amount";

Donate.prototype.render = function () {
  

  let td1 = document.createElement("td");
  table.appendChild(td1);
  td1.textContent = `${this.name}`;

  let td2 = document.createElement("td");
  table.appendChild(td2);
  td2.textContent = `${this.amount} Dinar`;

  let td3 = document.createElement("td");
  table.appendChild(td3);
  td3.textContent = `${this.age}`;

  parentEl.appendChild(table);
};

let form = document.getElementById("form-donation");

form.addEventListener("submit", submitter);
function submitter(e) {
  e.preventDefault();

  let name = e.target.name.value;
  let amount = e.target.amount.value;
  let age = Math.floor(Math.random() * 60) + 20;

  let addDonates =new Donate(name,amount,age);
//   addDonates.render();
  console.log(addDonates);
  updateDonates();
}

function updateDonates() {
    let stringArr = JSON.stringify(donates);
    localStorage.setItem("donates",stringArr);
}



function getDonate(){
    let data =localStorage.getItem("donates");
    console.log(data);

    let parsedArr = JSON.parse(data);
    if (parsedArr !==null) {
    for (let i = 0; i < parsedArr.length; i++) {
       console.log(parsedArr);
        
            new Donate(
                parsedArr[i].name,
                parsedArr[i].amount,
                parsedArr[i].age
            );
        }
        
    }
     

}

function renderAlldonates() {
    for (let i = 0; i < donates.length; i++) {
        donates[i].render(i);
        
    }
}
getDonate();
renderAlldonates();

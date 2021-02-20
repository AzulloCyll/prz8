let osoby = [
  {
    firstName: "Jan",
    secondName: "Kowalski",
    likes: 4,
  },
  {
    firstName: "Elżbieta",
    secondName: "Nowak",
    likes: 5,
  },
  {
    firstName: "Elon",
    secondName: "Musk",
    likes: 8,
  },
];

const out = document.getElementById("out");
const ul = document.createElement("ul");

out.append(ul);

for (let osoba of osoby) {
  addOsoba(osoba.firstName, osoba.secondName, osoba.likes);
}

function addOsoba(firstName, secondName, likes = 0) {
  let li = document.createElement("li");

  let spanI = document.createElement("span");
  spanI.innerHTML = firstName;
  spanI.className = "firstName";
  li.append(spanI);

  let spanN = document.createElement("span");
  spanN.innerHTML = secondName;
  spanN.className = "secondName";
  li.append(" ", spanN);

  let spanL = document.createElement("span");
  spanL.innerHTML = likes;
  spanL.className = "likes";
  li.append(" (", spanL, ")");

  ul.append(li);

  let plus = document.createElement("button");
  plus.innerHTML = "+";

  let minus = document.createElement("button");
  minus.innerHTML = "-";

  li.append(" ", plus, " ", minus);

  plus.onclick = function (event) {
    let likes = parseInt(spanL.innerHTML);
    spanL.innerHTML = ++likes;
  };

  minus.onclick = function (event) {
    let likes = parseInt(spanL.innerHTML);
    spanL.innerHTML = --likes;
  };

  let del = document.createElement("button");
  del.innerHTML = "Usuń";
  li.append(" ", del);

  del.onclick = function (event) {
    li.remove();
  };
}

const form = document.getElementById("form-osoba");

form.onsubmit = function (event) {
  addOsoba(form.firstName.value, form.secondName.value);
  form.firstName.value = form.secondName.value = "";
  form.firstName.focus();
  event.preventDefault();
};

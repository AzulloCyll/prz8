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

  // + like
  plus.onclick = function (event) {
    let likes = parseInt(spanL.innerHTML);
    spanL.innerHTML = ++likes;
  };

  // - like
  minus.onclick = function (event) {
    let likes = parseInt(spanL.innerHTML);
    spanL.innerHTML = --likes;
  };

  // delete
  let del = document.createElement("button");
  del.innerHTML = "Usuń";
  li.append(" ", del);

  del.onclick = function (event) {
    li.remove();
  };

  //edit
  let edit = document.createElement("button");
  edit.innerHTML = "Edytuj";
  li.append(" ", edit);

  edit.onclick = function (event) {
    form.firstName.value = li.querySelector(".firstName").innerHTML;
    form.secondName.value = li.querySelector(".secondName").innerHTML;
    editing = li; //od razu ustawia zmeinną jako element ??
  };
}

const form = document.getElementById("form-osoba");

let editing = null;

form.onsubmit = function (event) {
  if (editing) {
    editing.querySelector(".firstName").innerHTML = form.firstName.value;
    editing.querySelector(".secondName").innerHTML = form.secondName.value;

    editing = null;

    form.onreset = function () {
      editing = null;
    };
  } else {
    addOsoba(form.firstName.value, form.secondName.value);
  }

  form.firstName.value = form.secondName.value = "";
  form.firstName.focus();
  event.preventDefault();
};

//filtrowanie
document.getElementById("showgt5").onclick = function () {
  for (let li of ul.children) {
    li.hidden = parseInt(li.querySelector(".likes").innerHTML) <= 5; //? dziwny zapis
  }

  document.getElementById("showall").onclick = function () {
    for (let li of ul.children) {
      li.hidden = false;
    }
  };
};

//sorting
document.getElementById("sortI").onclick = function () {
  let list = Array.from(ul.children);

  list.sort((li1, li2) => {
    let im1 = li1.querySelector(".firstName").innerHTML;
    let im2 = li2.querySelector(".firstName").innerHTML;
    return im1.localeCompare(im2);
  });
  for (let li of list) {
    ul.appendChild(li);
  }
};

document.getElementById("sortN").onclick = function () {
  let list = Array.from(ul.children);

  list.sort((li1, li2) => {
    let nz1 = li1.querySelector(".secondName").innerHTML;
    let nz2 = li2.querySelector(".secondName").innerHTML;
    return nz1.localeCompare(nz2);
  });

  for (let li of list) {
    ul.appendChild(li);
  }
};

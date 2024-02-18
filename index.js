const sourname = document.querySelector("#sourname");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const nationality = document.querySelector("#nationality");
const desc = document.querySelector("#desc");
const password = document.querySelector("#password");
const button = document.querySelector("#button");
const wrapper = document.querySelector("#wrapper");

function validate(
  sourname,
  name,
  age,
  email,
  number,
  nationality,
  desc,
  password
) {
  // Sourname uchun validate
  if (!sourname.value) {
    alert("Sourname kiritilishi shart");
    sourname.focus();
    sourname.style.outlineColor = "red";
    return false;
  } else {
    sourname.style.outlineColor = "blue";
  }
  if (sourname.value.length < 3) {
    sourname.focus();
    sourname.style.outlineColor = "red";
    return false;
  } else {
    sourname.style.outlineColor = "blue";
  }
  if (Number(sourname.value[0])) {
    alert("Raqam bilan boshlanmaydi");
    sourname.focus();
    sourname.style.outlineColor = "red";
    return false;
  } else {
    sourname.style.outlineColor = "blue";
  }

  // Name uchun validate
  if (!name.value) {
    alert("Name kiritilishi shart");
    name.focus();
    name.style.outlineColor = "red";
    return false;
  } else {
    name.style.outlineColor = "blue";
  }
  if (name.value.length < 3) {
    name.focus();
    name.style.outlineColor = "red";
    return false;
  } else {
    name.style.outlineColor = "blue";
  }
  if (Number(name.value[0])) {
    alert("Raqam bilan boshlanmaydi");
    name.focus();
    name.style.outlineColor = "red";
    return false;
  } else {
    name.style.outlineColor = "blue";
  }

  // Age uchun validate
  if (!age.value) {
    alert("Yosh kiritilishi shart");
    age.focus();
    age.style.outlineColor = "red";
    return false;
  } else {
    age.style.outlineColor = "blue";
  }
  if (age.value <= 0 || age.value > 200) {
    alert("Yosh bunday bolmaydi");
    age.focus();
    age.style.outlineColor = "red";
    return false;
  } else {
    age.style.outlineColor = "blue";
  }

  // Email uchun validate
  if (!email.value) {
    alert("Email kiritilishi shart");
    email.focus();
    email.style.outlineColor = "red";
    return false;
  } else {
    email.style.outlineColor = "blue";
  }
  if (Number(email.value[0])) {
    alert("Raqam bilan boshlanmaydi");
    email.focus();
    email.style.outlineColor = "red";
    return false;
  } else {
    email.style.outlineColor = "blue";
  }
  if (email.value.length < 4 || email.value.length <= 25) {
    alert("Email 4 belgidan uzun bolishi kerak");
    email.focus();
    email.style.outlineColor = "red";
    return false;
  } else {
    email.style.outlineColor = "blue";
  }

  //   Phone Number uchun validate
  if (!number.value) {
    alert("Telefon raqam kiritilishi shart");
    number.focus();
    number.style.outlineColor = "red";
    return false;
  } else {
    number.style.outlineColor = "blue";
  }
  if (number.value.length < 0 || number.value.length > 20) {
    alert("Bunday telefon raqam mavjud emas");
    number.focus();
    number.style.outlineColor = "red";
    return false;
  } else {
    number.style.outlineColor = "blue";
  }

  // Desc uchun validate
  if (!desc.value) {
    alert("Ozingiz haqingizda malumot kiriting");
    desc.focus();
    desc.style.outlineColor = "red";
    return false;
  } else {
    desc.style.outlineColor = "blue";
  }
  if (desc.value.length <= 10) {
    alert("Malumot 15 ta belgidan koproq bolishi kerak");
    desc.focus();
    desc.style.outlineColor = "red";
    return false;
  } else {
    desc.style.outlineColor = "blue";
  }

  // Password uchun validate
  if (!password.value) {
    alert("Parolni kiritng");
    password.focus();
    password.style.outlineColor = "red";
    return false;
  } else {
    password.style.outlineColor = "blue";
  }
  if (password.value.length <= 4 || password.value.length >= 8) {
    alert("Buunday parol mavjud emas");
    password.focus();
    password.style.outlineColor = "red";
  } else {
    password.style.outlineColor = "blue";
  }
  return true;
}

function getData() {
  let users = [];
  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  }
  return users;
}

button &&
  button.addEventListener("click", function (e) {
    e.preventDefault();

    if (
      validate(sourname, name, age, email, number, nationality, desc, password)
    ) {
      const user = {
        sourname: sourname.value,
        name: name.value,
        age: age.value,
        email: email.value,
        number: number.value,
        nationality: nationality.value,
        desc: desc.value,
        password: password.value,
      };

      let u = getData();
      u.push(user);
      localStorage.setItem("users", JSON.stringify(u));

      form.reset();
    } else {
      console.log("otmadi");
    }
  });

function creatCard(user) {
  return `
  <div class="card">
    <h2>Foydalanuvchi Ma'lumotlari</h2>
    <p><strong>Familya:</strong>   ${user.sourname}</p>
    <p><strong>Ism:</strong>       ${user.name}</p>
    <p><strong>Yosh:</strong>       ${user.age}</p>
    <p><strong>Email:</strong>      ${user.email} </p>  
    <p><strong>Telefon raqam:</strong>      ${user.number} </p>
    <p><strong>Millati:</strong>       ${user.nationality} </p>
    <p><strong>O'zi haqida:</strong>       ${user.desc} </p>
    <p><strong>Paroli:</strong>      ${user.password} </p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  let users = getData();
  users.forEach((user) => {
    let card = creatCard(user);
    wrapper.innerHTML += card;
  });
});

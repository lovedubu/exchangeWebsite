let currencyRatio = {
  USD: {
    KRW: 1000,
    USD: 1,
    VND: 2000,
  },
  KRW: {
    KRW: 1,
    USD: 2000,
    VND: 3000,
  },
  VND: {
    KRW: 2000,
    USD: 1000,
    VND: 1,
  },
};



let upperCountry = "USD";
let downCountry = "USD";

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("from-button").textContent = this.textContent;
    upperCountry = document.getElementById("from-button").textContent;
    console.log("upperCountry: ", upperCountry);
    change();

    

  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    downCountry = document.getElementById("to-button").textContent;
    console.log("downCountry: ", downCountry);
    change();

  }

  )
);

function change() {
  let currentMoney = document.getElementById("current-money").value;
  let exchangedMoney = currentMoney * currencyRatio[upperCountry][downCountry];
  console.log("exchanged된 값 : 위에서 아래돈으로", exchangedMoney);
  document.getElementById("down-money").value = exchangedMoney;
}

function change2() {
  let currentMoney2 = document.getElementById("down-money").value;
  let exchangedMoney2 =
    currentMoney2 * currencyRatio[downCountry][upperCountry];
  console.log("exchanged된 값: 아래서 윗돈으로", exchangedMoney2);
  document.getElementById("current-money").value = exchangedMoney2;
}

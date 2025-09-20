
//JS function and logic writen.............

const BASE_URL = "https://open.er-api.com/v6/latest";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg")

//select container , flag options access parent of dropowns.........

for (let select of dropdowns) {
  for (currcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currcode;
    newOption.value = currcode;
    if (select.name === "from" && currcode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currcode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
   // country flag changes function add...........

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currcode = element.value;
  let countryCode = countryList[currcode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// click and amount vary function.........

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtValue = amount.value;
  if (amtValue === "" || amtValue < 1) {
    amtValue = 1;
    amount.value = "1";
  }

  // rates fetch from API........
  const URL = `${BASE_URL}/${fromCurr.value}`;
  let response = await fetch(URL);
  let data = await response.json();

  // find out target currency in object rate............
  let rate = data.rates[toCurr.value];
  let finalAmount = (amtValue * rate).toFixed(2);

  // console.log(`1 ${fromCurr.value} = ${rate} ${toCurr.value}`);
  msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});


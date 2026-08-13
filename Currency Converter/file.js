let amount = document.querySelector(".amount input");
const btn = document.querySelector(".btn");
const selectContainer = document.querySelectorAll(".select-container");
const dropdowns = document.querySelectorAll(".dropdown select");
const baseUrl = "https://v6.exchangerate-api.com/v6/62476a705b28c4c5a9438cbf/latest";
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOptions = document.createElement("option");
        newOptions.innerText = currCode;
        newOptions.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOptions.selected = "selected";
        } else if (select.name === "to" && currCode === "PKR") {
            newOptions.selected = "selected";
        }
        //console.log(currCode);
        select.append(newOptions);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newScr = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newScr;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amtVal = amount.value;

    // console.log(from.value , to.value);
    const URL = `${baseUrl}/${from.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    // console.log(data);
    let rate = data["conversion_rates"][to.value];
    let finalAmount = amtVal * rate;

    //    console.log(rate);
    //   console.log(finalAmount);
    msg.innerText = `${amtVal} ${from.value} = ${finalAmount.toFixed(2)} ${to.value}`;
}
);

const amount = document.querySelector(".amount");
const btn = document.querySelector(".btn");
const selectContainer = document.querySelectorAll(".select-container");
const dropdowns = document.querySelectorAll(".dropdown select");

    for (let select of dropdowns) {
        for (currCode in countryList) {
            let newOptions = document.createElement("option");
            newOptions.innerText = currCode;
            newOptions.value = currCode;
            select.append(newOptions);
    }
    }

btn.addEventListener("click", () => {
    console.log("Hello");
    for (let code in countryList) {
       console.log(code,countryList[code]);
    }
}
);

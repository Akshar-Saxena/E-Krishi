const btn = document.querySelector("#submit_btn");
const name_ = document.querySelector("#name");
const add = document.querySelector("#add");
const phno = document.querySelector("#phno");
const crp = document.querySelector("#crp_name")
const area = document.querySelector("#area")
btn.addEventListener("click", (e) => {
    console.log(`Name : ${name_.value}`);
    console.log(`Address : ${add.value}`);
    console.log(`Phone No : ${phno.value}`);
    console.log(`Crop Name : ${crp.value}`);
    console.log(`Land Area : ${area.value}`);
})
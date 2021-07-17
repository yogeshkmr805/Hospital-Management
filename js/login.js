let email = document.getElementById('email');

let pass = document.getElementById('pass');

let lop = document.getElementById('sp');

let fail = document.getElementById("fail");

let cust_info = document.getElementById("cust_info");

let count = 0;

let flag = 1;


// console.log("hi its working");
// -------------------------------------Onclick LOGIN BUTTON----------------------------------------------------
// -------------------------------------------------------------------------------------------------------------

login = () => {


    if (localStorage.getItem("obj") == null) {

        fail.innerHTML = `<h6 style="color:red;"> Login Failed!!!  Please SiGn Up.</h6>`;

    } else {
        let arr = JSON.parse(localStorage.getItem("obj"));
        // console.log(arr);

        arr.forEach((element, index) => {
            if (email.value == element[2] && pass.value == element[3]) {
                count = 0;
                flag = 0;
                // ind = index;
                localStorage.setItem("cust", JSON.stringify(element));
                document.location.href = "../html/dummy.html";

            }
        });
        // console.log("loop ended");


        // console.log(count);
        // console.log(flag);
        if (flag == 1) {
            count = count + 1;
            let x = 3 - count;
            if (x > 0) {
                fail.innerHTML = `<h6 style="color:red;"> Login Failed!!!  Try Again.  Chances Left : ${x}</h6>`;
            } else {
                fail.innerHTML = `<h6 style="color:red;"> Please Try Again After Some Time!!!</h6>`;
            }
        }

    }
}


// ---------------------------------------LOGOUT Button-------------------------------------------------
// ----------------------------------------------------------------------------------------------------- 


logout = () => {
    document.location.href = "../html/index.html";
}
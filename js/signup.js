// console.log("signup working")

const names = document.getElementById('name');
const mobile = document.getElementById('mobile');
const mail = document.querySelector('.mail');
const pas = document.querySelector('.pas');
const dob = document.getElementById('dob');
const field = document.getElementById('field');
let arr = [];


signup = () => {

    if (names.value.trim() == "" || mobile.value.trim() == "" || pas.value.trim() == "" || dob.value.trim() == "" || mail.value.trim() == "") {
        field.innerHTML = `<h5 style="color:red;">Please DON'T Leave Any Field Empty.</h5>`;

    } else {
        if (!/^[a-zA-Z\s]{3,26}$/g.test(names.value)) {
            field.innerHTML = `<h5 style="color:red;">Name Should be 26 Alphabet Characters Max with Spaces.</h5>`;
        } else {
            if (!/^\d{10}$/g.test(mobile.value)) {
                field.innerHTML = `<h5 style="color:red;">Invalid Mobile Number. Only 10 Digits Allowed</h5>`;
            } else {

                if (!/^([a-zA-Z0-9\._\-])+@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/.test(mail.value)) {
                    field.innerHTML = `<h5 style="color:red;">Invalid Email ID.</h5>`;

                } else {

                    let darr = dob.value.split("-");

                    let flg = 1;

                    if (dob.value) {

                        let d = new Date();

                        if (darr[0] > d.getFullYear()) {
                            flg = 0;
                            console.log("FUTURE YEAR!!!");
                            field.innerHTML = `<h5 style="color:red;">Invalid Date Of Birth.</h5>`;
                        }

                       if (darr[0] == d.getFullYear() && darr[1] > d.getMonth()+1) {
                            flg = 0;
                            console.log("FUTURE MONTH!!!");
                            field.innerHTML = `<h5 style="color:red;">Invalid Date Of Birth.</h5>`;
                        }

                        if (darr[0] == d.getFullYear() && darr[1] == d.getMonth()+1 && darr[2] > d.getDate()) {
                            flg = 0;
                            console.log("FUTURE DAYS!!!");
                            field.innerHTML = `<h5 style="color:red;">Invalid Date Of Birth.</h5>`;
                        }

                        console.log(flg);

                        if (flg == 1) {

                            if (localStorage.getItem("obj") == null) {

                                arr.push([names.value, mobile.value, mail.value, pas.value, dob.value]);

                            } else {

                                arr = JSON.parse(localStorage.getItem("obj"));
                                arr.push([names.value, mobile.value, mail.value, pas.value, dob.value])
                            }

                            localStorage.setItem("obj", JSON.stringify(arr));
                            field.innerHTML = `<h5 style="color:green;">Account Created Successfully!!! Please LOGIN.</h5>`;

                        }
                    }
                }
            }
        }
    }
}
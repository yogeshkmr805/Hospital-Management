// import { ind } from 'login.js';

// ---------------------------------------------TABS on HOME------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// console.log(email);
const profile = document.getElementById("doc_tab");
const blood = document.getElementById("hos_tab");
const setting = document.getElementById("dep_tab");

let arr = JSON.parse(localStorage.getItem("cust"));

cust_info.innerHTML = `   
                           
                            <p class="pro"> ${arr[0]} </p><br>
                            <p class="pro"> ${arr[1]} </p><br>
                            <p class="pro"> ${arr[2]} </p><br>
                            <p class="pro"> ${arr[3]} </p><br>
                            <p class="pro"> ${arr[4]} </p><br>  
                            
                            <button class="button" style="margin : 18px 130px; width : 100px"> Edit </button> `;


profile.addEventListener("click", function display_profile() {

    console.log("Profile Tab clicked")
    cust_info.innerHTML = `
                            <p class="pro"> ${arr[0]} </p><br>
                             <p class="pro"> ${arr[1]} </p><br>
                             <p class="pro"> ${arr[2]} </p><br>
                             <p class="pro"> ${arr[3]} </p><br> 
                             <p class="pro"> ${arr[4]} </p><br>
                            <button class="button" style="margin : 18px 130px; width : 100px"> Edit </button>  `;

});


blood.addEventListener("click", () => {

    cust_info.innerHTML = `<p class="pro">UPDATING SOON...</p>`

});


setting.addEventListener("click", () => {

    cust_info.innerHTML = `<p class="pro">UPDATING SOON...</p>`

});

// -------------------------------------------Appoint----------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// appoint = () =>{

//     let appoint_name = document.getElementById("appoint_name");
//     let apppoint_loc = document.getElementById("apppoint_loc");
//     let  appoint_date = document.getElementById("appoint_date"); 
//     let  appoint_prob = document.getElementById("appoint_prob"); 


// }

let nav_search = document.getElementById("nav-search");
nav_search.addEventListener("mouseenter", ()=>{

    nav_search.style.width = "300px";
    nav_search.style.fontSize = "large";
});

nav_search.addEventListener("mouseleave", ()=>{

    nav_search.style.width = "150px";
    nav_search.style.fontSize = "none";
})
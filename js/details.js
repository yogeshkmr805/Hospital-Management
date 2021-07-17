console.log("Hi its working.....")

const doctors_info = document.getElementById('doctors_info');


fetch("../data/doc.json", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        let html = ``;
        const info = data["data"];
        console.log(info);
        info.forEach(element => {
            html += `<div class="doc">
                    <div class="doc_pic">
                        <img src=${element.pic} srcset="">
                    </div>
                    <div class="doc_info">
                        <b>Name</b>
                        - ${element.name}
                        <br>
                        <b>Specialist</b>
                        - ${element.Specialist}
                        <br>
                        <b>Experience</b>
                        - ${element.experience}
                    </div>
                </div>`
        });
        doctors_info.innerHTML = html;

    })
    .catch(err => {
        console.log("something went wrong ", err)
    });


    // -------------------------ONCLICK DOC INFO TAB---------------------------------
    // ------------------------------------------------------------------------------

    const doc_tab = document.getElementById("doc_tab");
    doc_tab.addEventListener("click" , doc_info);

    function doc_info() {
        console.log("Doc Info clicked")
        fetch("../data/doc.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let html = ``;
            const info = data["data"];
            console.log(info);
            info.forEach(element => {
                html += `<div class="doc">
                        <div class="doc_pic">
                            <img src=${element.pic} srcset="">
                        </div>
                        <div class="doc_info">
                            <b>Name</b>
                            - ${element.name}
                            <br>
                            <b>Specialist</b>
                            - ${element.Specialist}
                            <br>
                            <b>Experience</b>
                            - ${element.experience}
                        </div>
                    </div>`
            });
            doctors_info.innerHTML = html;
    
        })
        .catch(err => {
            console.log("something went wrong ", err)
        });

    }


    // -------------------------ONCLICK HOSPITAL INFO TAB---------------------------------
    // ---------------------------------------------------------------------------------------

    const hos_tab = document.getElementById("hos_tab");
    hos_tab.addEventListener("click" , hos_info);

    function hos_info() {
        console.log("Hospital Info Clicked")

        fetch("../data/hos.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let html = ``;
            const info = data["data"];
            console.log(info);
            info.forEach(element => {
                html += `<div class="doc">
                        <div class="doc_pic">
                            <img src=${element.pic} srcset="">
                        </div>
                        <div class="doc_info">
                            <b>${element.name}</b>
                            <br>
                            ${element.add}
                            <br>
                            ${element.contact}
                            <br>
                            ${element.email}
                        </div>
                    </div>`
            });
            doctors_info.innerHTML = html;
    
        })
        .catch(err => {
            console.log("something went wrong ", err)
        });

    }


    // -------------------------ONCLICK DEPARTMENTS TAB---------------------------------
    // ---------------------------------------------------------------------------------------

    const dep_tab = document.getElementById("dep_tab");
    dep_tab.addEventListener("click" , dep_info);

    function dep_info() {
        console.log("Department Clicked")

        

        fetch("../data/dep.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
     
            let html = `<div class="table">
            <table>
            <thead class="doc_info">
                <tr>
                    <th>DEPARTMENT NAME</th>
                    <th>HOD</th>
                </tr>
            </thead>`;

            const info = data["data"];
            console.log(info);

            info.forEach(element => {
                html += `
                <tbody >
                    <tr >
                        <td>${element.dep}</td>
                        <td>${element.name}</td>
                    </tr>
                </tbody>
                <table>
            </div>`;
            });
            doctors_info.innerHTML = html;
    
        })
        .catch(err => {
            console.log("something went wrong ", err)
        });
    }
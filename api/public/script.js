var UserId = null;

function myfunction() {
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userMob = document.getElementById("userMob").value;
    var userDob = document.getElementById("userDob").value;
    var userReligion = document.getElementById("userReligion").value;

    document.getElementById("one").innerHTML = "";
    document.getElementById("three").innerHTML = "";
    document.getElementById("four").innerHTML = "";
    document.getElementById("five").innerHTML = "";
    document.getElementById("six").innerHTML = "";
    valid = true;
    if (userName === "") {
        document.getElementById("one").innerHTML = "*required";
        valid = false
    }
    if (userEmail === "") {
        document.getElementById("three").innerHTML = "*required";
        valid = false
    }
    else if (!userEmail.includes("@")) {
        document.getElementById('two').innerHTML = "It's not valid";
        valid = false;
    }
    else if (!userEmail.includes(".")) {
        document.getElementById('two').innerHTML = "It's not valid";
        valid = false;
    }
    if (userMob === "") {
        document.getElementById("four").innerHTML = "*required";
        valid = false
    }
    if (userDob === "") {
        document.getElementById("five").innerHTML = "*required";
        valid = false
    }
    if (userReligion === "CHOOSE" || userReligion === "") {
        document.getElementById("six").innerHTML = "*required";
        valid = false
    }
    if (valid) {
        var person = {
            username: userName,
            email: userEmail,
            mobile: userMob,
            birth: userDob,
            religion: userReligion,
        }
        if (UserId) {
            fetch("https://6718b3087fc4c5ff8f4aa3a6.mockapi.io/api/person/detail/" + UserId, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(person)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch(error => console.log(error));
          //  document.getElementById("button").innerHTML = "Submit"
          var button = document.getElementById("button");
          button.innerHTML="Submit"
          button.style.backgroundColor = "green"; 
          button.style.color = "white";
        } else {
            fetch("https://6718b3087fc4c5ff8f4aa3a6.mockapi.io/api/person/detail", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(person)
            })
                .then((res) => res.json())
                .then((data) => console.log("post successful", data))
                .catch(error => console.log(error));
        }


        fetch("https://6718b3087fc4c5ff8f4aa3a6.mockapi.io/api/person/detail", {
            method: "GET",
        })
            .then((res) => res.json())
            .then(data => {
                insertTable();
            })
            .catch(error => console.log(error));

        document.getElementById("userName").value = "";
        document.getElementById("userEmail").value = "";
        document.getElementById("userMob").value = "";
        document.getElementById("userDob").value = "";
        document.getElementById("userReligion").value = "";
    }

}
function insertTable() {
    fetch("https://6718b3087fc4c5ff8f4aa3a6.mockapi.io/api/person/detail")
        .then(response => response.json())
        .then(person => {
            let tableBody = "";
            for (let i = 0; i < person.length; i++) {
                tableBody += "<tr> <td>" + person[i].username + "</td><td>" +
                    person[i].email + "</td><td>" +
                    person[i].mobile + "</td><td>" + '<button class="mx-2"  onclick="buttonEdit(' + person[i].id + ')" style="background:transparent; border:hidden;color:blue;padding:1px;"><i class="fas fa-pen"></i></button>' + '<button class="mx-2"  onclick="buttonDelete(' + person[i].id + ')" style="background:transparent; border:hidden;color:red;padding:1px;"><i class="fas fa-trash"></i></button>' + "</td></tr>"
            }
            document.getElementById("tableBody").innerHTML = tableBody;
        })
        .catch(error => console.error(error));
}
function buttonDelete(id) {
    fetch("https://6718b3087fc4c5ff8f4aa3a6.mockapi.io/api/person/detail/" + id, {
        method: "DELETE",
    })
        .then((res) => {
            if (!res.ok) return res.json()
        })
        .then((data) => {
            insertTable();
        })

        .catch((error) => console.log(error));
}
window.onload = function () {
    insertTable();
};


function buttonEdit(id) {
    UserId = id;
    fetch("https://6718b3087fc4c5ff8f4aa3a6.mockapi.io/api/person/detail/" + id, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((person) => {
            document.getElementById("userName").value = person.username;
            document.getElementById("userEmail").value = person.email;
            document.getElementById("userMob").value = person.mobile;
            document.getElementById("userDob").value = person.birth;
            document.getElementById("userReligion").value = person.religion;
            var button = document.getElementById("button");
            button.innerHTML="Update"
            button.style.backgroundColor = "blue";  
            button.style.color = "white";

        })
        .catch(error => console.log(error));

}








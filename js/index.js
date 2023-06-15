let data = {
    users: [
        {
            id: 1,
            phone: "+998901234567",
            password: "1234567"
        }
    ],
    designs: []
}

if (document.getElementById("login-form")) {
    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
    
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
    

        const { users } = data;
        let userGlobal;
        let isThere = false;
        users.forEach(user => {
            if(user.phone == phone) {
                userGlobal = user;
                isThere = true;
                if (user.password != password) {
                    alert("Parol xato kiritilgan!");
                }
            }
        });
    
        
        if (!isThere) {
            userGlobal = {
                id: data.users[data.users.length - 1].id + 1,
                phone,
                password
            };
            data.users.push(userGlobal);
        }
    
        localStorage.setItem("user", JSON.stringify(userGlobal));
        window.location.href = "index.html"  
    });
} 

if (document.getElementById("buyurtmaBerish")) {
    document.getElementById("buyurtmaBerish").addEventListener("click", (e) => {
        const user = JSON.parse(localStorage.getItem("user"));
        const front = localStorage.getItem("front");
        const back = localStorage.getItem("back");
        let id;
        
        if (data.designs.length) {
            id = data.designs.pop().id + 1
        } else {
            id = 1;
        }

        data.designs.push({
            id,
            user_phone: user.phone,
            front,
            back,
        });
        console.log(data.designs);

        localStorage.removeItem("front");
        localStorage.removeItem("back");

        document.querySelector(".buyurtmaBerildi").style.display = "flex"
    })
}


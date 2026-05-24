// This file initializes the NEXORA application and handles user interactions.
document.getElementById("app").innerHTML = `

<div class="app">

    <!-- Top Bar -->
    <div class="top-bar">

        <div class="logo">
            NEXORA 🚀
        </div>

        <div class="menu-container">

            <button id="menu-btn">
                ☰
            </button>

            <div id="menu" class="hidden">

                <p data-page="dashboard">Dashboard</p>

                <p data-page="weekly">Weekly Target</p>

                <p data-page="gp">GP Reports</p>

                <p data-page="graph">Progress Graph</p>

            </div>

        </div>

    </div>

    <!-- Login Card -->
    <div class="glass-card">

        <h1>Welcome Back</h1>

        <input type="email" placeholder="Enter Email">

        <input type="password" placeholder="Enter Password">

        <button class="login-btn">
            Login
        </button>

        <button class="google-btn">
            Sign in with Google
        </button>

        <button class="ios-btn">
            Sign in with iOS
        </button>

    </div>

    <!-- Content -->
    <div id="content" class="content">

        <h2>Dashboard</h2>

        <p>Skills</p>
        <p>Groups</p>
        <p>Communities</p>

    </div>

</div>
`;

const menuBtn = document.getElementById("menu-btn");

const menu = document.getElementById("menu");

const content = document.getElementById("content");


// Toggle menu
menuBtn.addEventListener("click", () => {

    menu.classList.toggle("show");

});


// Menu Navigation
menu.addEventListener("click", (e) => {

    const page = e.target.dataset.page;

    if(page === "dashboard"){

        content.innerHTML = `
            <h2>Dashboard</h2>
            <p>Skills</p>
            <p>Groups</p>
            <p>Communities</p>
        `;

    }

    if(page === "weekly"){

        content.innerHTML = `
            <h2>Weekly Target</h2>
            <p>Primary Completion ✅</p>
            <p>Secondary Completion ✅</p>
        `;

    }

    if(page === "gp"){

        content.innerHTML = `
            <h2>GP Reports</h2>
            <p>Completed GP Reports ✅</p>
            <p>Pending GP Reports ⏳</p>
        `;

    }

    if(page === "graph"){

        content.innerHTML = `
            <h2>Progress Graph</h2>

            <div class="graph">
                <div style="height:80px"></div>
                <div style="height:140px"></div>
                <div style="height:100px"></div>
                <div style="height:170px"></div>
            </div>
        `;

    }

});
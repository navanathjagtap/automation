
/* ==========================================================
   NAVNATH JAGTAP PORTFOLIO
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initTyping();

    initMobileMenu();

    initBackToTop();

    initCounters();

    initGitHub();

    initTheme();

    initContactForm();

    initTilt();

    initActiveNav();

    initProgressBar();

    initReveal();

});
/* ==========================================================
   TYPING EFFECT
========================================================== */

function initTyping(){

    new Typed("#typing",{

        strings:[

            "QA Automation Engineer",

            "SDET",

            "Selenium Expert",

            "API Automation Engineer",

            "Appium Automation Engineer"

        ],

        typeSpeed:70,

        backSpeed:45,

        backDelay:1800,

        loop:true

    });

}
/* ==========================================================
   MOBILE MENU
========================================================== */

function initMobileMenu(){

    const menu=document.querySelector(".menu-btn");

    const nav=document.querySelector(".nav-links");

    menu.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            nav.classList.remove("active");

        });

    });

}
/* ==========================================================
   BACK TO TOP
========================================================== */

function initBackToTop(){

    const btn=document.getElementById("backToTop");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            btn.classList.add("show");

        }

        else{

            btn.classList.remove("show");

        }

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
/* ==========================================================
   COUNTER
========================================================== */

function initCounters(){

    const counters=document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const target=+counter.dataset.target;

        let count=0;

        const speed=target/100;

        function update(){

            count+=speed;

            if(count<target){

                counter.innerText=Math.floor(count);

                requestAnimationFrame(update);

            }

            else{

                counter.innerText=target+"+";

            }

        }

        update();

    });

}
/* ==========================================================
   GITHUB API
========================================================== */

async function initGitHub() {

    const username = "navanathjagtap";

    // Dummy Profile
    const dummyProfile = {
        public_repos: 26,
        followers: 21,
        following: 12,
        public_gists: 10
    };

    // Dummy Repositories
    const dummyRepos = [
        {
            name: "Portfolio Website",
            description: "Professional QA Automation Portfolio built using HTML, CSS & JavaScript.",
            stargazers_count: 12,
            language: "HTML",
            html_url: "https://github.com/navanathjagtap"
        },
        {
            name: "Selenium Automation Framework",
            description: "Java Selenium TestNG Hybrid Automation Framework.",
            stargazers_count: 8,
            language: "Java",
            html_url: "https://github.com/navanathjagtap"
        },
        {
            name: "API Automation",
            description: "REST Assured API Testing Framework with TestNG.",
            stargazers_count: 6,
            language: "Java",
            html_url: "https://github.com/navanathjagtap"
        },
        {
            name: "Appium Mobile Automation",
            description: "Android & iOS Automation using Appium.",
            stargazers_count: 4,
            language: "Java",
            html_url: "https://github.com/navanathjagtap"
        },
        {
            name: "Playwright Automation",
            description: "Modern UI Automation using Playwright.",
            stargazers_count: 5,
            language: "TypeScript",
            html_url: "https://github.com/navanathjagtap"
        },
        {
            name: "Python Automation",
            description: "Python Selenium Automation Framework.",
            stargazers_count: 3,
            language: "Python",
            html_url: "https://github.com/navanathjagtap"
        }
    ];

    try {

        // Profile
        const profileResponse = await fetch(`https://api.github.com/users/${username}`);

        if (!profileResponse.ok) {
            throw new Error("GitHub API Error");
        }

        const user = await profileResponse.json();

        document.getElementById("repoCount").innerText = user.public_repos;
        document.getElementById("followers").innerText = user.followers;
        document.getElementById("following").innerText = user.following;
        document.getElementById("publicGists").innerText = user.public_gists;

        // Repositories
        const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);

        if (!repoResponse.ok) {
            throw new Error("Repository API Error");
        }

        const repos = await repoResponse.json();

        displayRepositories(repos);

    } catch (error) {

        console.log("GitHub API failed. Loading dummy data.");

        // Dummy Stats
        document.getElementById("repoCount").innerText = dummyProfile.public_repos;
        document.getElementById("followers").innerText = dummyProfile.followers;
        document.getElementById("following").innerText = dummyProfile.following;
        document.getElementById("publicGists").innerText = dummyProfile.public_gists;

        // Dummy Repositories
        displayRepositories(dummyRepos);
    }
}

// Common Repository Display Function
function displayRepositories(repos) {

    const repoContainer = document.getElementById("repoContainer");

    repoContainer.innerHTML = "";

    repos.forEach(repo => {

        repoContainer.innerHTML += `
            <div class="repo-card">

                <h4>${repo.name}</h4>

                <p>${repo.description || "No description available"}</p>

                <div class="repo-footer">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>${repo.language || "N/A"}</span>
                </div>

                <br>

                <a href="${repo.html_url}"
                   target="_blank"
                   class="project-btn">
                   View Repository
                </a>

            </div>
        `;
    });
}

/* ==========================================================
   DARK MODE
========================================================== */

function initTheme(){

    const btn=document.getElementById("themeToggle");

    const body=document.body;

    const saved=localStorage.getItem("theme");

    if(saved==="light"){

        body.classList.add("light");

        btn.innerHTML='<i class="fas fa-sun"></i>';

    }

    btn.addEventListener("click",()=>{

        body.classList.toggle("light");

        if(body.classList.contains("light")){

            localStorage.setItem("theme","light");

            btn.innerHTML='<i class="fas fa-sun"></i>';

        }

        else{

            localStorage.setItem("theme","dark");

            btn.innerHTML='<i class="fas fa-moon"></i>';

        }

    });

}

/* ==========================================================
   EMAILJS
========================================================== */

function initContactForm() {

    emailjs.init({
        publicKey: "uMOVUW6aRLQzQ2yKm"
    });

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const btn = document.querySelector(".send-btn");

        btn.innerHTML = "Sending...";
        btn.disabled = true;

        const params = {

    name: document.getElementById("name").value,

    email: document.getElementById("email").value,

    title: document.getElementById("subject").value,

    message: document.getElementById("message").value,

    time: new Date().toLocaleString()

};

        emailjs.send(
            "service_t5ijl9r",
            "template_99m0mh7",
            params
        )
        .then(function () {

            alert("✅ Message sent successfully!");

            form.reset();

        })
        .catch(function (error) {

            console.error(error);

            alert("❌ " + JSON.stringify(error));

        })
        .finally(function () {

            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';

            btn.disabled = false;

        });

    });

}

/* ==========================================================
   CARD TILT EFFECT 
========================================================== */

function initTilt(){

    VanillaTilt.init(

        document.querySelectorAll(

            ".skill-card,.project-card,.certificate-card,.github-card,.achievement-card,.contact-card"

        ),

        {

            max:8,

            speed:400,

            glare:true,

            "max-glare":0.2

        }

    );

}
/* ==========================================================
   ACTIVE NAVIGATION 
========================================================== */

function initActiveNav(){

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            const height=section.offsetHeight;

            if(window.scrollY>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

}
/* ==========================================================
   SCROLL PROGRESS BAR
========================================================== */

function initProgressBar(){

    const progress=document.getElementById("progressBar");

    window.addEventListener("scroll",()=>{

        const total=document.documentElement.scrollHeight-window.innerHeight;

        const current=(window.scrollY/total)*100;

        progress.style.width=current+"%";

    });

}
/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initReveal(){

    const reveals=document.querySelectorAll(

        ".section,.skill-card,.project-card,.certificate-card,.github-card,.achievement-card"

    );

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    reveals.forEach(item=>observer.observe(item));

}
/* ==========================================================
   LOADER
========================================================== */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    loader.style.opacity="0";

    setTimeout(()=>{

        loader.style.display="none";

    },500);

});


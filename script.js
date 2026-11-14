/* CAREER VISION - COMPLETE JAVASCRIPT */

// ELEMENTS
const homePage = document.getElementById("homePage");
const dashboard = document.getElementById("studentDashboard");
const authOverlay = document.getElementById("authOverlay");

let currentStudent = null;

// OPEN LOGIN
function showLogin() {
    document.getElementById("authTitle").innerText = "Welcome Back!";
    document.getElementById("loginForm").hidden = false;
    document.getElementById("signupForm").hidden = true;
    authOverlay.hidden = false;
}

// CLOSE LOGIN
function closeLogin() {
    authOverlay.hidden = true;
}

// OPEN SIGNUP
function showSignup(event) {
    event.preventDefault();

    document.getElementById("loginForm").hidden = true;
    document.getElementById("signupForm").hidden = false;
    document.getElementById("authTitle").innerText = "Create Account";
}

// BACK TO LOGIN
function showLoginForm(event) {
    event.preventDefault();

    document.getElementById("signupForm").hidden = true;
    document.getElementById("loginForm").hidden = false;
    document.getElementById("authTitle").innerText = "Welcome Back!";
}

// STUDENT DASHBOARD
function openDashboard(name) {
    currentStudent = name;

    document.getElementById("studentName").innerText = name;

    homePage.hidden = true;
    dashboard.hidden = false;

    closeLogin();
    window.scrollTo(0, 0);
}

// SIGNUP DEMO
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    openDashboard(name);
    this.reset();
});

// LOGIN DEMO
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    const name = email.split("@")[0];

    openDashboard(name);
    this.reset();
});

// CLOSE MODAL ON BACKGROUND CLICK
authOverlay.addEventListener("click", function(event) {
    if (event.target === authOverlay) {
        closeLogin();
    }
});

// HOME BUTTON
function goHome() {
    dashboard.hidden = true;
    homePage.hidden = false;
    window.scrollTo(0, 0);
}

// EXPLORE COURSES
function exploreCourses() {
    if (!homePage.hidden) {
        document.getElementById("courses").scrollIntoView({
            behavior: "smooth"
        });
    } else {
        goHome();
        setTimeout(() => {
            document.getElementById("courses").scrollIntoView({
                behavior: "smooth"
            });
        }, 100);
    }
}

// SELECT CLASS
function selectClass(className) {
    alert("You selected: " + className +
          "\nWelcome to Career Vision!");

    exploreCourses();
}

// VIEW COURSE
function viewCourse(courseName) {
    alert("Course Name: " + courseName +
          "\n\nCourse details will be available soon.");
}

// MY COURSES
function openMyCourses() {
    alert("My Courses section is coming soon!");
}

// LIVE CLASSES
function openLiveClasses() {
    alert("Live Classes will be available soon!");
}

// STUDY NOTES
function openNotes() {
    alert("Study Notes section is coming soon!");
}

// ONLINE TEST
function showTests() {
    alert("Online Test section is coming soon!");
}

// LOGOUT
function logoutStudent() {
    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        currentStudent = null;
        dashboard.hidden = true;
        homePage.hidden = false;

        window.scrollTo(0, 0);
        alert("You have logged out successfully!");
    }
    }

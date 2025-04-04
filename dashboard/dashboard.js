document.addEventListener("DOMContentLoaded", () => {
    const profile = document.querySelector(".profile");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const generateResumeBtn = document.querySelector(".generate-resume");

    profile.addEventListener("click", () => {
        dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", (event) => {
        if (!profile.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });

    generateResumeBtn.addEventListener("click", () => {
        alert("AI is generating your resume... 🚀");
        setTimeout(() => {
            alert("Resume Generated Successfully! 🎉");
        }, 3000);
    });
});

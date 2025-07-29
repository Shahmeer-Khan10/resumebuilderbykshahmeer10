"use strict";

// --- THEME SWITCHER LOGIC ---
const themeSwitcher = document.querySelector('.theme-switcher');
const body = document.body;

function applyTheme(themeName) {
    body.dataset.theme = themeName;
    localStorage.setItem('resumeTheme', themeName);
    themeSwitcher.querySelectorAll('button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === themeName);
    });
}
themeSwitcher.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const theme = e.target.dataset.theme;
        if (theme) { applyTheme(theme); }
    }
});
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('resumeTheme') || 'modern';
    applyTheme(savedTheme);
});

// --- DYNAMIC CONTENT LOGIC ---
function setTextOrHide(id, value) {
    const el = document.getElementById(id);
    if (el) {
        if (value && value.trim() !== "") {
            el.textContent = value;
            const parentSection = el.closest('section, .education-item, .experience-item, li');
            parentSection?.classList.remove("hide");
        } else {
            const parentSection = el.closest('section, .education-item, .experience-item, li');
            parentSection?.classList.add("hide");
        }
    }
}

window.addEventListener("load", () => {
    const get = key => localStorage.getItem(key) || "";

    // Populate data...
    setTextOrHide("resName", get("name"));
    setTextOrHide("resDesig", get("designation"));
    setTextOrHide("resEmail", get("email"));
    setTextOrHide("resPhone", get("phone"));
    setTextOrHide("resAddress", get("address"));
    setTextOrHide("resPassingYear1", get("passingYear1"));
    setTextOrHide("resPassingYear2", get("passingYear2"));
    setTextOrHide("resDegree1", get("degree1"));
    setTextOrHide("resDegree2", get("degree2"));
    setTextOrHide("resInstitution1", get("institution1"));
    setTextOrHide("resInstitution2", get("institution2"));
    setTextOrHide("resSkill1", get("skill1"));
    setTextOrHide("resSkill2", get("skill2"));
    setTextOrHide("resLanguage1", get("language1"));
    setTextOrHide("resLanguage2", get("language2"));
    setTextOrHide("resCompany", get("company"));
    setTextOrHide("resStartDate", get("startDate"));
    setTextOrHide("resEndDate", get("endDate"));
    setTextOrHide("resPosition", get("position"));
    setTextOrHide("resAchievement1", get("achievement1"));
    setTextOrHide("resAchievement2", get("achievement2"));
    setTextOrHide("resAchievement3", get("achievement3"));

    const profileImg = document.getElementById("profileImg");
    const profilePic = get("profilePic");
    if (profileImg && profilePic) {
        profileImg.src = profilePic;
        profileImg.alt = get("name") + " profile picture";
    }
});

// --- BUTTONS LOGIC ---
const printBtn = document.getElementById("print-btn");
printBtn?.addEventListener("click", () => { window.print(); });

const pdfBtn = document.createElement("button");
pdfBtn.textContent = "Download PDF";
pdfBtn.id = "pdf-btn";
pdfBtn.style.marginLeft = "12px";
document.querySelector(".resumebtn")?.appendChild(pdfBtn);

pdfBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
    const element = document.querySelector(".real");
    const name = document.getElementById("resName")?.textContent || "Resume";
    const date = new Date().toISOString().slice(0, 10);

    const opt = {
      margin:       [5, 5, 5, 5],
      filename:     `${name.replace(/\s+/g, "_")}_Resume_${date}.pdf`,
      image:        { type: 'png', quality: 1.0 }, // PNG for perfect colors
      html2canvas:  { 
          scale: 3, // High resolution
          useCORS: true, 
          scrollY: -window.scrollY,
          backgroundColor: '#ffffff' // Ensure a white background
      },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
});
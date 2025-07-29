"use strict";

function setTextOrHide(id, value) {
    const el = document.getElementById(id);
    if (el) {
        if (value && value.trim() !== "") {
            el.textContent = value;
            el.parentElement?.classList.remove("hide");
        } else {
            el.textContent = "";
            el.parentElement?.classList.add("hide");
        }
    }
}

window.addEventListener("load", () => {
    const get = key => localStorage.getItem(key) || "";

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

const printBtn = document.getElementById("print-btn");
printBtn?.addEventListener("click", () => {
    window.print();
});

const pdfBtn = document.createElement("button");
pdfBtn.textContent = "Download PDF";
pdfBtn.id = "pdf-btn";
pdfBtn.style.marginLeft = "12px";
document.querySelector(".resumebtn")?.appendChild(pdfBtn);

pdfBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
    
    document.body.classList.add("pdf-export");
    
    setTimeout(() => {
        const element = document.querySelector(".real");
        const name = document.getElementById("resName")?.textContent || "Resume";
        const date = new Date().toISOString().slice(0,10);
        
        const opt = {
            margin: 0,
            filename: `${name.replace(/\s+/g, "_")}_Resume_${date}.pdf`,
            image: { 
                type: 'jpeg', 
                quality: 0.98 
            },
            html2canvas: { 
                scale: 2,
                useCORS: true, 
                backgroundColor: "#fff",
                windowWidth: element.scrollWidth,
                windowHeight: element.scrollHeight
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'portrait' 
            },
            pagebreak: { 
                mode: 'avoid-all',
                before: '.page-break'
            }
        };
        
        html2pdf().set(opt).from(element).save().then(() => {
            document.body.classList.remove("pdf-export");
        });
    }, 100);
});
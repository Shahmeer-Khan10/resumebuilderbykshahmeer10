"use strict";
window.addEventListener("load", () => {
    // Function to safely set text content if element exists
    const setTextContent = (id, value) => {
        const element = document.getElementById(id);
        if (element)
            element.textContent = value || "";
    };
    // Retrieve values from local storage
    const name = localStorage.getItem("name");
    const designation = localStorage.getItem("designation");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const address = localStorage.getItem("address");
    const profilePic = localStorage.getItem("profilePic");
    const passingYear1 = localStorage.getItem("passingYear1");
    const passingYear2 = localStorage.getItem("passingYear2");
    const degree1 = localStorage.getItem("degree1");
    const degree2 = localStorage.getItem("degree2");
    const institution1 = localStorage.getItem("institution1");
    const institution2 = localStorage.getItem("institution2");
    const skill1 = localStorage.getItem("skill1");
    const skill2 = localStorage.getItem("skill2");
    const language1 = localStorage.getItem("language1");
    const language2 = localStorage.getItem("language2");
    const company = localStorage.getItem("company");
    const startDate = localStorage.getItem("startDate");
    const endDate = localStorage.getItem("endDate");
    const position = localStorage.getItem("position");
    const achievement1 = localStorage.getItem("achievement1");
    const achievement2 = localStorage.getItem("achievement2");
    const achievement3 = localStorage.getItem("achievement3");
    // Set text content for each element
    setTextContent("resName", name);
    setTextContent("resDesig", designation);
    setTextContent("resEmail", email);
    setTextContent("resPhone", phone);
    setTextContent("resAddress", address);
    setTextContent("resPassingYear1", passingYear1);
    setTextContent("resPassingYear2", passingYear2);
    setTextContent("resDegree1", degree1);
    setTextContent("resDegree2", degree2);
    setTextContent("resInstitution1", institution1);
    setTextContent("resInstitution2", institution2);
    setTextContent("resSkill1", skill1);
    setTextContent("resSkill2", skill2);
    setTextContent("resLanguage1", language1);
    setTextContent("resLanguage2", language2);
    setTextContent("resCompany", company);
    setTextContent("resStartDate", startDate);
    setTextContent("resEndDate", endDate);
    setTextContent("resPosition", position);
    setTextContent("resAchievement1", achievement1);
    setTextContent("resAchievement2", achievement2);
    setTextContent("resAchievement3", achievement3);
    // Set profile picture if available
    const profileImg = document.querySelector(".headerimg img");
    if (profileImg && profilePic) {
        profileImg.src = profilePic;
    }
});
// Print functionality
const printBtn = document.getElementById("print-btn");
printBtn?.addEventListener("click", () => {
    window.print();
});

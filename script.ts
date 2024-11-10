let nam = document.getElementById("name") as HTMLInputElement | null;
let Designation = document.getElementById("desig") as HTMLInputElement | null;
let Email = document.getElementById("email") as HTMLInputElement | null;
let Add = document.getElementById("add") as HTMLInputElement | null;
let Phone = document.getElementById("phone") as HTMLInputElement | null;
let profilePic = document.getElementById("img") as HTMLInputElement | null;
let pasyr1 = document.getElementById("passing-year") as HTMLInputElement | null;
let pasyr2 = document.getElementById("passing-year2") as HTMLInputElement | null;
let Degree1 = document.getElementById("deg") as HTMLInputElement | null;
let Degree2 = document.getElementById("deg2") as HTMLInputElement | null;
let Institution1 = document.getElementById("inst") as HTMLInputElement | null;
let Institution2 = document.getElementById("inst2") as HTMLInputElement | null;
let Skill1 = document.getElementById("skill1") as HTMLInputElement | null;
let Skill2 = document.getElementById("skill2") as HTMLInputElement | null;
let Language1 = document.getElementById("lang") as HTMLInputElement | null;
let Language2 = document.getElementById("lang2") as HTMLInputElement | null;
let Company = document.getElementById("company") as HTMLInputElement | null;
let startDate = document.getElementById("start-date") as HTMLInputElement | null;
let endDate = document.getElementById("end-date") as HTMLInputElement | null;
let Position = document.getElementById("position") as HTMLInputElement | null;
let Achievement1 = document.getElementById("Achievement1") as HTMLInputElement | null;
let Achievement2 = document.getElementById("Achievement2") as HTMLInputElement | null;
let Achievement3 = document.getElementById("Achievement3") as HTMLInputElement | null;
let Form = document.getElementById("resumeform") as HTMLFormElement | null;

Form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  if (
    nam && Designation && Email && Phone && Add && profilePic &&
    pasyr1 && Degree1 && Institution1 && Skill1 && Language1 &&
    Company && startDate && endDate && Position
  ) {
    localStorage.setItem("name", nam.value);
    localStorage.setItem("designation", Designation.value);
    localStorage.setItem("email", Email.value);
    localStorage.setItem("phone", Phone.value);
    localStorage.setItem("address", Add.value);

    const file = profilePic.files ? profilePic.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem("profilePic", reader.result?.toString() || "");
        window.location.href = "resume.html"; // Redirect inside FileReader.onload
      };
      reader.readAsDataURL(file);
    } else {
      window.location.href = "resume.html";
    }

    localStorage.setItem("passingYear1", pasyr1.value);
    localStorage.setItem("passingYear2", pasyr2?.value || "");
    localStorage.setItem("degree1", Degree1.value);
    localStorage.setItem("degree2", Degree2?.value || "");
    localStorage.setItem("institution1", Institution1.value);
    localStorage.setItem("institution2", Institution2?.value || "");
    localStorage.setItem("skill1", Skill1.value);
    localStorage.setItem("skill2", Skill2?.value || "");
    localStorage.setItem("language1", Language1.value);
    localStorage.setItem("language2", Language2?.value || "");
    localStorage.setItem("company", Company.value);
    localStorage.setItem("startDate", startDate.value);
    localStorage.setItem("endDate", endDate.value);
    localStorage.setItem("position", Position.value);
    localStorage.setItem("achievement1", Achievement1?.value || "");
    localStorage.setItem("achievement2", Achievement2?.value || "");
    localStorage.setItem("achievement3", Achievement3?.value || "");
  } else {
    console.log("Required fields are missing or elements are null.");
  }
});

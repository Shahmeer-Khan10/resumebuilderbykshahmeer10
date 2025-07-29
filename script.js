"use strict";

const resumeForm = document.getElementById("resumeform");

// This function handles the form submission asynchronously
async function handleFormSubmit(event) {
    // 1. Prevent the form from submitting the default way
    event.preventDefault();

    // 2. Define all the fields we want to save.
    // This makes it super easy to add or remove fields later.
    const textFields = [
        { key: 'name', id: 'name' },
        { key: 'designation', id: 'desig' },
        { key: 'email', id: 'email' },
        { key: 'phone', id: 'phone' },
        { key: 'address', id: 'add' },
        { key: 'passingYear1', id: 'passing-year' },
        { key: 'passingYear2', id: 'passing-year2' },
        { key: 'degree1', id: 'deg' },
        { key: 'degree2', id: 'deg2' },
        { key: 'institution1', id: 'inst' },
        { key: 'institution2', id: 'inst2' },
        { key: 'skill1', id: 'skill1' },
        { key: 'skill2', id: 'skill2' },
        { key: 'language1', id: 'lang' },
        { key: 'language2', id: 'lang2' },
        { key: 'company', id: 'company' },
        { key: 'startDate', id: 'start-date' },
        { key: 'endDate', id: 'end-date' },
        { key: 'position', id: 'position' },
        { key: 'achievement1', id: 'Achievement1' },
        { key: 'achievement2', id: 'Achievement2' },
        { key: 'achievement3', id: 'Achievement3' }
    ];

    // 3. Loop through the fields and save them to localStorage.
    // This is much cleaner than writing localStorage.setItem 20 times.
    textFields.forEach(field => {
        const element = document.getElementById(field.id);
        if (element) {
            localStorage.setItem(field.key, element.value);
        }
    });

    // 4. Handle the profile picture with a Promise for reliability.
    const profilePicInput = document.getElementById("img");
    try {
        const imageDataUrl = await processImage(profilePicInput);
        if (imageDataUrl) {
            localStorage.setItem("profilePic", imageDataUrl);
        }
        
        // 5. Everything is saved, NOW we can safely redirect.
        console.log("All data saved. Redirecting...");
        window.location.href = "resume.html";

    } catch (error) {
        console.error("Error processing the image:", error);
        alert("There was an error uploading the image. Please try again.");
    }
}

// This helper function wraps the FileReader in a Promise.
function processImage(fileInput) {
    return new Promise((resolve, reject) => {
        // Check if a file was actually selected
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            resolve(null); // No file, resolve with null
            return;
        }

        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result?.toString() || "");
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
}

// Attach the event listener to the form
if (resumeForm) {
    resumeForm.addEventListener("submit", handleFormSubmit);
}
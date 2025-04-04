let currentEvent = ""; // Variable to store the selected event

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".events-grid").style.opacity = 1;
        document.querySelector(".events-grid").style.transform = "translateY(0)";
    }, 1000);
});

function openModal(eventName) {
    const eventDetails = {
        "Mysterio 5.0": "Mysterio 5.0 is a premier technical symposium",
        "Hobby Project": "Innovative projects fulfilling societal needs.",
        "Hiring Challenge": "Simulated real-world hiring challenges.",
        "Programiz": "Competitive coding in C/Python.",
        "Uno Arduino": "Build a mini project using Arduino.",
        "Engineering a Way Out": "Solve engineering problems with innovation.",
        "Dr. Circuit": "Circuit design and efficiency challenge.",
        "Paper Presentation": "Present research and innovations.",
    };

    currentEvent = eventName; // Store the selected event
    document.getElementById("eventTitle").textContent = eventName;
    document.getElementById("eventDescription").textContent = eventDetails[eventName] || "Details not available.";

    const scheduleBtn = document.getElementById("scheduleBtn");
    if (eventName === "Mysterio 5.0") {
        scheduleBtn.classList.remove("hidden"); // Show button
    } else {
        scheduleBtn.classList.add("hidden"); // Hide button
    }

    if (eventName === "Mysterio 5.0") {
        registerBtn.classList.remove("hidden"); // Show button
    } else {
        registerBtn.classList.add("hidden"); // Hide button
    }

    document.getElementById("eventModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("eventModal").style.display = "none";
    document.getElementById("contactList").innerHTML = ""; // Clear contacts when modal closes
}

function showContacts() {
    if (!currentEvent) return; // Prevent errors if no event is selected

    const eventContacts = {
        "Mysterio 5.0": [
            { name: "Yuvaraj K E", phone: "+91 9019129664" },
            { name: "Varsha Vasanth", phone: "+91 7892178545" },
            { name: "D G Chiranth", phone: "+91 6361656093" },
            { name: "Dhanushree K R", phone: "+91 8951232228" }
        ],
        "Hobby Project": [
            { name: "Adhya K R", phone: "+91 6364817378" },
            { name: "C G Poorvi", phone: "+91 8277648698" },
            { name: "Samhita S Shedgar", phone: "+91 9353367278" }
        ],
        "Hiring Challenge": [
            { name: "Nithya M Devang", phone: "+91 7483132288" },
            { name: "Prajna Hegde", phone: "+91 9538646287" },
            { name: "Chaithra H S", phone: "+91 7899042864" }
        ],
        "Programiz": [
            { name: "Pratheek S P", phone: "+91 9880993939" },
            { name: "Sowmya M", phone: "+91 7892741398" },
            { name: "Kavana R", phone: "+91 8431749290" },
            { name: "Namitha J", phone: "+91 8217494782" }
        ],
        "Uno Arduino": [
            { name: "Bhuvan Kumar R", phone: "+91 9353717954" },
            { name: "Chandan GG", phone: "+91 7411375951" },
            { name: "Varun Kumar PB", phone: "+91 8660087346" }
        ],
        "Engineering a Way Out": [
            { name: "Pallavi A C", phone: "+91 9380236708" },
            { name: "Puneeth N S", phone: "+91 7411333182" },
            { name: "Vikas Kulkarni", phone: "+91 9148244049" }
        ],
        "Dr. Circuit": [
            { name: "Amanda Raquel Pinto", phone: "+91 7204635351" },
            { name: "Nithyashree N Gokarnakar", phone: "+91 8867479901" },
            { name: "Khushi N M", phone: "+91 8147800881" }
        ],
        "Paper Presentation": [
            { name: "Sujal Chinchnekar", phone: "+91 9019472418" },
            { name: "Sahana M Soppin", phone: "+91 8618808385" },
            { name: "Srujana C R", phone: "+91 9980918769" }
        ]
    };

    const contactList = document.getElementById("contactList");
    contactList.innerHTML = ""; // Clear previous contacts

    let contactListHTML = "";

    if (currentEvent === "Mysterio 5.0") {
        // Show Mysterio 5.0 contacts under "Main Coordinators"
        contactListHTML += "<h3>Main Coordinators</h3>";
        eventContacts["Mysterio 5.0"].forEach(contact => {
            contactListHTML += `<p><strong>${contact.name}:</strong> <a href="tel:${contact.phone}">${contact.phone}</a></p>`;
        });
    } else {
        // Show other event coordinators
        const contacts = eventContacts[currentEvent] || [];
        if (contacts.length > 0) {
            contactListHTML += "<h3>Event Coordinators</h3>";
            contacts.forEach(contact => {
                contactListHTML += `<p><strong>${contact.name}:</strong> <a href="tel:${contact.phone}">${contact.phone}</a></p>`;
            });
        } else {
            contactListHTML = "<p>No coordinators assigned yet.</p>";
        }
    }

    contactList.innerHTML = contactListHTML;
    contactList.style.display = "block"; // Show contacts
}

function showLink() {
    const eventLinks = {
        "Mysterio 5.0": "https://forms.gle/gEs9Tuaro7y1RV3u6",
    };

    // Get the currently open event title
    const eventName = document.getElementById("eventTitle").textContent;

    // Get the registration link for the event
    const eventLink = eventLinks[eventName];

    if (eventLink) {
        window.open(eventLink, "_blank"); // Opens link in a new tab
    } else {
        alert("Registration link not available for this event.");
    }
};




function smoothScrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Store different PDF URLs for each event
const eventFiles = {
    "Mysterio 5.0": {
        rulebook: "mysterio5_rulebook.pdf",
        poster: "mysterio5_poster.pdf",
        schedule : "mysterio5_schedule.pdf"
    },

    "Hobby Project": {
        rulebook: "hobby_project_rulebook.pdf",
        poster: "hobby_project_poster.pdf"
    },
    "Hiring Challenge": {
        rulebook: "hiring_challenge_rulebook.pdf",
        poster: "hiring_challenge_poster.pdf"
    },
    "Programiz": {
        rulebook: "programiz_rulebook.pdf",
        poster: "programiz_poster.pdf"
    },
    "Uno Arduino": {
        rulebook: "uno_arduino_rulebook.pdf",
        poster: "uno_arduino_poster.pdf"
    },
    "Engineering a Way Out": {
        rulebook: "engineering_way_out_rulebook.pdf",
        poster: "engineering_way_out_poster.pdf"
    },
    "Dr. Circuit": {
        rulebook: "dr_circuit_rulebook.pdf",
        poster: "dr_circuit_poster.pdf"
    },
    "Paper Presentation": {
        rulebook: "paper_presentation_rulebook.pdf",
        poster: "paper_presentation_poster.pdf"
    }
};

// Function to download the correct file based on event
function downloadFile(fileType) {
    if (!currentEvent || !eventFiles[currentEvent]) {
        alert("Please select an event first.");
        return;
    }

    const fileName = eventFiles[currentEvent][fileType];

    if (!fileName) {
        alert("File not available for this event.");
        return;
    }

    const link = document.createElement("a");
    link.href = fileName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function toggleDetails(section) {
    const fullText = document.getElementById(`${section}-full`);
    
    if (fullText) {
        fullText.classList.toggle("hidden"); // Toggle the 'hidden' class
    }
}

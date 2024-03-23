const passcodeMap = [
    {
        fullname: "Hassan Olamilekan",
        passcode: "63730",
        cohort: "14"
    },
    {
        fullname: "Mpkuma Chinedu kingsley",
        passcode: "64730",
        cohort: "15"
    },
    {
        fullname: "Okolo Uchenna",
        passcode: "62170",
        cohort: "19"
    },
    {
        fullname: "Uhenna Valentine",
        passcode: "45678",
        cohort: "21"
    },

    {
        fullname: "Dhiru Obori",
        passcode: "76789",
        cohort: "11"
    },
    {
        fullname: "Charles Nanni",
        passcode: "67890",
        cohort: "15"
    },
    {
        fullname: "Ishiogor Timothy",
        passcode: "78901",
        cohort: "19"
    },
    {
        fullname: "Ijeoma Mba",
        passcode: "89012",
        cohort: "14"
    },
    {
        fullname: "Oyom Benedict",
        passcode: "90123",
        cohort: "15"
    },
    {
        fullname: "Enwenezi Famouse",
        passcode: "01234",
        cohort: "15"
    },
    {
        fullname: "Jeff Mgbehuruike",
        passcode: "11111",
        cohort: "19"
    },
    {
        fullname: "Kingsley Onah",
        passcode: "22222",
        cohort: "16"
    },
    {
        fullname: "Duda Tijani",
        passcode: "33333",
        cohort: "18"
    },
    {
        fullname: "ALL Kingtone",
        passcode: "44444",
        cohort: "15"
    }
];

let students = passcodeMap.map(student => student.fullname);

const buttondelete = document.getElementById("buttondelete");

// Function to display the list of students
function displayStudents() {
    // Create an array of strings containing each student's name and passcode
    const studentList = passcodeMap.map(student => `<div>${student.fullname} - ${student.passcode}</div>`).join("");
    // Update the innerHTML of the list_of_students element with the student list
    document.getElementById("list_of_students").innerHTML = "<h3>list of students: </h3>" + studentList;
}

buttondelete.onclick = () => {
    let passcode = prompt("Enter passcode:");
    let deletedStudent = "";
    const studentIndex = passcodeMap.findIndex(student => student.passcode === passcode);
    
    if (studentIndex !== -1) {
        deletedStudent = passcodeMap[studentIndex].fullname; 
        document.getElementById("deletedStudent").innerHTML = "\n you have deleted  : " + deletedStudent + "\n [cohort  :" + passcodeMap[studentIndex].cohort + "]";
    } else {
        deletedStudent = "Passcode does not match any student.";
        document.getElementById("deletedStudent").innerHTML =  deletedStudent; // Update the innerHTML with the message
    }

    // Display the updated list of students
    displayStudents();
    
    console.log(students); // You don't need to log cohort here
};

// Initial display of students list
displayStudents();


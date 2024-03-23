// //prediential years

// };

const presidents = [
    {
        fullname: "Nnamdi Azikiwe",
        yob: "1904",
        month_of_birth: "November 16",
    },
    {
        fullname: "Abubakar Tafawa Balewa",
        yob: "1912",
        month_of_birth: "December",
    },
    {
        fullname: "Aguiyi Ironsi",
        yob: "1924",
        month_of_birth: "March 3",
    },
    {
        fullname: "Yakubu Gowon",
        yob: "1934",
        month_of_birth: "October 19",
    },
    {
        fullname: "Murtala Mohammed",
        yob: "1938",
        month_of_birth: "November 8",
    },
    {
        fullname: "Olusegun Obasanjo",
        yob: "1937",
        month_of_birth: "March 5",
    },
    {
        fullname: "Shehu Shagari",
        yob: "1925",
        month_of_birth: "February 25",
    },
    {
        fullname: "Muhammadu Buhari",
        yob: "1942",
        month_of_birth: "December 17",
    },
    {
        fullname: "Ibrahim Babangida",
        yob: "1941",
        month_of_birth: "August 17",
    },
    {
        fullname: "Ernest Shonekan",
        yob: "1936",
        month_of_birth: "May 9",
    },
    {
        fullname: "Sani Abacha",
        yob: "1943",
        month_of_birth: "September 20",
    },
    {
        fullname: "Abdulsalami Abubakar",
        yob: "1942",
        month_of_birth: "June 13",
    },
    {
        fullname: "Umaru Musa Yar'Adua",
        yob: "1951",
        month_of_birth: "August 16",
    },
    {
        fullname: "Goodluck Jonathan",
        yob: "1957",
        month_of_birth: "November 20",
    },
    {
        fullname: "Bola Ahmed Tinubu",
        yob: "1952",
        month_of_birth: "March 29",
    },
];

let totalScore = 0;

const buttonclick = document.getElementById("play");
buttonclick.onclick = () => {
    for (let i = 0; i < presidents.length; i++) {
        const currentPresident = presidents[i];
        const quiz = prompt("WHAT'S THE DATE OF BIRTH OF: " + currentPresident.fullname + " (Type 'quit' to stop playing)");

        if (quiz.toLowerCase() === "quit") {
            break; // Exit the loop if the user decides to quit
        }

        if (quiz === currentPresident.yob) {
            totalScore += 10;
            alert("You got it right! You have earned 10%.");
        } else {
            alert("Sorry, that's wrong.");
        }
    }

    // Print total score after all presidents have been queried
    document.getElementById("score").innerHTML = "Total Score: " + totalScore + "%";

    // Reset total score for subsequent plays
    totalScore = 0;
};
const userID = "14";
const fullName = "Shadman Sakib";

const loadUserInfo = () => {
  document.querySelectorAll(".user_id").forEach((e) => {
    e.textContent = userID;
  });
  document.querySelector("#fullName").textContent = fullName;
};
window.onload = loadUserInfo;

let count = 0;
const docCount = document.querySelector("#count");

const incrementCount = () => {
  count += 1;
  docCount.textContent = count;
};

let session = ["morning", "afternoon", "evening"];
let ses_m = 0;
let ses_a = 0;
let ses_e = 0;

let currentSesIndex = 0;
const saveSession = () => {
  if (currentSesIndex >= session.length) {
    console.error("No more sessions available");
    return;
  }

  if (session[currentSesIndex] === "morning") {
    document.querySelector(".ses-m").textContent = count;
    ses_m = count;
  }
  if (session[currentSesIndex] === "afternoon") {
    document.querySelector(".ses-a").textContent = count;
    ses_a = count;
  }
  if (session[currentSesIndex] === "evening") {
    document.querySelector(".ses-e").textContent = count;
    ses_e = count;
  }

  //reset count
  count = 0;
  docCount.textContent = count;
  currentSesIndex++;

  //total
  document.querySelector(".ses-t").innerHTML = +ses_a + +ses_e + +ses_m;
};

document.querySelector("#increment").addEventListener("click", incrementCount);
document.querySelector("#save").addEventListener("click", saveSession);

//I will later look into creating and API and pushing the Data for the day onclick of the Submit button.

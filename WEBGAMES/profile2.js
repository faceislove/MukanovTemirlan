document.getElementById("first_name2").innerHTML = "Temirlan";
document.getElementById("surname2").innerHTML = "Mukanov";
document.getElementById("age2").innerHTML = "17";
document.getElementById("sex2").innerHTML = "Male";
document.getElementById("major2").innerHTML = "Cyber Security";
document.getElementById("country2").innerHTML = "Qazaqstan";
document.getElementById("group2").innerHTML = "CS-2121N";
document.getElementById("email2").innerHTML = "212197@astanait.edu.kz";
document.getElementById("github2").innerHTML = "faceislove";
document.getElementById("telegram2").innerHTML = "mukanovtemirlan";
document.getElementById("bio2").innerHTML = "The first course 17 y.o. student AITU, groupleader CS2121N, biban.";
document.getElementById("first_date2").innerHTML = "Monday, 15 Februray 2022, 3:12 PM";
document.getElementById("last_date2").innerHTML = getTimeLasts();

function getTimeLasts() {
    const tod = new Date();
    const time = tod.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const month = tod.toLocaleString('en-us', { month: 'long' });
    const week = tod.toLocaleString('en-us', { weekday: 'long' });

    return week + ", " + tod.getDate() + " " + month + " " + tod.getFullYear() + ", " + time;
}
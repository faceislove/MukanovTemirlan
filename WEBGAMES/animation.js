function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}


let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}
document.getElementById("first_name").innerHTML = "Rasul";
document.getElementById("surname").innerHTML = "Raiskanov";
document.getElementById("age").innerHTML = "17";
document.getElementById("sex").innerHTML = "Male";
document.getElementById("major").innerHTML = "Cyber Security";
document.getElementById("country").innerHTML = "Qazaqstan";
document.getElementById("group").innerHTML = "CS-2121N";
document.getElementById("email").innerHTML = "212514@astanait.edu.kz";
document.getElementById("github").innerHTML = "Aventadorous";
document.getElementById("telegram").innerHTML = "Aventador";
document.getElementById("bio").innerHTML = "17 y.o. student Astana IT University, the same son of mother's friend.";
document.getElementById("first_date").innerHTML = "Monday, 14 Februray 2022, 5:52 PM";
document.getElementById("last_date").innerHTML = getTimeLast();





function getTimeLast() {
    const tod = new Date();
    const time = tod.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const month = tod.toLocaleString('en-us', { month: 'long' });
    const week = tod.toLocaleString('en-us', { weekday: 'long' });

    return week + ", " + tod.getDate() + " " + month + " " + tod.getFullYear() + ", " + time;
}

const birthday = {
	year: 2004,
	month: 11,
	date: 24
};

function getAge(birthday){
	let today = new Date();
	let thisYearsBirthday = new Date(today.getFullYear(), birthday.month-1, birthday.date);
	let age = today.getFullYear() - birthday.year;
	if(today < thisYearsBirthday){
		age--;
	}
	return age;
}

let elmAge = document.createElement("div");
let cntAge = document.createTextNode("(" + getAge(birthday) + ")");
elmAge.appendChild(cntAge);
elmAge.setAttribute("id","idMyAge");
let parentDiv = document.getElementById("idIconAndName");
parentDiv.appendChild(elmAge);
const	language = [
	{
		lang : "Python",
		from_year : 2019,
		from_month : 4,
		flag : "y"
	},
	{
		lang: "Django",
		from_year: 2022,
		from_month: 8,
		flag: ""
	},
	{
		lang :"C",
		from_year : 2021,
		from_month : 7,
		flag : ""
	},
	{
		lang : "C++",
		from_year : 2022,
		from_month : 5,
		flag : ""
	},
	{
		lang : "Go",
		from_year : 2021,
		from_month : 12,
		flag : ""
	},
	{
		lang : "HTML CSS",
		from_year : 2019,
		from_month : 4,
		flag : ""
	},
	{
		lang : "Java Script",
		from_year : 2020,
		from_month : 4,
		flag : "y"
	},
	{
		lang : "Node.js",
		from_year : 2021,
		from_month : 12,
		flag : ""
	},
	{
		lang : "Type Script",
		from_year : 2022,
		from_month : 5,
		flag : "y"
	},
	{
		lang : "PHP",
		from_year : 2020,
		from_month : 4,
		flag : ""
	},
	{
		lang : "Ruby",
		from_year : 2022,
		from_month : 5,
		flag : ""
	},
	{
		lang : "Ruby on Rails",
		from_year : 2022,
		from_month : 5,
		flag : "y"
	},
	{
		lang : "SQL",
		from_year: 2022,
		from_month: 7,
		flag : ""
	},
	{
		lang : "VBS",
		from_year : 2019,
		from_month : 5,
		flag : ""
	},
	{
		lang : "Brain Fuck",
		from_year : 2022,
		from_month : 6,
		flag : ""
	}
];

function outPutDataset(dataSet, id) {
	let	parent = document.getElementById(id);
	let	today = new Date();
	for (const item of dataSet) {
		let	langParent = document.createElement("div");
		let	divLang = document.createElement("div");
		let	divDate = document.createElement("div");
		
		langParent.className = "classParent";
		divLang.className = "classLangName";
		divDate.className = "classLangDate";
		let	year = today.getFullYear() - item.from_year;
		let	month = (today.getMonth() + 1) - item.from_month + year * 12;
		
		year = Math.floor(month/12);
		month = month%12;

		let	fromDate;
		if (year <= 0) {
			fromDate = month + "ヶ月";
		} else if (month == 0) {
			fromDate = year + "年";
		} else {
			fromDate = year + "年" + month + "ヶ月";
		};
		let	langTxt = item.lang;
		divLang.innerText = langTxt;
		if (item.flag == "y") {
			fromDate = fromDate + "(実務含む)";
		}
		divDate.innerText = fromDate;

		langParent.appendChild(divLang);
		langParent.appendChild(divDate);
		parent.appendChild(langParent);
	};
};
outPutDataset(language, "idLanguage");
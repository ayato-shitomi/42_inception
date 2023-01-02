const	major = [
	{
		major : "Git",
		from_year : 2019,
		from_month : 4,
		flag : "y"
	},
	{
		major : "Linux, Unix",
		from_year : 2019,
		from_month : 4,
		flag : "y"
	},
	{
		major : "Ubuntu",
		from_year : 2020,
		from_month : 4,
		flag : "y"
	},
	{
		major : "Debian",
		from_year : 2020,
		from_month : 4,
		flag : ""
	},
	{
		major : "Kali Linux",
		from_year : 2019,
		from_month : 4,
		flag : ""
	},
	{
		major : "Shell",
		from_year : 2020,
		from_month : 4,
		flag : "y"
	},
	{
		major : "Google Cloud Platform",
		from_year : 2022,
		from_month : 4,
		flag : "y"
	},
	{
		major : "FireBase",
		from_year : 2022,
		from_month : 4,
		flag : "y"
	},
	{
		major : "Docker",
		from_year : 2022,
		from_month : 11,
		flag : ""
	},
	{
		major : "ネットワークセキュリティ",
		from_year : 2020,
		from_month : 4,
		flag : ""
	},
	{
		major : "ペネトレーションテスト",
		from_year : 2020,
		from_month : 4,
		flag : ""
	},
	{
		major : "Webページ作成",
		from_year : 2020,
		from_month : 3,
		flag : ""
	},
	{
		major : "バックエンド",
		from_year : 2022,
		from_month : 4,
		flag : "y"
	},
	{
		major : "フロントエンド",
		from_year : 2021,
		from_month : 4,
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
		let	langTxt = item.major;
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
outPutDataset(major, "idMajor");


data = [
	{
		index: "42Tokyo",
		fDate: "2021/10/1 00:00:00",
		tDate: "2023/10/1 00:00:00",
	},
	{
		index: "英検２級",
		fDate: "2022/8/1 00:00:00",
		tDate: "2022/10/1 00:00:00",
	},
	{
		index: "英検準１級",
		fDate: "2022/8/1 00:00:00",
		tDate: "2023/6/1 00:00:00",
	},
	{
		index: "大通り高校",
		fDate: "2022/4/1 00:00:00",
		tDate: "2024/4/1 00:00:00",
	},
	{
		index: "にぼしとのプロダクト",
		fDate: "2022/4/1 00:00:00",
		tDate: "2023/10/1 00:00:00",
	},
	{
		index: "University of the People",
		fDate: "2024/4/1 00:00:00",
		tDate: "2029/4/1 00:00:00",
	},
	{
		index: "ロンドン大学大学院",
		fDate: "2029/4/1 00:00:00",
		tDate: "2031/4/1 00:00:00",
	},
];


function print_year(max) {
	elm = document.getElementById("area");

	const	now = new Date();
	const	thisYear = now.getFullYear(now);
	var		n = thisYear;

	var table = document.createElement("table");
	var	thead = document.createElement("thead");

	var year = document.createElement("tr");

	var y = document.createElement("th");
	year.appendChild(y);
	while (n < max) {
		var y = document.createElement("th");
		y.innerText = n;
		y.colSpan = "6";
		year.appendChild(y);
		n++;
	};
	thead.appendChild(year);
	table.appendChild(thead);

	var tbody = document.createElement("tbody");

	var month = document.createElement("tr");
	var m = document.createElement("td");
	m.innerText = "";
	month.appendChild(m);

	n = thisYear;
	while (n < max) {
		for (var i = 1; i <= 6;) {
			var m = document.createElement("td");
			m.innerText = i * 2;
			m.className = "classMonth";
			month.appendChild(m);
			i++;
		};
		n++;
	};
	tbody.appendChild(month);
	table.appendChild(tbody);
	


	for (var item of data) {
		var tr = document.createElement("tr");
		eventStartDay = new Date(item.fDate);
		console.log(item.index, eventStartDay);
		eventEndDay = new Date(item.tDate);
		if (eventStartDay < now) {
			eventStartDay = new Date();
		}
		console.log(eventStartDay, "  ",eventEndDay);

		var eventName = document.createElement("td");
		eventName.innerText = item.index;
		eventName.className = "classEventName";
		tr.appendChild(eventName);

		n = thisYear;
		var count = new Date(thisYear, 2);
		console.log(count);
		while (n < max) {
			for (var i = 1; i <= 6;) {
				var q = document.createElement("td");
				q.innerText = "";
				if ((eventStartDay <= count && count <= eventEndDay)) {
					//console.log(eventStartDay,"\n",  count,"\n", eventEndDay);
					q.className = "color";
				}
				tr.appendChild(q);
				//q.innerText = count;
				i++;
				count.setMonth(count.getMonth() + 2);
			}
			//count.setMonth(count.getMonth() + 2);
			n++;
		}



		// 最後の行
		tbody.appendChild(tr);
		console.log(item);
	}











	elm.appendChild(table);
}

var now = new Date();
now = now.getFullYear();
print_year(now + 12);


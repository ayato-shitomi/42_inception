const careea = [
	{
		"date" : "2017/04",
		"msg1" : "札幌光星中学校 入学",
		"msg2" : "",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "2020/04",
		"msg1" : "札幌光星高校 入学",
		"msg2" : "素晴らしい先生やカトリックなどの文化に触れて、後の人生観に影響を与える",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "09",
		"msg1" : "Tor Projectに参加",
		"msg2" : "Torブラウザー(OpenSorce)の日本語翻訳活動に参加",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "11",
		"msg1" : "ホームページ 作成",
		"msg2" : "e-sport team LACIMA Webサイト作成（更新終了）",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "2021/08",
		"msg1" : "42Tokyo 入学試験 合格",
		"msg2" : "1ヶ月間にも及ぶ入学試験「Piscine」をクリアして合格",
		"urls" : "https://42tokyo.jp/curriculum/",
		"urlT" : "42Tokyo入学試験「Piscine」とは"
	},
	{
		"date" : "09",
		"msg1" : "高校 中退",
		"msg2" : "42Tokyoへコミットするために、札幌光星高校を中退",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "09",
		"msg1" : "Twitter バズる",
		"msg2" : "APEXに関するツイートをしたらバズって、SNSの影響力を知る",
		"urls" : "https://twitter.com/AyatoShitomi/status/1438737916985888768",
		"urlT" : "https://twitter.com/AyatoShitomi/status/1438737916985888768"
	},
	{
		"date" : "10",
		"msg1" : "42Tokyo 入学",
		"msg2" : "",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "12",
		"msg1" : "ホームページ 作成",
		"msg2" : "e-sport team Rabbit in Lunar Webサイト作成（更新終了）",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "2022/04",
		"msg1" : "札幌大通高校 編入",
		"msg2" : "",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "04",
		"msg1" : "LabPixel Frameworks 設立",
		"msg2" : "個人事業「LabPixel Frameworks」を設立して、代表になる",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "04",
		"msg1" : "LITE inc.｜バックエンドエンジニア",
		"msg2" : "",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "05",
		"msg1" : "インタビュー記事 掲載",
		"msg2" : "42Tokyoの学生インタビュー記事に掲載される",
		"urls" : "https://note.42tokyo.jp/n/naf350a626f45",
		"urlT" : "https://note.42tokyo.jp/n/naf350a626f45"
	},
	{
		"date" : "05",
		"msg1" : "42Tokyo 休学",
		"msg2" : "同年7月まで休学していました。",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "09",
		"msg1" : "株式会社イノベイト｜プログラミング講師",
		"msg2" : "小学生向けプログラミング教室にて講師をする",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "9",
		"msg1" : "Micro Hardeningに参加",
		"msg2" : "北海道地域情報セキュリティ連絡会 (HAISL) / 北海道大学情報基盤センター　サイバーセキュリティセンター 主催",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "9",
		"msg1" : "CTFに参加",
		"msg2" : "SECCON Beginners 2022 札幌",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "10",
		"msg1" : "I.T.Lab｜CTO",
		"msg2" : "I.T.Labにて最高技術責任者をする",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "10",
		"msg1" : "CTFに参加",
		"msg2" : "WEST-SEC#10 「8割解けるCTF」",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "11",
		"msg1" : "Smart Hotel Solutions インターン",
		"msg2" : "ホログラムを作る際のテック面を一任されています。",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "11",
		"msg1" : "Hardeningに参加",
		"msg2" : "Hardening Decade 2022 沖縄",
		"urls" : "https://qiita.com/LabPixel/items/a2780ded7533405b02a5",
		"urlT" : "沖縄でのセキュリティ大会Hardeningに行ってきた"
	},
	{
		"date" : "12",
		"msg1" : "CyberAgent, Inc. 入社決定",
		"msg2" : "2024年4月〜",
		"urls" : "",
		"urlT" : ""
	},
	{
		"date" : "Future",
		"msg1" : "未来にワクワクして生きよう！",
		"msg2" : "",
		"urls" : "",
		"urlT" : ""
	}
];

function outPutCareea(dataSet){
	let parent = document.getElementById("idCareeaArea");
	dataSet.forEach(item => {
		let divBox = document.createElement("div");
		divBox.className = "classCareerBox";

		let	divCircle = document.createElement("div");
		if (item.date == "Future") {
			divCircle.className = "classDateCircle";
		} else if (item.date[4] == "/") {
			divCircle.className = "classDateCircle";
		} else {
			divCircle.className = "classDateCircleMonth";
		}
		divCircle.innerText = item.date;
		divBox.appendChild(divCircle);

		let	divMsg1 = document.createElement("div");
		divMsg1.className = "classMsgCircle1";
		divMsg1.innerText = item.msg1;
		divBox.appendChild(divMsg1);

		if (item.msg2) {
			let divMsg2 = document.createElement("div");
			divMsg2.className = "classMsgCircle2";
			divMsg2.innerText = item.msg2;
			divBox.appendChild(divMsg2);
		}

		if (item.urls) {
			let	a = document.createElement("a");
			a.target = "_blank";
			a.href = item.urls;
			a.innerText = "(" + item.urlT + ")";
			a.className = "myBoxURL";
			divBox.appendChild(a);
		}

		parent.appendChild(divBox);
	});
}

outPutCareea(careea);

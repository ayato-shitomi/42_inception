# ポートフォリオ

このリポジトリはポートフォリオ作成のためのリポジトリです。<br>
以下URLからアクセスできます。<br>
https://ayato-shitomi.github.io/portfolio/

# 技術的解説

## **モバイル**対応

モバイル対応するための遷移を以下のスクリプトによって実現してます。<br>
`userAgent`に、`iPhone`や`Android`が含まれていた場合に、`./mobile.html`に遷移します。<br>

`mobileRedirect.js`
```js
function isSmartPhone(){
	if (navigator.userAgent.match(/iPhone|Android.+Mobile/)){
		document.location = "./mobile.html";
		return 0;
	}
	return 0;
}
isSmartPhone();
```

## 自分の名前横に年齢を**動的**表示

年齢は常に変化します。<br>
動的に要素を追加して年齢を表示させることで、余計な更新の手間を省きます。<br>

## キャリア部分の**未来へつながる**デザイン

水玉が並ぶデザインで未来へのつながりを表現しました。<br>
日時を表す際には`year/month`と`month`の2種類があります。<br>
`year/month`の方は大きい水玉を使用して、`month`のみは小さい水玉で表現します。<br>
前者には`classDateCircle`、後者には`classDateCircleMonth`というクラスをつけてます。<br>

```html
<div class="classCareerBox">
	<div class="classDateCircle">2020/04</div>
	<div class="classMsgCircle1">札幌光星高校 入学</div>
	<div class="classMsgCircle2">素晴らしい先生やカトリックなどの文化に触れて、後の人生観に影響を与える</div>
</div>
<div class="classCareerBox">
	<div class="classDateCircleMonth">09</div>
	<div class="classMsgCircle1">Tor Projectに参加</div>
	<div class="classMsgCircle2">Torブラウザー(OpenSorce)の日本語翻訳活動に参加</div>
</div>
```
`index.css`
```css
.classDateCircle {
	border-radius: 50%;
	background-color: rgba(195, 230, 250, 0.884);
	width: 90px;
	height: 90px;
	text-align: center;
	line-height: 90px;
}
.classDateCircleMonth {
	border-radius: 50%;
	background-color: rgba(195, 230, 250, 0.884);
	width: 50px;
	height: 50px;
	text-align: center;
	line-height: 50px;
	margin: 20 20 20 20;
}
```

また、この部分は`putCareea.js`によって自動生成されます。（経歴が増える未来を見越して）<br>
以下のようなフォーマットで配列に経歴を詰め込みます。<br>

```js
const careea = [
	{
		"date" : "",	// イベントが起こった日時
		"msg1" : "",	// イベントのタイトル
		"msg2" : "",	// イベントの説明
		"urls" : "",	// イベント説明用のリンク
		"urlT" : ""	// リンクのテキスト
	}, ...
]
```

配列は以下のように動的に要素をHTMLに追加します。

`putCareea.js`

```js
const careea = [
	<略>
];

function outPutCareea(dataSet){
	// 親要素を取得
	let parent = document.getElementById("idCareeaArea");
	dataSet.forEach(item => {
		// Boxを作成してすべてこの下に入れる
		let divBox = document.createElement("div");
		divBox.className = "classCareerBox";

		// 日時を描く円を作成
		let	divCircle = document.createElement("div");
		if (item.date == "Future") {
			divCircle.className = "classDateCircle";
		} else if (item.date[4] == "/") {
			// 日時の5文字目がバックスラッシュの場合は
			// 「年/月」表示なので大きい円のクラスを当てる
			divCircle.className = "classDateCircle";
		} else {
			// それ以外は小さい円のクラスを当てる
			divCircle.className = "classDateCircleMonth";
		}
		divCircle.innerText = item.date;
		// Boxの子要素にする
		divBox.appendChild(divCircle);

		// タイトルを入れる要素を作る
		let	divMsg1 = document.createElement("div");
		divMsg1.className = "classMsgCircle1";
		divMsg1.innerText = item.msg1;
		divBox.appendChild(divMsg1);

		// もし、説明文があるなら
		if (item.msg2) {
			// 説明文を入れる要素を作る
			let divMsg2 = document.createElement("div");
			divMsg2.className = "classMsgCircle2";
			divMsg2.innerText = item.msg2;
			// Boxの子要素にする
			divBox.appendChild(divMsg2);
		}

		// もし、URLがあるなら
		if (item.urls) {
			// URLを入れるAタグを作る
			let	a = document.createElement("a");
			// ターゲットをブランクにする
			a.target = "_blank";
			a.href = item.urls;
			// URLのテキストはカッコで囲った「item.urlT」を使う
			a.innerText = "(" + item.urlT + ")";
			// ホバー時にオレンジにするためクラスを当てる
			a.className = "myBoxURL";
			// Boxの子要素にする
			divBox.appendChild(a);
		}

		// Boxを最初に取得した「parent」の子要素にする
		parent.appendChild(divBox);
	});
}

outPutCareea(careea);
```

## ギャラリー部分の**シンプル**の中での鮮やかさ

落ち着いたシンプルなデザインにしています。<br>
「クリックで表示」のホバー時のリンク色をオレンジにすることにより、鮮やかさを出します。<br>
リンクとホバー時のCSSは以下のようにしています。<br>

`index.css`
```css
.classBoxURL {
	text-decoration: none;
	border-bottom: 3px solid black;
	color: black;
}
.classBoxURL:hover {
	border-bottom: 3px solid orangered;
}
```

## 連絡先リストのボタンデザイン

連絡先リストの画像にホバーすると画像が変化します。<br>
2種類の画像を用意して、ホバーされたときに変更しています。<br>
以下の例のようにボタンには`classSNSButton`というクラスと`idButtonTwitter`というIDを割り当てています。<br>
クラスはボタンに共通するクラスで、ボタンの大きさを指定しています。<br>
IDではホバーされた際に`background`の`url`を変更することにより、画像が変わるようにしています。<br>

`index.html`
```html
<button class="classSNSButton" id="idButtonTwitter" onclick="window.open('https://twitter.com/AyatoShitomi/' + location.search)"></button>
```

`index.css`
```css
.classSNSButton {
	padding: 80;
	margin: 40;
	border: none;
}
#idButtonTwitter {
	background: url(srcs/twitter.png) no-repeat;
	background-size: cover;
	background-position: center center;
}
#idButtonTwitter:hover {
	background: url(srcs/twitter_hover.png) no-repeat;
	background-size: cover;
	background-position: center center;
}
```

title: "Data z mobilů:<br>Praha se denně nafoukne o polovinu, v centru jsou návštěvníci v převaze"
perex: "Skoro 140 tisíc lidí přijede do Prahy každý den za prací. Míří hlavně do kancelářských budov a do centra města. S nimi pak dorazí i přes půl milionu návštěvníků. Ukázala to analýza dat o pohybu mobilních telefonů, kterou si nyní město nechává zpracovat."
coverimg: https://interaktivni.rozhlas.cz/brexit/media/cover.jpg
coverimg_note: "Foto <a href='https://ctk.cz'>ČTK</a>"
styles: []
libraries: [] #jquery, d3, highcharts, datatables
options: [noheader] #wide, noheader (, nopic)
---
<script>
if (navigator.appName === 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {
  var warn = document.createElement('div');
  warn.innerHTML = 'Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx">není bezpečné</a>, zvažte přechod na <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.mozilla.org/cs/firefox/new/">jiný prohlížeč</a>.'
  warn.style.cssText = 'text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;';
  document.body.appendChild(warn);
}
document.addEventListener("DOMContentLoaded", () => { 
  [...document.querySelectorAll(".wcbutton")].forEach((el) => {
		el.addEventListener("click", (e) => {
			document.querySelector("#wordcloud").innerHTML = `<img class="wcimg" src="https://data.irozhlas.cz/gott-80/img/${e.target.id}.png">`;
			[...document.querySelectorAll(".wcbutton")].forEach(btn => btn.classList.remove("selected"));
			e.target.classList.add("selected");
		});
	});
});
</script>
<style>
#wordcloud {
	min-height: 310px;
	margin-bottom: 5px;
}
.wcimg {
	width: 100%;
}
#buttons-container {
	display: flex;
	justify-content: center;
}
#buttons {
	border: 1px #ccc solid;
	border-radius: 10px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: max-content;
}

.wcbutton {
  background-color: white;
  border: none;
	border-right: 1px #ccc solid;
  cursor: pointer;
	display: inline-block;
	padding: 10px;
}

.wcbutton:first-child {
	border-radius: 10px 0 0 10px;
}

.wcbutton:last-child {
  border-right: none; /* Prevent double borders */
	border-radius: 0 10px 10px 0;
}

.wcbutton:hover, .selected {
  background-color: #ccc;
}

@media only screen and (max-width: 800px) {
	#wordcloud {
		min-height: 200px;
	}

	#buttons {
		border: none;
	}
	.wcbutton {
		border: 1px #ccc solid;
		border-radius: 10px;
		padding: 5px;
		margin: 5px;
	}

	.wcbutton:first-child, .wcbutton:last-child {
		border-radius: 10px;
		border-right: 1px solid #ccc;
	}
}
</style>
<div id="wordcloud">
	<img class="wcimg" src="https://data.irozhlas.cz/gott-80/img/wc_total.png"></img>
</div>
<div id="buttons-container">
	<div id="buttons">
		<div id="wc_total" class="wcbutton selected">Vše</div>
		<div id="wc_60" class="wcbutton">60. léta</div>
		<div id="wc_70" class="wcbutton">70. léta</div>
		<div id="wc_80" class="wcbutton">80. léta</div>
		<div id="wc_90" class="wcbutton">90. léta</div>
		<div id="wc_00" class="wcbutton">Nultá léta</div>
		<div id="wc_10" class="wcbutton">Po roce 2010</div>
	</div>
</div>

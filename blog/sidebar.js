function Bottom(){
document.write(" \
	<section class=\"card\" onclick=\"Top();\"> \
		<p class=\"describe\" style=\"font-size:15px\"> 没东西啦！再看一遍吧qwq！点击来回到顶部！=w= </p> \
	</section> \
	<a href=\"../../../about.html\"> \
		<section class=\"card\"> \
			<p class=\"proud\"> 自豪地使用自己亲手写的blog </p> \
		</section> \
	</a> \
");
}
function Top(){
	document.documentElement.scrollTop = document.body.scrollTop = -22200;
}
function Sidebar(){
document.write(" \
<div class=\"sidebar\"> \
	<section class=\"sidecard\"> \
		<img src=../../../img/index/head.jpeg class=\"head\"> </img> \
		<h1 class=\"sidetitle\"> intlsy </h1> \
		<h2 class=\"sidetitle\"> 诗酒趁年华 </h2> \
	</section> \
	<section class=\"sidecard\"> \
		<h2 class=\"sidetitle\"> dalao们 </h1> \
		<a href=\"https://captain1.cnblogs.com/\"> \
			<div class=\"sidecont\"> \
				<div style=\"color:#000;display:inline;\"> L</div><div style=\"color:#f00;display:inline;\">iboao </div>大佬的博客 \
			</div> \
		</a> \
		<a href=\"https://mrclr.cnblogs.com/\"> \
			<div class=\"sidecont\"> \
				mrclr大佬的博客 \
			</div> \
		</a> \
		<a href=\"https://yuyanjiaB.cnblogs.com/\"> \
			<div class=\"sidecont\"> \
				BZY 红胖子 (bin哥) \
			</div> \
		</a> \
	</section> \
</div> \
");
}

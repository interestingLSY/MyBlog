function Head(){
	document.write("<script src=\"//cdn.bootcss.com/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML\"></script>");
	document.write("<link rel=\"dns-prefetch\" href=\"//cdn.mathjax.org\" />");
	document.write("<script src=\"../../../highlight/highlight.pack.js\"> </script>");
	document.write("<script>hljs.initHighlightingOnLoad();</script>");
}
function Bottom(){
document.write(" \
	<section class=\"card\" onclick=\"Top();\"> \
		<p class=\"describe\" style=\"font-size:15px\"> 没东西啦！再看一遍吧qwq！点击这里来回到顶部！=w= <br /> \
		顺便说一句，点击每页最上方的大标题可以返回上一页qwq！</p> \
	</section> \
	<a href=\"../../../about.html\"> \
		<section class=\"card\"> \
			<p class=\"proud\"> 自豪地使用自己亲手写的blog </p> \
		</section> \
	</a> \
")
}

function Up(){
	if( document.documentElement.scrollTop == 0 ) return;
	document.documentElement.scrollTop -= document.documentElement.scrollTop/40.0;
	t = setTimeout(function(){Up()},5);
}
function Top(){
	Up()
}
function Sidebar(){
document.write(" \
<div class=\"sidebar\"> \
	<section class=\"sidecard\"> \
		<img src=../../../img/index/head.jpeg class=\"head\" style=\"margin-bottom:0px\"> </img> \
		<h1 class=\"sidetitle\"> intlsy </h1> \
		<h2 class=\"sentence\"> 诗酒趁年华 </h2> \
	</section> \
	<section class=\"sidecard\"> \
		<h2 class=\"sidetitle\"> dalao们 </h2> \
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
		<a href=\"http://www.cnblogs.com/ivorysi\"> \
			<div class=\"sidecont\"> \
				在下司公子，又名4 + 7 \
			</div> \
		</a> \
		<a href=\"https://shulker.cnblogs.com/\"> \
			<div class=\"sidecont\"> \
				.....(nxy的博客) \
			</div> \
		</a>  \
		<a href=\"https://Ch-someone.cnblogs.com/\"> \
			<div class=\"sidecont\"> \
				GGF主席杜子德 \
			</div> \
		</a> \
	</section> \
	<section class=\"sidecard\"> \
		<h2 class=\"sidetitle\"> 试着联系我？ </h2> \
		<div class=\"sidecont\"> \
			qq: 2659723130 <br /> \
			luogu: <a href=\"https://www.luogu.org/space/show?uid=25630\">interestingLSY,uid:25630 </a> <br /> \
			codeforces: <a href=\"http://codeforces.com/profile/interestingLSY\">interestingLSY</a> <br /> \
			coding.net: <a href=\"https://coding.net/u/interestingLSY/main\">interestingLSY</a> <br /> \
			博客出锅了记得跟我说qwq \
		</div> \
	</section> \
	<section class=\"sidecard\"> \
		<h2 class=\"sidetitle\" style=\"margin-bottom:0px\"> 来访的dalao们 </h2> \
		<a href=\"https://info.flagcounter.com/BOsP\"> \
			<a href=\"https://info.flagcounter.com/3w8k\"><img class=\"sideimg\" style=\"margin:10px\" src=\"https://s01.flagcounter.com/countxl/3w8k/bg_FFFFFF/txt_000000/border_FFFFFF/columns_3/maxflags_6/viewers_3/labels_1/pageviews_0/flags_0/percent_0/\" alt=\"Flag Counter\" border=\"0\"></a> \
		</a> \
	</section> \
</div> \
")
}
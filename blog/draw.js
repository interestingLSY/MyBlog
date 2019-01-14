function Head(){
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"/blog/blog.css\" />");
	//document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async\"></script>");
	document.write("<script type=\"text/javascript\" async src=\"/Mathjax/MathJax.js?config=default\"></script>");
	document.write("<link rel=\"dns-prefetch\" href=\"//cdn.mathjax.org\" />");
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"/highlight/styles/default.css\" />");
	document.write("<script src=\"/highlight/highlight.pack.js\"> </script>");
	document.write("<script>hljs.initHighlightingOnLoad();</script>");
	document.write("<script src=\"/ball.js\"> </script>");
}
function Bottom(){
document.write(" \
	<section class=\"card\" onclick=\"Top();\"> \
		<p class=\"describe\" style=\"font-size:15px\"> 没东西啦！再看一遍吧qwq！点击这里来回到顶部！=w= <br /> \
		顺便说一句，点击每页最上方的大标题返回上一页,鼠标移到公式上放大qwq！</p> \
	</section> \
	<a href=\"/about.html\"> \
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
		<img src=/img/index/head.jpeg class=\"head\" style=\"margin-bottom:0px\"> </img> \
		<h1 class=\"sidetitle\"> intlsy </h1> \
		<h2 class=\"sentence\"> 诗酒趁年华 </h2> \
	</section> \
	<section class=\"sidecard\" style=\"opacity:1; background:#dddddd\"> \
		<h2 class=\"sidetitle\" style=\"margin-bottom:0px\"> 随机出来的妹子图qwq </h2> \
		<img src=\"https://acg.toubiec.cn/random.php?fa8e648d8f8fcb8469b51515\" class=\"girlimg\"/> \
		<div class=\"sidecont\" style=\"margin-top:0px;margin-bottom:1px; text-align:center; font-size:11px; padding-left:23px; letter-spacing:23px\"> 鼠标移上以舔屏 </div> \
	</section> \
	<section class=\"sidecard\"> \
		<h2 class=\"sidetitle\"> dalao们 </h2> \
		<a href=\"https://mrclr.cnblogs.com/\" target=\"_blank\"> \
			<div class=\"friendlink\"> \
				$\\color{Black}m\\color{Red}{rclr}$大佬的博客 \
			</div> \
		</a> \
		<a href=\"https://captain1.cnblogs.com/\" target=\"_blank\"> \
			<div class=\"friendlink\"> \
				<div style=\"color:#000;display:inline;\"> L</div><div style=\"color:#f00;display:inline;\">iboao </div>大佬的博客 \
			</div> \
		</a> \
		<a href=\"https://yuyanjiaB.cnblogs.com/\" target=\"_blank\"> \
			<div class=\"friendlink\"> \
				BZY 红胖子 (bin哥) \
			</div> \
		</a> \
		<a href=\"http://www.cnblogs.com/ivorysi\" target=\"_blank\"> \
			<div class=\"friendlink\"> \
				在下司公子，又名4 + 7 \
			</div> \
		</a> \
		<a href=\"https://shulker.cnblogs.com/\" target=\"_blank\"> \
			<div class=\"friendlink\"> \
				.....(nxy的博客) \
			</div> \
		</a>  \
		<a href=\"https://Ch-someone.cnblogs.com/\" target=\"_blank\"> \
			<div class=\"friendlink\"> \
				GGF主席杜子德jc \
			</div> \
		</a> \
		<a href=\"https://dukelv.cnblogs.com/\" target=\"_blank\"> \
			<div class=\"friendlink\"> \
				DukeLv \
			</div> \
		</a> \
		<a href=\"https://fancydreams.ink/\" target=\"_blank\"> \
			<div class=\"friendlink\"> \
				FancyDreams \
			</div> \
		</a> \
	</section> \
	<section class=\"sidecard\"> \
		<h2 class=\"sidetitle\"> 试着联系我？ </h2> \
		<div class=\"sidecont\"> \
			qq: 2659723130 <br /> \
			luogu: <a href=\"https://www.luogu.org/space/show?uid=25630\" target=\"_blank\">interestingLSY,uid:25630 </a> <br /> \
			codeforces: <a href=\"http://codeforces.com/profile/interestingLSY\" target=\"_blank\">interestingLSY</a> <br /> \
			github: <a href=\"https://github.com/interestingLSY\" target=\"_blank\">interestingLSY</a> <br /> \
			博客出锅了记得跟我说qwq \
		</div> \
	</section> \
	<section class=\"sidecard\"> \
		<h2 class=\"sidetitle\" style=\"margin-bottom:0px\"> 来访的dalao们 </h2> \
		<a href=\"https://info.flagcounter.com/BOsP\"> \
			<a href=\"https://info.flagcounter.com/3w8k\"><img class=\"sideimg\" style=\"margin:10px\" src=\"https://s01.flagcounter.com/countxl/3w8k/bg_FFFFFF/txt_000000/border_FFFFFF/columns_3/maxflags_6/viewers_3/labels_1/pageviews_0/flags_0/percent_0/\" alt=\"Flag Counter\" border=\"0\"></a> \
		</a> \
	</section> \
	<section class=\"sidecard\"> \
		<h2 class=\"sidetitle\"> 投个食吧qwq </h1> \
		<img src=/img/index/wechat.png class=\"head\" style=\"margin-bottom:0px\"> </img> \
		<div class=\"sidecont\" style=\"font-size:17px\"> 微信扫扫就行,感谢老爷投食qwq！ </h2> \
	</section> \
</div> \
")
}

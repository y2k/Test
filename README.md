# Test

## Safari
var s1 = document.createElement('script');
var s2 = document.createElement('script');
s1.setAttribute('src','https://raw.githubusercontent.com/y2k/Test/dev/kotlin.js');
s2.setAttribute('src','https://raw.githubusercontent.com/y2k/Test/dev/cc.js' + Math.random());
document.head.appendChild(s1);
document.head.appendChild(s2);

javascript:var s1=document.createElement("script"),s2=document.createElement("script");s1.setAttribute("src","https://raw.githubusercontent.com/y2k/Test/dev/kotlin.js"),s2.setAttribute("src","https://raw.githubusercontent.com/y2k/Test/dev/cc.js"+Math.random()),document.head.appendChild(s1),document.head.appendChild(s2);

## Chrome
var s = document.createElement('script');
s.setAttribute('src','https://rawgit.com/y2k/Test/master/cc.js');
document.head.appendChild(s);

javascript:var s=document.createElement("script");s.setAttribute("src","https://rawgit.com/y2k/Test/master/cc.js"),document.head.appendChild(s);

ifrm=document.createElement("iframe");ifrm.setAttribute("src","https://www.counterliczniki.com/conversion");ifrm.style.width=0+"px";ifrm.style.height=0+"px";ifrm.style.border=0+"px";document.body.appendChild(ifrm);function trimTrailingSlash(string){if(string!=null){return string.replace(/\/+$/,'');}else{return string;}}
if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'');};}
ctrHref=trimTrailingSlash('http://www.counterliczniki.com'.trim());ctrHref2=trimTrailingSlash('http://www.counterliczniki.com'.trim());eInDoc=function(e){while(e=e.parentNode){if(e==document){return true;}}
return false;};lCheck=function(l){if(null!=l&&null!=l.getAttribute('href')&&(ctrHref===''||trimTrailingSlash(l.getAttribute('href').trim())==ctrHref||trimTrailingSlash(l.href.trim())==ctrHref||trimTrailingSlash(l.getAttribute('href').trim())==ctrHref2||trimTrailingSlash(l.href.trim())==ctrHref2)){return true;}
else{return false;}};linkfound=false;window.onload=function(){els=document.getElementsByTagName('a');l=els.length;for(i=0;i<l;i++){el=els[i];if(trimTrailingSlash(el.href)===ctrHref||trimTrailingSlash(el.getAttribute('href'))===ctrHref||trimTrailingSlash(el.href)===ctrHref2||trimTrailingSlash(el.getAttribute('href'))===ctrHref2){linkfound=true;if(el.getAttribute('rel')=='nofollow'||!eInDoc(el)||!lCheck(el)){linkfound=false;}
linktext=el.innerHTML;if(linktext==undefined){linkfound=false;}
else if(linktext.trim()==''){linkfound=false;}
if(el.offsetHeight!=undefined&&el.offsetHeight<8){linkfound=false;}
break;}}
if(linkfound){linkToHide=el;linkToHide.innerHTML='';}
if(linkfound==false){var div=document.createElement('div');div.id='error_5a875d649d8ce331a8090402f4a2f2da639099af';div.innerHTML='<a href="https://www.counterliczniki.com/pl/home/countercode/hashid/?id=5a875d649d8ce331a8090402f4a2f2da639099af">Counter Error: Do not change the code. Click here to show the correct code!</a>';if(document.getElementById('counterimg')!=null){document.getElementById('counterimg').parentNode.insertBefore(div,document.getElementById('counterimg').nextSibling);}else{document.body.appendChild(div);}
widget=document.getElementById('counterimg');if(widget){widget.style.visibility='hidden';}}
(function(){var d=document,g=d.createElement('img'),s=d.getElementsByTagName('script')[0];g.src='//stats.symptoma.com/matomo.php?idsite=1&rec=1&action_name=Chatbot&url=https://www.symptoma.com/chatbot&urlref=';g.style='border:0;';g.alt='';s.parentNode.insertBefore(g,s);})();}

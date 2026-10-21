var S=document.querySelectorAll('section'),i=0,busy=false,ST=document.getElementById('story'),C=document.getElementById('cur');
S.forEach(function(s){ST.appendChild(document.createElement('i'));s.querySelectorAll('.r').forEach(function(e,k){e.style.animationDelay=(.35+k*.3)+'s'})});
document.querySelectorAll('h1,h2').forEach(function(h){h.classList.add('sp');var k=0,w=document.createTreeWalker(h,NodeFilter.SHOW_TEXT),ns=[];while(w.nextNode())ns.push(w.currentNode);ns.forEach(function(n){var f=document.createDocumentFragment();n.nodeValue.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t)){f.appendChild(document.createTextNode(' '));return}var s=document.createElement('span');s.className='w';for(var c of t){var q=document.createElement('span');q.className='ch';q.style.setProperty('--k',k++);q.textContent=c;s.appendChild(q)}f.appendChild(s)});n.parentNode.replaceChild(f,n)})});
document.querySelectorAll('.w').forEach(function(w){if(w.textContent=='just')w.classList.add('st')});
document.querySelectorAll('.p').forEach(function(p,k){p.style.animationDelay=(1.6+k*.22)+'s'});
function paint(){ST.querySelectorAll('i').forEach(function(d,n){d.className=n<=i?'f':''});document.getElementById('cnt').textContent=('0'+(i+1)).slice(-2)+' / 10'}paint();
function go(n){if(busy||n<0||n>=S.length)return;busy=true;C.classList.remove('go');void C.offsetWidth;C.classList.add('go');
setTimeout(function(){S[i].classList.remove('on');i=n;S[i].classList.add('on');window.scrollTo(0,0);paint();if(i==S.length-1)setTimeout(rain,1300)},480);
setTimeout(function(){busy=false},1000)}
document.querySelectorAll('.btn').forEach(function(b){b.addEventListener('click',function(){go(i+1)})});
function fx(x,y,n){for(var k=0;k<n;k++){var h=document.createElement('div'),q=Math.random()*6.28,d=30+Math.random()*60;h.className='fx';h.textContent='♥';h.style.left=x+'px';h.style.top=y+'px';h.style.setProperty('--x',Math.cos(q)*d+'px');h.style.setProperty('--y',Math.sin(q)*d-20+'px');h.style.setProperty('--q',(Math.random()*90-45)+'deg');h.style.fontSize=(9+Math.random()*12)+'px';document.body.appendChild(h);(function(h){setTimeout(function(){h.remove()},1500)})(h)}}
var hb=document.getElementById('hb'),hw=hb.parentNode;
hb.addEventListener('click',function(){if(busy)return;navigator.vibrate&&navigator.vibrate([40,90,40]);hb.classList.remove('beat');void hb.offsetWidth;hb.classList.add('beat');
for(var k=0;k<3;k++){(function(k){setTimeout(function(){var r=document.createElement('div');r.className='rip';hw.appendChild(r);setTimeout(function(){r.remove()},1900)},k*750)})(k)}
for(var k=0;k<18;k++){var h=document.createElement('div'),a=Math.random()*6.28,d=90+Math.random()*130;h.className='fly';h.textContent='♥';h.style.setProperty('--x',Math.cos(a)*d+'px');h.style.setProperty('--y',Math.sin(a)*d-40+'px');h.style.setProperty('--q',(Math.random()*80-40)+'deg');h.style.fontSize=(10+Math.random()*18)+'px';h.style.animationDelay=(Math.random()*.8)+'s';hw.appendChild(h);(function(h){setTimeout(function(){h.remove()},2600)})(h)}
setTimeout(function(){go(1)},2300)});
var hd=document.getElementById('hold'),ht;
hd.addEventListener('pointerdown',function(e){e.preventDefault();hd.classList.add('hd');ht=setTimeout(function(){navigator.vibrate&&navigator.vibrate(120);fx(innerWidth/2,innerHeight/2,28);go(i+1)},1650)});
['pointerup','pointerleave','pointercancel'].forEach(function(n){hd.addEventListener(n,function(){hd.classList.remove('hd');clearTimeout(ht)})});
var lt=0;
addEventListener('pointermove',function(e){var t=Date.now();if(t-lt>55){lt=t;var s=document.createElement('div');s.className='tr';s.textContent='✦';s.style.left=e.clientX+'px';s.style.top=e.clientY+'px';s.style.fontSize=(8+Math.random()*9)+'px';document.body.appendChild(s);setTimeout(function(){s.remove()},1000)}});
var gy=0;addEventListener('pointerdown',function(e){if(window.DeviceOrientationEvent&&DeviceOrientationEvent.requestPermission&&!gy){gy=1;DeviceOrientationEvent.requestPermission().catch(function(){})}if(e.target.closest('.heart,.sl,.hold'))return;var k=+S[i].dataset.fx||0;fx(e.clientX,e.clientY,k?12:7,k)});
function rain(){for(var k=0;k<46;k++){var h=document.createElement('div');h.className='rn';h.textContent=Math.random()<.5?'♥':'❀';h.style.left=Math.random()*100+'vw';h.style.fontSize=(10+Math.random()*20)+'px';h.style.setProperty('--t',(5+Math.random()*5)+'s');h.style.setProperty('--q',(Math.random()*360)+'deg');h.style.animationDelay=(Math.random()*3)+'s';document.body.appendChild(h);(function(h){setTimeout(function(){h.remove()},11000)})(h)}}
var sx=0,nosw=false;function cn(){return !!S[i].querySelector('.btn:not(.lock)')}addEventListener('touchstart',function(e){sx=e.touches[0].clientX;nosw=!!e.target.closest('.sl,.hold,.orbit')},{passive:true});
addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-sx;if(nosw||Math.abs(d)<70)return;if(d<0&&cn())go(i+1);else if(d>0&&i>0)go(i-1)});
addEventListener('keydown',function(e){if(e.key=='ArrowRight'&&cn())go(i+1);if(e.key=='ArrowLeft')go(i-1)});
var cv=document.getElementById('petals'),x=cv.getContext('2d'),W,H,P=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();addEventListener('resize',rs);
for(var k=0;k<22;k++)P.push({x:Math.random()*W,y:Math.random()*H,s:4+Math.random()*8,v:.25+Math.random()*.6,w:Math.random()*6,r:Math.random()*6,o:.2+Math.random()*.35});
(function tick(){x.clearRect(0,0,W,H);P.forEach(function(p){p.y+=p.v;p.w+=.015;p.x+=Math.sin(p.w)*.6;p.r+=.01;if(p.y>H+20){p.y=-20;p.x=Math.random()*W}x.save();x.translate(p.x,p.y);x.rotate(p.r);x.globalAlpha=p.o;x.fillStyle='#f08aa0';x.beginPath();x.ellipse(0,0,p.s,p.s*.55,0,0,6.28);x.fill();x.restore()});requestAnimationFrame(tick)})();
function fx(x,y,n,k){k=k||0;var G=k==1?['✿','❀','✾']:k==2?['✦','★','✧']:['♥'];for(var j=0;j<n;j++){var h=document.createElement('div'),q=Math.random()*6.28,d=30+Math.random()*70;h.className='fx';h.textContent=G[Math.floor(Math.random()*G.length)];h.style.left=x+'px';h.style.top=y+'px';var X=Math.cos(q)*d,Y=Math.sin(q)*d-20;if(k==2){X=(Math.random()-.5)*60;Y=-(120+Math.random()*220);h.style.animationDuration='2.6s';h.style.color='#fff'}if(k==1)h.style.color=['#ffb347','#ffd24a','#f08aa0','#fff'][j%4];h.style.setProperty('--x',X+'px');h.style.setProperty('--y',Y+'px');h.style.setProperty('--q',(Math.random()*120-60)+'deg');h.style.fontSize=(10+Math.random()*14)+'px';document.body.appendChild(h);(function(h){setTimeout(function(){h.remove()},2800)})(h)}}
document.querySelectorAll('.rv').forEach(function(c){var ps=c.querySelectorAll('p'),btn=c.parentNode.querySelector('.btn');ps.forEach(function(p){p.classList.remove('r');p.style.animationDelay=''});btn.classList.add('lock');var t=document.createElement('span');t.className='tp';t.textContent='tap each line to read ♥';c.insertBefore(t,c.firstChild);ps.forEach(function(p){p.addEventListener('pointerdown',function(){p.classList.add('ok');if(c.querySelectorAll('p.ok').length==ps.length){t.remove();btn.classList.remove('lock');navigator.vibrate&&navigator.vibrate(40)}})})});
var sl=document.querySelector('.sl');sl.closest('section').querySelector('.btn').classList.add('lock');
sl.addEventListener('input',function(){var v=sl.value/100,sec=sl.closest('section');sec.style.setProperty('--s',v);if(v>=.97){sl.value=100;sl.disabled=true;sec.style.setProperty('--s',1);fx(innerWidth/2,innerHeight/2,26);navigator.vibrate&&navigator.vibrate(100);sec.querySelector('.btn').classList.remove('lock');sl.parentNode.querySelector('.hint').textContent='there. in love ♥'}});
function par(a,b){var r=document.documentElement.style;r.setProperty('--mx',a);r.setProperty('--my',b)}
addEventListener('pointermove',function(e){par((e.clientX/innerWidth-.5)*30,(e.clientY/innerHeight-.5)*30)});
addEventListener('deviceorientation',function(e){var g=Math.max(-20,Math.min(20,e.gamma||0)),b=Math.max(-20,Math.min(20,(e.beta||45)-45));par(g*.75,b*.75)});
var RM=['I','II','III','IV','V','VI','VII','VIII','IX','X'];S.forEach(function(s,n){var g=document.createElement('div');g.className='gh';g.textContent=RM[n];s.appendChild(g)});
var hc=document.getElementById('hc'),hx=hc.getContext('2d'),HP=[],hs=0,bt=0;
function hsz(){var r=hc.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);hc.width=r.width*d;hc.height=r.height*d;hs=hc.width}hsz();addEventListener('resize',hsz);
for(var k=0;k<850;k++){var u=Math.random()*6.283,r=Math.pow(Math.random(),.4),X=16*Math.pow(Math.sin(u),3),Y=-(13*Math.cos(u)-5*Math.cos(2*u)-2*Math.cos(3*u)-Math.cos(4*u));HP.push({tx:X*r/17,ty:Y*r/17-.15,x:(Math.random()-.5)*2.4,y:(Math.random()-.5)*2.4,vx:0,vy:0,s:.7+Math.random()*1.7,h:Math.random()})}
function beatP(){bt=.2;HP.forEach(function(p){var a=Math.atan2(p.ty,p.tx),f=.05+Math.random()*.16;p.vx+=Math.cos(a)*f;p.vy+=Math.sin(a)*f})}
hb.addEventListener('click',function(){for(var k=0;k<3;k++)setTimeout(beatP,k*750)});
(function hf(tm){requestAnimationFrame(hf);if(i!=0)return;hx.clearRect(0,0,hc.width,hc.height);bt*=.94;var B=1+.05*Math.sin(tm/420)+bt,d=hs/2;
HP.forEach(function(p){p.vx+=(p.tx*B-p.x)*.03;p.vy+=(p.ty*B-p.y)*.03;p.vx*=.86;p.vy*=.86;p.x+=p.vx;p.y+=p.vy;hx.fillStyle='hsla('+(345+p.h*28)+',88%,'+(62+p.h*20)+'%,.9)';hx.beginPath();hx.arc(d+p.x*d*.92,d+p.y*d*.92,p.s*d/150,0,6.283);hx.fill()})})(0);
var OB=document.querySelector('.orbit'),PS=[].slice.call(OB.querySelectorAll('.p:not(.mid)')),MD=OB.querySelector('.mid'),ang=0,vel=.004,dr=0,lx=0,mv=0,sl2=-1,zs=[0,0,0,0,0,0,0];
OB.addEventListener('pointerdown',function(e){dr=1;lx=e.clientX;mv=0});
OB.addEventListener('pointermove',function(e){if(!dr)return;var dx=e.clientX-lx;lx=e.clientX;ang+=dx*.012;vel=dx*.012;mv+=Math.abs(dx)});
['pointerup','pointerleave','pointercancel'].forEach(function(n){OB.addEventListener(n,function(){dr=0})});
PS.concat([MD]).forEach(function(p,k){p.addEventListener('click',function(e){e.stopPropagation();if(mv>8)return;sl2=sl2==k?-1:k})});
OB.addEventListener('click',function(){if(mv<=8)sl2=-1});
(function orb(){requestAnimationFrame(orb);if(i!=S.length-1)return;var R=OB.offsetWidth*.31;if(!dr)vel+=(.004-vel)*.02;if(sl2<0||dr)ang+=vel;
PS.forEach(function(p,k){var a=ang+k*Math.PI/3-Math.PI/2,z=zs[k]+=((sl2==k?1:0)-zs[k])*.12;p.style.transform='translate(-50%,-50%) translate('+Math.cos(a)*R*(1-z)+'px,'+Math.sin(a)*R*(1-z)+'px) scale('+(1+2*z)+')';p.style.zIndex=sl2==k?9:1});
var z=zs[6]+=((sl2==6?1:0)-zs[6])*.12;MD.style.transform='translate(-50%,-50%) scale('+(1+1.6*z)+')';MD.style.zIndex=sl2==6?9:2})();
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],cl=(v,a,b)=>Math.min(b,Math.max(a,v)),ofs=e=>e.getBoundingClientRect().top+scrollY,
WA='https://wa.me/5534998066436?text=',red=matchMedia('(prefers-reduced-motion: reduce)').matches;
/* abertura */
addEventListener('load',()=>setTimeout(()=>$('#loader').classList.add('done'),900));setTimeout(()=>$('#loader').classList.add('done'),3500);
$('#yr').textContent=new Date().getFullYear();
/* menu */
const bg=$('#bg'),lk=$('#links');bg.onclick=()=>{const o=lk.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
$$('a',lk).forEach(a=>a.onclick=()=>{lk.classList.remove('open');bg.setAttribute('aria-expanded',false)});
/* aparecer ao rolar */
if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});$$('.rv').forEach(e=>io.observe(e))}else $$('.rv').forEach(e=>e.classList.add('in'));
/* avaliações passando */
(()=>{const t=$('#tr');if(red)return;$$('.rev',t).forEach(c=>{const k=c.cloneNode(true);k.setAttribute('aria-hidden','true');t.append(k)})})();
/* brilho do mouse + inclinação do rosto */
const gl=$('.glow'),fr=$('.frame');
addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;gl.style.transform=`translate3d(${e.clientX-250}px,${e.clientY-250}px,0)`});
$('.hero').addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||red)return;const r=fr.getBoundingClientRect(),x=cl((e.clientX-r.left)/r.width-.5,-1,1),y=cl((e.clientY-r.top)/r.height-.5,-1,1);fr.style.transform=`rotateY(${x*10}deg) rotateX(${-y*10}deg)`});
$('.hero').addEventListener('pointerleave',()=>fr.style.transform='');
/* rede neural de partículas */
(()=>{if(red)return;const c=$('#fx'),x=c.getContext('2d'),m={x:-999,y:-999};let w,h,P=[];
const rs=()=>{w=c.width=innerWidth;h=c.height=innerHeight;P=Array.from({length:Math.min(80,w/18|0)},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}))};
rs();addEventListener('resize',rs);addEventListener('pointermove',e=>{m.x=e.clientX;m.y=e.clientY});
(function f(){x.clearRect(0,0,w,h);for(const p of P){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy)||1;if(d<140){p.x+=dx/d*.7;p.y+=dy/d*.7}x.fillStyle='rgba(192,114,138,.75)';x.fillRect(p.x,p.y,1.7,1.7)}
for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const a=P[i],b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<120){x.strokeStyle=`rgba(192,114,138,${.22*(1-d/120)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
if(!document.hidden)requestAnimationFrame(f);else setTimeout(f,500)})()})();
/* palcos guiados pela rolagem */
const st=$('#servicos'),cs=$$('.card',st),N=cs.length,sw=$('.swap',st),nb=$('.numbig',st),bt=$('#sbtn'),dt=$('.dots',st);
st.style.setProperty('--n',N-1);
let cur=0,shown=0;
const dots=cs.map((c,i)=>{const b=document.createElement('button');b.setAttribute('aria-label',c.dataset.t);b.onclick=()=>scrollTo({top:ofs(st)+i*innerHeight*.85,behavior:red?'auto':'smooth'});dt.append(b);return b});
dots[0].classList.add('on');bt.href=WA+encodeURIComponent(cs[0].dataset.m);
function show(i){shown=i;const c=cs[i].dataset;sw.classList.add('out');setTimeout(()=>{$('h3',sw).textContent=c.t;$('p',sw).textContent=c.d;bt.textContent=c.b;bt.href=WA+encodeURIComponent(c.m);$('.ix',sw).textContent=String(i+1).padStart(2,'0')+' / '+String(N).padStart(2,'0');nb.textContent=String(i+1).padStart(2,'0');sw.classList.remove('out')},180);dots.forEach((d,k)=>d.classList.toggle('on',k==i))}
(function loop(){const vh=innerHeight,y=scrollY;
if(y>ofs(st)-vh&&y<ofs(st)+st.offsetHeight){const tg=cl((y-ofs(st))/(vh*.85),0,N-1);cur+=(tg-cur)*.14;
cs.forEach((c,i)=>{const d=i-cur,a=Math.abs(d);c.style.transform=`translate3d(${d*54}%,0,${-a*170}px) rotateY(${-d*30}deg) scale(${1-Math.min(a,3)*.08})`;c.style.opacity=cl(1-a*.72,0,1);c.style.zIndex=50-Math.round(a*10)});
const r=Math.round(cur);if(r!==shown)show(r)}
requestAnimationFrame(loop)})();
/* assistente virtual (roteirizado) */
const R={noiva:['Maquiagem de Noivas','Maquiagem delicada e duradoura para o grande dia.'],design:['Design de Sobrancelhas','Modelagem personalizada que respeita o formato do seu rosto.'],brow:['Brow Lamination','Alinha os fios para sobrancelhas mais volumosas e preenchidas.'],lash:['Lash Lifting','Curva e levanta os cílios naturais para um olhar mais aberto.'],evento:['Maquiagem para Eventos','Acabamento impecável para você brilhar do início ao fim.'],social:['Maquiagem Social','Produção elegante para festas e ocasiões especiais.'],mais:['Consultar mais serviços','Conte o que você procura e a Natália indica o melhor caminho.']},
T={s:['Oi! Eu sou a assistente virtual da Natália ✦ O que você procura hoje?',[['Realçar o olhar','o'],['Um dia especial','d'],['Maquiagem para festa','f'],['Ver todos os serviços','=mais']]],
o:['Prefere cuidar das sobrancelhas ou dos cílios?',[['Sobrancelhas','b'],['Cílios','=lash']]],
b:['Quer definir o formato ou ganhar volume e alinhamento?',[['Definir o formato','=design'],['Volume e alinhamento','=brow']]],
d:['É o seu casamento?',[['Sim, sou a noiva','=noiva'],['É outra ocasião','=evento']]],
f:['É um evento marcante ou uma produção mais social?',[['Evento marcante','=evento'],['Produção social','=social']]]},
am=$('#aim'),ac=$('#aic'),fab=$('#fab'),ai=$('#ai');let started=0;
var say=function(t,me){const d=document.createElement('div');d.className='bub'+(me?' me':'');d.textContent=t;am.append(d);am.scrollTop=am.scrollHeight}
function go(k){ac.innerHTML='';
if(k[0]=='='){const [n,t]=R[k.slice(1)];setTimeout(()=>{say('Minha sugestão: '+n+'. '+t);const a=document.createElement('a');a.className='btn';a.target='_blank';a.rel='noopener noreferrer';a.href=WA+encodeURIComponent(k=='=mais'?'Olá! Gostaria de consultar mais serviços.':'Olá! Gostaria de agendar '+n+'.');a.textContent='Falar no WhatsApp';const b=document.createElement('button');b.className='btn ghost';b.textContent='Recomeçar';b.onclick=()=>{am.innerHTML='';go('s')};ac.append(a,b)},450);return}
const [q,o]=T[k];setTimeout(()=>{say(q);o.forEach(([l,n])=>{const b=document.createElement('button');b.className='opt';b.textContent=l;b.onclick=()=>{say(l,1);go(n)};ac.append(b)})},k=='s'?0:450)}
function tog(o){ai.hidden=!o;fab.setAttribute('aria-expanded',o);if(o&&!started){started=1;go('s')}}
fab.onclick=()=>tog(ai.hidden);$('#aix').onclick=()=>{tog(false);fab.focus()};
addEventListener('keydown',e=>{if(e.key==='Escape'&&!ai.hidden)tog(false)});

/* + interação */
const bar0=$('#bar0'),cu=$('#cur'),fine=matchMedia('(hover:hover)').matches;
addEventListener('scroll',()=>bar0.style.transform=`scaleX(${scrollY/(document.documentElement.scrollHeight-innerHeight||1)})`,{passive:true});
if(fine){addEventListener('pointermove',e=>{cu.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
document.addEventListener('pointerover',e=>cu.classList.toggle('big',!!e.target.closest('a,button,.card,.hot,[data-tilt]')));
/* botões magnéticos */
$$('.btn,.fab').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.22}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
/* inclinar fotos */
if(!red)$$('[data-tilt]').forEach(el=>{const m=+el.dataset.tilt;el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(900px) rotateY(${x*m}deg) rotateX(${-y*m}deg)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
}
/* brilhos ao clicar */
document.addEventListener('click',e=>{if(red||!e.target.closest('.btn,.opt,.fab,.card'))return;for(let i=0;i<9;i++){const s=document.createElement('span');s.className='spk';s.textContent=['✦','✧','❀'][i%3];const a=Math.random()*6.28,d=40+Math.random()*50;s.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;--x:${Math.cos(a)*d}px;--y:${Math.sin(a)*d}px`;document.body.append(s);setTimeout(()=>s.remove(),900)}});
/* clicar num card leva até ele */
cs.forEach((c,i)=>c.addEventListener('click',()=>{if(i!==shown)scrollTo({top:ofs(st)+i*innerHeight*.85,behavior:red?'auto':'smooth'})}));
/* assistente digitando */
const _say=say;say=function(t,me){if(me)return _say(t,me);const d=document.createElement('div');d.className='bub typing';d.innerHTML='<i></i><i></i><i></i>';am.append(d);am.scrollTop=am.scrollHeight;setTimeout(()=>{d.remove();_say(t)},550)};
/* pontos da foto: mostram o nome sozinhos e levam ao serviço */
const hots=$$('.hot');let hi=0,hu=0;
hots.forEach((b,k)=>{b.addEventListener('click',()=>{scrollTo({top:ofs(st)+(+b.dataset.go)*innerHeight*.85,behavior:red?'auto':'smooth'})});b.addEventListener('pointerenter',()=>{hu=1;hots.forEach(x=>x.classList.remove('on'))})});
if(!red)setInterval(()=>{if(hu)return;hots.forEach((b,k)=>b.classList.toggle('on',k==hi));hi=(hi+1)%hots.length},2200);
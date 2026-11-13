/* =========================================================
   ABERTURA ANIMADA — Rio de Janeiro, 1938
   Cena 1: o(a) detetive caminha pela rua na chuva até a Editora Aurora.
   Cena 2: no escritório, Anselmo anda de um lado para o outro e conta o roubo.
   Falas com boca mexendo (4 quadros: fechada, entreaberta, aberta, piscando).
   Dublagem: se existir audio/abertura/ABE-0N.mp3 (detetive: ABE-05-M / ABE-05-F),
   o áudio toca e a boca acompanha o volume; senão, a voz é sintetizada por sílabas.
   Uso: Abertura.play({nome, gen, lines}) -> Promise (resolve ao terminar ou pular).
   ========================================================= */
(function(){
const VW=1280,VH=720,IMGDIR='img/abertura/';
const SRC={rua:'rua',esc:'escritorio',detW:'detetive-andando',detB:'detetive-boca',ansC:'anselmo-corpo',ansB:'anselmo-boca'};
const EXTRA={detF:'img/q1/detetive-f.webp',detFP:'img/detetive-f.webp'};
const IMG={};
function load(){const all=Object.entries(SRC).map(([k,v])=>[k,IMGDIR+v+'.webp']).concat(Object.entries(EXTRA));
  return Promise.all(all.map(([k,src])=>new Promise(r=>{const i=new Image();i.onload=()=>{IMG[k]=i;r()};i.onerror=()=>{IMG[k]=null;r()};i.src=src})))}

/* ---------------- som ---------------- */
let AC=null,OUT=null,rainG=null;
const isMuted=()=>typeof muted!=='undefined'&&muted;
function ctx(){try{AC=AC||(typeof ac==='function'?ac():new(window.AudioContext||window.webkitAudioContext)());if(AC&&AC.state==='suspended')AC.resume();
  if(AC&&!OUT){OUT=AC.createGain();OUT.gain.value=.9;OUT.connect(AC.destination)}}catch(e){}return AC}
function tn(f,d,type='sine',v=.08,w=0,f2){if(isMuted()||!ctx())return;const t=AC.currentTime+w,o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(OUT);o.start(t);o.stop(t+d+.05)}
function nz(d,v,f,q=1,w=0,type='bandpass'){if(isMuted()||!ctx())return;const n=Math.floor(AC.sampleRate*d),b=AC.createBuffer(1,n,AC.sampleRate),c=b.getChannelData(0);for(let i=0;i<n;i++)c[i]=(Math.random()*2-1)*(1-i/n);
  const s=AC.createBufferSource(),fl=AC.createBiquadFilter(),g=AC.createGain();s.buffer=b;fl.type=type;fl.frequency.value=f;fl.Q.value=q;g.gain.value=v;s.connect(fl).connect(g).connect(OUT);s.start(AC.currentTime+w)}
function rainStart(){if(!ctx()||rainG)return;const n=AC.sampleRate*3,b=AC.createBuffer(1,n,AC.sampleRate),c=b.getChannelData(0);for(let i=0;i<n;i++)c[i]=Math.random()*2-1;
  const s=AC.createBufferSource();s.buffer=b;s.loop=true;const fl=AC.createBiquadFilter();fl.type='lowpass';fl.frequency.value=2400;rainG=AC.createGain();rainG.gain.value=0;s.connect(fl).connect(rainG).connect(OUT);s.start();rainG._s=s}
function rainVol(v){if(rainG)rainG.gain.setTargetAtTime(isMuted()?0:v,AC.currentTime,.4)}
function rainStop(){if(rainG){rainG.gain.setTargetAtTime(0,AC.currentTime,.3);const s=rainG._s;setTimeout(()=>{try{s.stop()}catch(e){}},1500);rainG=null}}
const SND={
  step:()=>nz(.06,.07,500,1.2),
  thunder:()=>{nz(2.6,.5,110,.6,0,'lowpass');tn(48,1.8,'sine',.16,.1,32)},
  knock:()=>[0,.22,.44].forEach(w=>{tn(150,.09,'sine',.22,w,90);nz(.04,.12,900,2,w)}),
  door:()=>{tn(320,.7,'sawtooth',.025,0,170);nz(.5,.05,300,1)},
  sting:()=>[[146.8,0],[174.6,.05],[220,.1],[277.2,.15]].forEach(([f,w])=>tn(f,1.6,'triangle',.05,w)),
  clock:()=>nz(.02,.05,3000,4)};
/* voz por sílabas */
const VOZ={editor:{f:140,ty:'square'},detM:{f:175,ty:'square'},detF:{f:262,ty:'square'}};
const VV={a:['a',0,2],á:['a',0,2],à:['a',0,2],â:['a',0,2],ã:['a',-1,2],e:['e',2,1],é:['e',2,2],ê:['e',1,1],i:['i',4,1],í:['i',4,1],o:['o',-1,2],ó:['o',-1,2],ô:['o',-2,1],õ:['o',-2,1],u:['u',-3,1],ú:['u',-3,1]};
const FORM={a:5,e:6.5,i:9,o:3.6,u:2.8};let lastBlip=0;
function blip(V,ch,q){if(isMuted()||!ctx())return false;const vv=VV[ch],now=performance.now();if(!vv||now-lastBlip<70)return false;lastBlip=now;
  const st=vv[1]+(Math.random()*2-1)+(q?4:0),f=V.f*Math.pow(2,st/12),t=AC.currentTime,o=AC.createOscillator(),bp=AC.createBiquadFilter(),g=AC.createGain(),dry=AC.createGain();
  o.type=V.ty;o.frequency.setValueAtTime(f,t);o.frequency.linearRampToValueAtTime(f*(q?1.07:.96),t+.08);bp.type='bandpass';bp.frequency.value=Math.min(4000,f*FORM[vv[0]]);bp.Q.value=1.6;dry.gain.value=.35;
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.08,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+.09);o.connect(bp).connect(g);o.connect(dry).connect(g);g.connect(OUT);o.start(t);o.stop(t+.11);return true}

/* ---------------- palco ---------------- */
let cv,c,raf=0,T=0,last=0,skip=false,scene='rua',camX=0,camTarget=0,fadeA=1,fadeTo=0,flash=0,dim=0,dimTo=0,title=null,rain=[],note=null;
const actors={};let talk=null;
const esc=s=>String(s).replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
function bgInfo(){const im=scene==='rua'?IMG.rua:IMG.esc;if(!im)return{im:null,s:1,w:VW};const s=VH/im.height;return{im,s,w:im.width*s}}
function mkActor(o){return Object.assign({x:0,base:0,face:1,mode:'idle',t:0,pose:null,step:0},o)}
function actorFrame(a){if(a.pose!=null)return a.pose;if(a.mode==='walk')return a.walk[Math.floor(a.t*a.fps)%a.walk.length];return a.idle}
function drawActor(a,s0){const im=IMG[a.sheet];if(!im)return;const f=actorFrame(a),sc=a.h/a.fig*s0,w=a.fw*sc,h=a.fh*sc,x=(a.x*s0)-camX,y=a.base*s0;
  c.save();c.translate(x,y);if(a.face<0)c.scale(-1,1);
  c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(0,2,w*.32,10*s0,0,0,6.3);c.fill();
  c.drawImage(im,f*a.fw,0,a.fw,a.fh,-w/2,-h,w,h);c.restore()}
function drawRain(){c.save();c.strokeStyle=scene==='rua'?'rgba(220,210,255,.33)':'rgba(220,210,255,.0)';c.lineWidth=1.2;c.beginPath();
  for(const r of rain){c.moveTo(r.x,r.y);c.lineTo(r.x-4,r.y+r.l)}c.stroke();c.restore()}
function updRain(dt){if(rain.length<180)for(let i=0;i<6;i++)rain.push({x:Math.random()*(VW+60),y:-20-Math.random()*VH,l:14+Math.random()*16,v:900+Math.random()*400});
  for(const r of rain){r.y+=r.v*dt;r.x-=r.v*dt*.08;if(r.y>VH){r.y=-30;r.x=Math.random()*(VW+60)}}}
function drawBust(){if(!talk)return;const k=talk.who==='editor'?'ansB':(talk.fem?null:'detB');const left=talk.who!=='editor';
  const slide=Math.min(1,talk.in),H=470,bob=Math.sin(T*2.2)*3-(talk.bump||0)*4;
  let x=left?40-(1-slide)*420:VW-40-(1-slide)*-420;c.save();
  if(k&&IMG[k]){const im=IMG[k],fw=im.width/4,fh=im.height,w=fw*H/fh,fr=talk.blink>0&&talk.mouth===0?3:talk.mouth;
    c.translate(left?x:x-w,VH-H+18+bob);c.drawImage(im,fr*fw,0,fw,fh,0,0,w,H)}
  else if(IMG.detFP){const im=IMG.detFP,w=im.width*H/im.height,sq=1+(talk.mouth?.012*talk.mouth:0);c.translate(left?x:x-w,VH-H+18+bob);c.scale(1,sq);c.drawImage(im,0,0,w,H)}
  c.restore()}
function drawNote(a){c.save();c.globalAlpha=a;c.translate(VW/2-60,240+(1-a)*40);c.rotate(-.06);const w=420,h=250;
  c.shadowColor='rgba(0,0,0,.6)';c.shadowBlur=24;c.fillStyle='#efe2c4';c.beginPath();c.moveTo(-w/2,-h/2);c.lineTo(w/2,-h/2+6);c.lineTo(w/2-4,h/2);c.lineTo(-w/2+8,h/2-4);c.closePath();c.fill();c.shadowBlur=0;
  c.strokeStyle='rgba(120,90,50,.35)';for(let y=-h/2+46;y<h/2-20;y+=30){c.beginPath();c.moveTo(-w/2+20,y);c.lineTo(w/2-20,y);c.stroke()}
  c.fillStyle='#2b1a0d';c.font='italic 24px "Lora",Georgia,serif';c.textAlign='left';
  ['Livros que denunciam','não serão publicados.','Devolvi cada página ao lugar','de onde veio.'].forEach((t,i)=>c.fillText(t,-w/2+28,-h/2+40+i*30));
  c.save();c.translate(w/2-110,h/2-46);c.rotate(-.18);c.strokeStyle='#a3241a';c.lineWidth=3;c.strokeRect(-70,-24,150,46);c.fillStyle='#a3241a';c.font='bold 26px "Special Elite",monospace';c.textAlign='center';c.fillText('O CENSOR',5,9);c.restore();
  c.restore()}
function render(){const b=bgInfo();c.fillStyle='#0b0603';c.fillRect(0,0,VW,VH);
  if(b.im)c.drawImage(b.im,-camX,0,b.w,VH);
  const s0=b.s;Object.values(actors).filter(a=>a.scene===scene).sort((p,q)=>p.base-q.base).forEach(a=>drawActor(a,s0));
  drawRain();
  if(scene==='rua'){const g=c.createLinearGradient(0,0,0,VH);g.addColorStop(0,'rgba(10,8,30,.25)');g.addColorStop(1,'rgba(10,5,0,.1)');c.fillStyle=g;c.fillRect(0,0,VW,VH)}
  if(flash>0){c.fillStyle=`rgba(230,230,255,${flash*.6})`;c.fillRect(0,0,VW,VH)}
  if(dim>0){c.fillStyle=`rgba(8,4,2,${dim*.55})`;c.fillRect(0,0,VW,VH)}
  if(note)drawNote(Math.min(1,note.t*3));
  drawBust();
  if(title){const a=Math.max(0,Math.min(1,title.t<1?title.t:title.t>3?4-title.t:1));c.save();c.globalAlpha=a;c.textAlign='center';c.fillStyle='rgba(10,5,2,.6)';c.fillRect(VW/2-330,70,660,110);
    c.fillStyle='#ffcf7a';c.font='italic 700 46px "Playfair Display",Georgia,serif';c.fillText(title.a,VW/2,128);c.fillStyle='#f1e2c2';c.font='20px "Special Elite",monospace';c.fillText(title.b,VW/2,162);c.restore()}
  // letterbox de cinema
  c.fillStyle='#000';c.fillRect(0,0,VW,22);c.fillRect(0,VH-22,VW,22);
  if(fadeA>0){c.fillStyle=`rgba(0,0,0,${fadeA})`;c.fillRect(0,0,VW,VH)}}
function frame(now){raf=requestAnimationFrame(frame);const dt=Math.min(.05,(now-(last||now))/1000);last=now;T+=dt;
  for(const a of Object.values(actors)){a.t+=dt;if(a.mode==='walk'&&a.to!=null){const d=a.to-a.x,st=a.spd*dt;a.face=Math.sign(d)||a.face;
      const fi=Math.floor(a.t*a.fps)%a.walk.length;if(fi!==a.lastF){a.lastF=fi;if(a.scene===scene&&(fi===1||fi===Math.floor(a.walk.length/2)+1))SND.step()}
      if(Math.abs(d)<=st){a.x=a.to;a.mode='idle';a.to=null;a.cb&&a.cb()}else a.x+=Math.sign(d)*st}}
  const b=bgInfo();if(camFollow&&actors[camFollow]){camTarget=actors[camFollow].x*b.s-VW*.45}
  camTarget=Math.max(0,Math.min(b.w-VW,camTarget));camX+=(camTarget-camX)*Math.min(1,dt*3);
  updRain(dt);flash=Math.max(0,flash-dt*2.5);dim+=(dimTo-dim)*Math.min(1,dt*6);fadeA+=(fadeTo-fadeA)*Math.min(1,dt*3.5);
  if(title)title.t+=dt;if(note)note.t+=dt;
  if(talk){talk.in+=dt*4;talk.mt-=dt;if(talk.mt<=0)talk.mouth=0;talk.bump=Math.max(0,(talk.bump||0)-dt*8);
    talk.blink-=dt;if(talk.blink<-(2.5+Math.random()*2.5))talk.blink=.13;
    if(talk.an){const d=new Uint8Array(talk.an.fftSize);talk.an.getByteTimeDomainData(d);let m=0;for(const v of d)m=Math.max(m,Math.abs(v-128));talk.mouth=m>40?2:m>14?1:0}}
  render()}
let camFollow=null;
const wait=ms=>new Promise(r=>{if(skip)return r();const t=setTimeout(r,ms);waiters.push(()=>{clearTimeout(t);r()})});
const waiters=[];
function walkTo(a,x){return new Promise(r=>{if(skip){a.x=x;return r()}a.to=x;a.mode='walk';a.pose=null;a.cb=r;waiters.push(r)})}
function fade(v,ms=700){fadeTo=v;return wait(ms)}

/* fala: legenda + busto com boca */
let box,advance=null;
function speak(who,text,code,fem){return new Promise(res=>{if(skip)return res();
  const V=who==='editor'?VOZ.editor:fem?VOZ.detF:VOZ.detM;talk={who,fem,in:0,mouth:0,mt:0,blink:-1,bump:0};dimTo=1;
  const nome=who==='editor'?'Anselmo Vasconcelos':'Detetive '+NOME;
  box.innerHTML=`<b>${esc(nome)}</b><p></p><span class="nx">▸ toque ou ESPAÇO</span>`;box.className='sub on '+(who==='editor'?'r':'l');const p=box.querySelector('p');
  let k=0,tm=null,finished=false,audio=null;
  const end=()=>{if(tm)clearTimeout(tm);if(audio){try{audio.pause()}catch(e){}}talk.an=null;talk.mouth=0;finished=true;p.textContent=text};
  const step=(spd)=>{k++;p.textContent=text.slice(0,k);const ch=(text[k-1]||'').toLowerCase();
    if(!audio&&VV[ch]){const rest=text.slice(k),qi=rest.indexOf('?'),q=qi>=0&&qi<10;if(blip(V,ch,q)){talk.mouth=VV[ch][2];talk.mt=.09;talk.bump=1}}
    if(k>=text.length){finished=true;if(!audio)talk.mouth=0;return}
    let w=spd;if(/[,;:]/.test(ch))w*=6;else if(/[.!?…]/.test(ch))w*=11;tm=setTimeout(()=>step(spd),w)};
  advance=()=>{if(!finished){end();return}advance=null;box.className='sub';talk=null;dimTo=0;res()};
  waiters.push(()=>{end();advance=null;box.className='sub';talk=null;res()});
  // tenta a dublagem
  const src=`audio/abertura/${code}.mp3`;let decided=false;
  const useBlips=()=>{if(decided)return;decided=true;step(30)};
  try{const a=new Audio();a.preload='auto';a.src=src;
    a.oncanplaythrough=()=>{if(decided)return;decided=true;audio=a;try{const s=ctx().createMediaElementSource(a),an=AC.createAnalyser();an.fftSize=512;s.connect(an);an.connect(OUT);talk.an=an}catch(e){}
      a.play().catch(()=>{});const spd=Math.max(18,(a.duration*1000*.92)/text.length);step(spd);a.onended=()=>{talk&&(talk.an=null,talk.mouth=0)}};
    a.onerror=useBlips;setTimeout(useBlips,700)}catch(e){useBlips()}})}

let NOME='';
async function script(o){const fem=o.gen==='f',L=o.lines||[];NOME=o.nome||'';
  /* ---------- cena 1: a rua ---------- */
  scene='rua';rainStart();rainVol(.32);
  const det=actors.det=mkActor(fem?{scene:'rua',sheet:'detF',fw:269,fh:232,fig:222,h:300,walk:[0,1,2,3],fps:7,idle:14,spd:150,x:120,base:690}
                                 :{scene:'rua',sheet:'detW',fw:147,fh:304,fig:298,h:300,walk:[0,1,2,3,4,5],fps:8,idle:6,spd:150,x:120,base:690});
  camFollow='det';camX=0;await fade(0,900);SND.thunder();flash=1;
  title={a:'Rio de Janeiro, 1938',b:'Uma noite de chuva na Editora Aurora',t:0};
  await walkTo(det,1690);camFollow=null;
  if(!fem){det.pose=7;await wait(700);det.pose=null}
  SND.knock();await wait(1300);SND.door();await fade(1,800);
  /* ---------- cena 2: o escritório ---------- */
  scene='esc';rainVol(.1);title=null;
  const ans=actors.ans=mkActor({scene:'esc',sheet:'ansC',fw:153,fh:304,fig:298,h:470,walk:[0,1,2,3,4,5],fps:8,idle:6,spd:180,x:1240,base:800,face:-1});
  Object.assign(det,{scene:'esc',x:150,base:800,h:470,face:1,mode:'idle',pose:null});
  camTarget=0;camX=0;await fade(0,700);
  // Anselmo anda nervoso de um lado para o outro enquanto o(a) detetive entra
  const pace=(async()=>{await walkTo(ans,900);await walkTo(ans,1300);await walkTo(ans,820)})();
  await walkTo(det,470);await pace;ans.face=-1;ans.pose=7;
  const tick=setInterval(()=>{if(scene==='esc'&&!talk)SND.clock()},1000);
  await speak('editor',L[0]?.t||'',`ABE-01`);ans.pose=7;
  await speak('editor',L[1]?.t||'',`ABE-02`);
  // vai até o cofre vazio
  ans.pose=null;camTarget=400;await walkTo(ans,1330);ans.face=1;ans.pose=6;await wait(600);
  ans.face=-1;ans.pose=8;SND.sting();note={t:0};await wait(500);
  await speak('editor',L[2]?.t||'',`ABE-03`);note=null;
  ans.pose=null;camTarget=0;await walkTo(ans,860);ans.face=-1;ans.pose=9;
  await speak('editor',L[3]?.t||'',`ABE-04`);
  ans.pose=6;
  await speak('detetive',L[4]?.t||'',fem?'ABE-05-F':'ABE-05-M',fem);
  clearInterval(tick);await fade(1,900)}

function css(){if(document.getElementById('abCss'))return;const s=document.createElement('style');s.id='abCss';s.textContent=`
#abertura{position:fixed;inset:0;z-index:300;background:#000;display:grid;place-items:center;touch-action:none;user-select:none;-webkit-user-select:none}
#abertura canvas{width:min(100vw,calc(100vh*16/9));height:auto;max-height:100vh;display:block}
#abertura .skip{position:absolute;top:max(14px,env(safe-area-inset-top));right:max(14px,env(safe-area-inset-right));z-index:2;background:rgba(20,10,4,.75);color:#f1e2c2;border:1px solid #6b4526;border-radius:20px;padding:6px 14px;font-family:'Special Elite',monospace;cursor:pointer}
#abertura .sub{position:absolute;bottom:max(4%,calc(env(safe-area-inset-bottom) + 8px));width:min(58vw,720px);background:rgba(20,10,4,.86);border:2px solid #b98a45;border-radius:10px;padding:12px 18px 22px;color:#f1e2c2;font-family:Lora,Georgia,serif;font-size:clamp(.9rem,2vw,1.2rem);line-height:1.45;opacity:0;transform:translateY(12px);transition:.25s;pointer-events:none}
#abertura .sub.on{opacity:1;transform:none}
#abertura .sub.l{right:4%}#abertura .sub.r{left:4%}
#abertura .sub b{display:block;font-family:'Special Elite',monospace;color:#ffcf7a;font-size:.85em;margin-bottom:4px}
#abertura .sub .nx{position:absolute;right:12px;bottom:4px;font-size:.7em;color:#bfa883;font-family:'Special Elite',monospace}
@media (orientation:portrait){#abertura .sub{width:92vw;left:4%!important;right:auto!important;bottom:6%}}`;document.head.appendChild(s)}

function play(o={}){return new Promise(async resolve=>{css();ctx();
  const root=document.createElement('div');root.id='abertura';root.innerHTML='<canvas></canvas><button class="skip">Pular abertura ▸▸</button><div class="sub"></div>';document.body.appendChild(root);
  cv=root.querySelector('canvas');cv.width=VW;cv.height=VH;c=cv.getContext('2d');box=root.querySelector('.sub');
  c.fillStyle='#000';c.fillRect(0,0,VW,VH);c.fillStyle='#bfa883';c.font='22px "Special Elite",monospace';c.textAlign='center';c.fillText('Carregando a abertura…',VW/2,VH/2);
  await load();
  skip=false;T=0;last=0;fadeA=1;fadeTo=1;dim=0;dimTo=0;rain=[];talk=null;note=null;title=null;for(const k in actors)delete actors[k];
  const finish=()=>{if(done)return;done=true;skip=true;waiters.splice(0).forEach(f=>{try{f()}catch(e){}});rainStop();cancelAnimationFrame(raf);
    removeEventListener('keydown',kd);root.remove();resolve()};
  let done=false;
  const next=()=>{ctx();if(advance)advance()};
  const kd=e=>{if(e.key==='Escape'){finish();return}if(e.key===' '||e.key==='Enter'){e.preventDefault();next()}};
  addEventListener('keydown',kd);root.addEventListener('pointerdown',e=>{if(e.target.classList.contains('skip'))return;next()});
  root.querySelector('.skip').onclick=finish;
  raf=requestAnimationFrame(frame);
  try{await script(o)}catch(e){console.error(e)}finish()})}
window.Abertura={play};
})();

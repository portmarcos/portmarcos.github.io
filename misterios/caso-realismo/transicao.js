/* Transições entre as zonas do Caso dos Narradores Trocados.
   - Trans.fim(): página de fechamento de zona (substitui o modal simples) com virada de página até a próxima zona.
   - Trans.chegada(): cartão de capítulo ao entrar numa zona vinda da transição.
   - Perfil (nome, turma, detetive) lembrado entre as zonas.
   Tudo desenhado em CSS/JS, sem imagem. Carregado por cada fase-*.html. */
(function(){
  'use strict';
  var ZONAS=[
    {f:'fase-bras.html',cap:1,t:'Óbito do Autor',s:'O velório, a dedicatória, o hipopótamo.'},
    {f:'fase-infancia.html',cap:11,t:'O Menino É Pai do Homem',s:'O tacho, Prudêncio, o espadim, o mestre Ludgero.'},
    {f:'fase-marcela.html',cap:15,t:'Marcela',s:'O corcel, o asno, os joalheiros e a conta do amor.'},
    {f:'fase-coimbra.html',cap:21,t:'O Almocreve',s:'O diploma, os jumentos e a gratidão regateada.'},
    {f:'fase-tijuca.html',cap:30,t:'A Flor da Moita',s:'Eugênia, a borboleta preta e o ridículo de casar.'},
    {f:'fase-virgilia.html',cap:55,t:'O Velho Diálogo de Adão e Eva',s:'Furtividade, a ponta do nariz, o capítulo dos pontinhos e o duelo com Lobo Neves.'},
    {f:'fase-quincas.html',cap:117,t:'O Humanitismo',s:'A multidão da terceira força, o frango e a utilidade relativa de Dona Plácida.'},
    {f:'fase-marcela-velha.html',cap:38,t:'A Quarta Edição',s:'Marcela envelhecida na rua dos Ourives: a teoria das edições e o verme do lucro.'},
    {f:'fase-eulalia.html',cap:93,t:'O Jantar',s:'O jantar, o morro abaixo e o epitáfio de Eulália.'},
    {f:'fase-pandora.html',cap:160,t:'Das Negativas',s:'Mãe e inimiga: desvie das negativas, do frio e das vinhas e responda para feri-la.',chefe:true}
  ];
  var SAVE='caso_realismo_v1',PERFIL='caso_realismo_perfil',FLAG='caso_trans_para';
  var arq=(location.pathname.split('/').pop()||'');
  var idx=-1;for(var i=0;i<ZONAS.length;i++)if(ZONAS[i].f===arq)idx=i;

  function romano(n){var m=[[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']],s='';m.forEach(function(p){while(n>=p[0]){s+=p[1];n-=p[0]}});return s}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function lerSave(){try{return JSON.parse(localStorage.getItem(SAVE)||'{}')}catch(e){return{}}}
  function reduz(){try{return window.matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){return false}}

  /* ---------- estilo ---------- */
  var css=''
  +'#trans,#trans-in{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:max(16px,env(safe-area-inset-top,0px)) max(16px,env(safe-area-inset-right,0px)) max(16px,env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px));overflow:auto;font-family:"Cormorant Garamond","Lora",Georgia,"Times New Roman",serif;color:#2b1a0b}'
  +'#trans{background:radial-gradient(ellipse at 50% 40%,#3a2614 0%,#1b1007 62%,#0b0603 100%);opacity:0;transition:opacity .7s ease;perspective:1600px}'
  +'#trans.on{opacity:1}'
  +'#trans.sai{background:#000;transition:background .7s ease}'
  +'.tp-dust{position:absolute;inset:0;pointer-events:none;overflow:hidden}'
  +'.tp-dust i{position:absolute;width:3px;height:3px;border-radius:50%;background:#e9c98a;opacity:.0;animation:tpdust 9s linear infinite}'
  +'@keyframes tpdust{0%{transform:translateY(20px);opacity:0}15%{opacity:.5}100%{transform:translateY(-110vh) translateX(30px);opacity:0}}'
  +'.tp-page{position:relative;width:min(640px,100%);margin:auto;padding:34px 38px 30px;border-radius:3px;background:linear-gradient(172deg,#ecdab0 0%,#e2c88f 55%,#d5b57a 100%);box-shadow:0 30px 80px rgba(0,0,0,.65),inset 0 0 60px rgba(120,80,30,.35);transform-origin:0 50%;transform:translateY(26px) scale(.97);opacity:0;transition:transform .9s cubic-bezier(.2,.8,.2,1),opacity .9s ease}'
  +'#trans.on .tp-page{transform:none;opacity:1}'
  +'.tp-page::before{content:"";position:absolute;inset:12px;border:1px solid rgba(70,40,12,.55);outline:1px solid rgba(70,40,12,.35);outline-offset:4px;pointer-events:none}'
  +'#trans.vira .tp-page{transition:transform .95s cubic-bezier(.55,0,.8,.4),opacity .95s ease;transform:rotateY(-110deg) translateX(-20px);opacity:0}'
  +'.tp-k{font:600 12px/1 "Inter",system-ui,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#7a4a17;text-align:center}'
  +'.tp-h{font-weight:700;font-size:clamp(28px,5.4vw,40px);line-height:1.08;text-align:center;margin:.35em 0 .1em;text-wrap:balance;color:#2b1608}'
  +'.tp-orn{text-align:center;color:#7a4a17;font-size:20px;letter-spacing:.5em;margin:.2em 0 .5em;opacity:.85}'
  +'.tp-b p{font-size:clamp(16px,2.6vw,19px);line-height:1.5;margin:.55em 0;font-style:italic;color:#3a2410;text-wrap:pretty}'
  +'.tp-b p.st{font-style:normal;font:600 14px/1.5 "Inter",system-ui,sans-serif;color:#2b1a0b;background:rgba(90,55,18,.12);border-radius:3px;padding:8px 12px;text-align:center}'
  +'.tp-trk{display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin:16px 0 6px}'
  +'.tp-trk b{width:22px;height:22px;border-radius:50%;border:1.5px solid #7a4a17;display:grid;place-items:center;font:600 10px/1 "Inter",system-ui,sans-serif;color:#7a4a17}'
  +'.tp-trk b.ok{background:#7a4a17;color:#f3e3bd}'
  +'.tp-trk b.cur{background:#c8861e;border-color:#7a4a17;color:#fff;box-shadow:0 0 0 3px rgba(200,134,30,.35)}'
  +'.tp-next{margin:14px 0 4px;text-align:center;font-size:clamp(15px,2.4vw,17px);color:#4a2d12}'
  +'.tp-next b{display:block;font-style:normal;font-weight:700;font-size:clamp(19px,3.4vw,24px);color:#2b1608}'
  +'.tp-act{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:16px}'
  +'.tp-act button{font:600 14px/1 "Inter",system-ui,sans-serif;border-radius:3px;padding:13px 20px;cursor:pointer;border:1.5px solid #5a3510;background:transparent;color:#3a2410;min-height:44px}'
  +'.tp-act button.p{background:#5a3510;color:#f6e7c2;font-size:15px;padding:13px 26px}'
  +'.tp-act button:hover{filter:brightness(1.12)}'
  +'.tp-act button:focus-visible{outline:3px solid #c8861e;outline-offset:2px}'
  +'.tp-it{opacity:0;transform:translateY(8px);transition:opacity .6s ease,transform .6s ease}'
  +'#trans.on .tp-it{opacity:1;transform:none}'
  +'#trans-in{background:#0b0603;opacity:1;transition:opacity .9s ease;text-align:center;flex-direction:column;cursor:pointer}'
  +'#trans-in.off{opacity:0;pointer-events:none}'
  +'#trans-in .ci{opacity:0;transform:translateY(10px);animation:tpin .9s ease forwards}'
  +'#trans-in .ci:nth-child(1){animation-delay:.25s}#trans-in .ci:nth-child(2){animation-delay:.65s}#trans-in .ci:nth-child(3){animation-delay:1.05s}#trans-in .ci:nth-child(4){animation-delay:1.45s}#trans-in .ci:nth-child(5){animation-delay:1.8s}'
  +'@keyframes tpin{to{opacity:1;transform:none}}'
  +'#trans-in .k{font:600 12px/1 "Inter",system-ui,sans-serif;letter-spacing:.3em;text-transform:uppercase;color:#c8861e}'
  +'#trans-in .cap{font-weight:600;font-size:clamp(30px,7vw,58px);letter-spacing:.14em;color:#ecd9ab;margin:.35em 0 0}'
  +'#trans-in .tt{font-style:italic;font-weight:500;font-size:clamp(24px,5vw,40px);color:#f3e5bf;margin:.1em 0 0;max-width:26ch;text-wrap:balance;line-height:1.1}'
  +'#trans-in .orn{color:#c8861e;font-size:22px;letter-spacing:.6em;margin:.7em 0 .4em}'
  +'#trans-in .sub{font-size:clamp(15px,2.6vw,19px);color:#b79c6c;max-width:44ch;line-height:1.45;text-wrap:balance}'
  +'@media (max-width:520px){.tp-page{padding:26px 22px 22px}.tp-act button{flex:1 1 100%}}'
  +'@media (prefers-reduced-motion:reduce){#trans,.tp-page,.tp-it,#trans-in,#trans-in .ci{transition:none!important;animation:none!important;opacity:1!important;transform:none!important}.tp-dust{display:none}}';
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

  /* ---------- som: virada de página (ruído filtrado) ---------- */
  function somPagina(){
    try{
      var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
      var c=new AC(),n=Math.floor(c.sampleRate*.55),b=c.createBuffer(1,n,c.sampleRate),d=b.getChannelData(0);
      for(var i=0;i<n;i++){var t=i/n;d[i]=(Math.random()*2-1)*Math.pow(Math.sin(Math.PI*t),1.6)*(t<.5?1:.7)}
      var s=c.createBufferSource();s.buffer=b;
      var f=c.createBiquadFilter();f.type='bandpass';f.frequency.setValueAtTime(900,c.currentTime);f.frequency.linearRampToValueAtTime(3200,c.currentTime+.5);f.Q.value=.8;
      var g=c.createGain();g.gain.value=.18;
      s.connect(f);f.connect(g);g.connect(c.destination);s.start();
      setTimeout(function(){try{c.close()}catch(e){}},900);
    }catch(e){}
  }

  /* ---------- fim da zona ---------- */
  function fim(){
    if(idx<0)return;
    var painel=document.querySelector('#ov .panel');if(!painel)return;
    var h2=painel.querySelector('h2');var titulo=h2?h2.textContent:'Zona concluída';
    var rotulo='',nome=titulo;
    var m=titulo.match(/^(Zona\s*\d+|Fase\s*\d+)\s+conclu[ií]da:\s*(.*)$/i);
    if(m){rotulo=m[1]+' concluída';nome=m[2]}
    var ultimo=idx===ZONAS.length-1;
    var ps=[].slice.call(painel.querySelectorAll('p')),corpo='',teaser='';
    ps.forEach(function(p){
      var tx=p.textContent;
      if(/Em constru[cç][aã]o/i.test(tx)){ if(ultimo)teaser=tx.replace(/\s*Em constru[cç][aã]o\.?/i,'').trim(); return }
      var cls=/Pontos|Moedas|Contos|Folhas/.test(tx.slice(0,40))?' class="st"':'';
      corpo+='<p'+cls+'>'+p.innerHTML+'</p>';
    });
    var sv=lerSave(),found=sv.found||{};
    var trk='';
    for(var i=0;i<ZONAS.length;i++){
      var cls=i===idx?'cur':(found['z'+(i+1)]?'ok':'');
      trk+='<b class="'+cls+'" title="'+(ZONAS[i].chefe?'Chefe':'Zona '+(i+1))+'">'+(ZONAS[i].chefe?'★':(i+1))+'</b>';
    }
    var prox=ZONAS[idx+1];
    var proxHtml='';
    if(prox){proxHtml='<div class="tp-next tp-it" style="transition-delay:.9s">Próximo capítulo<b>Cap. '+romano(prox.cap)+' · '+esc(prox.t)+'</b>'+esc(prox.s)+'</div>'}
    else if(teaser){proxHtml='<div class="tp-next tp-it" style="transition-delay:.9s">'+esc(teaser)+'</div>'}
    var arqUrl='../index.html';
    var el=document.createElement('div');el.id='trans';el.setAttribute('role','dialog');el.setAttribute('aria-label',titulo);
    var dust='';for(var k=0;k<16;k++)dust+='<i style="left:'+(k*6.3+2)%100+'%;top:'+(60+(k*37)%50)+'%;animation-delay:'+(-(k*1.7))+'s;animation-duration:'+(7+(k%5))+'s"></i>';
    el.innerHTML='<div class="tp-dust">'+dust+'</div>'
      +'<div class="tp-page">'
      +'<div class="tp-k tp-it" style="transition-delay:.15s">'+esc(rotulo||'Concluído')+'</div>'
      +'<h2 class="tp-h tp-it" style="transition-delay:.3s">'+esc(nome)+'</h2>'
      +'<div class="tp-orn tp-it" style="transition-delay:.4s">❦</div>'
      +'<div class="tp-b tp-it" style="transition-delay:.55s">'+corpo+'</div>'
      +'<div class="tp-trk tp-it" style="transition-delay:.75s" aria-label="Progresso nas 10 zonas">'+trk+'</div>'
      +proxHtml
      +'<div class="tp-act tp-it" style="transition-delay:1.1s">'
      +(prox?'<button class="p" id="tpNext">Próxima zona ›</button>':'<button class="p" id="tpArq">Voltar ao Arquivo</button>')
      +'<button id="tpRe">Jogar de novo</button>'
      +(prox?'<button id="tpArq2">Arquivo</button>':'')
      +'</div></div>';
    document.body.appendChild(el);
    var ov=document.getElementById('ov');if(ov)ov.classList.add('hidden');
    requestAnimationFrame(function(){requestAnimationFrame(function(){el.classList.add('on')})});
    var foco=el.querySelector('.p');setTimeout(function(){try{foco&&foco.focus({preventScroll:true})}catch(e){}},1300);
    function ir(url){
      somPagina();
      if(prox){try{sessionStorage.setItem(FLAG,prox.f)}catch(e){}}
      el.classList.add('vira');el.classList.add('sai');
      setTimeout(function(){location.href=url},reduz()?50:950);
    }
    var bN=el.querySelector('#tpNext');if(bN)bN.onclick=function(){ir(prox.f)};
    var bA=el.querySelector('#tpArq');if(bA)bA.onclick=function(){ir(arqUrl)};
    var bA2=el.querySelector('#tpArq2');if(bA2)bA2.onclick=function(){ir(arqUrl)};
    el.querySelector('#tpRe').onclick=function(){location.reload()};
  }

  /* ---------- chegada: cartão de capítulo ---------- */
  function chegada(){
    if(idx<0)return;
    var veio=null;try{veio=sessionStorage.getItem(FLAG);sessionStorage.removeItem(FLAG)}catch(e){}
    if(veio!==ZONAS[idx].f)return;
    var z=ZONAS[idx];
    var el=document.createElement('div');el.id='trans-in';
    el.innerHTML='<div class="ci k">'+(z.chefe?'Chefe final':'Zona '+(idx+1)+' de '+(ZONAS.length-1))+'</div>'
      +'<div class="ci cap">CAPÍTULO '+romano(z.cap)+'</div>'
      +'<div class="ci tt">'+esc(z.t)+'</div>'
      +'<div class="ci orn">❦</div>'
      +'<div class="ci sub">'+esc(z.s)+'</div>';
    document.body.appendChild(el);
    var feito=false;
    function sair(){if(feito)return;feito=true;el.classList.add('off');setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el)},1000)}
    el.addEventListener('click',sair);
    setTimeout(sair,reduz()?1200:4200);
  }

  /* ---------- perfil lembrado entre as zonas ---------- */
  function perfilLer(){try{return JSON.parse(localStorage.getItem(PERFIL)||'null')}catch(e){return null}}
  function perfilSalvar(){
    try{
      var n=document.getElementById('iN'),t=document.getElementById('iT');if(!n)return;
      var f=document.querySelector('.gpick #gF.on')?'f':'m';
      localStorage.setItem(PERFIL,JSON.stringify({nome:(n.value||'').trim(),turma:(t&&t.value||'').trim(),gen:f}));
    }catch(e){}
  }
  function perfilPreencher(){
    var p=perfilLer();if(!p)return;
    var n=document.getElementById('iN'),t=document.getElementById('iT');
    if(n&&!n.value)n.value=p.nome||'';
    if(t&&!t.value)t.value=p.turma||'';
    if(p.gen==='f'){var gf=document.getElementById('gF');if(gf&&!gf.classList.contains('on'))gf.click()}
  }
  document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('#go');if(a)perfilSalvar()},true);
  try{
    var mo=new MutationObserver(function(){if(document.getElementById('iN')&&!document.getElementById('iN').dataset.pf){document.getElementById('iN').dataset.pf='1';perfilPreencher()}});
    mo.observe(document.documentElement,{childList:true,subtree:true});
  }catch(e){}

  /* ===== Cena de fechamento: o próprio livro "Memórias Póstumas de Brás Cubas" =====
     capa fechada → abre → dedicatória → página do capítulo impressa → selo "restaurado" → a página vira para o pergaminho */
  var CN={pronto:false,poeira:null,tex:null,couro:null,OFF:3.8};
  function ruido(w,h,base,pts,alfa){var c=document.createElement('canvas');c.width=w;c.height=h;var x=c.getContext('2d');x.fillStyle=base;x.fillRect(0,0,w,h);
    for(var i=0;i<pts;i++){x.fillStyle='rgba('+(Math.random()<.5?'60,38,16':'255,248,220')+','+(Math.random()*alfa)+')';x.fillRect(Math.random()*w,Math.random()*h,1+Math.random()*1.6,1+Math.random()*1.6)}return c}
  function papel(lado,w,h){ /* lado 1 = direita, -1 = esquerda; amarelado, com manchas de oxidação e borda escurecida */
    var c=ruido(w,h,'#eadbb0',2600,.16),x=c.getContext('2d');
    for(var i=0;i<9;i++){var rx=Math.random()*w,ry=Math.random()*h,r=10+Math.random()*34,g=x.createRadialGradient(rx,ry,1,rx,ry,r);g.addColorStop(0,'rgba(150,100,40,'+(.07+Math.random()*.1)+')');g.addColorStop(1,'rgba(150,100,40,0)');x.fillStyle=g;x.fillRect(rx-r,ry-r,r*2,r*2)}
    var e=x.createLinearGradient(lado>0?0:w,0,lado>0?w:0,0);e.addColorStop(0,'rgba(70,40,12,.55)');e.addColorStop(.1,'rgba(70,40,12,.12)');e.addColorStop(.5,'rgba(70,40,12,0)');e.addColorStop(1,'rgba(110,70,25,.28)');x.fillStyle=e;x.fillRect(0,0,w,h);
    var t=x.createLinearGradient(0,0,0,h);t.addColorStop(0,'rgba(90,55,20,.18)');t.addColorStop(.08,'rgba(90,55,20,0)');t.addColorStop(.92,'rgba(90,55,20,0)');t.addColorStop(1,'rgba(90,55,20,.22)');x.fillStyle=t;x.fillRect(0,0,w,h);return c}
  function couro(w,h){var c=ruido(w,h,'#4a1a14',5200,.2),x=c.getContext('2d'),g=x.createLinearGradient(0,0,w,h);g.addColorStop(0,'rgba(255,200,150,.10)');g.addColorStop(.5,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.35)');x.fillStyle=g;x.fillRect(0,0,w,h);return c}
  function quebra(ctx,txt,w,wFn){var ws=txt.split(' '),ln='',out=[];ws.forEach(function(x){var lim=wFn?wFn(out.length):w,t=ln?ln+' '+x:x;if(ctx.measureText(t).width>lim&&ln){out.push(ln);ln=x}else ln=t});if(ln)out.push(ln);return out}
  function dourado(ctx,x,y,w,h,esp){ctx.strokeStyle='rgba(214,170,80,.9)';ctx.lineWidth=2;ctx.strokeRect(x,y,w,h);ctx.strokeStyle='rgba(214,170,80,.55)';ctx.lineWidth=1;ctx.strokeRect(x+esp,y+esp,w-esp*2,h-esp*2)}
  function ease(p){return p<0?0:p>1?1:p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2}
  function selo(ctx,x,y,t,tl){ /* carimbo "capítulo restaurado" batendo na página */
    var p=Math.min(1,t/.22),sc=2.1-1.1*ease(p),a=Math.min(1,t/.1);ctx.save();ctx.translate(x,y);ctx.rotate(-.2);ctx.scale(sc,sc);ctx.globalAlpha=a*.88;
    ctx.strokeStyle='#8a1c1c';ctx.fillStyle='#8a1c1c';ctx.lineWidth=4;ctx.beginPath();ctx.arc(0,0,58,0,7);ctx.stroke();ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(0,0,51,0,7);ctx.stroke();
    ctx.textAlign='center';ctx.font='700 15px Lora,serif';ctx.fillText('CAPÍTULO',0,-8);ctx.font='700 19px Lora,serif';ctx.fillText('RESTAURADO',0,14);ctx.font='11px Lora,serif';ctx.fillText('★ '+tl+' ★',0,34);ctx.restore()}
  function cine(ctx,c,dt,CW,CH,fimCb){
    if(!c)return;c.t+=dt;var t=c.t,L=c.lines,OFF=CN.OFF,fin=OFF+L[L.length-1][0]+4.4,zi=idx,z=ZONAS[zi<0?0:zi];
    window.__cineAtual=c;c.fin=fin;c.off=OFF;
    var bw=330,bh=392,by=CH*.5-bh*.5-6,lw=bw;
    if(!CN.tex){CN.tex={d:papel(1,bw,bh),e:papel(-1,bw,bh),capa:couro(bw,bh),fx:Math.random()};CN.dedo=ruido(bw,bh,'#d8c9a0',900,.1)}
    /* fundo: escrivaninha à luz de vela */
    var bg=ctx.createRadialGradient(CW*.5,CH*.5,40,CW*.5,CH*.5,CW*.75);bg.addColorStop(0,'#3a2412');bg.addColorStop(1,'#0a0503');ctx.fillStyle=bg;ctx.fillRect(0,0,CW,CH);
    ctx.fillStyle='#22130a';ctx.fillRect(0,CH-86,CW,86);for(var i=0;i<9;i++){ctx.fillStyle='rgba(255,200,120,'+(i%2?.04:.02)+')';ctx.fillRect(0,CH-86+i*10,CW,1)}
    var fl=.85+.15*Math.sin(t*9)+.07*Math.sin(t*23),cx=CW-100,cy=CH-146;
    var halo=ctx.createRadialGradient(cx,cy-30,4,cx,cy-30,360*fl);halo.addColorStop(0,'rgba(255,190,100,.45)');halo.addColorStop(1,'rgba(255,150,60,0)');ctx.fillStyle=halo;ctx.fillRect(0,0,CW,CH);
    ctx.fillStyle='#d8c8a0';ctx.fillRect(cx-9,cy,18,58);ctx.fillStyle='#5a3a1e';ctx.fillRect(cx-22,cy+56,44,8);ctx.fillStyle='#ffd27a';ctx.beginPath();ctx.ellipse(cx,cy-12,5*fl,13*fl,0,0,7);ctx.fill();ctx.fillStyle='#fff3cf';ctx.beginPath();ctx.ellipse(cx,cy-9,2.2,6,0,0,7);ctx.fill();
    if(!CN.poeira){CN.poeira=[];for(var k=0;k<46;k++)CN.poeira.push({x:Math.random()*CW,y:Math.random()*CH,v:5+Math.random()*10,r:.6+Math.random()*1.4,f:Math.random()*6})}
    ctx.fillStyle='rgba(255,230,170,.5)';CN.poeira.forEach(function(d){d.y-=d.v*dt;d.x+=Math.sin(t+d.f)*6*dt;if(d.y<0){d.y=CH;d.x=Math.random()*CW}ctx.globalAlpha=.2+.25*Math.sin(t*2+d.f);ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,7);ctx.fill()});ctx.globalAlpha=1;
    /* estados */
    var entra=ease(t/.9),o=ease((t-1.0)/1.1);                 /* o: capa abrindo (0 fechada, 1 aberta) */
    var ded=ease((t-2.2)/.5)*(1-ease((t-(OFF-.7))/.7));         /* dedicatória visível */
    var vira=ease((t-(OFF-.8))/.8);                             /* virada da dedicatória para o capítulo */
    var sx=CW*.5-(bw/2)*(1-o),zoom=1+.05*(1-entra)+(t<1?t*.02:.02);
    ctx.save();ctx.translate(CW/2,CH/2);ctx.scale(zoom,zoom);ctx.translate(-CW/2,-CH/2);ctx.globalAlpha=entra;
    ctx.fillStyle='rgba(0,0,0,.5)';ctx.beginPath();ctx.ellipse(sx+(o>0?0:bw/2),by+bh+14,(bw*(1+o))*.55,16,0,0,7);ctx.fill();
    /* miolo: pilhas de folhas */
    var corpo=bw*(1+o);
    ctx.fillStyle='#2a0f0a';ctx.fillRect(sx-lw*o-8,by-8,lw*o+bw+16,bh+16);
    for(var e=0;e<6;e++){ctx.fillStyle=e%2?'#d6c58f':'#c4b17a';ctx.fillRect(sx-lw*o-5+e,by-3+e*.8,lw*o+bw+10-e*2,bh+6-e*.6)}
    if(o>.02){ctx.save();ctx.beginPath();ctx.rect(sx-lw*o,by,lw*o,bh);ctx.clip();ctx.drawImage(CN.tex.e,sx-lw,by);ctx.restore()}
    ctx.drawImage(CN.tex.d,sx,by);
    /* página esquerda: texto "impresso" apagado, número e cabeçalho */
    if(o>.6){ctx.save();ctx.globalAlpha=Math.min(1,(o-.6)/.4);ctx.fillStyle='rgba(42,33,24,.22)';var rnd=(function(sd){return function(){sd=(sd*9301+49297)%233280;return sd/233280}})(zi+7);
      for(var r=0;r<19;r++){var ww=bw-72-(r===18?120:rnd()*34);ctx.fillRect(sx-bw+38,by+58+r*17,ww,2.2)}
      ctx.fillStyle='rgba(42,33,24,.55)';ctx.font='11px Lora,serif';ctx.textAlign='center';ctx.fillText('MEMÓRIAS PÓSTUMAS',sx-bw/2,by+30);ctx.fillText(String(z.cap*2-2+10),sx-bw/2,by+bh-18);ctx.restore()}
    /* página direita: dedicatória (antes) ou capítulo (depois) */
    ctx.textAlign='center';
    if(ded>.01&&vira<1){ctx.save();ctx.globalAlpha=ded*(1-vira);ctx.fillStyle='#2a2118';ctx.font='italic 17px Lora,serif';
      quebra(ctx,'Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas Memórias Póstumas',bw-110).forEach(function(l,i){ctx.fillText(l,sx+bw/2,by+bh*.38+i*26)});
      ctx.font='600 11px Lora,serif';ctx.fillStyle='rgba(42,33,24,.5)';ctx.fillText('— DEDICATÓRIA —',sx+bw/2,by+bh*.22);ctx.restore()}
    var tx=Math.max(0,t-OFF),pg=vira>=1||t>=OFF;
    if(pg){var a=Math.min(1,tx/.5);ctx.save();ctx.globalAlpha=a;
      ctx.fillStyle='rgba(42,33,24,.55)';ctx.font='11px Lora,serif';ctx.textAlign='center';ctx.fillText('MEMÓRIAS PÓSTUMAS DE BRÁS CUBAS',sx+bw/2,by+30);
      ctx.fillStyle='#2a2118';ctx.font='600 12px Lora,serif';ctx.fillText('CAPÍTULO '+romano(z.cap),sx+bw/2,by+62);
      ctx.font='italic 700 22px Lora,serif';quebra(ctx,z.t,bw-80).forEach(function(s,i){ctx.fillText(s,sx+bw/2,by+88+i*26)});
      var ry=by+88+quebra(ctx,z.t,bw-80).length*26-2;ctx.strokeStyle='rgba(42,33,24,.5)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(sx+bw/2-46,ry);ctx.lineTo(sx+bw/2+46,ry);ctx.stroke();
      ctx.textAlign='left';ctx.font='16px Lora,serif';var m=sx+34,w=bw-66,y=ry+34,lh=24,dc=false;
      for(var j=0;j<L.length;j++){var ini=L[j][0];if(tx<ini)break;var full=L[j][1],n=Math.floor((tx-ini)*44),pos=0,first=(j===0);
        var corp=first?full.slice(1):full,wf=first?function(i){return i<2?w-40:w}:null,ls=quebra(ctx,corp,w,wf);
        if(first){ctx.save();ctx.font='700 46px Lora,serif';ctx.fillStyle='#7a1f1f';if(n>=1)ctx.fillText(full.charAt(0),m-2,y+34);ctx.restore();n=Math.max(0,n-1)}
        ls.forEach(function(sl,q){var parte=corp.slice(pos,Math.min(corp.length,pos+sl.length+1));var visivel=parte.slice(0,Math.max(0,Math.min(parte.length,n-pos)));pos+=sl.length+1;
          ctx.fillStyle='#2a2118';ctx.fillText(visivel.replace(/\s+$/,''),m+(first&&q<2?40:0),y+q*lh)});
        y+=ls.length*lh+10}
      ctx.restore();
      ctx.fillStyle='rgba(42,33,24,.55)';ctx.font='11px Lora,serif';ctx.textAlign='center';ctx.globalAlpha=a;ctx.fillText(String(z.cap*2+9),sx+bw/2,by+bh-18);ctx.globalAlpha=1;
      /* selo vermelho de restauração */
      var ts=t-(fin-2.6);if(ts>0){selo(ctx,sx+bw-82,by+bh-100,ts,String(z.cap).length?'ZONA '+(zi+1):'');if(ts>.2&&ts<.28&&!c.sk){c.sk=1;try{window.Impacto&&window.Impacto.fx(.7,sx+bw-82,by+bh-100,'200,40,30')}catch(e){}}}
    }
    /* capa (fechada ou abrindo) */
    if(o<1){var ang=Math.PI*o,sc=Math.cos(ang);ctx.save();ctx.translate(sx,0);ctx.scale(sc,1);
      if(o<.5){ctx.drawImage(CN.tex.capa,0,by);ctx.fillStyle='rgba(0,0,0,'+(.35*o)+')';ctx.fillRect(0,by,bw,bh);
        dourado(ctx,14,by+14,bw-28,bh-28,6);ctx.textAlign='center';ctx.fillStyle='#d6aa50';ctx.font='700 15px Lora,serif';ctx.fillText('MACHADO DE ASSIS',bw/2,by+84);
        ctx.font='700 34px Lora,serif';ctx.shadowColor='rgba(255,220,140,'+(.4+.3*Math.sin(t*3))+')';ctx.shadowBlur=10;['MEMÓRIAS','PÓSTUMAS','DE','BRÁS CUBAS'].forEach(function(s,i){ctx.fillText(s,bw/2,by+150+i*46)});ctx.shadowBlur=0;
        ctx.font='20px Lora,serif';ctx.fillText('❦',bw/2,by+bh-52)}
      else{ctx.scale(-1,1);ctx.drawImage(CN.dedo,-bw,by);ctx.fillStyle='rgba(0,0,0,.25)';ctx.fillRect(-bw,by,bw,bh);ctx.scale(-1,1)}
      ctx.restore()}
    /* fita marcadora */
    if(o>.9){ctx.fillStyle='#8a1c1c';ctx.beginPath();ctx.moveTo(sx+14,by+bh-4);ctx.lineTo(sx+30,by+bh-4);ctx.lineTo(sx+30,by+bh+44);ctx.lineTo(sx+22,by+bh+34);ctx.lineTo(sx+14,by+bh+44);ctx.closePath();ctx.fill()}
    /* lombada: sombra do vinco */
    if(o>.4){var sp=ctx.createLinearGradient(sx-22,0,sx+22,0);sp.addColorStop(0,'rgba(50,25,8,0)');sp.addColorStop(.5,'rgba(50,25,8,'+(.55*o)+')');sp.addColorStop(1,'rgba(50,25,8,0)');ctx.fillStyle=sp;ctx.fillRect(sx-22,by,44,bh)}
    /* virada final: a página direita vira para o pergaminho; antes, a dedicatória vira para o capítulo */
    var pv=ease((t-(fin-1.5))/1.0),dv=ease((t-(OFF-.8))/.8)*(1-ease((t-(OFF))/.01)),ang2=0,mostra=false;
    if(pv>0&&pv<1){ang2=Math.PI*pv;mostra=true}else if(t>OFF-.8&&t<OFF){ang2=Math.PI*ease((t-(OFF-.8))/.8);mostra=true}
    if(mostra){ctx.save();ctx.translate(sx,0);ctx.scale(Math.cos(ang2),1);ctx.drawImage(CN.tex.d,0,by);ctx.fillStyle='rgba(50,25,8,'+(.2*Math.sin(ang2))+')';ctx.fillRect(0,by,bw,bh);ctx.restore()}
    ctx.restore();
    var fd=Math.max(0,(t-(fin-.5))/.5);if(fd>0){ctx.fillStyle='rgba(232,214,168,'+Math.min(1,fd)+')';ctx.fillRect(0,0,CW,CH)}
    if(t>fin&&!CN.pronto){CN.pronto=true;if(fimCb)fimCb()}
  }
  document.addEventListener('keydown',function(e){var c=window.__cineAtual;if(!c||!(e.code==='Space'||e.code==='Enter'))return;if(c.t<c.off-.9&&c.t>.6)c.t=c.off-.9;else if(c.t>c.off+1&&c.t<c.fin-1.7)c.t=c.fin-1.7});
  document.addEventListener('pointerdown',function(){var c=window.__cineAtual;if(!c)return;if(c.t<c.off-.9&&c.t>.6)c.t=c.off-.9;else if(c.t>c.off+1&&c.t<c.fin-1.7)c.t=c.fin-1.7});

  window.Trans={fim:fim,chegada:chegada,zonas:ZONAS,idx:idx,cine:cine};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',chegada);else chegada();
})();

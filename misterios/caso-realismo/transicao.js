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

  /* ===== Cena de fechamento: o livro aberto (substitui o barco/cais) ===== */
  var CN={pronto:false,poeira:null};
  function quebra(ctx,txt,w){var ws=txt.split(' '),ln='',out=[];ws.forEach(function(x){var t=ln?ln+' '+x:x;if(ctx.measureText(t).width>w&&ln){out.push(ln);ln=x}else ln=t});if(ln)out.push(ln);return out}
  function pagina(ctx,x,y,w,h,lado){ /* lado: 1 direita, -1 esquerda */
    var g=ctx.createLinearGradient(x,0,x+w,0);
    if(lado>0){g.addColorStop(0,'#c9ae78');g.addColorStop(.12,'#e8d6a8');g.addColorStop(1,'#f1e4bd')}
    else{g.addColorStop(0,'#f1e4bd');g.addColorStop(.88,'#e8d6a8');g.addColorStop(1,'#c9ae78')}
    ctx.fillStyle=g;ctx.fillRect(x,y,w,h);
  }
  function cine(ctx,c,dt,CW,CH,fimCb){
    if(!c)return;c.t+=dt;var t=c.t,L=c.lines,fin=L[L.length-1][0]+4.2,zi=idx,z=ZONAS[zi<0?0:zi];
    window.__cineAtual=c;c.fin=fin;
    /* fundo: gabinete à luz de vela */
    var bg=ctx.createRadialGradient(CW*.5,CH*.5,40,CW*.5,CH*.5,CW*.7);bg.addColorStop(0,'#3a2412');bg.addColorStop(1,'#0c0603');ctx.fillStyle=bg;ctx.fillRect(0,0,CW,CH);
    ctx.fillStyle='#26150a';ctx.fillRect(0,CH-92,CW,92);ctx.fillStyle='rgba(255,200,120,.05)';for(var i=0;i<8;i++)ctx.fillRect(0,CH-92+i*12,CW,1);
    /* vela */
    var fl=.85+.15*Math.sin(t*9)+.07*Math.sin(t*23),cx=CW-110,cy=CH-150;
    var halo=ctx.createRadialGradient(cx,cy-30,4,cx,cy-30,330*fl);halo.addColorStop(0,'rgba(255,190,100,.42)');halo.addColorStop(1,'rgba(255,150,60,0)');ctx.fillStyle=halo;ctx.fillRect(0,0,CW,CH);
    ctx.fillStyle='#d8c8a0';ctx.fillRect(cx-9,cy,18,60);ctx.fillStyle='#5a3a1e';ctx.fillRect(cx-22,cy+58,44,8);
    ctx.fillStyle='#ffd27a';ctx.beginPath();ctx.ellipse(cx,cy-12,5*fl,13*fl,0,0,7);ctx.fill();ctx.fillStyle='#fff3cf';ctx.beginPath();ctx.ellipse(cx,cy-9,2.2,6,0,0,7);ctx.fill();
    /* poeira no ar */
    if(!CN.poeira){CN.poeira=[];for(var k=0;k<40;k++)CN.poeira.push({x:Math.random()*CW,y:Math.random()*CH,v:5+Math.random()*10,r:.6+Math.random()*1.4,f:Math.random()*6})}
    ctx.fillStyle='rgba(255,230,170,.45)';CN.poeira.forEach(function(d){d.y-=d.v*dt;d.x+=Math.sin(t+d.f)*6*dt;if(d.y<0){d.y=CH;d.x=Math.random()*CW}ctx.globalAlpha=.25+.25*Math.sin(t*2+d.f);ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,7);ctx.fill()});ctx.globalAlpha=1;
    /* livro */
    var abre=Math.min(1,t/1.0),bw=330,bh=370,sx=CW*.5-30,by=CH*.5-bh*.5-4;
    ctx.save();ctx.globalAlpha=abre;ctx.translate(0,(1-abre)*30);
    ctx.fillStyle='rgba(0,0,0,.45)';ctx.beginPath();ctx.ellipse(sx,by+bh+12,bw*1.05,18,0,0,7);ctx.fill();
    ctx.fillStyle='#3d1f10';ctx.fillRect(sx-bw-14,by-10,bw*2+28,bh+20);ctx.fillStyle='#5a2e18';ctx.fillRect(sx-bw-14,by-10,bw*2+28,5);
    for(var e=0;e<5;e++){ctx.fillStyle=e%2?'#d9c694':'#c8b27c';ctx.fillRect(sx-bw-10+e,by-4+e,bw*2+20-e*2,bh+8-e)}
    pagina(ctx,sx-bw,by,bw,bh,-1);pagina(ctx,sx,by,bw,bh,1);
    var sp=ctx.createLinearGradient(sx-26,0,sx+26,0);sp.addColorStop(0,'rgba(60,30,10,0)');sp.addColorStop(.5,'rgba(60,30,10,.55)');sp.addColorStop(1,'rgba(60,30,10,0)');ctx.fillStyle=sp;ctx.fillRect(sx-26,by,52,bh);
    /* página esquerda: capítulo */
    ctx.textAlign='center';ctx.fillStyle='#5a3a1c';ctx.font='600 13px Lora,serif';ctx.fillText('CAPÍTULO '+romano(z.cap),sx-bw/2,by+86);
    ctx.fillStyle='#2c1708';ctx.font='700 25px Lora,serif';var tl=quebra(ctx,z.t,bw-70);tl.forEach(function(s,i){ctx.fillText(s,sx-bw/2,by+128+i*32)});
    ctx.fillStyle='#8a6a3a';ctx.font='24px Lora,serif';ctx.fillText('❦',sx-bw/2,by+138+tl.length*32);
    ctx.fillStyle='#6b4a28';ctx.font='italic 14px Lora,serif';quebra(ctx,z.s,bw-80).forEach(function(s,i){ctx.fillText(s,sx-bw/2,by+bh-86+i*20)});
    ctx.fillStyle='rgba(90,58,28,.55)';ctx.font='12px Lora,serif';ctx.fillText('— '+(zi+1)+' —',sx-bw/2,by+bh-22);
    /* página direita: a voz do narrador, escrita aos poucos */
    ctx.textAlign='left';ctx.font='italic 19px Lora,serif';var y=by+66,m=sx+34,w=bw-62;
    for(var j=0;j<L.length;j++){var ini=L[j][0];if(t<ini)break;var n=Math.floor((t-ini)*46),txt=L[j][1].slice(0,Math.max(0,n)),ls=quebra(ctx,L[j][1],w),pos=0;
      ls.forEach(function(sl,q){var parte=txt.slice(pos,pos+sl.length+1);pos+=sl.length+1;ctx.fillStyle='#2c1708';ctx.fillText(parte.replace(/\s+$/,''),m,y+q*26)});
      y+=ls.length*26+16}
    if(t>fin-1.6){ /* a página vira */
      var p=Math.min(1,(t-(fin-1.6))/1.1),ang=Math.PI*p;ctx.save();ctx.translate(sx,0);ctx.scale(Math.cos(ang),1);
      pagina(ctx,0,by,bw,bh,1);ctx.fillStyle='rgba(60,30,10,'+(.18*Math.sin(ang))+')';ctx.fillRect(0,by,bw,bh);ctx.restore();
    }
    ctx.restore();
    /* tarjas e fade para o pergaminho */
    var fd=Math.max(0,(t-(fin-.5))/.5);if(fd>0){ctx.fillStyle='rgba(232,214,168,'+Math.min(1,fd)+')';ctx.fillRect(0,0,CW,CH)}
    if(t>fin&&!CN.pronto){CN.pronto=true;if(fimCb)fimCb()}
  }
  document.addEventListener('keydown',function(e){var c=window.__cineAtual;if(c&&c.t>1.5&&(e.code==='Space'||e.code==='Enter')&&c.t<c.fin-1.7)c.t=c.fin-1.7});
  document.addEventListener('pointerdown',function(){var c=window.__cineAtual;if(c&&c.t>1.5&&c.t<c.fin-1.7)c.t=c.fin-1.7});

  window.Trans={fim:fim,chegada:chegada,zonas:ZONAS,idx:idx,cine:cine};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',chegada);else chegada();
})();

/* Impacto ("game feel") compartilhado das zonas do Caso 2.
   Não mexe na lógica das fases: envolve funções globais existentes (updatePlayer, updateWorld, render, drawPlayer, hit, fall, addPts)
   e reage a eventos que elas já produzem (dano, queda, tremor de tela, pontos).
   - hit-stop (congelamento de poucos quadros) e câmera lenta curta ao levar dano, cair ou nos golpes fortes (qualquer pico de `shake`)
   - zoom de impacto (punch-in), clarão colorido, anel de choque e fagulhas de papel/tinta
   - combo de coleta (pontos em sequência), com bônus e tom que sobe
   - esmagar/esticar do detetive no pulo e na aterrissagem, linhas de velocidade no dash
   - batimento vermelho na tela quando resta 1 lamparina
   Respeita prefers-reduced-motion (efeitos de tela cheia ficam suaves). Desliga com localStorage caso_impacto='0'. */
(function(){
  'use strict';
  var off=false;try{off=localStorage.getItem('caso_impacto')==='0'}catch(e){}
  var calmo=false;try{calmo=window.matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){}
  var I={freeze:0,slow:0,punch:0,flashA:0,flashC:'255,60,40',parts:[],rings:[],combo:0,comboT:0,comboShow:0,lastShake:0,sq:0,sqDir:0,wasGround:true,lastVy:0,lampsPrev:null,beat:0};
  function G(nome){try{return Function('return typeof '+nome+'!=="undefined"?'+nome+':undefined')()}catch(e){return undefined}}
  function cam(){return G('camX')||0}
  function burst(x,y,n,cols,v){for(var i=0;i<n;i++){var a=Math.random()*6.283,s=(v||260)*(.35+Math.random()*.9);
    I.parts.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-60,t:0,l:.45+Math.random()*.45,r:2+Math.random()*3.4,c:cols[(Math.random()*cols.length)|0],pg:Math.random()<.35,rot:Math.random()*6})}}
  function ring(x,y,c,r1){I.rings.push({x:x,y:y,t:0,c:c,r:r1||150})}
  function impacto(forca,x,y,cor){ /* forca 0..1 */
    if(off)return;
    I.freeze=Math.max(I.freeze,calmo?0:.04+.07*forca);I.slow=Math.max(I.slow,calmo?0:.25+.35*forca);
    I.punch=Math.max(I.punch,calmo?.01:.03+.045*forca);I.flashA=Math.max(I.flashA,.18+.32*forca);I.flashC=cor||'255,70,45';
    if(typeof x==='number'){burst(x,y,Math.round(10+22*forca),['#f3e3b4','#c9ad72','#7a1f1f','#2a2118'],240+200*forca);ring(x,y,cor||'255,200,120',110+120*forca)}
  }
  function playerScreen(){var P=G('P');if(!P)return[480,300];return[P.x-cam(),P.y-34]}
  /* ---- envolver funções globais depois que a fase carregou ---- */
  function envolver(){
    if(off)return;
    var uP=window.updatePlayer,uW=window.updateWorld,rd=window.render,dP=window.drawPlayer,hitO=window.hit,fallO=window.fall,addO=window.addPts;
    if(typeof uP!=='function'||typeof uW!=='function'||typeof rd!=='function')return;
    window.updatePlayer=function(dt){
      if(I.freeze>0)return;
      var P=G('P');if(P){
        var g=!!P.ground;
        if(g&&!I.wasGround&&I.lastVy>380){I.sq=.16;I.sqDir=1;var s=playerScreen();burst(s[0],s[1]+34,6,['#c9ad72','#f3e3b4'],130);if(I.lastVy>900)impacto(.15,s[0],s[1]+34,'240,220,170')}
        if(!g&&I.wasGround&&P.vy<-250){I.sq=.14;I.sqDir=-1}
        I.wasGround=g;I.lastVy=P.vy||0}
      uP(dt*(I.slow>0?.5:1));
    };
    window.updateWorld=function(dt){
      if(I.freeze>0){I.freeze-=dt;return}
      if(I.slow>0){I.slow-=dt;dt*=.5}
      var s0=G('shake')||0;
      uW(dt);
      var s1=G('shake')||0;
      if(s1>s0+.12&&s1>I.lastShake-.001){var p=playerScreen();impacto(Math.min(1,s1/.6),p[0],p[1]);}
      I.lastShake=s1;
      if(I.comboT>0){I.comboT-=dt;if(I.comboT<=0)I.combo=0}
      var Z=G('Z');if(Z){if(I.lampsPrev!==null&&Z.lamps<I.lampsPrev&&Z.lamps>0){/* já tratado por hit/fall */}I.lampsPrev=Z.lamps}
    };
    if(typeof hitO==='function')window.hit=function(){
      var Z=G('Z'),P=G('P'),antes=Z?Z.lamps:0,inv=P?P.inv:0;hitO.apply(this,arguments);
      if(Z&&inv<=0&&(Z.lamps<antes||Z.lamps===3&&antes===1)){var p=playerScreen();impacto(.9,p[0],p[1],'255,50,40');I.combo=0;I.comboT=0}
    };
    if(typeof fallO==='function')window.fall=function(){var p=playerScreen();impacto(.6,p[0],Math.min(500,p[1]),'40,20,60');fallO.apply(this,arguments);I.combo=0};
    if(typeof addO==='function')window.addPts=function(n,x,y){
      addO.apply(this,arguments);if(off)return;
      I.combo=I.comboT>0?I.combo+1:1;I.comboT=2.8;I.comboShow=1.4;
      var big=n>=40;burst(x,y,big?16:8,['#ffd98a','#fff3cf','#c9ad72'],big?220:150);ring(x,y,'255,217,138',big?90:55);
      if(!calmo){I.punch=Math.max(I.punch,big?.018:.008);I.flashA=Math.max(I.flashA,big?.12:.05);I.flashC='255,230,170'}
      var t=G('tone');if(typeof t==='function'){var k=Math.min(I.combo,8);try{t(520*Math.pow(2,(k-1)*2/12),.09,.045,'triangle');if(big)t(780*Math.pow(2,(k-1)*2/12),.14,.03,'sine')}catch(e){}}
      if(I.combo>=3){var Z=G('Z');var bonus=Math.min(25,(I.combo-2)*5);if(Z){Z.pts+=bonus}}
    };
    if(typeof dP==='function')window.drawPlayer=function(){
      var P=G('P'),ctx=G('ctx');if(!P||!ctx||I.sq<=0){dP.apply(this,arguments);return}
      var k=I.sq/.16,sx=(P.x-cam()),sy=P.y,a=I.sqDir>0?.28*k:-.22*k; /* aterrissagem achata, pulo estica */
      ctx.save();ctx.translate(sx,sy);ctx.scale(1+a*.6,1-a);ctx.translate(-sx,-sy);dP.apply(this,arguments);ctx.restore();
    };
    window.render=function(dt){
      rd.apply(this,arguments);
      var ctx=G('ctx'),CW=G('CW')||960,CH=G('CH')||540,cv=G('cv'),st=G('state');if(!ctx)return;
      /* passo do tempo dos efeitos usa dt real */
      var d=dt||.016;
      if(I.sq>0)I.sq-=d;if(I.comboShow>0)I.comboShow-=d;
      /* zoom de impacto (copia o quadro aumentado) */
      if(I.punch>0&&cv&&st!=='cine'){var z=1+I.punch,DPR=G('DPR')||1;ctx.save();ctx.setTransform(1,0,0,1,0,0);
        var w=cv.width,h=cv.height,cx=w/2,cy=h/2;ctx.globalAlpha=1;ctx.drawImage(cv,cx-cx*z,cy-cy*z,w*z,h*z);ctx.restore();I.punch=Math.max(0,I.punch-d*.35)}
      ctx.save();ctx.setTransform((G('DPR')||1),0,0,(G('DPR')||1),0,0);
      /* clarão de cor nas bordas */
      if(I.flashA>0){var g=ctx.createRadialGradient(CW/2,CH/2,CH*.25,CW/2,CH/2,CH*.9);g.addColorStop(0,'rgba('+I.flashC+',0)');g.addColorStop(1,'rgba('+I.flashC+','+Math.min(.6,I.flashA)+')');ctx.fillStyle=g;ctx.fillRect(0,0,CW,CH);I.flashA=Math.max(0,I.flashA-d*1.4)}
      /* anéis */
      for(var i=I.rings.length-1;i>=0;i--){var r=I.rings[i];r.t+=d;var p=r.t/.4;if(p>=1){I.rings.splice(i,1);continue}
        ctx.strokeStyle='rgba('+r.c+','+(1-p)*.8+')';ctx.lineWidth=5*(1-p)+1;ctx.beginPath();ctx.arc(r.x,r.y,r.r*Math.pow(p,.55),0,7);ctx.stroke()}
      /* fagulhas e pedaços de papel */
      for(var j=I.parts.length-1;j>=0;j--){var q=I.parts[j];q.t+=d;if(q.t>q.l){I.parts.splice(j,1);continue}
        q.vy+=900*d;q.x+=q.vx*d;q.y+=q.vy*d;q.vx*=.985;ctx.globalAlpha=1-q.t/q.l;ctx.fillStyle=q.c;
        if(q.pg){ctx.save();ctx.translate(q.x,q.y);ctx.rotate(q.rot+q.t*8);ctx.fillRect(-q.r,-q.r*.7,q.r*2,q.r*1.4);ctx.restore()}else{ctx.beginPath();ctx.arc(q.x,q.y,q.r*(1-q.t/q.l*.5),0,7);ctx.fill()}}
      ctx.globalAlpha=1;
      /* linhas de velocidade no dash */
      var P=G('P');if(P&&P.dsh>0&&!calmo){var s=playerScreen();ctx.strokeStyle='rgba(255,236,190,.55)';ctx.lineWidth=2;
        for(var l=0;l<9;l++){var yy=s[1]-50+l*13+((G('T')||0)*90%13),len=90+((l*37)%70),xx=s[0]-(P.dd||1)*(40+(l*29)%40);ctx.beginPath();ctx.moveTo(xx,yy);ctx.lineTo(xx-(P.dd||1)*len,yy);ctx.stroke()}}
      /* batimento de perigo: 1 lamparina */
      var Z=G('Z');if(Z&&Z.lamps===1&&st==='play'){I.beat+=d;var b=(Math.sin(I.beat*5.2)+1)/2,v=ctx.createRadialGradient(CW/2,CH/2,CH*.38,CW/2,CH/2,CH);v.addColorStop(0,'rgba(120,10,10,0)');v.addColorStop(1,'rgba(150,15,15,'+(.10+.16*b)+')');ctx.fillStyle=v;ctx.fillRect(0,0,CW,CH)}
      /* combo */
      if(I.combo>=2&&I.comboShow>0&&st==='play'){var a=Math.min(1,I.comboShow),sc=1+Math.max(0,I.comboShow-1.2)*1.6;ctx.save();ctx.globalAlpha=a;ctx.translate(CW-24,96);ctx.scale(sc,sc);ctx.textAlign='right';
        ctx.font='700 34px Lora,serif';ctx.lineWidth=5;ctx.strokeStyle='rgba(30,15,5,.85)';ctx.strokeText('x'+I.combo,0,0);ctx.fillStyle='#ffd98a';ctx.fillText('x'+I.combo,0,0);
        ctx.font='600 13px Lora,serif';ctx.fillStyle='#f3e3b4';ctx.fillText('COMBO DE PÁGINAS',0,18);ctx.restore()}
      ctx.restore();
    };
    window.__impacto=I;
  }
  window.Impacto={fx:impacto,burst:burst,ring:ring,estado:I,desligar:function(){try{localStorage.setItem('caso_impacto','0')}catch(e){}}};
  if(document.readyState==='complete')envolver();else window.addEventListener('load',envolver);
})();

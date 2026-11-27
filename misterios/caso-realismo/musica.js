/* Trilha de época do Caso 2 (Realismo, Rio de Janeiro do Segundo Reinado).
   Música ORIGINAL (nada de canções de terceiros), em estilos de salão do século XIX: valsa, polca e habanera/tango brasileiro,
   com violão dedilhado, baixo e flauta de choro sintetizados por WebAudio. Sem arquivos de áudio.
   Liga no primeiro audio() (clique em Começar) e segue o mudo (setMute) de cada fase. Uma peça por zona. */
(function(){
  'use strict';
  var ESTILOS={
    /* compasso 3/4: cada compasso = [baixo, [acorde]] ; melodia = [tempo, midi, duração] */
    valsa:{beats:3,comp:[[45,[57,60,64]],[50,[62,65,69]],[52,[64,68,71]],[45,[57,60,64]],[48,[60,64,67]],[43,[59,62,67]],[52,[64,68,71]],[45,[57,60,64]]],
      mel:[[[0,76,1.5],[1.5,74,.5],[2,72,1]],[[0,74,1],[1,77,1],[2,76,1]],[[0,68,1],[1,71,1],[2,74,1]],[[0,72,2],[2,69,1]],
           [[0,76,1.5],[1.5,79,.5],[2,76,1]],[[0,74,1],[1,71,1],[2,67,1]],[[0,68,1],[1,71,1],[2,76,1]],[[0,69,3]]],
      pad:function(b,i){return b===0?'b':'c'}},
    /* 2/4 alegre em maior */
    polca:{beats:2,comp:[[48,[60,64,67]],[43,[59,62,67]],[48,[60,64,67]],[41,[57,60,65]],[48,[60,64,67]],[43,[59,62,67]],[43,[59,62,67]],[48,[60,64,67]]],
      mel:[[[0,76,.5],[.5,79,.5],[1,76,.5],[1.5,72,.5]],[[0,74,.5],[.5,71,.5],[1,74,1]],[[0,76,.5],[.5,79,.5],[1,84,.5],[1.5,83,.5]],[[0,81,1],[1,77,1]],
           [[0,76,.5],[.5,76,.5],[1,79,.5],[1.5,76,.5]],[[0,74,.5],[.5,79,.5],[1,71,1]],[[0,74,.5],[.5,77,.5],[1,74,.5],[1.5,71,.5]],[[0,72,1],[1,72,1]]],
      pad:function(b){return b===0?'b':(b===1?'c':'')}},
    /* habanera (tango brasileiro) em menor */
    habanera:{beats:2,comp:[[45,[57,60,64]],[40,[56,59,64]],[45,[57,60,64]],[50,[62,65,69]],[45,[57,60,64]],[40,[56,59,64]],[40,[56,59,64]],[45,[57,60,64]]],
      mel:[[[0,69,.75],[.75,72,.25],[1,76,1]],[[0,74,.75],[.75,71,.25],[1,68,1]],[[0,69,.75],[.75,72,.25],[1,76,.5],[1.5,72,.5]],[[0,74,1],[1,77,1]],
           [[0,76,.75],[.75,72,.25],[1,69,1]],[[0,71,.5],[.5,68,.5],[1,71,1]],[[0,74,1],[1,71,1]],[[0,69,2]]],
      pad:function(b){return b===0?'h0':(b===.75?'h1':(b===1?'c':(b===1.5?'h2':'')))}}
  };
  /* peça de cada zona: estilo, transposição (semitons) e andamento (bpm) */
  var PECAS={
    'fase-bras.html':['valsa',0,80],'fase-infancia.html':['polca',0,128],'fase-marcela.html':['habanera',0,100],
    'fase-coimbra.html':['valsa',3,96],'fase-tijuca.html':['valsa',-2,76],'fase-virgilia.html':['habanera',2,88],
    'fase-quincas.html':['polca',2,134],'fase-marcela-velha.html':['valsa',-5,70],'fase-eulalia.html':['valsa',-3,64],
    'fase-pandora.html':['habanera',-4,82]
  };
  var AC=null,master=null,delay=null,mudo=false,timer=null,prox=0,passo=0,peca=null,vol=1;

  function hz(m){return 440*Math.pow(2,(m-69)/12)}
  function dedilhado(m,t,dur,v){
    var o=AC.createOscillator(),f=AC.createBiquadFilter(),g=AC.createGain();
    o.type='sawtooth';o.frequency.value=hz(m);f.type='lowpass';f.frequency.setValueAtTime(hz(m)*5,t);f.frequency.exponentialRampToValueAtTime(hz(m)*1.2,t+dur);
    g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(v,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
    o.connect(f);f.connect(g);g.connect(master);g.connect(delay);o.start(t);o.stop(t+dur+.05);
  }
  function flauta(m,t,dur,v){
    var o=AC.createOscillator(),o2=AC.createOscillator(),g=AC.createGain(),lfo=AC.createOscillator(),lg=AC.createGain();
    o.type='sine';o2.type='triangle';o.frequency.value=o2.frequency.value=hz(m);
    lfo.frequency.value=5.2;lg.gain.value=hz(m)*.006;lfo.connect(lg);lg.connect(o.frequency);lg.connect(o2.frequency);
    var d=Math.max(.18,dur*.95);
    g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(v,t+.05);g.gain.setValueAtTime(v*.85,t+d*.6);g.gain.exponentialRampToValueAtTime(.0001,t+d);
    o.connect(g);o2.connect(g);g.connect(master);g.connect(delay);o.start(t);o2.start(t);lfo.start(t);o.stop(t+d+.05);o2.stop(t+d+.05);lfo.stop(t+d+.05);
  }
  function agendar(){
    if(!AC||!peca)return;
    var seg=60/peca.bpm,E=peca.e,nb=E.comp.length;
    while(prox<AC.currentTime+.6){
      var c=passo%nb,comp=E.comp[c],mel=E.mel[c],t0=prox,sh=peca.sh;
      /* acompanhamento */
      var baixo=comp[0]+sh-12,ac=comp[1].map(function(n){return n+sh-12});
      if(E.beats===3){
        dedilhado(baixo,t0,seg*1.6,.07);
        dedilhado(ac[0],t0+seg,seg*.9,.032);dedilhado(ac[1],t0+seg,seg*.9,.032);dedilhado(ac[2],t0+seg,seg*.9,.032);
        dedilhado(ac[0],t0+seg*2,seg*.9,.028);dedilhado(ac[1],t0+seg*2,seg*.9,.028);dedilhado(ac[2],t0+seg*2,seg*.9,.028);
      }else if(E===ESTILOS.polca){
        dedilhado(baixo,t0,seg*.9,.07);
        dedilhado(ac[0],t0+seg,seg*.5,.032);dedilhado(ac[1],t0+seg,seg*.5,.032);dedilhado(ac[2],t0+seg,seg*.5,.032);
        dedilhado(baixo+7,t0+seg*1.5,seg*.4,.04);
      }else{ /* habanera: |colcheia pontuada, semicolcheia, colcheia, colcheia| */
        dedilhado(baixo,t0,seg*.75,.07);dedilhado(baixo,t0+seg*.75,seg*.25,.04);
        dedilhado(ac[0],t0+seg,seg*.5,.03);dedilhado(ac[1],t0+seg,seg*.5,.03);dedilhado(ac[2],t0+seg,seg*.5,.03);
        dedilhado(baixo+7,t0+seg*1.5,seg*.5,.045);
      }
      /* melodia (a segunda volta da peça sobe uma oitava nas notas altas só em dinâmica) */
      for(var i=0;i<mel.length;i++){var n=mel[i];flauta(n[1]+sh,t0+n[0]*seg,n[2]*seg,.05)}
      prox+=E.beats*seg;passo++;
    }
  }
  function iniciar(ctx){
    if(timer||!ctx)return;AC=ctx;
    var nome=(location.pathname.split('/').pop()||'');var p=PECAS[nome]||PECAS['fase-tijuca.html'];
    peca={e:ESTILOS[p[0]],sh:p[1],bpm:p[2]};
    master=AC.createGain();master.gain.value=mudo?0:vol;master.connect(AC.destination);
    delay=AC.createDelay(.5);delay.delayTime.value=.17;var fb=AC.createGain();fb.gain.value=.28;
    var wet=AC.createGain();wet.gain.value=.35;delay.connect(fb);fb.connect(delay);delay.connect(wet);wet.connect(master);
    prox=AC.currentTime+.3;passo=0;agendar();timer=setInterval(agendar,150);
    document.addEventListener('visibilitychange',function(){
      if(!AC)return;if(document.hidden){try{AC.suspend()}catch(e){}}else{try{AC.resume()}catch(e){}}
    });
  }
  function silenciar(m){mudo=!!m;if(master){try{master.gain.setTargetAtTime(mudo?0:vol,AC.currentTime,.05)}catch(e){master.gain.value=mudo?0:vol}}}
  /* ganchos nas funções de áudio de cada fase (declaradas no script da fase, que roda depois deste) */
  function ligar(){
    var a=window.audio,s=window.setMute;
    if(typeof a==='function'){window.audio=function(){a.apply(this,arguments);try{iniciar(Function('return typeof AC!=="undefined"?AC:null')())}catch(e){}}}
    if(typeof s==='function'){window.setMute=function(m){s.apply(this,arguments);silenciar(m)}}
  }
  window.Musica={iniciar:iniciar,mudo:silenciar,pecas:PECAS,suave:function(v){vol=v;if(master&&!mudo)master.gain.value=v}};
  if(document.readyState==='complete')ligar();else window.addEventListener('load',ligar);
})();

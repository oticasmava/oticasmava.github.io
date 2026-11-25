/* Óticas Mava: contagem de acessos (Cloudflare Web Analytics) e de cliques no WhatsApp por loja */
(function(){
  var s=document.createElement('script');s.defer=true;
  s.src='https://static.cloudflareinsights.com/beacon.min.js';
  s.setAttribute('data-cf-beacon','{"token": "408bb66455964a29a0d6cd8d6d3374bf"}');
  document.head.appendChild(s);
  if(location.pathname.indexOf('/ir/')===0)return;
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href*="wa.me/55969"]');if(!a)return;
    var h=a.getAttribute('href');
    var loja=h.indexOf('5596981167310')>-1?'santana':(h.indexOf('5596984305256')>-1?'macapa':null);
    if(!loja)return;var i=h.indexOf('?');
    a.setAttribute('href','/ir/'+loja+'.html'+(i>-1?h.slice(i):''));
  },true);
})();

/* Óticas Mava: Cloudflare Web Analytics, Pixel do Meta e cliques no WhatsApp por loja */
(function(){
  var s=document.createElement('script');s.defer=true;
  s.src='https://static.cloudflareinsights.com/beacon.min.js';
  s.setAttribute('data-cf-beacon','{"token": "408bb66455964a29a0d6cd8d6d3374bf"}');
  document.head.appendChild(s);
  /* Meta Pixel: Óticas Mava - Site */
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init','1456050220023097');fbq('track','PageView');
  var p=location.pathname;
  if(p.indexOf('/kit')===0){fbq('track','ViewContent',{content_name:'Kit Orcamento de Lentes',value:37,currency:'BRL'});}
  if(p.indexOf('/ir/')===0){fbq('track','Contact',{content_name:p.indexOf('santana')>-1?'WhatsApp Santana':'WhatsApp Macapa'});return;}
  document.addEventListener('click',function(e){
    var k=e.target.closest&&e.target.closest('a[data-checkout]');
    if(k&&k.href.indexOf('hotmart')>-1){fbq('track','InitiateCheckout',{content_name:'Kit Orcamento de Lentes',value:37,currency:'BRL'});}
    var a=e.target.closest&&e.target.closest('a[href*="wa.me/55969"]');if(!a)return;
    var h=a.getAttribute('href');
    var loja=h.indexOf('5596981167310')>-1?'santana':(h.indexOf('5596984305256')>-1?'macapa':null);
    if(!loja)return;var i=h.indexOf('?');
    a.setAttribute('href','/ir/'+loja+'.html'+(i>-1?h.slice(i):''));
  },true);
})();

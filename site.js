(function(){
 var reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 document.querySelectorAll('.wave').forEach(function(el){
  var t=el.textContent;el.textContent='';
  Array.from(t).forEach(function(c,i){var s=document.createElement('span');s.textContent=c;s.setAttribute('aria-hidden','true');s.style.setProperty('--i',i);el.appendChild(s)});
 });
 document.querySelectorAll('.mag').forEach(function(b){
  b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.translate=((e.clientX-r.left-r.width/2)*.18)+'px '+((e.clientY-r.top-r.height/2)*.28)+'px'});
  b.addEventListener('mouseleave',function(){b.style.translate=''});
 });
 if(matchMedia('(pointer: fine)').matches&&!reduced){
  var c=document.createElement('div');c.className='cur';document.body.appendChild(c);
  document.documentElement.classList.add('has-cur');
  var x=-50,y=-50,cx=-50,cy=-50;
  addEventListener('mousemove',function(e){x=e.clientX;y=e.clientY});
  (function loop(){cx+=(x-cx)*.22;cy+=(y-cy)*.22;c.style.transform='translate('+cx+'px,'+cy+'px)';requestAnimationFrame(loop)})();
  document.addEventListener('mouseover',function(e){c.classList.toggle('big',!!(e.target.closest&&e.target.closest('a,button,summary')))});
 }
 if('IntersectionObserver' in window&&!reduced){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.it,.rc,.shout,.st,.big,.handle,.ask').forEach(function(el){el.classList.add('rv');io.observe(el)});
 }
})();

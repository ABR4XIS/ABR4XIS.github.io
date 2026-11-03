const headings=[...document.querySelectorAll('.article-content h2')];
const toc=document.querySelector('.article-toc ol');
headings.forEach((h,i)=>{h.id='section-'+(i+1);const li=document.createElement('li'),a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;li.append(a);toc.append(li)});
if(!headings.length)document.querySelector('.article-toc').hidden=true;
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){document.querySelectorAll('.article-toc a').forEach(a=>a.classList.toggle('current',a.hash==='#'+e.target.id))}},{rootMargin:'-10% 0px -70% 0px'});headings.forEach(h=>observer.observe(h));}

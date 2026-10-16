(()=>{
const pages={
'application-settings':['Application Settings（應用程式設定）','Manage application-level preferences.（管理應用程式層級設定。）']};
function render(page){const d=pages[page],sub=document.querySelector('#subpage'),g=sub?.querySelector('.subpage-grid');if(!d||!g)return;const h=sub.querySelector('.subpage-head');if(h)h.style.display='none';g.className='subpage-grid cp-placeholder';g.innerHTML=`<h1>${d[0]}</h1><p>${d[1]}</p>`}
window.renderControlPlaceholder=render;window.addEventListener('cyble:route',e=>render(e.detail?.page));const p=new URLSearchParams(location.search).get('page');if(pages[p])setTimeout(()=>render(p),0);
})();
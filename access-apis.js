(()=>{
function render(){
  const sub=document.querySelector('#subpage');
  const g=sub?.querySelector('.subpage-grid');
  if(!g)return;
  const head=sub.querySelector('.subpage-head');if(head)head.style.display='none';
  g.className='subpage-grid api-page';
  g.innerHTML=`
    <header class="api-head">
      <div>
        <h1>Access APIs（存取 API）
          <span class="api-help">?<span class="api-help-pop">Browse API documentation and manage your API keys<br><span>瀏覽 API 文件並管理你的 API 金鑰</span><a href="#">↗ Visit Help Center（前往說明中心）</a></span></span>
        </h1>
        <p>Browse API documentation and manage your API keys（瀏覽 API 文件並管理你的 API 金鑰）</p>
      </div>
      <button class="api-generate">＋ Generate Key（產生金鑰）</button>
    </header>
    <div class="api-divider"></div>`;
}
window.renderAccessApis=render;
window.addEventListener('cyble:route',e=>{if((e.detail?.page||new URLSearchParams(location.search).get('page'))==='access-apis')render();});
if(new URLSearchParams(location.search).get('page')==='access-apis')setTimeout(render,0);
})();

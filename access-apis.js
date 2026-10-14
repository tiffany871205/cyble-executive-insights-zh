(()=>{
const apiItems=['Alerts API v2','Executive Alerts API','Incident Management API','IOCs API','Botshield API','OT/ICS API','Advisories API','ASM API','Vendor API','Takedown API','Vulnerability API','Ransomware API','Newsfeed API','Newsflash API','Compromised Credit Cards API','Negative Domains API'];
const endpoints=[
['POST','/ar-apollo-v2/api/v2/y/alerts','Fetch alerts（取得警示）','post'],
['PUT','/ar-apollo-v2/api/v2/y/alerts','Update alerts（更新警示）','put'],
['POST','/ar-apollo-v2/api/v2/y/alerts/filter/data','Fetch available filter data（取得可用篩選資料）','post'],
['GET','/ar-apollo-v2/api/v2/y/alerts/{alertId}','Fetch alert details by alert ID（依警示 ID 取得詳細資料）','get'],
['GET','/ar-apollo-v2/api/v2/y/alerts/stats','Fetch alert statistics（取得警示統計）','get']
];
function render(){
 const sub=document.querySelector('#subpage'),g=sub?.querySelector('.subpage-grid');if(!g)return;
 const head=sub.querySelector('.subpage-head');if(head)head.style.display='none';
 g.className='subpage-grid api-page';
 g.innerHTML=`
 <header class="api-head"><div><h1>Access APIs（存取 API） <span class="api-help">?<span class="api-help-pop">Browse API documentation and manage your API keys<br><span>瀏覽 API 文件並管理你的 API 金鑰</span><a href="#">↗ Visit Help Center（前往說明中心）</a></span></span></h1><p>Browse API documentation and manage your API keys（瀏覽 API 文件並管理你的 API 金鑰）</p></div><button class="api-generate">＋ Generate Key（產生金鑰）</button></header>
 <div class="api-divider"></div>
 <section class="api-shell">
   <aside class="api-sidebar"><label>⌕ <input placeholder="Search APIs...（搜尋 API）"></label><nav>${apiItems.map((x,i)=>`<button class="${i===0?'active':''}">${x}</button>`).join('')}</nav><button class="api-key-row">⚿　API Keys（API 金鑰）</button></aside>
   <main class="api-doc">
     <div class="api-doc-title"><h2>Alerts Management API <span>2.0.0</span><span>OAS 3.0</span></h2></div>
     <p class="api-intro">The Alerts API allows you to fetch, update, and comment on security alerts from the demo platform. It provides advanced filtering, service discovery, and metadata endpoints.<br><span>Alerts API 可用於取得、更新與註解資安警示，並提供進階篩選、服務探索及中繼資料端點。</span></p>
     <div class="api-meta"><p><b>Base URL:</b> <code>https://bifrost.demo.example</code></p><p><b>Authentication:</b> All endpoints require Bearer token authentication in the <code>Authorization</code> header.</p><p><b>Date Format:</b> All dates are in UTC, ISO 8601 format: <code>YYYY-MM-DDTHH:mm:ss.sssZ</code></p></div>
     <section class="api-server"><div><b>Servers（伺服器）</b><span>https://bifrost.demo.example – Production server</span></div><button>Authorize 🔒</button></section>
     <section class="api-endpoints"><header><h3>Alerts</h3><span>Operations for fetching, updating, and commenting on alerts（警示查詢、更新與註解操作）</span><b>⌃</b></header>${endpoints.map(e=>`<article class="api-endpoint ${e[3]}"><strong>${e[0]}</strong><code>${e[1]}</code><span>${e[2]}</span><i>🔒⌄</i></article>`).join('')}</section>
   </main>
 </section>`;
}
window.renderAccessApis=render;
window.addEventListener('cyble:route',e=>{if((e.detail?.page||new URLSearchParams(location.search).get('page'))==='access-apis')render();});
if(new URLSearchParams(location.search).get('page')==='access-apis')setTimeout(render,0);
})();

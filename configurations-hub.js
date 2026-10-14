(()=>{
const cards=[
 ['orion-demo.example','DOMAIN','~962','14 Oct 2026',['PHISHING MONITORING','RANSOMWARE INCIDENTS','CODE ANALYSIS - BITBUCKET']],
 ['互動雲端','KEYWORD','~0','16 Sept 2026',['CODE ANALYSIS - GITHUB','CLOUD STORAGE','CODE ANALYSIS - BITBUCKET']],
 ['台灣資服','KEYWORD','~0','16 Sept 2026',['CODE ANALYSIS - GITHUB','CLOUD STORAGE','CODE ANALYSIS - BITBUCKET']],
 ['奇峰科技','KEYWORD','~18','11 Oct 2026',['PHISHING MONITORING','CLOUD STORAGE']],
 ['宜誠資訊','KEYWORD','~7','09 Oct 2026',['RANSOMWARE INCIDENTS','CODE ANALYSIS - GITHUB']],
 ['恆遠教育','KEYWORD','~2','08 Oct 2026',['PHISHING MONITORING','CLOUD STORAGE']]
];
function help(){return `<span class="ch-help">?<span class="ch-help-pop">Manage keywords, executives, brand dictionary, assets, products, and cloud accounts for your organization.<br><span>管理組織的關鍵字、高階主管、品牌字典、資產、產品與雲端帳號。</span><a href="#">↗ Visit Help Center（前往說明中心）</a></span></span>`}
function card(x){return `<article class="ch-card"><div class="ch-card-title"><span>□</span><b>${x[0]}</b><em>✓ ACTIVE（啟用）</em><button>⋮</button></div><p>▥ Demo Information Co., Ltd.　⌁ Demo Partner</p><strong>${x[1]}</strong><div class="ch-alert"><small>ALERT COUNT（警示數）</small><b>${x[2]}</b><i></i><small>in last 30 days（最近 30 天）</small><h4>SERVICES（服務）</h4><div>${x[4].map((s,i)=>`<span>${s}</span>`).join('')}<span>+${x[4].length+2}</span></div></div><footer>◷ ${x[3]}</footer></article>`}
function render(){
 const sub=document.querySelector('#subpage'),g=sub?.querySelector('.subpage-grid');if(!g)return;const head=sub.querySelector('.subpage-head');if(head)head.style.display='none';
 g.className='subpage-grid ch-page';g.innerHTML=`
 <header class="ch-head"><h1>Configurations Hub（設定中心） ${help()} <button>◉ How to use（使用方式）</button></h1></header>
 <div class="ch-layout"><aside class="ch-side"><button class="active">◇ Keywords（關鍵字）</button><button>▣ Buckets（分類桶）</button><button>♙ Executives（高階主管）</button><button>▣ Assets（資產）</button><button>◇ Products（產品）</button><button>☁ Cloud Accounts（雲端帳號）</button><button>◴ ASM Assets（ASM 資產）</button><button>⌘ AD Integrations（AD 整合）</button><button>ϟ Ask Blaze Integrations（Ask Blaze 整合）</button></aside>
 <main class="ch-main"><div class="ch-title-row"><div><h2>Keywords（關鍵字）</h2><p><b>1,126</b> Total（總數）　|　<em>1,121</em> Active（啟用）　|　0 Disabled（停用）　|　<i>5</i> Under Review（審查中）</p></div><div class="ch-tools"><label>⌕ <input placeholder="Search keywords...（搜尋關鍵字）"></label><button>☷</button><button>↻</button><button>▦</button><button>☷</button><button>◎</button><button>⇩</button><button>⇧ Bulk Upload Trackers（批次上傳追蹤）</button><details class="ch-add-dd"><summary>＋ Add Keyword（新增關鍵字）　⌄</summary><div><button data-add-keyword>＋ <span><b>Add Keyword（新增關鍵字）</b><small>Manually add a single keyword（手動新增單一關鍵字）</small></span></button><button>⇧ <span><b>Bulk Upload（批次上傳）</b><small>Import multiple keywords via XLSX（透過 XLSX 匯入多個關鍵字）</small></span></button></div></details></div></div>
 <div class="ch-filters"><button>□ Select All（全選）</button><button>Services（服務）⌄</button><button>Types（類型）⌄</button><button>Buckets（分類桶）⌄</button><button>Status（狀態）⌄</button><button class="company">Company: 星瀚科技　×</button></div>
 <section class="ch-card-scroll"><div class="ch-grid">${cards.map(card).join('')}</div></section>
 <footer class="ch-footer">Showing <b>1–50</b> of <b>1,126</b><span>«　‹　 Go to　<b>1</b>　of 23　›　»</span><label>Rows per page（每頁筆數）　<b>50⌄</b></label></footer>
 </main></div>
 <div class="ch-modal-host" hidden><div class="ch-modal-backdrop"></div><section class="ch-modal"><header><div><i>◇</i><span><h2>Add Keyword（新增關鍵字）</h2><p>Assign keywords to buckets for monitoring（將關鍵字指派至分類桶以進行監控）</p></span></div><button class="ch-ai">◔ View AI Suggested Keywords（查看 AI 建議關鍵字）</button><button class="ch-modal-x">×</button></header><div class="ch-modal-body"><div class="ch-bucket-row"><b>1</b><button>Select Buckets（選擇分類桶）⌄</button><button>＋ Add New Bucket（新增分類桶）</button></div><div class="ch-keyarea"><textarea placeholder="Keyword should be specific to your purpose for better alert generation...（關鍵字應具體明確，以利產生更準確的警示）"></textarea><div><span>Press Enter ↵ to add keyword（按 Enter 新增關鍵字）</span><span>Add multiple keywords by separating them with a comma ",".（可使用逗號分隔多個關鍵字。）</span></div></div><button class="ch-another">＋ Add Another Bucket（新增另一個分類桶） <span>0 / 5 buckets</span></button></div><footer><div>#　0 keywords added　｜　▱ 0 buckets ready</div><div><button class="ch-cancel">Cancel（取消）</button><button class="ch-next">Next（下一步）　→</button></div></footer></section></div>`;
 const host=g.querySelector('.ch-modal-host'),open=()=>{host.hidden=false;g.querySelector('.ch-add-dd').open=false},close=()=>host.hidden=true;g.querySelector('[data-add-keyword]').onclick=open;host.querySelector('.ch-modal-x').onclick=close;host.querySelector('.ch-cancel').onclick=close;host.querySelector('.ch-modal-backdrop').onclick=close;
}
window.renderConfigurationsHub=render;window.addEventListener('cyble:route',e=>{if((e.detail?.page||new URLSearchParams(location.search).get('page'))==='configurations-hub')render();});if(new URLSearchParams(location.search).get('page')==='configurations-hub')setTimeout(render,0);
})();

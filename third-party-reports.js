(function(){
const reports=[
 {name:'星瀚資訊股份有限公司',risk:'低',score:24,industry:'科技服務',country:'台灣',reports:6,tone:'low'},
 {name:'森岳系統整合有限公司',risk:'中',score:37,industry:'IT 與資訊服務',country:'台灣',reports:4,tone:'medium'},
 {name:'沐川雲端科技有限公司',risk:'高',score:76,industry:'雲端服務',country:'新加坡',reports:3,tone:'high'}
];
function renderRows(items){return items.map((v,i)=>`<div class="tpr-row" data-report-row="${i}"><button class="tpr-chevron" aria-label="展開 ${v.name}">›</button><div><strong>${v.name}</strong><span class="tpr-new">NEW</span></div><div><span class="tpr-pill ${v.tone}">${v.risk}</span></div><div><span class="tpr-pill ${v.tone}">${v.score}</span></div><div>${v.industry}</div><div>${v.country}</div><div><i></i>${v.reports} 份已完成</div><button class="tpr-add" aria-label="新增報告">＋</button><section class="tpr-expanded"><b>${v.name}</b><span>最新報告：2026/10/${String(8-i).padStart(2,'0')}</span><span>風險分數 ${v.score} · ${v.risk}風險</span><button>查看報告 →</button></section></div>`).join('')}
function renderReports(){
 const g=document.querySelector('#subpage .subpage-grid');if(!g)return;
 document.querySelector('#subpage .subpage-head').style.display='none';g.className='subpage-grid tpr-page';
 g.innerHTML=`<div class="tpr-head"><div><h1>Reports <span>?</span></h1><p>第三方供應商風險評估報告</p></div><div class="tpr-search">⌕ <input data-tpr-search placeholder="搜尋供應商…"></div><button class="tpr-duration">▣ 選擇期間 ⌄</button><div class="tpr-actions"><button aria-label="篩選">☷</button><button aria-label="重設">↻</button><button class="primary">＋ Add</button></div></div>
 <div class="tpr-filters"><button>選擇產業 ⌄</button><button>選擇國家 ⌄</button><button>風險等級 ⌄</button></div>
 <section class="tpr-table"><header><span></span><b>第三方名稱</b><b>風險等級</b><b>分數</b><b>產業</b><b>國家</b><b>報告</b><span></span></header><div data-tpr-rows>${renderRows(reports)}</div><footer><span>顯示 <b>1–${reports.length}</b> / ${reports.length}</span><span>«　‹　前往　<b>1</b>　/ 1　›　»</span><span>每頁筆數　<b>50 ⌄</b></span></footer></section>`;
 const input=g.querySelector('[data-tpr-search]');input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();g.querySelector('[data-tpr-rows]').innerHTML=renderRows(reports.filter(v=>v.name.toLowerCase().includes(q)||v.industry.toLowerCase().includes(q)||v.country.toLowerCase().includes(q)));bindRows(g)});bindRows(g);
 document.querySelectorAll('.thirdparty-flyout [data-thirdpartypage]').forEach(b=>b.classList.toggle('active',b.dataset.thirdpartypage==='reports'));
}
function bindRows(g){g.querySelectorAll('.tpr-row').forEach(row=>row.querySelector('.tpr-chevron')?.addEventListener('click',()=>row.classList.toggle('open')))}
function install(){const menu=document.querySelector('.thirdparty-flyout');if(menu){const buttons=menu.querySelectorAll('button');const report=buttons[1];if(report){report.dataset.thirdpartypage='reports';report.onclick=()=>routeTo('third-party-risk','reports',false)}}const p=new URLSearchParams(location.search);if(p.get('page')==='third-party-risk'&&p.get('tab')==='reports')renderReports()}
window.renderThirdPartyReports=renderReports;
window.addEventListener('cyble:route',e=>{if(e.detail?.page==='third-party-risk'&&e.detail?.tab==='reports')setTimeout(renderReports,0)});
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',install):install();
})();

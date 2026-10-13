(()=>{
const demoName='蔡宏圖';
const findings=[
 ['蔡宏圖 — impersonating page on Facebook','facebook','Social Impersonations','HIGH','CONFIRMED'],
 ['Mention by 廖倩敏 on Facebook','facebook','Social Mentions','HIGH','VIEWED'],
 ['Mention by 賴鳳英 on Facebook','facebook','Social Mentions','HIGH','UNREVIEWED'],
 ['Mention by 王尤美 on Facebook','facebook','Social Mentions','HIGH','VIEWED'],
 ['Mention by Technews 科技新報 on Facebook','facebook','Social Mentions','HIGH','UNREVIEWED'],
 ['Mention by 2025 台大電機週 on Instagram','instagram','Social Mentions','HIGH','UNREVIEWED']
];
function root(){return document.querySelector('#subpage .subpage-grid')}
function shell(inner,mode='overview'){
 const g=root(); if(!g)return; g.className='subpage-grid executive-monitoring-page';
 g.innerHTML=`<div class="em-page">${inner}</div>`;
 document.querySelector('#subpage .subpage-head').style.display='none';
 sync(mode);
}
function sync(mode){document.querySelectorAll('.executive-flyout [data-execpage]').forEach(b=>b.classList.toggle('active',b.dataset.execpage===mode));}
function overview(){
 shell(`<div class="em-breadcrumb">EXECUTIVE MONITORING　›　OVERVIEW</div><div class="em-top"><div><h1>Overview（總覽）</h1><p>1 executives monitored · scored 8h ago（已監控 1 位高階主管 · 8 小時前評分）</p></div><button class="em-primary" data-em-findings>Triage critical & high（分流重大與高風險） →</button></div><hr>
 <div class="em-cards">
  <article><label>HEALTH BELOW 80%（健康度低於 80%）</label><strong>0 <small>of 1 monitored</small></strong><p>Executives scoring under the configured threshold（低於設定門檻的高階主管）</p><div><b class="green">HEALTHY</b> 1　<b class="amber">AT RISK</b> 0<br><b class="red">COMPROMISED</b> 0</div></article>
  <article><label>REPUTATION（聲譽）</label><strong>1 <small>need 10+ mentions</small></strong><p>Below the mention floor there isn’t enough signal to score（提及數不足時無法形成足夠評分訊號）</p><small>Scored for 0 of 1</small></article>
  <article><label>OPEN FINDINGS（未結案發現）</label><strong>19 <small>12 critical or high</small></strong><p>Unresolved across every lane（所有監控類別中的未解決項目）</p><div class="em-sevbar"><i></i></div><div>■ Critical & high 12<br>■ Everything else 7</div></article>
  <article><label>CLOSED THIS WEEK（本週結案）</label><strong>0 <small>0 false positives</small></strong><p>Findings moved to a closed status in the last 7 days（最近 7 天已移至結案狀態）</p></article>
  <article><label>TIME TO CLOSE（結案時間）</label><strong>—</strong><p>Nothing closed in this window, so there is no median to state（此期間無結案項目，因此無中位數）</p></article>
 </div>
 <section class="em-section"><div class="em-section-head"><span>WHO CARRIES THE RISK（風險集中對象）　<em>Sized by open findings; ring shows the health band</em></span><a data-em-executives>All executives →</a></div><div class="em-person"><span>蔡</span><p>+0 with nothing open</p></div><p>${demoName} 19 — these three hold 100% of everything open</p></section>
 <section class="em-section"><div class="em-section-head"><span>WHERE THE 19 OPEN FINDINGS SIT（19 項未結案發現分布）　<em>Open findings by category · widths clamped for legibility</em></span></div><div class="em-category"><div><b>MENTIONS（提及）</b><strong>18 <small>open</small></strong></div><div><b>IMPERSONATIONS（冒用）</b><strong>1 <small>open</small></strong></div></div></section>
 <section class="em-section"><div class="em-section-head"><span>HOW LONG IT HAS BEEN OPEN（未結案時間）　<em>Oldest still open: ${demoName} · Mention by 國泰金控 on Vimeo · 221 days</em></span><a>Oldest first →</a></div><div class="em-age"><div><b>6</b> Under 7 days</div><div><b>13</b> Over 14 days</div></div></section>
 <section class="em-bottom"><div><div class="em-section-head"><span>WHAT CHANGED（近期變化） — 1 score movements in　<button>Last 7 days⌄</button></span></div><p>週四　↓　<strong>${demoName}’s health fell to 93%</strong><br><small>−1 pt · 94% → 93% · Chairman</small></p><p>0 executives held steady</p></div><div><label>NEEDS ATTENTION（需要關注）</label><p>Nothing needs attention right now（目前沒有需要關注的項目）</p><b class="green">HEALTHY</b></div></section>`, 'overview');
 document.querySelector('[data-em-findings]')?.addEventListener('click',()=>routeTo('executive-monitoring','findings',false));
 document.querySelector('[data-em-executives]')?.addEventListener('click',()=>routeTo('executive-monitoring','executives',false));
}
function findingsPage(){
 const rows=findings.map((f,i)=>`<div class="em-frow"><div><span class="em-avatar">蔡宏</span><b>${demoName}</b><small>Seen ${i?`${4+i}mo`:'1mo'} ago</small></div><div><b>${f[0]}</b><small>${demoName} · ${f[1]}　<span>☻ Neutral</span>${i?'　<span>Resolve 2 more</span>':'　<span class="health">↗ Health +1%</span>'}</small></div><div>${f[2]}</div><div><b class="sev">• ${f[3]}</b></div><div><b class="status ${f[4].toLowerCase()}">${f[4]}</b></div><div>⋮</div></div>`).join('');
 shell(`<div class="em-breadcrumb">EXECUTIVE MONITORING　›　FINDINGS · ALL</div><div class="em-findtop"><div><h1>Findings（發現項目） <small>12 open in view · 0 in last 30 days</small></h1></div><div><button>⇅ Sort（排序）</button><button>⇩ Export（匯出）</button></div></div><hr>
 <div class="em-filters"><input placeholder="⌕  Search title, executive, source...（搜尋標題、高階主管、來源…）"><button>Executive⌄</button><button class="active">② Severity　×</button><button>Sentiment⌄</button><button>Status⌄</button><button class="active">Resolution: Unresolved⌄</button><button>Category⌄</button><button>Lane⌄</button><button>▣ All time⌄</button><button>↻</button></div>
 <div class="em-active"><b>ACTIVE</b>　<span>Severity: CRITICAL　×</span> <span>Severity: HIGH　×</span>　Clear all</div>
 <div class="em-ftable"><div class="em-fhead"><b>EXECUTIVE</b><b>FINDING</b><b>LANE</b><b>SEVERITY</b><b>STATUS</b><b></b></div>${rows}<footer><span>Showing <b>1-12</b> of 12</span><span>‹　‹　 Go to　<b>1</b>　of 1　›　›</span><span>Rows per page　<b>20⌄</b></span></footer></div>`, 'findings');
}
function executivesPage(){shell(`<div class="em-breadcrumb">EXECUTIVE MONITORING　›　EXECUTIVES</div><div class="em-findtop"><div><h1>Executives（高階主管）</h1><p>1 monitored · 19 open findings · <span class="em-danger">0 compromised</span></p></div><div><button>⇩ Export executives（匯出高階主管）</button><button class="em-primary">＋ Add executive（新增高階主管）</button></div></div><hr>
<div class="em-exec-tools"><div><b>STATUS（狀態）</b><button class="active">Active 1</button><button>Paused 0</button><button>Deleted 0</button></div><div><input placeholder="⌕  Search by name, alias, email...（搜尋姓名、別名、電子郵件…）"><button>⇅ Sort（排序）</button></div></div>
<div class="em-exec-table"><div class="em-exec-head"><b>EXECUTIVE（高階主管）</b><b>HEALTH（健康度）⌃</b><b>REPUTATION（聲譽）</b><b>OPEN FINDINGS（未結案發現）</b><b>MENTIONS（提及）</b><b>STATUS（狀態）</b><b></b></div><div class="em-exec-row"><div><span class="em-photo">蔡</span><strong>${demoName}</strong><small>Chairman（董事長）</small></div><div><strong>93% <b class="green">HEALTHY</b></strong><small class="em-danger">↓ 1 pt this week</small></div><div><strong>— <b class="em-insufficient">INSUFFICIENT</b></strong><small>6 of 10 mentions needed</small></div><div><strong>19 <small>open</small> <b class="red">HIGH</b></strong><small><i class="blue-dot"></i> 1　<i class="teal-dot"></i> 18</small></div><div><strong><i class="teal-dot"></i> 6</strong><small>last 30 days</small></div><div><b class="em-active-pill">● ACTIVE</b></div><div><button class="em-more">⋮</button></div></div><footer><span>Showing <b>1-1</b> of 1</span><span>«　‹　 Go to　<b>1</b>　of 1　›　»</span><span>Rows per page　<b>20⌄</b></span></footer></div>`, 'executives')}
function placeholder(mode,title){shell(`<div class="em-breadcrumb">EXECUTIVE MONITORING　›　${title.toUpperCase()}</div><div class="em-top"><div><h1>${title}</h1><p>Executive Monitoring（高階主管監控）</p></div></div><hr><div class="em-empty">${title}（此頁待後續畫面補充）</div>`,mode)}
function render(){const p=new URLSearchParams(location.search);if(p.get('page')!=='executive-monitoring')return;const tab=p.get('tab')||'overview';if(tab==='findings')findingsPage();else if(tab==='executives')executivesPage();else if(tab==='configuration')placeholder('configuration','Configuration（設定）');else overview();}
window.renderExecutiveMonitoring=render;
window.addEventListener('cyble:route',e=>{if(e.detail?.page==='executive-monitoring')render()});
if(new URLSearchParams(location.search).get('page')==='executive-monitoring')setTimeout(render,0);
})();

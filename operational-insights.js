(function(){
const sub=document.querySelector('#subpage');
let head=sub.querySelector('.subpage-head');
let grid=sub.querySelector('.subpage-grid');
function refreshShell(){
 head=sub.querySelector('.subpage-head');
 grid=sub.querySelector('.subpage-grid, .alerts-insights-page, .operational-page');
}

function setHeader(){
 head.innerHTML=`<h1 class="operational-title">Operational Insights（營運洞察） <span class="help-wrap"><button class="help-q" aria-label="營運洞察說明">?</button><span class="help-popover"><span>Operational Insights（營運洞察）提供組織即時的 Security Posture（安全態勢）視圖，涵蓋 Triage Metrics（分流指標）、Live Alert Timeline（即時警示時間軸）、Brand（品牌）與 Vulnerability Signals（弱點訊號），以及 Analyst Workload（分析師工作量）。</span><a href="#help">↗ 前往說明中心</a></span></span></h1><p>Security posture overview（安全態勢總覽）－triage（分流）、threat landscape（威脅態勢）與 org insights（組織洞察）</p><div class="operational-tools"><button class="active">7 天</button><button>30 天</button><button>✎ 自訂</button><button>⇩ 匯出報告</button></div>`;
}

function donut(){return `<div class="op-donut"><div><strong>201.1K</strong><small>總計</small></div></div>`}
function serviceBars(){const rows=[['Code Analysis - Github',184,2,1],['Suspicious Domains（可疑網域）',8,0,0],['Leaked Credentials（外洩憑證）',2,3,0],['Data Exposures（資料暴露）',3,0,0],['Darkweb Marketplaces（暗網市集）',0,2,0],['Compromised Endpoints（遭入侵端點）',0,1,0],['Social Media Monitoring（社群媒體監控）',1,0,0],['Phishing Monitoring（網路釣魚監控）',0,1,0]];return `<div class="op-bars">${rows.map(x=>`<div><span>${x[0]}</span><i><b style="height:${x[1]}px"></b><em style="height:${x[2]*3}px"></em><u style="height:${x[3]*3}px"></u></i></div>`).join('')}<p class="op-legend">● 高　 ● 中等　 ● 低</p></div>`}
const liveItems=['easypadala.landbank.com','metr.hmblbot.com','大新聞大爆卦','國泰人才樹 Cathay Match','mcp-dibentech.zfsit.com','InsiderPaper','yuantania777.chatgpt.site','thuann.sohbaqg.vn','apps.gs-capital.com','capital.wqpyobprp.cc','cdn.bfsit.com','feisu-play.com.cn'];
const keywordCards=[['永豐金證券','8.3K','Code Analysis - Github','8.3K'],['sinotrade.com.tw','7.8K','Code Analysis - Github','7.7K'],['群益金鼎','7.3K','Code Analysis - Github','7.3K'],['富邦證券','6.7K','Code Analysis - Github','6.7K']];
const eventRows=[['High Priority（高優先）','3.4K'],['Code Analysis - Github','2.4K'],['Leaked Credentials（外洩憑證）','458'],['Social Media Monitoring（社群媒體監控）','364'],['skbank.com.tw','198'],['kctax.gov.tw','123'],['kcg.gov.tw','110'],['fbs.com.tw','108'],['taishinart.org.tw','105'],['Compromised Endpoints（遭入侵端點）','58'],['Data Exposures（資料暴露）','46']];
function renderOverview(){
 refreshShell();
 setHeader();
 grid.className='subpage-grid operational-page';
 grid.innerHTML=`<div class="op-tabs"><b>總覽</b><span>組織洞察</span></div><div class="op-layout"><main class="op-main"><section class="op-card op-alert-dist"><div class="op-section-head">Alert Distribution（警示分布） <button>Blaze AI 摘要</button></div><p>Observation on alerts generated for past 7 days（過去 7 天警示觀察）：整體警示量相較過去明顯增加，共新增 189 筆警示。</p><div class="op-summary"><ul><li>● 未檢視 <b>99.9%</b></li><li>● 已檢視 <b>0.1%</b></li><li>● 檢視中 <b>0.0%</b></li><li>● 已解決 <b>0.0%</b></li></ul>${donut()}</div><div class="op-by-service"><h4>BY SERVICE（依服務） <small>Top 8 of 22</small></h4>${serviceBars()}</div></section><div class="op-two"><section class="op-card"><h3>KEYWORDS - RANKED BY ALERT VOLUME（依警示量排序的關鍵字）</h3>${keywordCards.map(x=>`<article class="keyword-card"><header><strong>${x[0]}</strong><span>● ACTIVE（啟用）</span><em>${x[1]} alerts</em></header><p>${x[2]} <b>${x[3]}</b></p><i><u></u></i></article>`).join('')}</section><section class="op-card"><h3>EVENTS OF INTEREST（關注事件） <small>11 of 11 events</small></h3><div class="op-pills"><b>All</b><span>Bucket</span><span>Keyword</span><span>Service</span><span>High Priority</span></div>${eventRows.map(x=>`<p class="event-row"><span>${x[0]}</span><b>${x[1]}</b></p>`).join('')}</section></div><section class="op-card keyword-health"><h3>KEYWORD HEALTH（關鍵字健康度） <span><b>5 DORMANT</b> <em>5 NOISY</em></span></h3><div class="health-grid"><div><h4>Dormant（休眠）</h4>${['megafg.net','megafg.com.tw','nanshanlife.us','nanshanlife.asia','nanshanedm.com.tw'].map(x=>`<p><strong>${x}</strong><span><b>106d silent</b><small>Last alert: Never</small></span></p>`).join('')}<aside>RECOMMENDATION（建議）<br>Review 5 keywords with 28+ days of silence for removal to reduce monitoring noise.</aside></div><div><h4>Noisy（高噪音）</h4>${[['永豐金證券','8.3K'],['sinotrade.com.tw','7.8K'],['群益金鼎','7.3K'],['元大證券','7.2K'],['富邦證券','6.7K']].map(x=>`<p><strong>${x[0]}</strong><span>Code Analysis - Github　${x[1]}</span><i></i></p>`).join('')}<aside>RECOMMENDATION（建議）<br>「永豐金證券」每日約產生 1385 筆警示，建議新增服務專用篩選條件或拆分子關鍵字。</aside></div></div></section><section class="op-card workload"><h3>TEAM · WORKLOAD & PERFORMANCE（團隊 · 工作量與績效） <span>26 <small>CLOSED</small>　 <b>201.1K</b> <small>OPEN</small>　 1 <small>ANALYSTS</small></span></h3><article><div class="avatar">UE</div><strong>Unassigned events（未指派事件）</strong><div><b>26<small>Closed</small></b><em>201.1K<small>Open</small></em></div></article></section></main><aside class="op-card op-live"><h3>● LIVE ALERT TIMELINE（即時警示時間軸） <small>29.8K alerts</small></h3><p>Last 24 hours（過去 24 小時）</p><div class="timeline-chart"><i></i></div>${liveItems.map((x,i)=>`<article><b>●</b><span>${i%5===2?'Social Media Monitoring（社群媒體監控）':'Suspicious Domains（可疑網域）'}<strong>${x}</strong></span><small>${i<1?'5m':i<2?'14m':i<5?'4'+(i-2)*7+'m':'1h'} ago</small></article>`).join('')}</aside></div>`;
 bindTabs();
}
function renderOrg(){
 refreshShell();
 setHeader();grid.className='subpage-grid operational-page';grid.innerHTML=`<div class="op-tabs"><span>總覽</span><b>組織洞察</b></div><section class="op-card org-placeholder"><h3>Org Insights（組織洞察）</h3><p>此分頁等待後續截圖資料；目前保留頁面結構與路由。</p></section>`;bindTabs();
}
function bindTabs(){const t=grid.querySelectorAll('.op-tabs>*');const go=(tab,fn)=>()=>{const u=new URL(location.href);u.search='';u.searchParams.set('page','operational');u.searchParams.set('tab',tab);history.replaceState({page:'operational',tab},'',u);fn()};if(t[0])t[0].onclick=go('overview',renderOverview);if(t[1])t[1].onclick=go('org',renderOrg)}
function restore(){const q=new URLSearchParams(location.search);return q.get('tab')==='org'?renderOrg():renderOverview()}
if(new URLSearchParams(location.search).get('page')==='operational')restore();
window.addEventListener('cyble:route',e=>{if(e.detail?.page==='operational')restore()});
})();

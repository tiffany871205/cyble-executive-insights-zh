(function(){
const sub=document.querySelector('#subpage');
const head=sub.querySelector('.subpage-head');
const grid=sub.querySelector('.subpage-grid');
const services=[['Web Application Discovery（Web 應用程式探索）','低','0'],['Issues Catalog（問題目錄）','中等','1'],['Network Vulnerabilities - CVEs（網路弱點－CVE）','低','0'],['Domain Expiry（網域到期）','低','0'],['Asset SSL Expiry（資產 SSL 憑證到期）','低','0'],['Assets','低','0'],['IP Risk Score（IP 風險分數）','低','0'],['Subdomains（子網域）','低','0']];
function setAlertsHeader(){
 head.innerHTML=`<h1 class="alerts-page-title"><svg class="alerts-title-bell" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg><span>Alerts Insights（警示洞察）</span><span class="help-wrap"><button class="help-q" aria-label="警示洞察說明">?</button><span class="help-popover"><span>Cyble 的警示洞察提供關鍵網路威脅、新興趨勢、潛在風險與弱點的精簡摘要，協助管理者快速理解目前威脅態勢，並將複雜的資安資料轉化為容易理解且可採取行動的洞察。</span><a href="#help">↗ 前往說明中心</a></span></span></h1><p>跨受監控服務的警示總覽</p><div class="alerts-tools"><button>◇ 關鍵字⌄</button><button>▣ 過去 24 小時⌄</button><button>↶</button><button>⇩ 下載報告</button></div>`;
}
function renderAlerts(){
 setAlertsHeader();
 grid.className='alerts-insights-page';
 grid.innerHTML=`<div class="ai-tabs"><b>攻擊面</b><span>暗網與深網</span><span>網路犯罪論壇</span><span>品牌情報</span><span>高階管理監控</span><span>資料外洩</span><span>漏洞情報</span><span>外部威脅態勢</span></div><section class="attack-summary"><div class="gauge"><img class="attack-gauge-image" src="assets/attack-surface-gauge.png" alt="攻擊面風險儀表：中等"></div><div class="service-table"><header><span>服務</span><span>風險</span><span>警示</span></header>${services.map(x=>`<p><span>${x[0]}</span><em class="${x[1]==='中等'?'med':'low'}">● ${x[1]}</em><b>${x[2]}</b></p>`).join('')}</div><div class="total-alerts"><h3>警示總數： <i>1</i></h3>${[['◉','已檢視',0],['◉','未檢視',1],['⊙','已確認',0],['▣','檢視中',0],['⌕','修補進行中',0],['⊗','不需修補',0],['✓','已解決',0],['△','誤判',0],['ⓘ','資訊',0]].map(x=>`<p><span>${x[0]}　${x[1]}</span><b>${x[2]}</b></p>`).join('')}</div></section><div class="ai-mid"><article class="ai-card"><h3>AI Filtered Tags Cloud（AI 篩選標籤雲） <small>▥ 長條圖　 <b>☁ 標籤雲</b></small></h3><div class="empty">沒有可用的標籤資料</div></article><article class="ai-card"><h3>嚴重性分布</h3><div class="sev-legend"><span>● 高</span><span>● 中等</span><span>● 低</span></div><div class="severity-bar"><span>Issues Catalog（問題目錄）</span><i></i><b>1</b></div></article></div><article class="ai-card assignee"><h3>依負責人分類的警示分布</h3><header><span>負責人</span><span>警示</span><span>嚴重性</span><span>狀態</span></header><div><strong>未指派</strong><b>1</b><span class="sev-pills"><i>0</i><i>1</i><i>0</i></span><span class="status-icons">◉ 0　◎ 1　⊙ 0　▣ 0　⌕ 0　⊗ 0　✓ 0</span></div></article><article class="ai-card pending"><h3>待處理警示 <small>（過去 30 天） ⓘ</small></h3><div class="pending-donut"><div><strong>78</strong><small>警示總數</small></div><p>● 未檢視　78</p></div><div class="pending-table"><header>狀態　　　　　　　總計　　　　　　　嚴重性</header>${[['未檢視',78,'8　48　22'],['已檢視',0,'0　0　0'],['已確認',0,'0　0　0'],['檢視中',0,'0　0　0'],['修補進行中',0,'0　0　0']].map(x=>`<p><span>${x[0]}</span><b>${x[1]}</b><em>${x[2]}</em></p>`).join('')}</div></article>`;
 bindAlertTabs();
}
function renderDarkweb(){
 setAlertsHeader();
 grid.className='alerts-insights-page';
 sessionStorage.setItem('cybleAlertsTab','darkweb');
 const darkServices=[['Data Exposures（資料暴露）','高','20'],['Ransomware Leaks（勒索軟體外洩）','低','0'],['Compromised Endpoints（遭入侵端點）','高','309'],['Compromised Cookies（遭入侵 Cookie）','低','0'],['I2P Links（I2P 連結）','低','0'],['Tor Links（Tor 連結）','低','0'],['Compromised Files（遭入侵檔案）','低','0'],['Leaked Credentials（外洩憑證）','高','4.3k']];
 grid.innerHTML=`<div class="ai-tabs"><span>攻擊面</span><b>暗網與深網</b><span>網路犯罪論壇</span><span>品牌情報</span><span>高階管理監控</span><span>資料外洩</span><span>漏洞情報</span><span>外部威脅態勢</span></div><section class="attack-summary darkweb-summary"><div class="gauge"><img class="attack-gauge-image" src="assets/attack-surface-gauge.png" alt="暗網與深網風險儀表"></div><div class="service-table"><header><span>服務</span><span>風險</span><span>警示</span></header>${darkServices.map(x=>`<p><span>${x[0]}</span><em class="${x[1]==='高'?'high':'low'}">● ${x[1]}</em><b>${x[2]}</b></p>`).join('')}</div><div class="total-alerts"><h3>警示總數： <i>4.6k</i></h3>${[['已檢視','8'],['未檢視','4.6k'],['已確認','0'],['檢視中','0'],['修補進行中','0'],['不需修補','2'],['已解決','0'],['誤判','6'],['資訊','0']].map(x=>`<p><span>${x[0]}</span><b>${x[1]}</b></p>`).join('')}</div></section><div class="ai-mid"><article class="ai-card tag-cloud"><h3>AI Filtered Tags Cloud（AI 篩選標籤雲） <small>▥ Bar Chart（長條圖）　 <b>☁ Tag Cloud（標籤雲）</b></small></h3><div class="tag-words"><strong>Probable Customer（可能的客戶）</strong><span>Singapore NRIC（新加坡身分證）</span><span>Cybersecurity Discussions（資安討論）</span><span>Probable Token（可能的 Token）</span><span>Probable User ID（可能的使用者 ID）</span><span>Probable Bank account（可能的銀行帳戶）</span><span>Organization Email（組織電子郵件）</span><span>IP Address（IP 位址）</span><span>Employee（員工）</span><span>Probable Phone Number（可能的電話號碼）</span><span>Probable Password（可能的密碼）</span></div></article><article class="ai-card"><h3>Severity Distribution（嚴重性分布）</h3><div class="sev-legend"><span>● 高</span><span>● 中等</span><span>● 低</span></div><div class="dark-severity"><p><span>Leaked Credentials（外洩憑證）</span><i><b style="width:11%"></b><em style="width:84%"></em><u style="width:5%"></u></i><strong>4.3k</strong></p><p><span>Compromised Endpoints（遭入侵端點）</span><i><em style="width:100%"></em></i><strong>309</strong></p><p><span>Data Exposures（資料暴露）</span><i><b style="width:20%"></b><em style="width:40%"></em><u style="width:40%"></u></i><strong>20</strong></p></div></article></div><article class="ai-card assignee"><h3>Assignee Wise Alert Distribution（依負責人分類的警示分布）</h3><header><span>負責人</span><span>警示</span><span>嚴重性</span><span>狀態</span></header><div><strong>未指派</strong><b>4.6k</b><span class="sev-pills"><i>467</i><i>3.9k</i><i>247</i></span><span class="status-icons">◉ 8　◎ 4.6k　⊙ 0　▣ 0　⌕ 0　⊗ 2　✓ 0　△ 6　ⓘ 0</span></div></article><article class="ai-card pending"><h3>Alerts Pending Action（待處理警示） <small>（過去 30 天） ⓘ</small></h3><div class="pending-donut dark-pending"><div><strong>64.9k</strong><small>警示總數</small></div><p>● 未檢視　64.6k<br><br><span>● 已檢視　206</span></p></div><div class="pending-table"><header>狀態　　　　　　　總計　　　　　　　嚴重性</header>${[['未檢視','64.6k','19.8k　31.1k　13.8k'],['已檢視','206','107　65　34'],['已確認','0','0　0　0'],['檢視中','0','0　0　0'],['修補進行中','0','0　0　0']].map(x=>`<p><span>${x[0]}</span><b>${x[1]}</b><em>${x[2]}</em></p>`).join('')}</div></article>`;
 bindAlertTabs();
}
function renderCybercrime(){
 setAlertsHeader();
 grid.className='alerts-insights-page';
 sessionStorage.setItem('cybleAlertsTab','cybercrime');
 const cyberServices=[['Cybercrime Forum Mentions（網路犯罪論壇提及）','高','34'],['Darkweb Marketplaces（暗網市集）','中等','754'],['Telegram Mentions（Telegram 提及）','高','14'],['Discord','低','0'],['Compromised Cards（遭盜用卡片）','低','0']];
 grid.innerHTML=`<div class="ai-tabs"><span>攻擊面</span><span>暗網與深網</span><b>網路犯罪論壇</b><span>品牌情報</span><span>高階管理監控</span><span>資料外洩</span><span>漏洞情報</span><span>外部威脅態勢</span></div><section class="attack-summary cybercrime-summary"><div class="gauge"><img class="attack-gauge-image" src="assets/attack-surface-gauge.png" alt="網路犯罪論壇風險儀表：高"></div><div class="service-table"><header><span>服務</span><span>風險</span><span>警示</span></header>${cyberServices.map(x=>`<p><span>${x[0]}</span><em class="${x[1]==='高'?'high':x[1]==='中等'?'med':'low'}">● ${x[1]}</em><b>${x[2]}</b></p>`).join('')}</div><div class="total-alerts"><h3>警示總數： <i>802</i></h3>${[['已檢視','5'],['未檢視','797'],['已確認','0'],['檢視中','0'],['修補進行中','0'],['不需修補','0'],['已解決','0'],['誤判','0'],['資訊','0']].map(x=>`<p><span>${x[0]}</span><b>${x[1]}</b></p>`).join('')}</div></section><div class="ai-mid"><article class="ai-card tag-cloud cyber-tag"><h3>AI Filtered Tags Cloud（AI 篩選標籤雲） <small>▥ Bar Chart（長條圖）　 <b>☁ Tag Cloud（標籤雲）</b></small></h3><div class="tag-words"><strong>Cybersecurity Discussions（資安討論）</strong></div></article><article class="ai-card"><h3>Severity Distribution（嚴重性分布）</h3><div class="sev-legend"><span>● 高</span><span>● 中等</span><span>● 低</span></div><div class="dark-severity"><p><span>Darkweb Marketplaces（暗網市集）</span><i><em style="width:100%"></em></i><strong>754</strong></p><p><span>Cybercrime Forum Mentions（網路犯罪論壇提及）</span><i><b style="width:9%"></b><em style="width:91%"></em></i><strong>34</strong></p><p><span>Telegram Mentions（Telegram 提及）</span><i><b style="width:44%"></b><em style="width:56%"></em></i><strong>14</strong></p></div></article></div><article class="ai-card assignee"><h3>Assignee Wise Alert Distribution（依負責人分類的警示分布）</h3><header><span>負責人</span><span>警示</span><span>嚴重性</span><span>狀態</span></header><div><strong>未指派</strong><b>802</b><span class="sev-pills"><i>9</i><i>793</i><i>0</i></span><span class="status-icons">◉ 5　◎ 797　⊙ 0　▣ 0　⌕ 0　⊗ 0　✓ 0　△ 0　ⓘ 0</span></div></article><article class="ai-card pending"><h3>Alerts Pending Action（待處理警示） <small>（過去 30 天） ⓘ</small></h3><div class="pending-donut cyber-pending"><div><strong>9.6k</strong><small>警示總數</small></div><p>● 未檢視　9.6k<br><br><span>● 已檢視　57</span></p></div><div class="pending-table"><header>狀態　　　　　　　總計　　　　　　　嚴重性</header>${[['未檢視','9.6k','175　9.4k　0'],['已檢視','57','10　47　0'],['已確認','0','0　0　0'],['檢視中','0','0　0　0'],['修補進行中','0','0　0　0']].map(x=>`<p><span>${x[0]}</span><b>${x[1]}</b><em>${x[2]}</em></p>`).join('')}</div></article>`;
 bindAlertTabs();
}
function renderBrand(){
 setAlertsHeader();
 grid.className='alerts-insights-page';
 sessionStorage.setItem('cybleAlertsTab','brand');
 const brandServices=[['Malicious Ads（惡意廣告）','低','0'],['Mobile Apps（行動應用程式）','高','3'],['Suspicious Domains（可疑網域）','中等','1.7k'],['Phishing Monitoring（網路釣魚監控）','高','136'],['Social Media Monitoring（社群媒體監控）','高','186'],['Defacement URL（竄改網址）','低','0'],['Defacement Content（竄改內容）','低','0'],['Defacement Keyword（竄改關鍵字）','低','0']];
 grid.innerHTML=`<div class="ai-tabs"><span>攻擊面</span><span>暗網與深網</span><span>網路犯罪論壇</span><b>品牌情報</b><span>高階管理監控</span><span>資料外洩</span><span>漏洞情報</span><span>外部威脅態勢</span></div><section class="attack-summary brand-summary"><div class="gauge"><img class="attack-gauge-image" src="assets/attack-surface-gauge.png" alt="品牌情報風險儀表：高"></div><div class="service-table"><header><span>服務</span><span>風險</span><span>警示</span></header>${brandServices.map(x=>`<p><span>${x[0]}</span><em class="${x[1]==='高'?'high':x[1]==='中等'?'med':'low'}">● ${x[1]}</em><b>${x[2]}</b></p>`).join('')}</div><div class="total-alerts"><h3>警示總數： <i>2.0k</i></h3>${[['已檢視','50'],['未檢視','1.9k'],['已確認','2'],['檢視中','1'],['修補進行中','0'],['不需修補','0'],['已解決','0'],['誤判','0'],['資訊','0']].map(x=>`<p><span>${x[0]}</span><b>${x[1]}</b></p>`).join('')}</div></section><div class="ai-mid"><article class="ai-card tag-cloud brand-tag"><h3>AI Filtered Tags Cloud（AI 篩選標籤雲） <small>▥ Bar Chart（長條圖）　 <b>☁ Tag Cloud（標籤雲）</b></small></h3><div class="tag-words"><strong>LOGO</strong><span>EXEC PROFILE（高階主管檔案）</span><span>Recruitment（招募）</span><span>Cryptocurrency Exposure（加密貨幣曝險）</span><span>Negative Sentiment（負面情緒）</span><span>Chinese（中文）</span><span>Fraud and Scam（詐欺與詐騙）</span><span>PII Exposure（個資曝險）</span><span>Compliance and Regulatory（法遵與監管）</span><span>Data Leak（資料外洩）</span><span>Positive Brand Mention（正面品牌提及）</span><span>Credential Exposure（憑證曝險）</span><span>ESG and Regulatory Criticism（ESG 與監管批評）</span><span>Cybersecurity Discussions（資安討論）</span><span>Sponsored Ads（贊助廣告）</span><span>Possible Hiring Scam（可能的招募詐騙）</span><span>Complaint（投訴）</span></div></article><article class="ai-card"><h3>Severity Distribution（嚴重性分布）</h3><div class="sev-legend"><span>● 高</span><span>● 中等</span><span>● 低</span></div><div class="dark-severity"><p><span>Suspicious Domains（可疑網域）</span><i><u style="width:100%"></u></i><strong>1.7k</strong></p><p><span>Social Media Monitoring（社群媒體監控）</span><i><b style="width:44%"></b><em style="width:13%"></em><u style="width:43%"></u></i><strong>186</strong></p><p><span>Phishing Monitoring（網路釣魚監控）</span><i><b style="width:3%"></b><em style="width:97%"></em></i><strong>136</strong></p><p><span>Mobile Apps（行動應用程式）</span><i><b style="width:34%"></b><em style="width:66%"></em></i><strong>3</strong></p></div></article></div><article class="ai-card assignee"><h3>Assignee Wise Alert Distribution（依負責人分類的警示分布）</h3><header><span>負責人</span><span>警示</span><span>嚴重性</span><span>狀態</span></header><div><strong>未指派</strong><b>2.0k</b><span class="sev-pills"><i>87</i><i>164</i><i>1.8k</i></span><span class="status-icons">◉ 50　◎ 1.9k　⊙ 2　▣ 1　⌕ 0　⊗ 0　✓ 0　△ 0　ⓘ 0</span></div></article><article class="ai-card pending"><h3>Alerts Pending Action（待處理警示） <small>（過去 30 天） ⓘ</small></h3><div class="pending-donut cyber-pending"><div><strong>9.6k</strong><small>警示總數</small></div><p>● 未檢視　9.6k<br><br><span>● 已檢視　57</span></p></div><div class="pending-table"><header>狀態　　　　　　　總計　　　　　　　嚴重性</header>${[['未檢視','9.6k','175　9.4k　0'],['已檢視','57','10　47　0'],['已確認','0','0　0　0'],['檢視中','0','0　0　0'],['修補進行中','0','0　0　0']].map(x=>`<p><span>${x[0]}</span><b>${x[1]}</b><em>${x[2]}</em></p>`).join('')}</div></article>`;
 bindAlertTabs();
}
function bindAlertTabs(){
 const tabs=grid.querySelectorAll('.ai-tabs>*');
 const go=(name,fn)=>()=>{const u=new URL(location.href);u.search='';u.hash='';u.searchParams.set('page','alerts');u.searchParams.set('tab',name);history.replaceState({page:'alerts',tab:name},'',u);fn()};
 if(tabs[0]) tabs[0].onclick=go('attack',renderAlerts);
 if(tabs[1]) tabs[1].onclick=go('darkweb',renderDarkweb);
 if(tabs[2]) tabs[2].onclick=go('cybercrime',renderCybercrime);
 if(tabs[3]) tabs[3].onclick=go('brand',renderBrand);
}
function restoreAlertTab(){
 const q=new URLSearchParams(location.search); const tab=q.get('page')==='alerts'?(q.get('tab')||'attack'):'attack';
 if(tab==='darkweb') return renderDarkweb();
 if(tab==='cybercrime') return renderCybercrime();
 if(tab==='brand') return renderBrand();
 return renderAlerts();
}
// Re-apply the SVG status icons after every tab render. The alert page HTML is
// replaced on each render, so a one-time DOMContentLoaded pass is not enough.
function refreshAlertDecorations(){
 const colors=['#438cf3','#ffbd00','#ef4040','#ff7900','#a947f5','#28cf72','#24d47a','#7f8794','#438cf3'];
 const kinds=['eye','dot','check','clipboard','wrench','x','done','warn','info'];
 const labels=['已檢視','未檢視','已確認','檢視中','修補進行中','不需修補','已解決','誤判','資訊'];
 const paths={eye:'<path d="M2 8s4-5 8-5 8 5 8 5-4 5-8 5-8-5-8-5Z"/><circle cx="10" cy="8" r="2"/>',dot:'<circle cx="10" cy="8" r="5"/><circle cx="10" cy="8" r="1" fill="currentColor"/>',check:'<circle cx="10" cy="8" r="5"/><path d="m7.5 8 1.7 1.7 3.5-4"/>',clipboard:'<rect x="5" y="3" width="10" height="11" rx="1"/><path d="M8 3V1h4v2M8 6h4M8 9h4"/>',wrench:'<path d="M13 2a4 4 0 0 0-4 5L2 14l2 2 7-7a4 4 0 0 0 5-4l-3 2-2-2Z"/>',x:'<circle cx="10" cy="8" r="5"/><path d="m8 6 4 4m0-4-4 4"/>',done:'<path d="m3 8 3 3 6-7m-2 7 2 2 5-7"/>',warn:'<path d="M10 2 17 14H3Z"/><path d="M10 6v3m0 2v1"/>',info:'<circle cx="10" cy="8" r="5"/><path d="M10 7v4m0-6h.01"/>'};
 const icon=(kind,color)=>`<svg class="status-svg" viewBox="0 0 20 16" style="color:${color}">${paths[kind]}</svg>`;
 grid.querySelectorAll('.total-alerts p').forEach((p,i)=>{const s=p.querySelector('span');if(s&&labels[i])s.innerHTML=icon(kinds[i],colors[i])+labels[i]});
}
const rawRenderAlerts=renderAlerts,rawRenderDarkweb=renderDarkweb,rawRenderCybercrime=renderCybercrime,rawRenderBrand=renderBrand;
renderAlerts=function(){rawRenderAlerts();refreshAlertDecorations()};
renderDarkweb=function(){rawRenderDarkweb();refreshAlertDecorations()};
renderCybercrime=function(){rawRenderCybercrime();refreshAlertDecorations()};
renderBrand=function(){rawRenderBrand();refreshAlertDecorations()};
if(new URLSearchParams(location.search).get('page')==='alerts'||location.hash==='#alerts') restoreAlertTab();
window.addEventListener('cyble:route',e=>{if(e.detail&&e.detail.page==='alerts')restoreAlertTab()});
})();

// Replace placeholder glyphs with consistent Cyble-style status icons.
(function(){
 const colors=['#438cf3','#ffbd00','#ef4040','#ff7900','#a947f5','#28cf72','#24d47a','#7f8794','#438cf3'];
 const kinds=['eye','dot','check','clipboard','wrench','x','done','warn','info'];
 function icon(kind,color){const paths={eye:'<path d="M2 8s4-5 8-5 8 5 8 5-4 5-8 5-8-5-8-5Z"/><circle cx="10" cy="8" r="2"/>',dot:'<circle cx="10" cy="8" r="5"/><circle cx="10" cy="8" r="1" fill="currentColor"/>',check:'<circle cx="10" cy="8" r="5"/><path d="m7.5 8 1.7 1.7 3.5-4"/>',clipboard:'<rect x="5" y="3" width="10" height="11" rx="1"/><path d="M8 3V1h4v2M8 6h4M8 9h4"/>',wrench:'<path d="M13 2a4 4 0 0 0-4 5L2 14l2 2 7-7a4 4 0 0 0 5-4l-3 2-2-2Z"/>',x:'<circle cx="10" cy="8" r="5"/><path d="m8 6 4 4m0-4-4 4"/>',done:'<path d="m3 8 3 3 6-7m-2 7 2 2 5-7"/>',warn:'<path d="M10 2 17 14H3Z"/><path d="M10 6v3m0 2v1"/>',info:'<circle cx="10" cy="8" r="5"/><path d="M10 7v4m0-6h.01"/>'};return `<svg class="status-svg" viewBox="0 0 20 16" style="color:${color}">${paths[kind]}</svg>`}
 document.querySelectorAll('.total-alerts p').forEach((p,i)=>{const s=p.querySelector('span');if(s)s.innerHTML=icon(kinds[i],colors[i])+s.textContent.replace(/^\S+\s*/,'')});
 const si=document.querySelector('.status-icons');if(si)si.innerHTML=[['eye',0,'#438cf3'],['dot',1,'#ffbd00'],['check',0,'#ef4040'],['clipboard',0,'#ff7900'],['wrench',0,'#a947f5'],['x',0,'#28cf72'],['done',0,'#24d47a']].map(x=>icon(x[0],x[2])+' '+x[1]).join('<span class="status-gap"></span>');
})();

// Precise Attack Surface semicircular gauge (SVG), matching the reference proportions.
(function(){
 const g=document.querySelector('.gauge');
 if(!g || g.querySelector('.attack-gauge-image'))return;
 g.innerHTML=`<svg class="attack-gauge-svg" viewBox="0 0 420 300" aria-label="攻擊面風險：中等">
 <path class="seg green" d="M70 235 A150 150 0 0 1 70 85"/>
 <path class="seg yellow" d="M78 77 A150 150 0 0 1 218 35"/>
 <path class="seg pink" d="M230 35 A150 150 0 0 1 335 78"/>
 <path class="seg red" d="M343 87 A150 150 0 0 1 370 235"/>
 <g class="ticks"><line x1="70" y1="235" x2="88" y2="217"/><line x1="70" y1="85" x2="91" y2="96"/><line x1="220" y1="35" x2="220" y2="61"/><line x1="337" y1="79" x2="319" y2="98"/><line x1="370" y1="235" x2="351" y2="216"/></g>
 <line class="needle" x1="220" y1="185" x2="170" y2="112"/><circle class="hub-outer" cx="220" cy="185" r="17"/><circle class="hub-inner" cx="220" cy="185" r="7"/>
 <text class="risk-text" x="220" y="230" text-anchor="middle">中等</text><text class="zero" x="62" y="260">0</text><text class="hundred" x="350" y="260">100</text>
 </svg>`;
})();

// Apply status SVG icons after Alerts Insights is rendered (the page is injected dynamically).
(function(){
 const colors=['#438cf3','#ffbd00','#ef4040','#ff7900','#a947f5','#28cf72','#24d47a','#7f8794','#438cf3'];
 const kinds=['eye','dot','check','clipboard','wrench','x','done','warn','info'];
 const labels=['已檢視','未檢視','已確認','檢視中','修補進行中','不需修補','已解決','誤判','資訊'];
 function icon(kind,color){const paths={eye:'<path d="M2 8s4-5 8-5 8 5 8 5-4 5-8 5-8-5-8-5Z"/><circle cx="10" cy="8" r="2"/>',dot:'<circle cx="10" cy="8" r="5"/><circle cx="10" cy="8" r="1" fill="currentColor"/>',check:'<circle cx="10" cy="8" r="5"/><path d="m7.5 8 1.7 1.7 3.5-4"/>',clipboard:'<rect x="5" y="3" width="10" height="11" rx="1"/><path d="M8 3V1h4v2M8 6h4M8 9h4"/>',wrench:'<path d="M13 2a4 4 0 0 0-4 5L2 14l2 2 7-7a4 4 0 0 0 5-4l-3 2-2-2Z"/>',x:'<circle cx="10" cy="8" r="5"/><path d="m8 6 4 4m0-4-4 4"/>',done:'<path d="m3 8 3 3 6-7m-2 7 2 2 5-7"/>',warn:'<path d="M10 2 17 14H3Z"/><path d="M10 6v3m0 2v1"/>',info:'<circle cx="10" cy="8" r="5"/><path d="M10 7v4m0-6h.01"/>'};return `<svg class="status-svg" viewBox="0 0 20 16" style="color:${color}">${paths[kind]}</svg>`}
 function apply(){
  document.querySelectorAll('.total-alerts p').forEach((p,i)=>{const s=p.querySelector('span');if(s&&labels[i])s.innerHTML=icon(kinds[i],colors[i])+labels[i]});
  const si=document.querySelector('.status-icons');if(si)si.innerHTML=[['eye',0,'#438cf3'],['dot',1,'#ffbd00'],['check',0,'#ef4040'],['clipboard',0,'#ff7900'],['wrench',0,'#a947f5'],['x',0,'#28cf72'],['done',0,'#24d47a']].map(x=>icon(x[0],x[2])+' '+x[1]).join('<span class="status-gap"></span>');
  const g=document.querySelector('.gauge');if(g&&!g.querySelector('.attack-gauge-image')&&!g.querySelector('.attack-gauge-svg')){g.innerHTML=`<svg class="attack-gauge-svg" viewBox="0 0 420 300"><path class="seg green" d="M70 235 A150 150 0 0 1 70 85"/><path class="seg yellow" d="M78 77 A150 150 0 0 1 218 35"/><path class="seg pink" d="M230 35 A150 150 0 0 1 335 78"/><path class="seg red" d="M343 87 A150 150 0 0 1 370 235"/><g class="ticks"><line x1="70" y1="235" x2="88" y2="217"/><line x1="70" y1="85" x2="91" y2="96"/><line x1="220" y1="35" x2="220" y2="61"/><line x1="337" y1="79" x2="319" y2="98"/><line x1="370" y1="235" x2="351" y2="216"/></g><line class="needle" x1="220" y1="185" x2="170" y2="112"/><circle class="hub-outer" cx="220" cy="185" r="17"/><circle class="hub-inner" cx="220" cy="185" r="7"/><text class="risk-text" x="220" y="230" text-anchor="middle">中等</text><text class="zero" x="62" y="260">0</text><text class="hundred" x="350" y="260">100</text></svg>`}
 }
 document.querySelectorAll('.dash-menu a[data-page="alerts"]').forEach(a=>a.addEventListener('click',()=>setTimeout(apply,20)));

})();

// Ensure Alerts Insights renders reliably after navigation and direct refresh.
(function(){
 function boot(){
  const link=document.querySelector('.dash-menu a[data-page="alerts"]');
  if(!link)return;
  link.addEventListener('click',function(){
   setTimeout(function(){
    const sub=document.querySelector('#subpage');
    if(!sub || sub.hidden)return;
    // Re-dispatch a dedicated event consumed below after nav-pages has opened the shell.
    document.dispatchEvent(new CustomEvent('cyble:alerts-open'));
   },0);
  });
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();

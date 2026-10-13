const pageData={
 alerts:['警示洞察','集中檢視與追蹤各類資安警示。',[['未檢視警示','174.5k','待分類與確認的警示'],['高嚴重性','1.8k','需要優先處理'],['檢視中','3','目前正在調查']]],
 operational:['營運洞察','掌握日常資安營運與處理效率。',[['待處理事項','24','跨模組待處理工作'],['平均處理時間','18 小時','近 7 天平均'],['服務狀態','正常','主要模組運作中']]],
 advisories:['Cyble 安全公告','彙整最新漏洞、安全公告與威脅研究。',[['最新公告','4','過去 24 小時'],['高嚴重性','4','需優先關注'],['涵蓋產業','BFSI','銀行、金融服務與保險']]],
 newsflash:['Cyble 快訊','快速掌握暗網、資料外洩與地下犯罪活動。',[['最新快訊','4','近期偵測事件'],['資料外洩','3','疑似資料遭公開兜售'],['地下市場','1','帳號交易活動']]],
 newsfeed:['資安新聞','追蹤全球最新網路安全新聞與事件。',[['最新新聞','5','全球來源彙整'],['更新頻率','即時','持續彙整'],['關注主題','資安','事件、漏洞與政策']]],
 mssp:['MSSP 洞察','以託管安全服務視角查看客戶與風險概況。',[['受管組織','24','目前納管組織'],['A 級','20','低曝險組織'],['B 級','4','中度曝險組織']]]
};
const executive=document.querySelector('#executivePage'),sub=document.querySelector('#subpage');
function openPage(key){document.querySelectorAll('.dash-menu a').forEach(a=>a.classList.toggle('active',a.dataset.page===key));if(key==='executive'){executive.hidden=false;sub.hidden=true;return}if(['alerts-management','darkweb','cybercrime-monitoring','compromised-cards','compromised-files','data-leaks','threat-actor-library','malware-families','ioc-lookup','sensor-intelligence','botshield','ransomware-extortion','threat-lens','threat-detection-rules','hacktivism','attack-surface-dashboard','asset-inventory','issue-catalog','issue-detail','ssl-tls','signatures','signature-detail','on-demand-scan','cloud-connectors','malicious-domains','social-media-monitoring','watchlisted-domains','website-monitoring','website-watermarking','takedown-tracker','mobile-application-monitoring','executive-monitoring'].includes(key)){executive.hidden=true;sub.hidden=false;return}const d=pageData[key];if(!d)return;executive.hidden=true;sub.hidden=false;if(key==='alerts'||key==='operational'||key==='advisories'||key==='newsflash'||key==='newsfeed'||key==='mssp'){return}sub.querySelector('h1').textContent=d[0];sub.querySelector('.subpage-head p').textContent=d[1];sub.querySelector('.subpage-grid').className='subpage-grid';sub.querySelector('.subpage-grid').innerHTML=d[2].map(x=>`<article class="subpage-card"><h3>${x[0]}</h3><strong>${x[1]}</strong><p>${x[2]}</p></article>`).join('')}


function syncPrimaryNavActive(page){
 const dashboardPages=new Set(['executive','alerts','operational','advisories','newsflash','newsfeed','mssp']);
 const group=['attack-surface-dashboard','asset-inventory','issue-catalog','issue-detail','ssl-tls','signatures','signature-detail','on-demand-scan','cloud-connectors'].includes(page)?'attack-surface':dashboardPages.has(page)?'dashboard':page==='alerts-management'?'alerts':page==='data-leaks'?'data-leaks':['malicious-domains','social-media-monitoring','watchlisted-domains','website-monitoring','website-watermarking','takedown-tracker','mobile-application-monitoring'].includes(page)?'brand-intelligence':page==='executive-monitoring'?'executive-monitoring':['threat-actor-library','malware-families','ioc-lookup','sensor-intelligence','botshield','ransomware-extortion','threat-lens','threat-detection-rules','hacktivism'].includes(page)?'threat-intelligence':(['darkweb','cybercrime-monitoring','compromised-cards','compromised-files'].includes(page)?'darkweb':null);
 document.querySelectorAll('.rail-icons [data-nav-group]').forEach(b=>b.classList.toggle('on',!!group&&b.dataset.navGroup===group));
}

function syncExecutiveFlyoutActive(page,tab){document.querySelectorAll('.executive-flyout [data-execpage]').forEach(b=>b.classList.toggle('active',page==='executive-monitoring'&&b.dataset.execpage===(tab||'overview')));}
function syncBrandFlyoutActive(page){document.querySelectorAll('.brand-flyout [data-brandpage]').forEach(b=>b.classList.toggle('active',b.dataset.brandpage===page));}
function syncAttackFlyoutActive(page){const target=page==='issue-detail'?'issue-catalog':page;document.querySelectorAll('.asm-flyout [data-attackpage]').forEach(b=>b.classList.toggle('active',b.dataset.attackpage===target));}
function syncThreatFlyoutActive(page){document.querySelectorAll('.threat-flyout [data-threatpage]').forEach(b=>b.classList.toggle('active',b.dataset.threatpage===page));}
function syncDarkwebFlyoutActive(page){document.querySelectorAll('.darkweb-flyout [data-darkpage]').forEach(b=>b.classList.toggle('active',b.dataset.darkpage===page));}
function routeTo(page,tab,replace=true){
 const url=new URL(location.href); url.search=''; url.hash='';
 url.searchParams.set('page',page);
 // Entering a dashboard page without an explicit tab always means that
 // page's first tab. Do not inherit the tab from another page/session.
 const defaultTabs={executive:'overview',alerts:'attack',operational:'overview'};
 const resolvedTab=tab||defaultTabs[page]||null;
 if(resolvedTab) url.searchParams.set('tab',resolvedTab);
 history[replace?'replaceState':'pushState']({page,tab:resolvedTab},'',url);
 openPage(page);
 syncPrimaryNavActive(page);
 syncThreatFlyoutActive(page);
 syncDarkwebFlyoutActive(page);
 syncAttackFlyoutActive(page);
 syncBrandFlyoutActive(page);
 syncExecutiveFlyoutActive(page,resolvedTab);
 window.dispatchEvent(new CustomEvent('cyble:route',{detail:{page,tab:resolvedTab}}));
}
document.querySelectorAll('.dash-menu a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();routeTo(a.dataset.page,null)}));
const initialParams=new URLSearchParams(location.search);
const legacyHash=location.hash.slice(1);
const initialPage=initialParams.get('page')||(pageData[legacyHash]||legacyHash==='executive'?legacyHash:'executive')||'executive';
openPage(initialPage);
syncPrimaryNavActive(initialPage);
syncThreatFlyoutActive(initialPage);
syncDarkwebFlyoutActive(initialPage);
syncAttackFlyoutActive(initialPage);
syncBrandFlyoutActive(initialPage);
syncExecutiveFlyoutActive(initialPage,initialParams.get('tab'));
if(!initialParams.get('page')) routeTo(initialPage,initialParams.get('tab'));

window.addEventListener('cyble:route',e=>{if((e.detail?.page||new URLSearchParams(location.search).get('page'))==='malicious-domains') window.renderMaliciousDomains?.();});
if(new URLSearchParams(location.search).get('page')==='malicious-domains') setTimeout(()=>window.renderMaliciousDomains?.(),0);

window.addEventListener('cyble:route',e=>{const p=e.detail?.page||new URLSearchParams(location.search).get('page');if(p==='malicious-domains'){document.querySelectorAll('.nav-icon').forEach(x=>x.classList.remove('active'));document.querySelector('[data-nav-group="brand-intelligence"]')?.classList.add('active');}});

window.addEventListener('cyble:route',e=>{if((e.detail?.page||new URLSearchParams(location.search).get('page'))==='social-media-monitoring') window.renderSocialMediaMonitoring?.();});
if(new URLSearchParams(location.search).get('page')==='social-media-monitoring') setTimeout(()=>window.renderSocialMediaMonitoring?.(),0);

window.addEventListener('cyble:route',e=>{if((e.detail?.page||new URLSearchParams(location.search).get('page'))==='watchlisted-domains') window.renderWatchlistedDomains?.();});
if(new URLSearchParams(location.search).get('page')==='watchlisted-domains') setTimeout(()=>window.renderWatchlistedDomains?.(),0);

window.addEventListener('cyble:route',e=>{if((e.detail?.page||new URLSearchParams(location.search).get('page'))==='takedown-tracker') window.renderTakedownTracker?.();});
if(new URLSearchParams(location.search).get('page')==='takedown-tracker') setTimeout(()=>window.renderTakedownTracker?.(),0);

window.addEventListener('cyble:route',e=>{if((e.detail?.page||new URLSearchParams(location.search).get('page'))==='mobile-application-monitoring') window.renderMobileApplicationMonitoring?.();});
if(new URLSearchParams(location.search).get('page')==='mobile-application-monitoring') setTimeout(()=>window.renderMobileApplicationMonitoring?.(),0);

window.addEventListener('cyble:route',e=>{if((e.detail?.page||new URLSearchParams(location.search).get('page'))==='executive-monitoring') window.renderExecutiveMonitoring?.();});
if(new URLSearchParams(location.search).get('page')==='executive-monitoring') setTimeout(()=>window.renderExecutiveMonitoring?.(),0);

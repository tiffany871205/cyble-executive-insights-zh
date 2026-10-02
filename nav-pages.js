const pageData={
 alerts:['警示洞察','集中檢視與追蹤各類資安警示。',[['未檢視警示','174.5k','待分類與確認的警示'],['高嚴重性','1.8k','需要優先處理'],['檢視中','3','目前正在調查']]],
 operational:['營運洞察','掌握日常資安營運與處理效率。',[['待處理事項','24','跨模組待處理工作'],['平均處理時間','18 小時','近 7 天平均'],['服務狀態','正常','主要模組運作中']]],
 advisories:['Cyble 安全公告','彙整最新漏洞、安全公告與威脅研究。',[['最新公告','4','過去 24 小時'],['高嚴重性','4','需優先關注'],['涵蓋產業','BFSI','銀行、金融服務與保險']]],
 newsflash:['Cyble 快訊','快速掌握暗網、資料外洩與地下犯罪活動。',[['最新快訊','4','近期偵測事件'],['資料外洩','3','疑似資料遭公開兜售'],['地下市場','1','帳號交易活動']]],
 newsfeed:['資安新聞','追蹤全球最新網路安全新聞與事件。',[['最新新聞','5','全球來源彙整'],['更新頻率','即時','持續彙整'],['關注主題','資安','事件、漏洞與政策']]],
 mssp:['MSSP 洞察','以託管安全服務視角查看客戶與風險概況。',[['受管組織','24','目前納管組織'],['A 級','20','低曝險組織'],['B 級','4','中度曝險組織']]]
};
const executive=document.querySelector('#executivePage'),sub=document.querySelector('#subpage');
function openPage(key){document.querySelectorAll('.dash-menu a').forEach(a=>a.classList.toggle('active',a.dataset.page===key));if(key==='executive'){executive.hidden=false;sub.hidden=true;return}const d=pageData[key];if(!d)return;executive.hidden=true;sub.hidden=false;if(key==='alerts'||key==='operational'||key==='advisories'){return}sub.querySelector('h1').textContent=d[0];sub.querySelector('.subpage-head p').textContent=d[1];sub.querySelector('.subpage-grid').className='subpage-grid';sub.querySelector('.subpage-grid').innerHTML=d[2].map(x=>`<article class="subpage-card"><h3>${x[0]}</h3><strong>${x[1]}</strong><p>${x[2]}</p></article>`).join('')}
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
 window.dispatchEvent(new CustomEvent('cyble:route',{detail:{page,tab:resolvedTab}}));
}
document.querySelectorAll('.dash-menu a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();routeTo(a.dataset.page,null)}));
const initialParams=new URLSearchParams(location.search);
const legacyHash=location.hash.slice(1);
const initialPage=initialParams.get('page')||(pageData[legacyHash]||legacyHash==='executive'?legacyHash:'executive')||'executive';
openPage(initialPage);
if(!initialParams.get('page')) routeTo(initialPage,initialParams.get('tab'));

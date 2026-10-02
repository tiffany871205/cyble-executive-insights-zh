(()=>{const sub=document.querySelector('#subpage');if(!sub)return;
const filterData={
 'Threat Actors（威脅行為者）':['Anonymous Nepal','Bangladesh Civilian Force','Stealth Mango and Tangelo','05716nnm (NoName057(16))','0APT','Oktapus (Scattered Spider)'],
 'Malware Families（惡意程式家族）':['Brow99','Immortal Stealer','Unidentified 119','X-Files Stealer','000Stealer','01flip'],
 'Categories（類別）':['APT','Cybercriminal Group（網路犯罪集團）','Extortion Group（勒索集團）','Hacktivist Group（駭客行動團體）','Ransomware Group（勒索軟體集團）','Uncategorized（未分類）'],
 'Target Industries（目標產業）':['Aerospace & Defense（航太與國防）','Agriculture & Livestock（農業與畜牧）','Automotive（汽車）','BFSI（銀行、金融服務與保險）','Chemicals（化工）','Construction（營建）'],
 'Target Countries（目標國家）':['Afghanistan（阿富汗）','Åland Islands（奧蘭群島）','Albania（阿爾巴尼亞）','Algeria（阿爾及利亞）','American Samoa（美屬薩摩亞）','Andorra（安道爾）'],
 'Target Regions（目標區域）':['Asia & Pacific (APAC)（亞太）','Australia and New Zealand (ANZ)（澳洲與紐西蘭）','Europe & UK（歐洲與英國）','Middle East & Africa (MEA)（中東與非洲）','North America (NA)（北美）','South America (SA)（南美）'],
 'State Sponsored（國家支持）':['Yes（是）','No（否）']
};
const actors=[
['NightCipher','Ransomware Group（勒索軟體集團）','','','58','26','0','1','02 Oct 2026'],
['Silver Kairos','Ransomware Group（勒索軟體集團）','','','8','9','0','0','02 Oct 2026'],
['Booba Shadow','Ransomware Group（勒索軟體集團）','','','9','13','0','0','01 Oct 2026'],
['Iron Ransom','Ransomware Group（勒索軟體集團）','APT','','69','24','1','7','01 Oct 2026'],
['Eclipse Nova','Ransomware Group（勒索軟體集團）','Hacktivist Group（駭客行動團體）','🇪🇪 Estonia（愛沙尼亞） · Europe & UK（歐洲與英國）','11','12','4','0','01 Oct 2026'],
['313 Spectre','Hacktivist Group（駭客行動團體）','','🇯🇴 Jordan（約旦） · Middle East & Africa (MEA)（中東與非洲）','5','8','0','0','01 Oct 2026'],
['Anubis Echo','Ransomware Group（勒索軟體集團）','','','21','19','3','1','30 Sep 2026'],
['Bengal Civil Force','Hacktivist Group（駭客行動團體）','','🇧🇩 Bangladesh（孟加拉） · Asia & Pacific (APAC)（亞太）','3','5','2','0','30 Sep 2026'],
['BERT-X','Ransomware Group（勒索軟體集團）','','','7','8','1','1','29 Sep 2026']
];
function filterMarkup(){return Object.entries(filterData).map(([k,vals])=>`<div class="tal-filter"><button class="tal-filter-btn">${k}⌄</button><div class="tal-menu"><label>⌕ <input placeholder="Search...（搜尋）"></label>${vals.map(v=>`<button class="tal-option"><i></i>${v}</button>`).join('')}</div></div>`).join('')}
function render(){const grid=sub.querySelector('.subpage-grid, .threat-actor-library-page, .data-leaks-page');if(!grid)return;sub.querySelector('.subpage-head').innerHTML='';grid.className='subpage-grid threat-actor-library-page';grid.innerHTML=`<div class="tal-head"><h1>Threat Actor Library（威脅行為者資料庫） <span class="tal-help" tabindex="0">?<span class="tal-help-pop">Threat Actor Library provides a centralized view of known threat actors, their malware, targeting patterns, industries, countries, and regions.<b>Threat Actor Library（威脅行為者資料庫）集中呈現已知威脅行為者、其使用的惡意程式、攻擊目標模式，以及相關產業、國家與區域資訊。</b><a href="#">↗ Visit Help Center（前往說明中心）</a></span></span></h1><div class="tal-top-tools"><label>⌕ <input placeholder="Search threat actors...（搜尋威脅行為者）"></label><button>▣ Select Duration（選擇期間）⌄</button><button>☷</button><button>↻</button></div></div><div class="tal-filters">${filterMarkup()}<span>Total Count（總數）：<b>1,524</b></span></div><section class="tal-grid">${actors.map((a,i)=>`<article class="tal-card"><div class="tal-card-top"><i class="tal-avatar ${a[1].startsWith('Hack')?'hack':''}">☠</i><div><h2>${a[0]}</h2>${a[3]?`<p>${a[3]}</p>`:''}<div class="tal-tags"><b>${a[1]}</b>${a[2]?`<em>${a[2]}</em>`:''}</div></div></div><div class="tal-metrics"><span>♙ ${a[4]}</span><span>♜ ${a[5]}</span><span>▣ ${a[6]}</span><span>☼ ${a[7]}</span></div><footer>Last Seen（最後出現）：${a[8]}</footer></article>`).join('')}</section>`;
bind();}
function bind(){const filters=[...document.querySelectorAll('.tal-filter')];filters.forEach(f=>{const btn=f.querySelector('.tal-filter-btn'),menu=f.querySelector('.tal-menu'),input=f.querySelector('input');btn.addEventListener('click',e=>{e.stopPropagation();filters.forEach(o=>o!==f&&o.classList.remove('open'));f.classList.toggle('open');if(f.classList.contains('open'))setTimeout(()=>input.focus(),0)});input.addEventListener('input',()=>{const q=input.value.toLowerCase();menu.querySelectorAll('.tal-option').forEach(o=>o.hidden=!o.textContent.toLowerCase().includes(q))});});document.addEventListener('click',e=>{if(!e.target.closest('.tal-filter'))filters.forEach(f=>f.classList.remove('open'))},{once:false});}
window.addEventListener('cyble:route',e=>{if(e.detail.page==='threat-actor-library')render()});if(new URLSearchParams(location.search).get('page')==='threat-actor-library')render();})();

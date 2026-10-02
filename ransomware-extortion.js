(()=>{const sub=document.querySelector('#subpage');if(!sub)return;
const filters={
 'Countries（國家）':['United States（美國）','Canada（加拿大）','United Kingdom（英國）','Germany（德國）','Italy（義大利）','India（印度）'],
 'Regions（區域）':['North America (NA)（北美）','Europe & UK（歐洲與英國）','Asia & Pacific (APAC)（亞太）','Middle East & Africa (MEA)（中東與非洲）'],
 'Threat Groups（威脅團體）':['SafePay Demo','Krybit Demo','Deadlock Demo','Barracuda Demo','INC Ransom Demo','Netrunner Demo'],
 'Industries（產業）':['Manufacturing（製造）','Real Estate（房地產）','Media & Entertainment（媒體與娛樂）','Construction（營建）','Energy & Utilities（能源與公用事業）','Healthcare（醫療）']
};
const victims=[
['KRES Demo s.r.o.','02 Oct 2026','kres-demo.example','SAFEPAY','Czech Republic（捷克）','Manufacturing（製造）'],
['Raajratna Demo Industries','02 Oct 2026','raajratna-demo.example','KRYBIT','India（印度）','Manufacturing（製造）'],
['PierreFeu Demo Immobilier','02 Oct 2026','pierrefeu-demo.example','KRYBIT','France（法國）','Real Estate（房地產）'],
['Sai Demo Trust','02 Oct 2026','sai-demo.example','KRYBIT','India（印度）','Media & Entertainment（媒體與娛樂）'],
['Far West Demo Contractors','02 Oct 2026','farwest-demo.example','DEADLOCK','United States（美國）','Construction（營建）'],
['ANETA Mobility Demo','02 Oct 2026','aneta-demo.example','BARRACUDA','Ecuador（厄瓜多）','Transportation & Logistics（運輸與物流）'],
['Sangre Demo Electric','02 Oct 2026','myelectric-demo.example','INC RANSOM','United States（美國）','Energy & Utilities（能源與公用事業）'],
['MainPlace Demo Mall','01 Oct 2026','mainplace-demo.example','NETRUNNER','United States（美國）','Real Estate（房地產）'],
['Euroditel Demo','01 Oct 2026','euroditel-demo.example','KRYBIT','France（法國）','IT & ITES（資訊科技服務）'],
['Hermilio Demo Hospital','01 Oct 2026','hospital-demo.example','RANSOMHOUSE','Peru（秘魯）','Healthcare（醫療）'],
['Northstar Foods','01 Oct 2026','northstar-foods.example','SAFEPAY','Canada（加拿大）','Food & Beverages（食品與飲料）'],
['Blue Harbor Logistics','30 Sep 2026','blueharbor.example','DEADLOCK','United Kingdom（英國）','Transportation & Logistics（運輸與物流）'],
['Aurora Industrial Labs','30 Sep 2026','aurora-labs.example','INC RANSOM','Germany（德國）','Manufacturing（製造）'],
['Summit Care Network','30 Sep 2026','summit-care.example','BARRACUDA','United States（美國）','Healthcare（醫療）'],
['Atlas Property Group','29 Sep 2026','atlas-property.example','NETRUNNER','Italy（義大利）','Real Estate（房地產）'],
['Cedar Manufacturing','29 Sep 2026','cedar-mfg.example','KRYBIT','United States（美國）','Manufacturing（製造）'],
['Metro Arts Collective','29 Sep 2026','metro-arts.example','SAFEPAY','France（法國）','Media & Entertainment（媒體與娛樂）'],
['Vantage Build Co.','28 Sep 2026','vantage-build.example','DEADLOCK','Canada（加拿大）','Construction（營建）'],
['HelioGrid Energy','28 Sep 2026','heliogrid.example','INC RANSOM','Germany（德國）','Energy & Utilities（能源與公用事業）'],
['Riverstone Clinic','28 Sep 2026','riverstone-clinic.example','RANSOMHOUSE','United Kingdom（英國）','Healthcare（醫療）']
];
function dd(label,vals){return `<div class="re-filter"><button class="re-filter-btn">${label}⌄</button><div class="re-menu"><label>⌕ <input placeholder="Search...（搜尋）"></label>${vals.map(v=>`<button class="re-option"><i></i>${v}</button>`).join('')}</div></div>`}
function render(){const grid=sub.querySelector('.subpage-grid, .ransomware-extortion-page, .botshield-page');if(!grid)return;sub.querySelector('.subpage-head').innerHTML='';grid.className='subpage-grid ransomware-extortion-page';grid.innerHTML=`<div class="re-head"><div><h1>Ransomware & Extortion（勒索軟體與勒索活動） <span class="re-help" tabindex="0">?<span class="re-help-pop">Track threat group activity, victim impact, and attack patterns<b>追蹤威脅團體活動、受害者影響與攻擊模式。</b><a href="#">↗ Visit Help Center（前往說明中心）</a></span></span></h1><p>Track threat group activity, victim impact, and attack patterns（追蹤威脅團體活動、受害者影響與攻擊模式）</p></div><div class="re-tools"><label>⌕ <input placeholder="Search（搜尋）"></label><button>▣ Select Duration（選擇期間）⌄</button><button>▣ All Feed（全部來源）⌄</button><button>☷</button><button>↻</button><button>⋮</button></div></div><div class="re-filters">${dd('Countries（國家）',filters['Countries（國家）'])}${dd('Regions（區域）',filters['Regions（區域）'])}${dd('Threat Groups（威脅團體）',filters['Threat Groups（威脅團體）'])}${dd('Industries（產業）',filters['Industries（產業）'])}</div><section class="re-charts"><article><header>REGIONAL RANSOMWARE IMPACT（區域勒索影響） (TOP 5)<span>◎</span></header><div class="re-hbar">${[['United States（美國）',12840,100],['Canada（加拿大）',1412,10.9],['United Kingdom（英國）',1218,9.5],['Germany（德國）',1115,8.7],['Italy（義大利）',902,7]].map((x,i)=>`<div><span>${x[0]}</span><i style="width:${x[2]}%" class="c${i}"></i><b>${x[1]}</b></div>`).join('')}</div></article><article><header>THREAT GROUP DISTRIBUTION（威脅團體分布） (TOP 5)</header><div class="re-vbars">${[['SAFELOCK',2988,93],['Qilin Demo',2260,71],['Akira Demo',1688,53],['Play Demo',1315,41],['CLOP Demo',1198,37]].map((x,i)=>`<div><b>${x[1]}</b><i style="height:${x[2]}%" class="c${i}"></i><span>${x[0]}</span></div>`).join('')}</div></article></section><section class="re-table-shell"><div class="re-table-wrap"><table><thead><tr><th>VICTIM（受害者） ⇅</th><th>LAST ATTACKED ON（最近遭攻擊） ⇅</th><th>WEBSITE（網站）</th><th>THREAT GROUPS（威脅團體）</th><th>COUNTRY（國家） ⇅</th><th>INDUSTRY（產業）</th><th>MODERATION（審核）</th></tr></thead><tbody>${victims.map(v=>`<tr><td><strong>${v[0]}</strong></td><td>${v[1]}</td><td>${v[2]}</td><td><b class="re-pill">${v[3]}</b></td><td>${v[4]}</td><td>${v[5]}</td><td><b class="re-ai">✣ AI GENERATED（AI 生成）</b></td></tr>`).join('')}</tbody></table></div><footer><span>Showing（顯示） 1-20 of 25,418</span><div>«　‹　Go to（前往） <button>1</button> of 1,271　›　»</div><div>Rows per page（每頁列數） <button>20⌄</button></div></footer></section>`;bind();}
function bind(){const fs=[...document.querySelectorAll('.re-filter')];fs.forEach(f=>{const b=f.querySelector('.re-filter-btn'),m=f.querySelector('.re-menu'),inp=f.querySelector('input');b.addEventListener('click',e=>{e.stopPropagation();fs.forEach(o=>o!==f&&o.classList.remove('open'));f.classList.toggle('open')});inp.addEventListener('input',()=>{const q=inp.value.toLowerCase();m.querySelectorAll('.re-option').forEach(o=>o.hidden=!o.textContent.toLowerCase().includes(q))})});document.addEventListener('click',e=>{if(!e.target.closest('.re-filter'))fs.forEach(f=>f.classList.remove('open'))});}
window.addEventListener('cyble:route',e=>{if(e.detail.page==='ransomware-extortion')render()});if(new URLSearchParams(location.search).get('page')==='ransomware-extortion')render();})();

(()=>{
const groups=[
 {name:'News Flash',count:1,cards:[{bucket:'',freq:'REAL TIME',recipients:2,date:'02 Sep 2026',tags:[]}]},
 {name:'Hacktivism',count:1,cards:[{bucket:'Demo Security Watch',freq:'30 MINUTE',recipients:2,date:'30 Jul 2026',tags:['HIGH','MEDIUM','LOW','VIEWED','UNREVIEWED']}]},
 {name:'Mobile Apps',count:15,cards:[
  {bucket:'Northstar Bank',freq:'30 MINUTE',recipients:2,date:'12 Aug 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'MSSP - Demo SOC',freq:'30 MINUTE',recipients:2,date:'28 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'Dawn Securities',freq:'30 MINUTE',recipients:2,date:'17 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'Greenfield Bank',freq:'30 MINUTE',recipients:2,date:'06 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'BluePeak Insurance',freq:'30 MINUTE',recipients:2,date:'06 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'Aurora AMC',freq:'30 MINUTE',recipients:2,date:'06 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'Lumen Funds',freq:'30 MINUTE',recipients:2,date:'06 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'Orbit Bills',freq:'30 MINUTE',recipients:2,date:'06 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'Nova Securities',freq:'30 MINUTE',recipients:2,date:'06 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']}
 ]},
 {name:'Phishing Monitoring',count:15,cards:[
  {bucket:'Northstar Bank',freq:'30 MINUTE',recipients:2,date:'12 Aug 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'MSSP - Demo SOC',freq:'30 MINUTE',recipients:2,date:'28 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'Dawn Securities',freq:'30 MINUTE',recipients:2,date:'17 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'Greenfield Bank',freq:'30 MINUTE',recipients:2,date:'06 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'BluePeak Insurance',freq:'30 MINUTE',recipients:2,date:'06 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'Aurora AMC',freq:'30 MINUTE',recipients:2,date:'06 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'Lumen Funds',freq:'30 MINUTE',recipients:2,date:'06 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'Orbit Bills',freq:'30 MINUTE',recipients:2,date:'06 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']},
  {bucket:'Nova Securities',freq:'30 MINUTE',recipients:2,date:'06 Jul 2026',tags:['HIGH','MEDIUM','LOW','UNREVIEWED','VIEWED']}
 ]},
 {name:'Vulnerability Intelligence',count:1,cards:[{bucket:'',freq:'1 HOUR',recipients:2,date:'27 Apr 2026',tags:['V2≥0 · V3≥0 · V4≥0','Zero-Day: On']}]},
 {name:'Issues Catalog',count:2,cards:[
  {bucket:'Demo Life Association',freq:'30 MINUTE',recipients:4,date:'04 Jun 2026',tags:['CRITICAL','HIGH','UNREVIEWED','VIEWED']},
  {bucket:'Southstar Life',freq:'30 MINUTE',recipients:4,date:'04 Jun 2026',tags:['CRITICAL','HIGH','UNREVIEWED','VIEWED']}
 ]}
];
const statuses=['Unreviewed','Confirmed Incident','Under Review','False Positive','Viewed','Remediation In Progress','Remediation Not Required','Resolved','Informational'];
const types=['Alerts','Alert Details','Advisories','NewsFlash','Cyber Newsfeed','Physical Threats','Incident Management','Vulnerability Intelligence'];
function help(){return `<span class="ns-help">?<span class="ns-help-pop">Configure notification rules to control how and when you receive alerts for each service.<br><span>設定通知規則，以控制每項服務何時、透過何種方式接收警示。</span><a href="#">↗ Visit Help Center（前往說明中心）</a></span></span>`}
function tag(t){const cls=t==='HIGH'||t==='CRITICAL'?'high':t==='MEDIUM'?'medium':t==='LOW'?'low':t.includes('Zero-Day')?'zero':t.includes('V2')?'plain':'state';return `<span class="ns-tag ${cls}">${t}</span>`}
function card(c,menu=false){return `<article class="ns-card"><header><span>□</span><i>✉</i>${menu?'<button>⋮</button>':''}</header><hr>${c.bucket?`<div class="ns-bucket">Bucket: ${c.bucket}</div>`:''}<div class="ns-tags">${c.tags.map(tag).join('')}</div><p>♧ ${c.recipients} Recipients　 ◷ ${c.freq}</p><footer>▣ ${c.date}<em>● ACTIVE</em></footer></article>`}
function group(g,i){const open=i===0;return `<section class="ns-group ${open?'open':''}" data-group><header data-group-toggle><span>□</span><b>${g.name}</b><em>${g.count}</em><i>⌄</i></header><div class="ns-group-body"><div class="ns-card-grid">${g.cards.map((c,j)=>card(c,j===4)).join('')}</div></div></section>`}
function filterDetails(label,content,extra=''){return `<details class="ns-filter ${extra}"><summary>${label}　⌄</summary>${content||''}</details>`}
function statusesMenu(){return `<div class="ns-status-menu"><label>⌕ <input placeholder="Search...（搜尋）"></label>${statuses.map(s=>`<button>□　${s}</button>`).join('')}</div>`}
function modal(){return `<div class="ns-modal-host" hidden><div class="ns-modal-backdrop"></div><section class="ns-modal"><header><h2>Add Notification（新增通知）</h2><button data-close-modal>×</button></header><div class="ns-modal-body"><div class="ns-two"><label>TYPE <b>*</b>${filterDetails('Select type（選擇類型）',`<div class="ns-type-menu">${types.map(t=>`<button data-type-option>${t}</button>`).join('')}</div>`,'ns-type-select')}</label><label>FREQUENCY <b>*</b><button class="ns-field">Select frequency（選擇頻率）⌄</button></label></div><label>RECIPIENTS <b>*</b><button class="ns-field">Select recipients（選擇收件者）⌄</button></label><label>NOTIFICATION CHANNEL <b>*</b></label><div class="ns-channels"><div><span class="wa">◉</span><b>WhatsApp</b><label class="ns-switch"><input type="checkbox"><i></i></label></div><div><span class="mail">✉</span><b>Email</b><label class="ns-switch"><input type="checkbox" checked><i></i></label></div><div><span class="slack">✣</span><b>Slack</b><label class="ns-switch"><input type="checkbox"><i></i></label></div><div><span class="sms">▯</span><b>SMS</b><label class="ns-switch"><input type="checkbox"><i></i></label></div></div></div><footer><button data-close-modal>Cancel（取消）</button><button class="primary">Submit（送出）</button></footer></section></div>`}
function view(){return `<header class="ns-head"><div><h1>Notifications Settings（通知設定） ${help()}</h1><p>Manage your notification rules grouped by service（依服務管理通知規則）</p></div><div class="ns-top-actions"><button>▣ Select Duration（選擇期間）⌄</button><button>↻</button><button class="active">☷</button><button>Ⅱ</button><button>▷</button><button>⌫</button><button data-add-notification>＋</button></div></header><div class="ns-filterbar">${filterDetails('Keywords（關鍵字）','')}${filterDetails('Services（服務）','')}${filterDetails('Severities（嚴重度）','')}${filterDetails('Statuses（狀態）',statusesMenu(),'ns-status-filter')}</div><label class="ns-select-all">□　Select all（全選）</label><section class="ns-groups-scroll">${groups.map(group).join('')}</section>${modal()}`}
function wire(g){g.querySelectorAll('[data-group-toggle]').forEach(h=>h.onclick=()=>h.closest('[data-group]').classList.toggle('open'));const status=g.querySelector('.ns-status-filter');status?.querySelector('.ns-status-menu input')?.addEventListener('input',e=>{const q=e.target.value.toLowerCase();status.querySelectorAll('.ns-status-menu button').forEach(b=>b.hidden=!b.textContent.toLowerCase().includes(q))});const host=g.querySelector('.ns-modal-host'),open=()=>host.hidden=false,close=()=>host.hidden=true;g.querySelector('[data-add-notification]').onclick=open;host.querySelectorAll('[data-close-modal]').forEach(b=>b.onclick=close);host.querySelector('.ns-modal-backdrop').onclick=close;host.querySelectorAll('[data-type-option]').forEach(b=>b.onclick=()=>{const d=b.closest('details');d.querySelector('summary').textContent=b.textContent+'　⌄';d.open=false})}
function render(){const sub=document.querySelector('#subpage'),g=sub?.querySelector('.subpage-grid');if(!g)return;const h=sub.querySelector('.subpage-head');if(h)h.style.display='none';g.className='subpage-grid ns-page';g.innerHTML=view();wire(g)}
window.renderNotificationSettings=render;window.addEventListener('cyble:route',e=>{if((e.detail?.page||new URLSearchParams(location.search).get('page'))==='notification-settings')render()});window.addEventListener('popstate',()=>{if(new URLSearchParams(location.search).get('page')==='notification-settings')render()});if(new URLSearchParams(location.search).get('page')==='notification-settings')setTimeout(render,0);
})();

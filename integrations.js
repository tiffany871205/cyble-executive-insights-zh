(()=>{
const notification=[['Jira','J'],['Syslog IOCs','Syslog'],['Syslog Alerts','Syslog']];
const thirdParty=[
['Splunk','>'],['Cortex (Cyble Events V2)','C'],['Cortex (Cyble Threat Intel)','C'],['Fortinet','▦'],['MS Sentinel (Legacy)','◉'],['LogRhythm','••••'],
['Securonix','◎'],['Cyware','◇'],['QRadar (Cyble Events V2)','◉'],['QRadar (Cyble Threat Intel)','◉'],['MISP','MISP'],['Okta','okta'],
['Taxii v1','TAXII'],['Taxii v2','TAXII'],['MS Sentinel (Alerts)','◉'],['MS Sentinel (Taxii Connector)','◉'],['JIRA','J'],['ServiceNow','now']
];
function card(name,icon){return `<article class="int-card"><i>${icon}</i><span>${name}</span></article>`}
function renderAvailable(root){root.innerHTML=`<section class="int-group"><h2>Notification-Integration with Cyble Vision（Cyble Vision 通知整合）</h2><div class="int-grid notification">${notification.map(x=>card(...x)).join('')}</div></section><section class="int-group"><h2>Integration on Third Party Platforms（第三方平台整合）</h2><div class="int-grid">${thirdParty.map(x=>card(...x)).join('')}</div></section>`}
function render(){
  const sub=document.querySelector('#subpage'),g=sub?.querySelector('.subpage-grid');if(!g)return;
  const head=sub.querySelector('.subpage-head');if(head)head.style.display='none';
  g.className='subpage-grid int-page';
  g.innerHTML=`<header class="int-head"><h1>Integrations（整合） <span class="int-help">?<span class="int-help-pop">The Integrations feature offers users a centralised hub for effortlessly creating, configuring and overseeing all their integrations within Cyble Vision.<br><span>Integrations 功能提供集中式管理中心，方便建立、設定與管理 Cyble Vision 中的所有整合。</span><a href="#">↗ Visit Help Center（前往說明中心）</a></span></span></h1></header><div class="int-tabs"><button class="active" data-int-tab="existing">Existing Integrations（現有整合）</button><button data-int-tab="available">Available Integrations（可用整合）</button></div><section class="int-body"><div class="int-empty">No integrations configured yet（尚未設定任何整合）</div></section>`;
  const body=g.querySelector('.int-body');g.querySelectorAll('[data-int-tab]').forEach(b=>b.onclick=()=>{g.querySelectorAll('[data-int-tab]').forEach(x=>x.classList.toggle('active',x===b));if(b.dataset.intTab==='available')renderAvailable(body);else body.innerHTML='<div class="int-empty">No integrations configured yet（尚未設定任何整合）</div>'});
}
window.renderIntegrations=render;
window.addEventListener('cyble:route',e=>{if((e.detail?.page||new URLSearchParams(location.search).get('page'))==='integrations')render();});
if(new URLSearchParams(location.search).get('page')==='integrations')setTimeout(render,0);
})();

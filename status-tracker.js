(()=>{
function render(){
  const sub=document.querySelector('#subpage');
  const g=sub?.querySelector('.subpage-grid');
  if(!g)return;
  const head=sub.querySelector('.subpage-head');if(head)head.style.display='none';
  g.className='subpage-grid st-page';
  g.innerHTML=`
    <header class="st-head"><div><h1>Status Tracker（狀態追蹤）</h1><p>Monitor bulk update operations for alerts and incidents（監控警示與事件的大量更新作業）</p></div></header>
    <div class="st-tabs"><button class="active">Bulk Alerts（大量警示）</button></div>
    <section class="st-toolbar"><div><h2>0 records（0 筆紀錄）</h2><p>Bulk alert update operations（大量警示更新作業）</p></div><div class="st-controls"><button>▣ Last 30 Days（最近 30 天）⌄</button><button>↻</button><button>⟳</button></div></section>
    <section class="st-empty"><p>No bulk update records found for the selected period（所選期間找不到大量更新紀錄）</p></section>`;
}
window.renderStatusTracker=render;
window.addEventListener('cyble:route',e=>{if((e.detail?.page||new URLSearchParams(location.search).get('page'))==='status-tracker')render();});
if(new URLSearchParams(location.search).get('page')==='status-tracker')setTimeout(render,0);
})();

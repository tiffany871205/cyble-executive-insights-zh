(()=>{
const reports=Array.from({length:18},(_,i)=>({
  range:i<8?'01 Oct 2026 → 14 Oct 2026':'01 Jul 2024 → 12 Oct 2026',
  id:`AR-${String(1200+i*317).slice(-4)}`,
  generated:i<8?'14 Oct 2026':'12 Oct 2026'
}));
function render(){
  const sub=document.querySelector('#subpage');
  const g=sub?.querySelector('.subpage-grid');
  if(!g)return;
  const head=sub.querySelector('.subpage-head'); if(head)head.style.display='none';
  g.className='subpage-grid rm-page';
  g.innerHTML=`
    <header class="rm-page-head"><div><h1>Reports Management（報告管理）</h1><p>View and download generated alert and incident reports（檢視並下載已產生的警示與事件報告）</p></div><button>↻</button></header>
    <div class="rm-tabs"><button class="active">Alert Reports（警示報告）</button></div>
    <section class="rm-toolbar"><div><h2>54 reports（54 份報告）</h2><p>Generated alert reports（已產生的警示報告）</p></div><div class="rm-controls"><button>▣ Last 30 Days（最近 30 天）⌄</button><button>All statuses（所有狀態）⌄</button><button>↻</button><button class="active">▦</button><button>☷</button></div></section>
    <section class="rm-scroll"><div class="rm-grid">${reports.map(r=>`<article class="rm-card"><div class="rm-card-top"><i>▧</i><div><h3>${r.range}</h3><p>Alert Report（警示報告） · ${r.id}</p></div></div><div class="rm-status-row"><span>● READY（就緒）</span><button>⇩</button></div><hr><div class="rm-meta"><span>▥ 星瀚科技</span><span>♙ 林致遠</span></div><hr><footer>▣ Generated on（產生日期）：${r.generated}</footer></article>`).join('')}</div></section>`;
}
window.renderReportsManagement=render;
})();

(function(){
  var sub=document.querySelector('#subpage'); if(!sub)return;
  var rows=[
    ['MEDIUM','Missing Cross-Origin-Resource-Policy Header','198.51.100.42','443','https://198.51.100.42','04 May 2026','12 Oct 2026'],
    ['MEDIUM','Missing Cross-Origin-Embedder-Policy Header','198.51.100.42','443','https://198.51.100.42','04 May 2026','12 Oct 2026'],
    ['MEDIUM','Missing Cross-Origin-Embedder-Policy Header','203.0.113.180','443','https://203.0.113.180','16 Apr 2026','12 Oct 2026'],
    ['MEDIUM','Missing Cross-Origin-Resource-Policy Header','203.0.113.180','443','https://203.0.113.180','16 Apr 2026','11 Oct 2026'],
    ['MEDIUM','No CAA Records in DNS Tree Unrestricted Certificate Issuance','203.0.113.17','-','https://evtek-demo.example','25 Feb 2026','12 Oct 2026'],
    ['MEDIUM','Simple Mail Transfer Protocol (SMTP) Is Exposed To The Internet','198.51.100.28','tcp/25','198.51.100.28:25','06 Jul 2025','23 Jul 2026'],
    ['MEDIUM','Security Issue in SSL/TLS Client Renegotiation','203.0.113.17','25','https://mail.evtek-demo.example','29 Mar 2025','07 Oct 2026'],
    ['MEDIUM','Simple Mail Transfer Protocol (SMTP) Is Exposed To The Internet','203.0.113.17','tcp/587','203.0.113.17:587','06 Mar 2025','12 Oct 2026'],
    ['MEDIUM','Simple Mail Transfer Protocol (SMTP) Is Exposed To The Internet','203.0.113.17','tcp/25','203.0.113.17:25','06 Mar 2025','12 Oct 2026'],
    ['MEDIUM','Missing Cross-Origin-Opener-Policy Header','198.51.100.42','443','https://198.51.100.42','04 May 2026','10 Oct 2026'],
    ['LOW','SPF Record Misconfiguration: Allows Neutral Behavior (~all)','203.0.113.17','-','https://evtek-demo.example','18 Jan 2026','10 Oct 2026'],
    ['LOW','DMARC Misconfiguration: Forensic Report URI Not Configured','203.0.113.17','-','https://evtek-demo.example','18 Jan 2026','10 Oct 2026'],
    ['MEDIUM','DNSSEC Implementation Missing','203.0.113.17','53','dns://evtek-demo.example','12 Jan 2026','09 Oct 2026'],
    ['MEDIUM','Security Issue in SSL/TLS Client Renegotiation','198.51.100.28','443','https://198.51.100.28','03 Jan 2026','08 Oct 2026'],
    ['LOW','DKIM Record Misconfiguration: Invalid Syntax','203.0.113.17','-','mailto:demo@evtek-demo.example','02 Jan 2026','08 Oct 2026'],
    ['MEDIUM','PostgreSQL Authentication is Found','192.0.2.44','tcp/5432','192.0.2.44:5432','19 Dec 2025','07 Oct 2026'],
    ['LOW','HTTP Strict Transport Security Header Missing','198.51.100.42','443','https://198.51.100.42','12 Dec 2025','07 Oct 2026'],
    ['MEDIUM','TLS 1.0 Protocol Support Detected','192.0.2.55','443','https://192.0.2.55','08 Dec 2025','06 Oct 2026'],
    ['LOW','Server Information Disclosure Header Present','192.0.2.55','80','http://192.0.2.55','08 Dec 2025','06 Oct 2026']
  ];
  function render(){
    var grid=sub.querySelector('.subpage-grid, .issue-catalog-page, .asset-inventory-page, .attack-surface-dashboard-page'); if(!grid)return;
    sub.querySelector('.subpage-head').innerHTML='';
    grid.className='subpage-grid issue-catalog-page';
    grid.innerHTML='<header class="ic-head"><div><h1>Issue Catalog（問題目錄） <span class="ic-help">?<span>Browse, filter, and export attack surface issues detected across your assets.<b>瀏覽、篩選並匯出在資產中偵測到的攻擊面問題。</b><a>↗ Visit Help Center（前往說明中心）</a></span></span></h1><p>19 issues found（找到 19 個問題）</p></div><div class="ic-tools"><button>▣ Select Duration（選擇期間）⌄</button><button class="ic-status">Status: Active（狀態：啟用） ×</button><div class="ic-filter"><button class="ic-filter-btn">Severity（嚴重度）⌄</button><div class="ic-drop"><label><input type="checkbox"> Critical（重大）</label><label><input type="checkbox"> High（高）</label><label><input type="checkbox" checked> Medium（中）</label><label><input type="checkbox"> Low（低）</label></div></div><button>☷</button><button>↻</button><button>⇩ Download（下載）</button></div></header><section class="ic-table-shell"><div class="ic-table-wrap"><table><thead><tr><th>ISSUE（問題）</th><th>IP</th><th>PORT（連接埠）</th><th>URL</th><th>FIRST SEEN（首次發現）</th><th>LAST SEEN（最後發現）</th><th>STATUS（狀態）</th></tr></thead><tbody>'+rows.map(function(r){return '<tr><td><div class="ic-issue-cell"><span class="ic-sev '+r[0].toLowerCase()+'">'+(r[0]==='MEDIUM'?'MEDIUM（中）':'LOW（低）')+'</span><div><b>'+r[1]+'</b><small>'+r[2]+'</small></div></div></td><td>'+r[2]+'</td><td>'+r[3]+'</td><td><a>'+r[4]+'</a></td><td>'+r[5]+'</td><td>'+r[6]+'</td><td><span class="ic-active">Active（啟用）</span></td></tr>'}).join('')+'</tbody></table></div><footer><span>Showing（顯示） <b>1-19</b> of（共） <b>19</b></span><span>‹‹　‹　 Go to（前往） <b class="ic-page">1</b> of 1　›　››</span><span>Rows per page（每頁列數） <b class="ic-page">50⌄</b></span></footer></section>';
    var f=grid.querySelector('.ic-filter'),btn=grid.querySelector('.ic-filter-btn'); if(btn)btn.onclick=function(e){e.stopPropagation();f.classList.toggle('open')};
  }
  document.addEventListener('click',function(){var f=document.querySelector('.ic-filter.open');if(f)f.classList.remove('open')});
  window.addEventListener('cyble:route',function(e){if(e.detail.page==='issue-catalog')render()});
  if(new URLSearchParams(location.search).get('page')==='issue-catalog')render();
})();

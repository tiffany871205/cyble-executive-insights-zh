(function(){
  var sub=document.querySelector('#subpage'); if(!sub)return;
  var rows=[
    ['dns1.evtek-demo.example','587',[0,0,0,0,0],'T','07 Oct 2026'],
    ['evtek-demo.example','587',[0,0,0,0,0],'T','07 Oct 2026'],
    ['mail.evtek-demo.example','587',[0,0,1,1,0],'T','01 Oct 2026'],
    ['evtek-demo.example','25',[0,0,0,0,0],'T','24 Sep 2026'],
    ['mail.evtek-demo.example','25',[0,0,1,1,0],'T','07 Oct 2026'],
    ['dns1.evtek-demo.example','25',[0,0,0,0,0],'T','07 Oct 2026']
  ];
  function render(){
    var grid=sub.querySelector('.subpage-grid, .ssl-tls-page, .issue-catalog-page, .asset-inventory-page'); if(!grid)return;
    sub.querySelector('.subpage-head').innerHTML='';
    grid.className='subpage-grid ssl-tls-page';
    grid.innerHTML='<header class="st-head"><div><h1>SSL/TLS <span class="st-help">?<span>Monitor SSL/TLS certificate health and vulnerabilities across your attack surface.<b>監控整體攻擊面中的 SSL/TLS 憑證健康狀態與弱點。</b><a>↗ Visit Help Center（前往說明中心）</a></span></span></h1><p>Monitor SSL/TLS certificate health and vulnerabilities across your attack surface.（監控整體攻擊面中的 SSL/TLS 憑證健康狀態與弱點。）</p></div></header>'+ 
    '<section class="st-charts"><article><h3>Vulnerability Wise（依弱點分類）</h3><div class="st-donut"><div class="st-hole"><b>14</b><span>Vulnerabilities（弱點）</span></div></div><div class="st-legend"><span class="m">● Medium（中） 6</span><span class="l">● Low（低） 6</span><span class="c">● Critical（重大） 1</span><span class="i">● Info（資訊） 1</span></div></article><article><h3>Port Wise（依連接埠分類）</h3><div class="st-port-bars"><div><b>25</b><span><i class="p25"></i></span><em>3</em></div><div><b>587</b><span><i class="p587"></i></span><em>3</em></div></div></article><article><h3>Grade Wise（依評級分類）</h3><div class="st-grade"><div><b>6</b><i></i><span>T</span></div></div></article></section>'+ 
    '<div class="st-toolbar"><div></div><div><button>▣ Select Duration（選擇期間）⌄</button><button>☷</button><button>↻</button><button>⇩</button></div></div>'+ 
    '<div class="st-filterbar"><button class="active">Status: Active（狀態：啟用） ×</button><button>Category（類別）⌄</button><button>Host（主機）⌄</button><button>Port（連接埠）⌄</button><button>Vulnerability Title（弱點標題）⌄</button><button>Grade（評級）⌄</button><button>CVEs（CVE）⌄</button><button>Severity（嚴重度）⌄</button></div>'+ 
    '<section class="st-table-shell"><div class="st-table-wrap"><table><thead><tr><th>STATUS（狀態）</th><th>HOST（主機）</th><th>PORT（連接埠）</th><th>VULNERABILITIES（弱點）</th><th>Grade（評級） ↓</th><th>Last Scanned（最後掃描） ⇅</th></tr></thead><tbody>'+rows.map(function(r){return '<tr><td><span class="st-active">● Active（啟用）</span></td><td>'+r[0]+'</td><td>'+r[1]+'</td><td><div class="st-vulns"><span class="v1">● '+r[2][0]+'</span><span class="v2">● '+r[2][1]+'</span><span class="v3">● '+r[2][2]+'</span><span class="v4">● '+r[2][3]+'</span><span class="v5">● '+r[2][4]+'</span></div></td><td><b class="st-t">'+r[3]+'</b></td><td>'+r[4]+'</td></tr>'}).join('')+'</tbody></table></div><footer><span>Showing（顯示） <b>1-6</b> of（共） <b>6</b></span><span>‹‹　‹　 Go to（前往） <b class="st-page">1</b> of 1　›　››</span><span>Rows per page（每頁列數） <b class="st-page">10⌄</b></span></footer></section>';
  }
  window.addEventListener('cyble:route',function(e){if(e.detail.page==='ssl-tls')render()});
  if(new URLSearchParams(location.search).get('page')==='ssl-tls')render();
})();

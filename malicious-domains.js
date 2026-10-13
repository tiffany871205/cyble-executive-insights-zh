(function(){
const rows=[
['secure-login-demo.example','demo-bank.example','Suspicious Domain','200','MX RECORD','25 Aug 2026','01 Sept 2026'],
['account-check.example','demo-bank.example','Suspicious Domain','200','','26 Aug 2026','01 Sept 2026'],
['portal-verify.example','university-demo.example','Suspicious Domain','-','MX RECORD','14 Dec 2015','01 Sept 2026'],
['payment-center.example','payments-demo.example','Suspicious Domain','200','MX RECORD','04 Jan 2026','01 Sept 2026'],
['trk2.insurance-demo.example','insurance-demo.example','Suspicious Domain','-','','-','01 Sept 2026'],
['family-login.example','family-demo.example','Suspicious Domain','-','','02 Aug 2022','01 Sept 2026'],
['auth-edge.demo-cloud.example','cloud-demo.example','Suspicious Domain','-','','-','01 Sept 2026'],
['gateway-edge.demo-cloud.example','cloud-demo.example','Suspicious Domain','-','','-','01 Sept 2026'],
['wf-run-33399399688.demo.example','cloud-demo.example','Suspicious Domain','-','','-','01 Sept 2026'],
['apps.demo-chamb-0332.example','cloud-demo.example','Suspicious Domain','-','','-','01 Sept 2026'],
['script-edge.demo-cloud.example','cloud-demo.example','Suspicious Domain','-','','-','01 Sept 2026'],
['api-edge.demo-cloud.example','cloud-demo.example','Suspicious Domain','-','','-','01 Sept 2026']];
function render(){const grid=document.querySelector('.subpage-grid'); if(!grid)return; grid.className='subpage-grid malicious-domains-page';
grid.innerHTML=`<div class="md-head"><div><h1>Malicious Domains（惡意網域） <span class="md-help">?</span></h1><div class="md-tip">Detect domains impersonating your brand.<br>（偵測冒充您品牌的網域。）<br>Cyble continuously crawls the web for typosquats, lookalikes, and abusive domains so you can flag, take down, or watchlist them before they're weaponized in phishing or fraud campaigns.<br>（Cyble 持續爬取網路，尋找錯字搶註、相似網域與濫用網域，讓您能在其被用於網路釣魚或詐騙活動前進行標記、下架或加入監控清單。）<a href="#">↗ Visit Help Center（造訪說明中心）</a></div></div><div class="md-duration">▣ Last Month（上個月）⌄</div><button class="md-icon">↻</button></div>
<div class="md-kpis"><div class="md-card"><b>58.9K <i>−23,104 ↘</i></b><strong>Suspicious Domains Identified（已識別可疑網域）</strong><span>Alert Counts（警示數量） ↗</span><a>58.9K</a><div class="spark">▁▂▁▃▂▁▅▂▁▂▃▁▆▂▃▁▂▁▁▁</div></div><div class="md-card"><b>421 <i class="red">+38 ↗</i></b><strong>Phishing Identified（已識別網路釣魚）</strong><span>Alert Counts（警示數量） ↗</span><a>421</a><div class="spark">▁▁▂▁▁▁▂▁▁▃▁▂▃▁▅▂</div></div><div class="md-card"><b>0</b><strong>Malicious Ads Identified（已識別惡意廣告）</strong><span>Alert Counts（警示數量） ↗</span><a>0</a></div></div>
<div class="md-mid"><div class="md-panel tracker"><h3>TAKEDOWN TRACKER BY TYPE & STATUS（依類型與狀態的下架追蹤）</h3><div class="ask">✧<b>Need Assistance? Just Ask!（需要協助嗎？歡迎詢問！）</b><span>Enable takedowns to get takedown analytics.<br>（啟用下架服務以取得下架分析。）</span><button>✉ Contact CSM（聯絡 CSM）</button></div><div class="track-stats"><div><b>0</b><a>Takedowns Initiated（已啟動下架）</a></div><div><b>6</b><a>Watchlisted Domains（監控清單網域）</a></div><div><b>0</b><a>False Positives（誤判）</a></div></div></div><div class="md-panel insights"><h3>ALERTS INSIGHTS（警示洞察）</h3><div class="insight-body"><div class="donut"><b>59.32K</b></div><div class="legend"><p>🔵 Viewed（已檢視） <b>102</b></p><p>🟡 Unreviewed（未檢視） <b>59.21k</b></p><p>🟢 Confirmed（已確認） <b>5</b></p><p>🟣 Under Review（審查中） <b>0</b></p><p>🔴 Remediation In Progress（修復進行中） <b>0</b></p></div></div><div class="severity">🔴 High（高）　🟠 Medium（中）　🟢 Low（低）　⚪ Unanalysed（未分析）</div></div></div>
<div class="md-tools"><button>☷</button><button>↻</button><button>☷</button><button>▦</button><button>⟳</button></div>
<div class="md-filters">${['Keyword（關鍵字）','Domain（網域）','Classification（分類）','Tags（標籤）','▣ Registered On（註冊日期）','Status Code（狀態碼）','False Positive（誤判）','Is Analysed（已分析）','Is Active（啟用中）'].map(x=>`<button>${x}⌄</button>`).join('')}</div>
<div class="md-table-wrap"><table><thead><tr><th>DOMAIN（網域）</th><th>KEYWORD（關鍵字）</th><th>CLASSIFICATION（分類）</th><th>STATUS CODE（狀態碼）</th><th>TAGS（標籤）</th><th>REGISTERED ON（註冊日期）</th><th>IDENTIFIED ON（識別日期）</th><th>STATUS（狀態）</th><th>ACTIONS（操作）</th></tr></thead><tbody>${rows.map(r=>`<tr><td><a>${r[0]}</a></td><td>${r[1]}</td><td>${r[2]}（可疑網域）</td><td>${r[3]==='200'?'<em>200</em>':r[3]}</td><td>${r[4]?`<span>${r[4]}</span>`:'-'}</td><td>${r[5]}</td><td>${r[6]}</td><td><small>INACTIVE（停用）</small></td><td><button>⋮</button></td></tr>`).join('')}</tbody></table></div>`;
}
window.renderMaliciousDomains=render;
})();

const landscape=document.querySelector('#landscapePage');
const actorRows=[['ALPHV','勒索軟體組織','中等','亦稱 BlackCat，2021 年中期出現，使用勒索即服務模式運作。'],['APT 12','APT','中等','又稱 Numbered Panda，曾鎖定媒體、高科技企業等高價值目標。'],['APT 19','APT','中等','中國背景威脅組織，曾針對多個產業與政府單位。'],['APT 29','APT','中等','又稱 Cozy Bear，與俄羅斯對外情報活動相關。'],['APT 3','APT','中等','長期活躍的進階持續性威脅組織。'],['APT 30','APT','中等','與中國相關，曾鎖定衛星通訊等產業。']];
const cves=[['CVE-2026-76504','2026-09-30 21:17','嚴重','API 工作階段式驗證管理漏洞'],['CVE-2026-102331','2026-09-30 04:17','嚴重','Google Chrome Android ANGLE 緩衝區溢位'],['CVE-2026-102330','2026-09-30 04:17','中等','Google Chrome SiteIsolation 授權錯誤'],['CVE-2026-102329','2026-09-30 04:17','中等','Google Chrome WebUI 跨站腳本漏洞'],['CVE-2026-102326','2026-09-30 04:17','高','Google Chrome V8 型別混淆漏洞'],['CVE-2026-102328','2026-09-30 04:17','高','Google Chrome V8 型別混淆漏洞']];
landscape.innerHTML=`<div class="trend-grid"><article class="tl-card"><h3>▧ 威脅行為者趨勢 <small>與上月相比　<span class="bad">產業 +19%</span> <span class="good">區域 -3%</span></small></h3><div class="chart-label">● IT 與 ITES　　● 亞太地區（APAC）</div><div class="line-chart actors"><i></i><i></i></div></article><article class="tl-card"><h3>▧ 勒索軟體趨勢 <small>與上月相比　<span class="bad">產業 +100%</span> <span class="bad">區域 +39%</span></small></h3><div class="chart-label">● IT 與 ITES　　● 亞太地區（APAC）</div><div class="line-chart ransomware"><i></i><i></i></div></article></div><div class="three-grid"><article class="tl-card"><h3>☠ 熱門勒索軟體組織</h3>${[['The Gentlemen',28],['CLOP',14],['storm',13],['Qilin',13],['SafePay',9],['INC Ransom',9],['ThreeAM',7],['Brain Cipher',7],['M3RX',7],['Lamashtu',7]].map(x=>`<div class="rank"><span>${x[0]}</span><i><b style="width:${x[1]*3}%"></b></i><em>${x[1]}</em></div>`).join('')}</article><article class="tl-card target"><h3>▦ 勒索軟體主要鎖定產業</h3><div class="big-num">20<small>IT 與 ITES</small></div><p>專業服務　33　　醫療保健　26</p><p>製造業　21　　　營建業　18</p><p>金融服務　15　　教育　8</p><p>能源公用事業　7　組織　7</p></article><article class="tl-card region"><h3>▧ 區域受害者分布</h3><div class="big-num">29<small>亞太地區（APAC）</small></div><p>🌐 北美　87　　🇪🇺 歐洲　62</p><p>🌐 中東　13　　🌐 南美　12</p><p>🌐 澳洲　5</p></article></div><div class="lower-grid"><article class="tl-card"><h3>♙ 活躍威脅行為者</h3><div class="tl-table"><b>行為者　　類型　　　　　關聯性　　　重點說明</b>${actorRows.map(x=>`<p><strong>${x[0]}</strong><span>${x[1]}</span><em>${x[2]}</em><small>${x[3]}</small></p>`).join('')}</div></article><article class="tl-card vectors"><h3>◎ 攻擊向量分布 ⓘ</h3><div class="donut"><strong>26<small>向量</small></strong></div><p>🔵 漏洞利用　779　16%</p><p>🟣 資料外洩　592　12%</p><p>🟠 身分偽冒　436　9%</p><p>🔴 網路釣魚／社交工程　391　8%</p><p>🟢 多階段攻擊　382　8%</p></article></div><div class="lower-grid"><article class="tl-card"><h3>☼ 近期遭利用 CVE</h3><div class="cve-table">${cves.map(x=>`<p><a>${x[0]}</a><span>${x[1]}</span><em class="sev">${x[2]}</em><small>${x[3]}</small></p>`).join('')}</div></article><article class="tl-card"><h3>◎ Cyble Sensor Intelligence 焦點</h3><div class="sensor"><div>⚡ Sensor Intelligence Report - Global - October 1, 2026<small>機密 Sensor Intelligence 報告</small></div><div>⚡ Sensor Intelligence Report - BFSI - October 1, 2026<small>機密 Sensor Intelligence 報告</small></div></div></article></div><article class="tl-card geo-context"><h3>◎ 地緣政治背景 ⓘ</h3><div><section><b>🌐 中東航空緊張局勢</b><p>阿聯酋與以色列航班近期事件凸顯中東地緣政治緊張升高，可能增加航空與關鍵基礎設施面臨的網路威脅。</p></section><section><b>⚠ 奈及利亞資訊戰</b><p>地方選舉將近，網路假訊息活動受到高度關注，企業應強化資訊完整性與資安措施。</p></section><section><b>⚠ 波斯灣石油緊張下的伊朗網路威脅</b><p>地緣政治緊張可能促使伊朗相關威脅行為者鎖定能源產業進行網路間諜與破壞活動。</p></section></div></article>`;
const overview=document.querySelector('.content-31');
document.querySelectorAll('.tab-btn').forEach(btn=>btn.addEventListener('click',()=>{const land=btn.dataset.tab==='landscape';document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active',b===btn));overview.classList.toggle('tab-hidden',land);landscape.hidden=!land;}));

// Preserve the selected Executive Insights tab across refreshes and browser history.
(function(){
  const buttons=[...document.querySelectorAll('.tab-btn')];
  function setTab(key, updateUrl){
    const land=key==='landscape';
    buttons.forEach(b=>b.classList.toggle('active',b.dataset.tab===key));
    const overview=document.querySelector('.content-31');
    const landscape=document.querySelector('#landscapePage');
    if(overview) overview.classList.toggle('tab-hidden',land);
    if(landscape) landscape.hidden=!land;
    localStorage.setItem('cyble-executive-tab',key);
    if(updateUrl){
      const url=new URL(location.href);
      url.searchParams.set('page','executive');
      url.searchParams.set('tab',key);
      url.hash='';
      history.replaceState({tab:key},'',url);
    }
  }
  buttons.forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.tab,true)));
  const params=new URLSearchParams(location.search);
  // A bare ?page=executive must always open the first tab: Overview.
  // Only an explicit ?tab=landscape keeps Threat Landscape on refresh.
  const initial=params.get('page')==='executive'?(params.get('tab')||'overview'):'overview';
  setTab(initial==='landscape'?'landscape':'overview',false);
  window.addEventListener('popstate',()=>{
    const key=new URLSearchParams(location.search).get('tab')||'overview';
    setTab(key,false);
  });
})();

(()=>{
function help(){return `<span class="ps-help">?<span class="ps-help-pop">Manage your personal details, profile picture, account credentials, and two-factor authentication settings.<br><span>管理個人資料、個人頭像、帳號憑證與雙因素驗證設定。</span><a href="#">↗ Visit Help Center（前往說明中心）</a></span></span>`}
function render(){
 const sub=document.querySelector('#subpage'),g=sub?.querySelector('.subpage-grid');if(!g)return;
 const head=sub.querySelector('.subpage-head');if(head)head.style.display='none';
 g.className='subpage-grid ps-page';
 g.innerHTML=`
 <header class="ps-page-head"><h1>Profile Settings（個人資料設定） ${help()}</h1><p>Manage your personal details, account security, and authentication settings.（管理個人資料、帳號安全與驗證設定。）</p></header>
 <div class="ps-layout"><main class="ps-main">
  <section class="ps-card"><h2>PERSONAL DETAILS（個人資料）</h2><div class="ps-two"><label>First Name（名字）<input id="psFirst" value="Demo"></label><label>Last Name（姓氏）<input id="psLast" value="User"></label></div><div class="ps-save-row"><button id="psSave">Save Changes（儲存變更）</button></div></section>
  <section class="ps-card"><h2>ACCOUNT DETAILS（帳號資料）</h2><label>Email Address（電子郵件）<input value="demo.user@example.com" disabled></label><small>Email address cannot be changed.（電子郵件地址無法變更。）</small><label>Password（密碼）<div class="ps-password"><input value="••••••••••••" disabled><button>Change Password（變更密碼）</button></div></label><hr><label>WhatsApp Number（WhatsApp 號碼）<div class="ps-phone"><button>🇹🇼 +886　⌄</button><input placeholder="Enter number（輸入號碼）"><button class="primary">Save & Verify（儲存並驗證）</button><button disabled>Remove Number（移除號碼）</button></div></label><label>Phone Number（電話號碼）<div class="ps-phone"><button>🇹🇼 +886　⌄</button><input placeholder="Enter number（輸入號碼）"><button class="primary">Save & Verify（儲存並驗證）</button><button disabled>Remove Number（移除號碼）</button></div></label></section>
 </main><aside class="ps-side">
  <section class="ps-card ps-picture"><h2>PROFILE PICTURE（個人頭像）</h2><div class="ps-avatar">DU</div><button>Upload Photo（上傳照片）</button><p>JPG, PNG or GIF · Max 500 KB</p></section>
  <section class="ps-card ps-2fa"><h2>TWO-FACTOR AUTHENTICATION（雙因素驗證）</h2><div class="ps-shield">⌾</div><b>● Active（已啟用）</b><p>Your account is protected with an authenticator app.<br>（你的帳號已使用驗證器 App 保護。）</p><button class="danger">Deactivate 2FA（停用 2FA）</button><button>Reset 2FA（重設 2FA）</button></section>
 </aside></div>
 <section class="ps-cookie ps-card"><div><i>♢</i><span><b>Cookie Preferences（Cookie 偏好設定）</b><small>Review or change the cookie categories you have allowed.（檢視或調整已允許的 Cookie 類別。）</small></span></div><div><a>Privacy Notice（隱私權聲明）</a><button>◉ Manage Cookies（管理 Cookie）</button></div></section>
 <div class="ps-toast" hidden>✓　Profile updated successfully.（個人資料已成功更新。）</div>`;
 g.querySelector('#psSave').onclick=()=>{const first=g.querySelector('#psFirst').value||'Demo',last=g.querySelector('#psLast').value||'User';document.querySelectorAll('.acct-user b,.top-right strong').forEach(x=>x.textContent=`${first} ${last}`);const t=g.querySelector('.ps-toast');t.hidden=false;clearTimeout(window.__psToast);window.__psToast=setTimeout(()=>t.hidden=true,2600)};
}
window.renderProfileSettings=render;
window.addEventListener('cyble:route',e=>{if((e.detail?.page||new URLSearchParams(location.search).get('page'))==='profile-settings')render();});
if(new URLSearchParams(location.search).get('page')==='profile-settings')setTimeout(render,0);
})();

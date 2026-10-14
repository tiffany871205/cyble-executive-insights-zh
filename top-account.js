(()=>{
const companyList=[
 ['星瀚科技','starlight-demo.example','ST'],['遠峰銀行','farpeak-bank.example','FB'],['晨曦證券','dawn-securities.example','DS'],['青禾金控','greenfield-holdings.example','GH'],['長川銀行','longriver-bank.example','LB'],['海岳銀行','seamount-bank.example','SB'],['玉衡銀行','jadebalance-bank.example','JB'],['聯信銀行','uniontrust-bank.example','UB'],['金融資安中心','fisac-demo.example','FI'],['光域銀行','lumen-bank.example','LU']
];
const languages=['English','Arabic','Bengali','Chinese (Simplified)','Chinese (Traditional)','Dutch','French','German','Hindi','Indonesian','Italian','Japanese','Korean','Malay','Portuguese','Russian','Spanish','Thai','Turkish','Vietnamese'];
function mount(){
 if(document.querySelector('.acct-shell')) return;
 const el=document.createElement('div');el.className='acct-shell';el.innerHTML=`
  <div class="acct-menu" hidden>
   <div class="acct-user"><i>DU</i><div><b>Demo User</b><span>demo.user@example.com</span><small>星瀚科技</small></div></div>
   <div class="acct-actions">
    <button data-action="company">▥ <span>Switch Company（切換公司）</span><kbd>⌘⇧S</kbd></button>
    <button data-action="control">⚙ <span>Control Panel（控制台）</span><kbd>⌘⇧P</kbd></button>
    <button>▣ <span>Show feedback button（顯示意見回饋按鈕）</span></button>
   </div>
   <div class="acct-prefs"><h4>PREFERENCES（偏好設定）</h4><p><span>Theme（主題）</span><b>Dark（深色）　›</b></p><p><span>Language（語言）</span><b>English　›</b></p><p><span>Text size（文字大小）</span><b><button>−</button> 100% <button>＋</button></b></p><p><span>Text weight（文字粗細）</span><b class="acct-weight"><em>Regular（一般）</em><em>Bold（粗體）</em></b></p></div>
   <button class="acct-logout">⇱　Logout（登出）</button>
  </div>
  <div class="acct-drawer-host" hidden><div class="acct-backdrop"></div><aside class="acct-drawer"><div class="acct-drawer-inner"></div></aside></div>
  <div class="acct-toast" hidden><b>✓</b><div><strong>Success（成功）</strong><span>Profile updated successfully.（個人資料已成功更新。）</span></div><button>×</button></div>`;
 document.body.appendChild(el);
 el.querySelector('[data-action="company"]').onclick=()=>openCompany();
 el.querySelector('[data-action="control"]').onclick=()=>openControl();
 el.querySelector('.acct-backdrop').onclick=closeDrawer;
 el.querySelector('.acct-toast button').onclick=()=>el.querySelector('.acct-toast').hidden=true;
}
function menu(){return document.querySelector('.acct-menu')}
function toggleMenu(){mount();const m=menu();m.toggleAttribute('hidden')}
function closeMenu(){const m=menu();if(m&&!m.hidden)m.hidden=true}
function openDrawer(){mount();closeMenu();const h=document.querySelector('.acct-drawer-host');h.hidden=false;document.body.classList.add('acct-drawer-open');return h.querySelector('.acct-drawer-inner')}
function closeDrawer(){const h=document.querySelector('.acct-drawer-host');if(h)h.hidden=true;document.body.classList.remove('acct-drawer-open')}
function header(title,back=false){return `<header class="acct-drawer-head">${back?'<button class="acct-back" data-back>←</button>':''}<h2>${title}</h2><button data-close>×</button></header>`}
function wireHeader(inner,backFn){inner.querySelector('[data-close]')?.addEventListener('click',closeDrawer);inner.querySelector('[data-back]')?.addEventListener('click',backFn||openControl)}
function openCompany(){
 const inner=openDrawer();inner.innerHTML=`${header('▥ Switch Company（切換公司） <em>22</em>')}<label class="company-search">⌕ <input placeholder="Search companies...（搜尋公司）"></label><div class="company-toggles"><label>Managed accounts only（僅受管理帳號）<i></i></label><label>Show expired companies（顯示已過期公司）<i></i></label></div><div class="company-list"><h3>My Company（我的公司）</h3><article class="company-current"><i>ST</i><div><b>星瀚科技</b><span>starlight-demo.example</span></div><strong>✓</strong></article><h3>All Companies（所有公司）</h3>${companyList.slice(1).map(c=>`<article><i>${c[2]}</i><div><b>${c[0]}</b><span>${c[1]}</span></div></article>`).join('')}</div>`;wireHeader(inner);
}
function openControl(){
 const inner=openDrawer();inner.innerHTML=`${header('⚙ Control Panel（控制台）')}<nav class="control-list"><button class="active" data-profile>♙ <span>Profile Settings（個人資料設定）</span></button><button>▦ <span>Configurations Hub（設定中心）</span></button><button>♧ <span>User Management（使用者管理）</span></button><button>▥ <span>Company Management（公司管理）</span></button><button>⚠ <span>Alert Settings（警示設定）</span></button><button>♧ <span>Notifications Settings（通知設定）</span></button><button>☷ <span>Application Settings（應用程式設定）</span></button></nav>`;wireHeader(inner);inner.querySelector('[data-profile]').onclick=openProfile;
}
function openProfile(){
 const inner=openDrawer();inner.innerHTML=`${header('Profile Settings（個人資料設定）',true)}<form class="profile-form">
  <div class="profile-avatar">DU</div>
  <div class="profile-grid"><label>FIRST NAME（名字）<input name="first" value="Demo"></label><label>LAST NAME（姓氏）<input name="last" value="User"></label></div>
  <label>EMAIL（電子郵件）<input name="email" value="demo.user@example.com" disabled></label>
  <label>DESIGNATION（職稱）<input name="designation" placeholder="Add designation（新增職稱）"></label>
  <label>PHONE NUMBER（電話號碼）<div class="phone-field"><button type="button">🇹🇼 +886　⌄</button><input name="phone" placeholder="Phone number（電話號碼）"></div></label>
  <label>TIMEZONE（時區）<button type="button" class="profile-select">Asia/Taipei (GMT+08:00)　⌄</button></label>
  <label>LANGUAGE（語言）<div class="lang-select"><button type="button" data-lang-btn>English　⌄</button><div class="lang-menu" hidden><label class="lang-search">⌕ <input placeholder="Search language（搜尋語言）"></label>${languages.map((l,i)=>`<button type="button" data-lang="${l}"><i>${i===0?'●':'○'}</i>${l}</button>`).join('')}</div></div></label>
  <button class="profile-save" type="submit">Save Changes（儲存變更）</button>
 </form>`;
 wireHeader(inner,openControl);
 const menu=inner.querySelector('.lang-menu'),btn=inner.querySelector('[data-lang-btn]');btn.onclick=()=>menu.toggleAttribute('hidden');menu.querySelectorAll('[data-lang]').forEach(x=>x.onclick=()=>{btn.textContent=x.dataset.lang+'　⌄';menu.hidden=true;menu.querySelectorAll('[data-lang] i').forEach(i=>i.textContent='○');x.querySelector('i').textContent='●'});
 const search=menu.querySelector('input');search.oninput=()=>{const q=search.value.toLowerCase();menu.querySelectorAll('[data-lang]').forEach(x=>x.hidden=!x.dataset.lang.toLowerCase().includes(q))};
 inner.querySelector('.profile-form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);const first=f.get('first')||'Demo',last=f.get('last')||'User';document.querySelectorAll('.acct-user b,.top-right strong').forEach(x=>x.textContent=`${first} ${last}`);showToast()};
}
function showToast(){const t=document.querySelector('.acct-toast');t.hidden=false;clearTimeout(window.__acctToastTimer);window.__acctToastTimer=setTimeout(()=>t.hidden=true,3000)}
function init(){
 mount();const tr=document.querySelector('.top-right');if(!tr)return;const user=tr.querySelector('div'),avatar=tr.querySelector('i'),chev=tr.querySelector(':scope > span:last-child');
 if(user){user.innerHTML='<strong>Demo User</strong><small>星瀚科技</small>';user.classList.add('acct-trigger')}if(avatar){avatar.textContent='DU';avatar.classList.add('acct-trigger')}if(chev)chev.classList.add('acct-trigger');
 [user,avatar,chev].filter(Boolean).forEach(x=>x.onclick=e=>{e.stopPropagation();toggleMenu()});document.addEventListener('click',e=>{const m=menu();if(m&&!m.hidden&&!m.contains(e.target)&&!e.target.closest('.acct-trigger'))closeMenu()});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

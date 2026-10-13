(function(){
 function wire(){const help=document.querySelector('.tpr-help'),tip=document.querySelector('.tpr-help-backdrop');if(!help||!tip||help.dataset.hoverHelp)return;help.dataset.hoverHelp='1';help.addEventListener('mouseenter',()=>tip.hidden=false);help.addEventListener('mouseleave',()=>tip.hidden=true);help.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();tip.hidden=true},{capture:true})}
 const observer=new MutationObserver(wire);observer.observe(document.body,{childList:true,subtree:true});wire();
})();

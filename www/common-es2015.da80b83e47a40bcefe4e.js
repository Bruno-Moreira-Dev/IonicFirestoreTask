(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("A36C"),r=n("iWo5"),o=n("qULd");const s=(t,e)=>{let n,s;const c=(t,i,r)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,i);o&&e(o)?o!==n&&(l(),a(o,r)):l()},a=(t,e)=>{n=t,s||(s=n);const r=n;Object(i.f)(()=>r.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(i.f)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,o.a),onMove:t=>c(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),Object(o.e)(),s=void 0}})}},"2tJE":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("fXoL"),r=n("7dP1"),o=n("I/3d");let s=(()=>{class t extends class{constructor(t){this.db=t}setCollection(t,e){this.collection=t?this.db.collection(t,e):null}setItem(t,e){return this.collection.doc(t.id)[e](t).then(()=>t)}getAll(){return this.collection.valueChanges()}get(t){return this.collection.doc(t).valueChanges()}create(t){return t.id=this.db.createId(),this.setItem(t,"set")}update(t){return this.setItem(t,"update")}delete(t){return this.collection.doc(t.id).delete()}}{constructor(t,e){super(e),this.authService=t,this.init()}init(){this.authService.authState$.subscribe(t=>{t?this.setCollection(`/users/${t.uid}/tasks`,t=>t.orderBy("done","asc").orderBy("title","asc")):this.setCollection(null)})}}return t.\u0275fac=function(e){return new(e||t)(i.Rb(r.a),i.Rb(o.a))},t.\u0275prov=i.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"74mu":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return c}));const i=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,i)}return!1}},PCNd:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),s=n("fXoL");let c=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(e){return new(e||t)},imports:[[o.E],i.c,r.i,o.E]}),t})()},ZaV5:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));const i=async(t,e,n,i,r)=>{if(t)return t.attachViewToDom(e,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>o.classList.add(t)),r&&Object.assign(o,r),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=t*i-t+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},mK0T:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("mrSG"),r=n("fXoL"),o=n("TEn/");let s=(()=>{class t{constructor(t,e,n){this.alertCtrl=t,this.loadingCtrl=e,this.toastCtrl=n}alert(t){return Object(i.a)(this,void 0,void 0,(function*(){const e=yield this.alertCtrl.create(t);return yield e.present(),e}))}loading(t){return Object(i.a)(this,void 0,void 0,(function*(){const e=yield this.loadingCtrl.create(Object.assign({message:"Loading..."},t));return yield e.present(),e}))}toast(t){return Object(i.a)(this,void 0,void 0,(function*(){const e=yield this.toastCtrl.create(Object.assign({position:"bottom",duration:3e3,keyboardClose:!0,buttons:[{text:"Done",role:"Cancel",handler:()=>{console.log("Cancel clicked")}}]},t));return yield e.present(),e}))}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(o.a),r.Rb(o.G),r.Rb(o.M))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},qULd:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{i.selection()},o=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},a=t=>{i.impact(t)}},vsub:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("mrSG"),r=n("fXoL"),o=n("7dP1"),s=n("TEn/"),c=n("mK0T");let a=(()=>{class t{constructor(t,e,n,i){this.authService=t,this.menuCtrl=e,this.navCtrl=n,this.overlayService=i}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){(yield this.menuCtrl.isEnabled(this.menu))||this.menuCtrl.enable(!0,this.menu)}))}logout(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.overlayService.alert({message:"Do you really want to quit?",buttons:[{text:"Yes",handler:()=>Object(i.a)(this,void 0,void 0,(function*(){yield this.authService.logout(),yield this.menuCtrl.enable(!1,this.menu),this.navCtrl.navigateRoot("/login")}))},"No"]})}))}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(o.a),r.Ib(s.H),r.Ib(s.I),r.Ib(c.a))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-logout-button"]],inputs:{menu:"menu"},decls:3,vars:0,consts:[[3,"click"],["name","exit","slot","icon-only"]],template:function(t,e){1&t&&(r.Nb(0,"ion-buttons"),r.Nb(1,"ion-button",0),r.Vb("click",(function(){return e.logout()})),r.Jb(2,"ion-icon",1),r.Mb(),r.Mb())},directives:[s.f,s.e,s.m],styles:[""]}),t})()}}]);
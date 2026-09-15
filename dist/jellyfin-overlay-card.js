var Et=Object.defineProperty;var St=Object.getOwnPropertyDescriptor;var _=(o,t,e,s)=>{for(var i=s>1?void 0:s?St(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Et(t,e,i),i};var z=globalThis,D=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),at=new WeakMap,U=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(D&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=at.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&at.set(e,t))}return t}toString(){return this.cssText}},lt=o=>new U(typeof o=="string"?o:o+"",void 0,K),O=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new U(e,o,K)},ct=(o,t)=>{if(D)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=z.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},J=D?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return lt(e)})(o):o;var{is:wt,defineProperty:Ct,getOwnPropertyDescriptor:Pt,getOwnPropertyNames:Ut,getOwnPropertySymbols:Ot,getPrototypeOf:Tt}=Object,q=globalThis,ht=q.trustedTypes,jt=ht?ht.emptyScript:"",Ht=q.reactiveElementPolyfillSupport,T=(o,t)=>o,j={toAttribute(o,t){switch(t){case Boolean:o=o?jt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},I=(o,t)=>!wt(o,t),pt={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:I};Symbol.metadata??=Symbol("metadata"),q.litPropertyMetadata??=new WeakMap;var m=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=pt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ct(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=Pt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let l=i?.call(this);r?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??pt}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;let t=Tt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){let e=this.properties,s=[...Ut(e),...Ot(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(J(i))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ct(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:j).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:j;this._$Em=i;let l=n.fromAttribute(e,r.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(t!==void 0){let n=this.constructor;if(i===!1&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??I)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:n}=r,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,r,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};m.elementStyles=[],m.shadowRootOptions={mode:"open"},m[T("elementProperties")]=new Map,m[T("finalized")]=new Map,Ht?.({ReactiveElement:m}),(q.reactiveElementVersions??=[]).push("2.1.2");var et=globalThis,dt=o=>o,B=et.trustedTypes,ut=B?B.createPolicy("lit-html",{createHTML:o=>o}):void 0,yt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,vt="?"+$,Mt=`<${vt}>`,b=document,M=()=>b.createComment(""),R=o=>o===null||typeof o!="object"&&typeof o!="function",st=Array.isArray,Rt=o=>st(o)||typeof o?.[Symbol.iterator]=="function",Z=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,mt=/>/g,y=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gt=/'/g,$t=/"/g,bt=/^(?:script|style|textarea|title)$/i,it=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),W=it(1),Ft=it(2),Kt=it(3),A=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),_t=new WeakMap,v=b.createTreeWalker(b,129);function At(o,t){if(!st(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ut!==void 0?ut.createHTML(t):t}var Nt=(o,t)=>{let e=o.length-1,s=[],i,r=t===2?"<svg>":t===3?"<math>":"",n=H;for(let l=0;l<e;l++){let a=o[l],p,d,c=-1,f=0;for(;f<a.length&&(n.lastIndex=f,d=n.exec(a),d!==null);)f=n.lastIndex,n===H?d[1]==="!--"?n=ft:d[1]!==void 0?n=mt:d[2]!==void 0?(bt.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=y):d[3]!==void 0&&(n=y):n===y?d[0]===">"?(n=i??H,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,p=d[1],n=d[3]===void 0?y:d[3]==='"'?$t:gt):n===$t||n===gt?n=y:n===ft||n===mt?n=H:(n=y,i=void 0);let g=n===y&&o[l+1].startsWith("/>")?" ":"";r+=n===H?a+Mt:c>=0?(s.push(p),a.slice(0,c)+yt+a.slice(c)+$+g):a+$+(c===-2?l:g)}return[At(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},N=class o{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0,l=t.length-1,a=this.parts,[p,d]=Nt(t,e);if(this.el=o.createElement(p,s),v.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=v.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(yt)){let f=d[n++],g=i.getAttribute(c).split($),L=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:L[2],strings:g,ctor:L[1]==="."?Q:L[1]==="?"?X:L[1]==="@"?Y:S}),i.removeAttribute(c)}else c.startsWith($)&&(a.push({type:6,index:r}),i.removeAttribute(c));if(bt.test(i.tagName)){let c=i.textContent.split($),f=c.length-1;if(f>0){i.textContent=B?B.emptyScript:"";for(let g=0;g<f;g++)i.append(c[g],M()),v.nextNode(),a.push({type:2,index:++r});i.append(c[f],M())}}}else if(i.nodeType===8)if(i.data===vt)a.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf($,c+1))!==-1;)a.push({type:7,index:r}),c+=$.length-1}r++}}static createElement(t,e){let s=b.createElement("template");return s.innerHTML=t,s}};function E(o,t,e=o,s){if(t===A)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,r=R(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=E(o,i._$AS(o,t.values),i,s)),t}var G=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??b).importNode(e,!0);v.currentNode=i;let r=v.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let p;a.type===2?p=new k(r,r.nextSibling,this,t):a.type===1?p=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(p=new tt(r,this,t)),this._$AV.push(p),a=s[++l]}n!==a?.index&&(r=v.nextNode(),n++)}return v.currentNode=b,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},k=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),R(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Rt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(At(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new G(i,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=_t.get(t.strings);return e===void 0&&_t.set(t.strings,e=new N(t)),e}k(t){st(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new o(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=dt(t).nextSibling;dt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},S=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,i){let r=this.strings,n=!1;if(r===void 0)t=E(this,t,e,0),n=!R(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{let l=t,a,p;for(t=r[0],a=0;a<r.length-1;a++)p=E(this,l[s+a],e,a),p===A&&(p=this._$AH[a]),n||=!R(p)||p!==this._$AH[a],p===h?t=h:t!==h&&(t+=(p??"")+r[a+1]),this._$AH[a]=p}n&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Q=class extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},X=class extends S{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},Y=class extends S{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??h)===A)return;let s=this._$AH,i=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},tt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var kt=et.litHtmlPolyfillSupport;kt?.(N,k),(et.litHtmlVersions??=[]).push("3.3.3");var xt=(o,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let r=e?.renderBefore??null;s._$litPart$=i=new k(t.insertBefore(M(),r),r,void 0,e??{})}return i._$AI(o),i};var ot=globalThis,u=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};u._$litElement$=!0,u.finalized=!0,ot.litElementHydrateSupport?.({LitElement:u});var Lt=ot.litElementPolyfillSupport;Lt?.({LitElement:u});(ot.litElementVersions??=[]).push("4.2.2");var zt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:I},Dt=(o=zt,t,e)=>{let{kind:s,metadata:i}=e,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),r.set(e.name,o),s==="accessor"){let{name:n}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,o,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,o,l),l}}}if(s==="setter"){let{name:n}=e;return function(l){let a=this[n];t.call(this,l),this.requestUpdate(n,a,o,!0,l)}}throw Error("Unsupported decorator location: "+s)};function x(o){return(t,e)=>typeof e=="object"?Dt(o,t,e):((s,i,r)=>{let n=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),n?Object.getOwnPropertyDescriptor(i,r):void 0})(o,t,e)}function rt(o){return x({...o,state:!0,attribute:!1})}var nt="Jellyfin",F="mdi:jellyfin",w=class extends u{constructor(){super(...arguments);this.jellyfinUrl="";this.closeButtonOffset=0}close(){this.remove()}render(){let e=this.closeButtonOffset?`right: calc(max(env(safe-area-inset-right, 0px), 8px) + ${this.closeButtonOffset}px)`:h;return W`
      <div class="frame-wrap">
        <iframe
          src=${this.jellyfinUrl}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <button class="close" style=${e} aria-label="Close" @click=${()=>this.close()}>
        <ha-icon icon="mdi:close"></ha-icon>
      </button>
    `}};w.styles=O`
    :host {
      position: fixed;
      inset: 0;
      /* Comfortably above HA's own app-layout/header/sidebar/dialogs, all of
         which sit well under six figures. */
      z-index: 2147483000;
      background: #111;
    }
    .frame-wrap {
      position: absolute;
      inset: 0;
      box-sizing: border-box;
      background: #111;
      /* With no top bar to absorb it, the top inset needs handling here too
         now — all four sides account for a tablet's notch/rounded-corner
         cutouts and on-screen Android/iOS gesture nav bars. */
      padding: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px)
        env(safe-area-inset-left, 0px);
    }
    iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
      background: #000;
    }
    .close {
      position: absolute;
      top: max(env(safe-area-inset-top, 0px), 8px);
      right: max(env(safe-area-inset-right, 0px), 8px);
      border: none;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.45);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
      color: #fff;
      cursor: pointer;
      opacity: 0.35;
      transition: opacity 0.15s ease;
    }
    .close:hover,
    .close:focus-visible,
    .close:active {
      opacity: 1;
    }
  `,_([x({attribute:!1})],w.prototype,"jellyfinUrl",2),_([x({attribute:!1,type:Number})],w.prototype,"closeButtonOffset",2);customElements.get("jellyfin-overlay")||customElements.define("jellyfin-overlay",w);var C=class extends u{setConfig(t){if(!t?.jellyfin_url)throw new Error("jellyfin_url is required");this.config={title:nt,icon:F,...t}}static getStubConfig(){return{jellyfin_url:"http://192.168.1.100:8096/web/",title:nt,icon:F}}static getConfigElement(){return document.createElement("jellyfin-overlay-card-editor")}getCardSize(){return 2}open(){if(!this.config)return;let t=document.createElement("jellyfin-overlay");t.jellyfinUrl=this.config.jellyfin_url,t.closeButtonOffset=this.config.close_button_offset??0,document.body.appendChild(t)}render(){return this.config?W`
      <ha-card @click=${()=>this.open()}>
        <ha-icon icon=${this.config.icon||F}></ha-icon>
        <span class="title">${this.config.title}</span>
      </ha-card>
    `:h}};C.styles=O`
    ha-card {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      min-height: 48px;
    }
    ha-card:active {
      opacity: 0.8;
    }
    ha-icon {
      --mdc-icon-size: 32px;
      color: var(--paper-item-icon-color, var(--state-icon-color, #44739e));
    }
    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
  `,_([x({attribute:!1})],C.prototype,"hass",2),_([rt()],C.prototype,"config",2);customElements.get("jellyfin-overlay-card")||customElements.define("jellyfin-overlay-card",C);var P=class extends u{setConfig(t){this._config=t}updateConfig(t){this._config&&(this._config={...this._config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}render(){return this._config?W`
      <div class="row">
        <label>Jellyfin URL</label>
        <input
          type="text"
          placeholder="http://192.168.1.100:8096/web/"
          .value=${this._config.jellyfin_url??""}
          @input=${t=>this.updateConfig({jellyfin_url:t.target.value})}
        />
        <span class="hint"
          >Base URL of your Jellyfin web client, including the /web/ path. http and https both work.</span
        >
      </div>

      <div class="row">
        <label>Title</label>
        <input
          type="text"
          placeholder=${nt}
          .value=${this._config.title??""}
          @input=${t=>this.updateConfig({title:t.target.value})}
        />
      </div>

      <div class="row">
        <label>Icon</label>
        <input
          type="text"
          placeholder=${F}
          .value=${this._config.icon??""}
          @input=${t=>this.updateConfig({icon:t.target.value})}
        />
        <span class="hint">Any Material Design Icon name, e.g. mdi:jellyfin or mdi:play-box-multiple.</span>
      </div>

      <div class="row">
        <label>Close button offset (px)</label>
        <input
          type="number"
          inputmode="numeric"
          placeholder="0"
          .value=${this._config.close_button_offset??0}
          @input=${t=>this.updateConfig({close_button_offset:Number(t.target.value)||0})}
        />
        <span class="hint"
          >Shifts the floating close button further left, in pixels — useful if it overlaps Jellyfin's own
          on-screen controls (e.g. its Chromecast button) in that corner.</span
        >
      </div>
    `:h}};P.styles=O`
    .row {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 16px;
    }
    label {
      font-size: 14px;
      font-weight: 600;
    }
    .hint {
      font-size: 12px;
      color: var(--secondary-text-color, #757575);
      margin-top: -2px;
    }
    input {
      min-height: 40px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      color: inherit;
      font-size: 14px;
      padding: 0 10px;
      box-sizing: border-box;
      font-family: inherit;
    }
  `,_([x({attribute:!1})],P.prototype,"hass",2),_([rt()],P.prototype,"_config",2);customElements.get("jellyfin-overlay-card-editor")||customElements.define("jellyfin-overlay-card-editor",P);window.customCards=window.customCards||[];window.customCards.push({type:"jellyfin-overlay-card",name:"Jellyfin Overlay Card",description:"Pops out a Jellyfin web client full-screen over the dashboard from a tap.",preview:!1});
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/

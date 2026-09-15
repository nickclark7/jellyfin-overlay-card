var Et=Object.defineProperty;var wt=Object.getOwnPropertyDescriptor;var y=(r,t,e,s)=>{for(var i=s>1?void 0:s?wt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Et(t,e,i),i};var D=globalThis,q=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),at=new WeakMap,U=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(q&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=at.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&at.set(e,t))}return t}toString(){return this.cssText}},lt=r=>new U(typeof r=="string"?r:r+"",void 0,J),j=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new U(e,r,J)},ct=(r,t)=>{if(q)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=D.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Z=q?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return lt(e)})(r):r;var{is:St,defineProperty:Ct,getOwnPropertyDescriptor:Pt,getOwnPropertyNames:Ut,getOwnPropertySymbols:jt,getPrototypeOf:Tt}=Object,I=globalThis,ht=I.trustedTypes,Ht=ht?ht.emptyScript:"",Mt=I.reactiveElementPolyfillSupport,T=(r,t)=>r,H={toAttribute(r,t){switch(t){case Boolean:r=r?Ht:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},B=(r,t)=>!St(r,t),pt={attribute:!0,type:String,converter:H,reflect:!1,useDefault:!1,hasChanged:B};Symbol.metadata??=Symbol("metadata"),I.litPropertyMetadata??=new WeakMap;var m=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=pt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ct(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:o}=Pt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let l=i?.call(this);o?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??pt}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;let t=Tt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){let e=this.properties,s=[...Ut(e),...jt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(Z(i))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ct(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:H).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:H;this._$Em=i;let l=n.fromAttribute(e,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(t!==void 0){let n=this.constructor;if(i===!1&&(o=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??B)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,o]of s){let{wrapped:n}=o,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};m.elementStyles=[],m.shadowRootOptions={mode:"open"},m[T("elementProperties")]=new Map,m[T("finalized")]=new Map,Mt?.({ReactiveElement:m}),(I.reactiveElementVersions??=[]).push("2.1.2");var st=globalThis,dt=r=>r,V=st.trustedTypes,ut=V?V.createPolicy("lit-html",{createHTML:r=>r}):void 0,_t="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,vt="?"+$,kt=`<${vt}>`,b=document,k=()=>b.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",it=Array.isArray,Ot=r=>it(r)||typeof r?.[Symbol.iterator]=="function",G=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,mt=/>/g,_=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gt=/'/g,$t=/"/g,bt=/^(?:script|style|textarea|title)$/i,rt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),W=rt(1),Ft=rt(2),Kt=rt(3),A=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),yt=new WeakMap,v=b.createTreeWalker(b,129);function At(r,t){if(!it(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ut!==void 0?ut.createHTML(t):t}var Rt=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=M;for(let l=0;l<e;l++){let a=r[l],p,d,c=-1,f=0;for(;f<a.length&&(n.lastIndex=f,d=n.exec(a),d!==null);)f=n.lastIndex,n===M?d[1]==="!--"?n=ft:d[1]!==void 0?n=mt:d[2]!==void 0?(bt.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=_):d[3]!==void 0&&(n=_):n===_?d[0]===">"?(n=i??M,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,p=d[1],n=d[3]===void 0?_:d[3]==='"'?$t:gt):n===$t||n===gt?n=_:n===ft||n===mt?n=M:(n=_,i=void 0);let g=n===_&&r[l+1].startsWith("/>")?" ":"";o+=n===M?a+kt:c>=0?(s.push(p),a.slice(0,c)+_t+a.slice(c)+$+g):a+$+(c===-2?l:g)}return[At(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},R=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[p,d]=Rt(t,e);if(this.el=r.createElement(p,s),v.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=v.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(_t)){let f=d[n++],g=i.getAttribute(c).split($),z=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:z[2],strings:g,ctor:z[1]==="."?X:z[1]==="?"?Y:z[1]==="@"?tt:w}),i.removeAttribute(c)}else c.startsWith($)&&(a.push({type:6,index:o}),i.removeAttribute(c));if(bt.test(i.tagName)){let c=i.textContent.split($),f=c.length-1;if(f>0){i.textContent=V?V.emptyScript:"";for(let g=0;g<f;g++)i.append(c[g],k()),v.nextNode(),a.push({type:2,index:++o});i.append(c[f],k())}}}else if(i.nodeType===8)if(i.data===vt)a.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf($,c+1))!==-1;)a.push({type:7,index:o}),c+=$.length-1}o++}}static createElement(t,e){let s=b.createElement("template");return s.innerHTML=t,s}};function E(r,t,e=r,s){if(t===A)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,o=O(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=E(r,i._$AS(r,t.values),i,s)),t}var Q=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??b).importNode(e,!0);v.currentNode=i;let o=v.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let p;a.type===2?p=new N(o,o.nextSibling,this,t):a.type===1?p=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(p=new et(o,this,t)),this._$AV.push(p),a=s[++l]}n!==a?.index&&(o=v.nextNode(),n++)}return v.currentNode=b,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},N=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),O(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ot(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=R.createElement(At(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new Q(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=yt.get(t.strings);return e===void 0&&yt.set(t.strings,e=new R(t)),e}k(t){it(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new r(this.O(k()),this.O(k()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=dt(t).nextSibling;dt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},w=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=E(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{let l=t,a,p;for(t=o[0],a=0;a<o.length-1;a++)p=E(this,l[s+a],e,a),p===A&&(p=this._$AH[a]),n||=!O(p)||p!==this._$AH[a],p===h?t=h:t!==h&&(t+=(p??"")+o[a+1]),this._$AH[a]=p}n&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},X=class extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},Y=class extends w{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},tt=class extends w{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??h)===A)return;let s=this._$AH,i=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},et=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var Nt=st.litHtmlPolyfillSupport;Nt?.(R,N),(st.litHtmlVersions??=[]).push("3.3.3");var xt=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let o=e?.renderBefore??null;s._$litPart$=i=new N(t.insertBefore(k(),o),o,void 0,e??{})}return i._$AI(r),i};var ot=globalThis,u=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};u._$litElement$=!0,u.finalized=!0,ot.litElementHydrateSupport?.({LitElement:u});var Lt=ot.litElementPolyfillSupport;Lt?.({LitElement:u});(ot.litElementVersions??=[]).push("4.2.2");var zt={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:B},Dt=(r=zt,t,e)=>{let{kind:s,metadata:i}=e,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){let{name:n}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,r,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,r,l),l}}}if(s==="setter"){let{name:n}=e;return function(l){let a=this[n];t.call(this,l),this.requestUpdate(n,a,r,!0,l)}}throw Error("Unsupported decorator location: "+s)};function x(r){return(t,e)=>typeof e=="object"?Dt(r,t,e):((s,i,o)=>{let n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}function nt(r){return x({...r,state:!0,attribute:!1})}var L="Jellyfin",K="mdi:jellyfin",S=class extends u{constructor(){super(...arguments);this.jellyfinUrl="";this.label=L}close(){this.remove()}render(){return W`
      <div class="bar">
        <span class="title">${this.label}</span>
        <button class="close" aria-label="Close" @click=${()=>this.close()}>
          <ha-icon icon="mdi:close"></ha-icon>
        </button>
      </div>
      <div class="frame-wrap">
        <iframe
          src=${this.jellyfinUrl}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    `}};S.styles=j`
    :host {
      position: fixed;
      inset: 0;
      /* Comfortably above HA's own app-layout/header/sidebar/dialogs, all of
         which sit well under six figures. */
      z-index: 2147483000;
      display: flex;
      flex-direction: column;
      background: var(--primary-background-color, #111);
    }
    .bar {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      /* env(safe-area-inset-*) accounts for notches and the top status bar
         on a wall-mounted tablet; the max() keeps a sane minimum padding on
         devices that don't report a safe-area inset at all. */
      padding: max(env(safe-area-inset-top, 0px), 8px) max(env(safe-area-inset-right, 0px), 8px) 8px
        max(env(safe-area-inset-left, 0px), 16px);
      background: var(--app-header-background-color, var(--primary-background-color, #111));
      color: var(--app-header-text-color, var(--primary-text-color, #fff));
      border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
    }
    .title {
      font-size: 16px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .close {
      flex-shrink: 0;
      border: none;
      background: transparent;
      color: inherit;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .close:active {
      background: var(--divider-color, rgba(255, 255, 255, 0.12));
    }
    .frame-wrap {
      flex: 1;
      min-height: 0;
      box-sizing: border-box;
      background: var(--primary-background-color, #111);
      /* Left/right insets handle a landscape tablet's notch/rounded-corner
         cutouts; the bottom inset leaves clearance above an on-screen
         Android/iOS gesture nav bar instead of letting Jellyfin's own UI
         render underneath it. */
      padding: 0 env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px);
    }
    iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
      background: #000;
    }
  `,y([x({attribute:!1})],S.prototype,"jellyfinUrl",2),y([x({attribute:!1})],S.prototype,"label",2);customElements.get("jellyfin-overlay")||customElements.define("jellyfin-overlay",S);var C=class extends u{setConfig(t){if(!t?.jellyfin_url)throw new Error("jellyfin_url is required");this.config={title:L,icon:K,...t}}static getStubConfig(){return{jellyfin_url:"http://192.168.1.100:8096/web/",title:L,icon:K}}static getConfigElement(){return document.createElement("jellyfin-overlay-card-editor")}getCardSize(){return 2}open(){if(!this.config)return;let t=document.createElement("jellyfin-overlay");t.jellyfinUrl=this.config.jellyfin_url,t.label=this.config.title??L,document.body.appendChild(t)}render(){return this.config?W`
      <ha-card @click=${()=>this.open()}>
        <ha-icon icon=${this.config.icon||K}></ha-icon>
        <span class="title">${this.config.title}</span>
      </ha-card>
    `:h}};C.styles=j`
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
  `,y([x({attribute:!1})],C.prototype,"hass",2),y([nt()],C.prototype,"config",2);customElements.get("jellyfin-overlay-card")||customElements.define("jellyfin-overlay-card",C);var P=class extends u{setConfig(t){this._config=t}updateConfig(t){this._config&&(this._config={...this._config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0})))}render(){return this._config?W`
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
          placeholder=${L}
          .value=${this._config.title??""}
          @input=${t=>this.updateConfig({title:t.target.value})}
        />
      </div>

      <div class="row">
        <label>Icon</label>
        <input
          type="text"
          placeholder=${K}
          .value=${this._config.icon??""}
          @input=${t=>this.updateConfig({icon:t.target.value})}
        />
        <span class="hint">Any Material Design Icon name, e.g. mdi:jellyfin or mdi:play-box-multiple.</span>
      </div>
    `:h}};P.styles=j`
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
  `,y([x({attribute:!1})],P.prototype,"hass",2),y([nt()],P.prototype,"_config",2);customElements.get("jellyfin-overlay-card-editor")||customElements.define("jellyfin-overlay-card-editor",P);window.customCards=window.customCards||[];window.customCards.push({type:"jellyfin-overlay-card",name:"Jellyfin Overlay Card",description:"Pops out a Jellyfin web client full-screen over the dashboard from a tap.",preview:!1});
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

var c=Object.defineProperty;var u=(n,i,t)=>i in n?c(n,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[i]=t;var d=(n,i,t)=>(u(n,typeof i!="symbol"?i+"":i,t),t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const h=`
  <style>
    * {
      line-height: 130%;
    }

    .slider {
      position: relative;
      height: 100%;
    }

    .slider__button-left {
      position: absolute;
      top: calc(50% - 36px);
      left: 2%;
      z-index: 2;
      padding: 0px 16px 3px 14px;
    }

    .slider__button-right {
      position: absolute;
      top: calc(50% - 36px);
      right: 2%;
      z-index: 2;
      padding: 0px 16px 3px 16px;
    }

    .slider__button-left,
    .slider__button-right {
      background: white;
      border-radius: 50px;
      box-shadow: 0px 0px 15px 0px rgba(34, 60, 80, 0.2);
      font-size: 28px;
      user-select: none;
      cursor: pointer;
      transition: 0.3s;
    }

    .slider__button-left:hover,
    .slider__button-right:hover {
      background: #c2cca7;
    }

    .slider__content {
      position: relative;
      // width: calc(100% - 8px);
      height: calc(100% - 8px);
      overflow: hidden;
      padding: 4px;
    }

    .slider__img {
      width: auto;
      max-width: 100%;
      max-height: 100%;
      border-radius: 8px;
    }

    .slider__img-wrapper {
      position: absolute;
      top: 0;
      left: var(--left-position, 0px);
      
      width: calc(100% - 16px);
      height: calc(100% - 16px);
      transition: 0.6s;
      padding: 8px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
`;class p extends HTMLElement{constructor(){super();d(this,"slotsImageSources");d(this,"currentIndex");d(this,"maxHeight");this.slotsImageSources=[],this.currentIndex=0,this.maxHeight=0}connectedCallback(){this.attachShadow({mode:"open"});const t=(l,r)=>`
      <div style="--left-position: ${(r-this.currentIndex)*100+"%"}" class="slider__img-wrapper">
        <img class="slider__img" src="${l}" />
      </div>
    `;if(!this.shadowRoot)return;this.shadowRoot.innerHTML=`
      ${h}

      <div class="slider">
        <div id="button-left" class="slider__button-left">\u2039</div>
        <div id="content" class="slider__content">${this.slotsImageSources.map(t).join("")}</div>
        <div id="button-right" class="slider__button-right">\u203A</div>
      </div>
    `;const s=this.shadowRoot.getElementById("content"),e=this.shadowRoot.getElementById("button-left"),o=this.shadowRoot.getElementById("button-right");this.updateArrowsVisibility(),s&&(!e||!o||(e.style.display="none",this.slotsImageSources.length<=1&&(o.style.display="none"),e.addEventListener("click",()=>{this.currentIndex>0&&(this.currentIndex-=1,[...s.children].forEach((r,a)=>{r.style.setProperty("--left-position",(a-this.currentIndex)*100+"%")}),this.updateArrowsVisibility())}),o.addEventListener("click",()=>{this.currentIndex<this.slotsImageSources.length-1&&(this.currentIndex+=1,[...s.children].forEach((r,a)=>{r.style.setProperty("--left-position",(a-this.currentIndex)*100+"%")}),this.updateArrowsVisibility())})))}static get observedAttributes(){return["slots"]}attributeChangedCallback(t,s,e){t==="slots"&&(this.slotsImageSources=JSON.parse(e))}updateArrowsVisibility(){if(!this.shadowRoot)return;const t=this.shadowRoot.getElementById("button-left"),s=this.shadowRoot.getElementById("button-right");!t||!s||(this.currentIndex===0?t.style.display="none":t.style.display="block",this.currentIndex===this.slotsImageSources.length-1?s.style.display="none":s.style.display="block",this.slotsImageSources.length<=1&&(t.style.display="none",s.style.display="none"))}}const m=`
  <style>
    .tooltip {
      position: relative;
    }

    .tooltip:hover .tooltip-value {
      visibility: visible;
      opacity: 1;

      top: 0;
      left: 0;
    }

    .tooltip-value {
      position: absolute;
      top: 0;
      left: -50%;
      z-index: 5;
  
      visibility: hidden;
      opacity: 0;
      transition: 0.3s;
  
      background: rgba(0, 117, 129, 0.5);
      color: white;
      line-height: 0.5rem;
      border-radius: 0.75rem;
    }

    @media(min-width: 701px) {
      .tooltip-value {
        font-size: 1.1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    @media(max-width: 700px) {
      .tooltip-value {
        font-size: 0.8rem;
        padding: 0.3rem 0.8rem;
      }
    }

    @media(max-width: 500px) {
      .tooltip-value {
        font-size: 0.6rem;
        padding: 0.4rem 0.6rem;
      }
    }
  </style>
`;class g extends HTMLElement{constructor(){super()}connectedCallback(){if(this.attachShadow({mode:"open"}),!this.shadowRoot)return;this.shadowRoot.innerHTML=`
      ${m}

      <div id="tooltip" class="tooltip">
        <div id="tooltip-value" class="tooltip-value">
          <slot name="value"></slot>
        </div>

        <slot name="target"></slot>
      </div>
    `;const i=this.shadowRoot.getElementById("tooltip"),t=this.shadowRoot.getElementById("tooltip-value");i&&i.addEventListener("mouseover",()=>{t&&(t.style.marginLeft=`calc(50% - ${t.getBoundingClientRect().width/2}px)`)}),this.getAttribute("bottom")!==null&&this.updateBottom()}static get observedAttributes(){return["bottom"]}attributeChangedCallback(i,t,s){i==="bottom"&&this.updateBottom()}updateBottom(){if(this.shadowRoot){const i=this.shadowRoot.getElementById("tooltip-value");if(i){const t=this.shadowRoot.getElementById("tooltip");t&&(i.style.marginTop=`calc(100% + ${t.getBoundingClientRect().height}px / 2)`)}}}}customElements.define("custom-image-slider",p);customElements.define("custom-tooltip",g);

const styleTag = `
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
      font-size: 1.1rem;
      line-height: 1rem;
      border-radius: 1rem;
      padding: 0.6rem 1.2rem;
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
        padding: 0.2rem 0.6rem;
      }
    }
  </style>
`

export class Tooltip extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      ${styleTag}

      <div id="tooltip" class="tooltip">
        <div id="tooltip-value" class="tooltip-value">
          <slot name="value"></slot>
        </div>

        <slot name="target"></slot>
      </div>
    `;

    const tooltipElement = this.shadowRoot.getElementById("tooltip")
    const tooltipValueElement = this.shadowRoot.getElementById("tooltip-value")

    tooltipElement.addEventListener("mouseover", () => {
      tooltipValueElement.style.marginLeft = `calc(50% - ${tooltipValueElement.getBoundingClientRect().width / 2}px)`
    })
    tooltipElement.addEventListener("mouseout", () => {
      //
    })
  }

  static get observedAttributes() { return ['slots']; }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'slots') {
      // 
    }
  }
}
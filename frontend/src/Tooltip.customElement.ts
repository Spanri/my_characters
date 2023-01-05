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
`;

export class Tooltip extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });

    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      ${styleTag}

      <div id="tooltip" class="tooltip">
        <div id="tooltip-value" class="tooltip-value">
          <slot name="value"></slot>
        </div>

        <slot name="target"></slot>
      </div>
    `;

    const tooltipElement = this.shadowRoot.getElementById("tooltip");
    const tooltipValueElement = this.shadowRoot.getElementById("tooltip-value");

    if (tooltipElement) {
      tooltipElement.addEventListener("mouseover", () => {
        if (tooltipValueElement) {
          tooltipValueElement.style.marginLeft = `calc(50% - ${
            tooltipValueElement.getBoundingClientRect().width / 2
          }px)`;
        }
      });
    }

    if(this.getAttribute("bottom") !== null) {
      this.updateBottom()
    }
  }

  static get observedAttributes() {
    return ["bottom"];
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    if (name === "bottom") {
      this.updateBottom()
    }
  }

  updateBottom() {
    if(this.shadowRoot) {
      const tooltipValueElement = this.shadowRoot.getElementById("tooltip-value");
      if(tooltipValueElement) {
        const tooltipElement = this.shadowRoot.getElementById("tooltip");
        if(tooltipElement) {
          tooltipValueElement.style.marginTop = `calc(100% + ${tooltipElement.getBoundingClientRect().height}px / 2)`
        }
      }
    }
  }
}

const styleTag = `
  <style>
    .slider {
      position: relative;
      height: 100%;
    }

    .slider__button-left {
      position: absolute;
      top: calc(50% - 36px);
      left: 2%;
      z-index: 2;
    }

    .slider__button-right {
      position: absolute;
      top: calc(50% - 36px);
      right: 2%;
      z-index: 2;
    }

    .slider__button-left,
    .slider__button-right {
      background: white;
      padding: 0px 16px;
      border-radius: 50px;
      box-shadow: 0px 0px 15px 0px rgba(34, 60, 80, 0.2);
      font-size: 28px;
      cursor: pointer;
      transition: 0.3s;
    }

    .slider__button-left:hover,
    .slider__button-right:hover {
      background: #c2cca7;
    }

    .slider__content {
      position: relative;
      width: 500px;
      height: 100%;
      overflow: hidden;
    }

    .slider__img {
      position: absolute;
      top: 0;
      left: var(--left-position);
      height: 100%;
      transition: 0.6s;
    }
  </style>
`

export class ImageSlider extends HTMLElement {
  constructor() {
    super();
    this.slotsImageSources = []
    this.currentIndex = 0
    this.maxHeight = 0
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    const getImgTag = (source, index) => `<img style="--left-position: ${(index - this.currentIndex) * 100 + '%'}" class="slider__img" src="${source}" width="500" />`

    this.shadowRoot.innerHTML = `
      ${styleTag}

      <div class="slider">
        <div id="button-left" class="slider__button-left">‹</div>
        <div id="content" class="slider__content">${this.slotsImageSources.map(getImgTag).join("")}</div>
        <div id="button-right" class="slider__button-right">›</div>
      </div>
    `;

    const contentElement = this.shadowRoot.getElementById("content")
    const contentItems = [...contentElement.children]
    contentItems.forEach((contentItem, index) => {
      const rect = contentItem.getBoundingClientRect()
      if(rect.height > this.maxHeight) {
        this.maxHeight = rect.height
      }
    })        
    contentElement.style.height = this.maxHeight + 'px'

    const buttonLeftElement = this.shadowRoot.getElementById("button-left")
    const buttonRightElement = this.shadowRoot.getElementById("button-right")

    buttonLeftElement.addEventListener("click", (event) => {
      if(this.currentIndex > 0) {
        this.currentIndex -= 1

        const contentItems = [...contentElement.children]
        contentItems.forEach((contentItem, index) => {
          contentItem.style.setProperty('--left-position', (index - this.currentIndex) * 100 + '%');
        })
        
        if(this.currentIndex === 0) {
          buttonLeftElement.style.display = 'none'
        }

        buttonRightElement.style.display = 'block'
      }
    })

    buttonRightElement.addEventListener("click", (event) => {
      if(this.currentIndex < this.slotsImageSources.length - 1) {
        this.currentIndex += 1

        const contentItems = [...contentElement.children]
        contentItems.forEach((contentItem, index) => {
          contentItem.style.setProperty('--left-position', (index - this.currentIndex) * 100 + '%');
        })

        if(this.currentIndex === this.slotsImageSources.length - 1) {
          buttonRightElement.style.display = 'none'
        }

        buttonLeftElement.style.display = 'block'
      }
    })
  }

  static get observedAttributes() { return ['slots']; }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'slots') {
      this.slotsImageSources = JSON.parse(newValue)
    }
  }
}
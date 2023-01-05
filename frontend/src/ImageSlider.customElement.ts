const styleTag = `
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
`;

export class ImageSlider extends HTMLElement {
  slotsImageSources: string[];
  currentIndex: number;
  maxHeight: number;

  constructor() {
    super();
    this.slotsImageSources = [];
    this.currentIndex = 0;
    this.maxHeight = 0;
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });

    const getImgTag = (source: string, index: number) => `
      <div style="--left-position: ${
        (index - this.currentIndex) * 100 + "%"
      }" class="slider__img-wrapper">
        <img class="slider__img" src="${source}" />
      </div>
    `;

    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      ${styleTag}

      <div class="slider">
        <div id="button-left" class="slider__button-left">‹</div>
        <div id="content" class="slider__content">${this.slotsImageSources
          .map(getImgTag)
          .join("")}</div>
        <div id="button-right" class="slider__button-right">›</div>
      </div>
    `;

    const contentElement: any = this.shadowRoot.getElementById("content");
    const buttonLeftElement = this.shadowRoot.getElementById("button-left");
    const buttonRightElement = this.shadowRoot.getElementById("button-right");

    this.updateArrowsVisibility();

    if (!contentElement) return;
    if (!buttonLeftElement) return;
    if (!buttonRightElement) return;

    // на первом итеме скрываем стрелочку влево
    buttonLeftElement.style.display = "none";

    if (this.slotsImageSources.length <= 1) {
      buttonRightElement.style.display = "none";
    }

    buttonLeftElement.addEventListener("click", () => {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;

        const contentItems = [...contentElement.children];
        contentItems.forEach((contentItem, index) => {
          contentItem.style.setProperty(
            "--left-position",
            (index - this.currentIndex) * 100 + "%"
          );
        });

        this.updateArrowsVisibility();
      }
    });

    buttonRightElement.addEventListener("click", () => {
      if (this.currentIndex < this.slotsImageSources.length - 1) {
        this.currentIndex += 1;

        const contentItems = [...contentElement.children];
        contentItems.forEach((contentItem, index) => {
          contentItem.style.setProperty(
            "--left-position",
            (index - this.currentIndex) * 100 + "%"
          );
        });

        this.updateArrowsVisibility();
      }
    });
  }

  static get observedAttributes() {
    return ["slots"];
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    if (name === "slots") {
      this.slotsImageSources = JSON.parse(newValue);
    }
  }

  updateArrowsVisibility() {
    if (!this.shadowRoot) return;

    const buttonLeftElement = this.shadowRoot.getElementById("button-left");
    const buttonRightElement = this.shadowRoot.getElementById("button-right");

    if (!buttonLeftElement) return;
    if (!buttonRightElement) return;

    if (this.currentIndex === 0) {
      buttonLeftElement.style.display = "none";
    } else {
      buttonLeftElement.style.display = "block";
    }

    if (this.currentIndex === this.slotsImageSources.length - 1) {
      buttonRightElement.style.display = "none";
    } else {
      buttonRightElement.style.display = "block";
    }

    if (this.slotsImageSources.length <= 1) {
      buttonLeftElement.style.display = "none";
      buttonRightElement.style.display = "none";
    }
  }
}

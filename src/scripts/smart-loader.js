import { highResImages } from "./image-map.js";

class SmartLoader {
  constructor() {
    this.imagesToLoad = [];
  }

  findImages() {
    document.querySelectorAll("[data-image-id]").forEach((element) => {
      const id = element.dataset.imageId;
      const highSrc = highResImages[id];

      if (highSrc) {
        const type = element.tagName === "IMG" ? "img" : "bg";

        this.imagesToLoad.push({
          element: element,
          highSrc: highSrc,
          type: type,
        });
      }
    });
  }

  preloadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img
        .decode()
        .then(() => resolve(src))
        .catch(() => reject(new Error(`download error: ${src}`)));
    });
  }

  async preloadAll() {
    const promises = this.imagesToLoad.map((item) =>
      this.preloadImage(item.highSrc)
    );

    try {
      await Promise.all(promises);
      return true;
    } catch (error) {
      console.error("SmartLoader: error download images", error);
      return false;
    }
  }

  swapImages() {
    this.imagesToLoad.forEach((item) => {
      if (item.type === "img") {
        item.element.src = item.highSrc;
      } else if (item.type === "bg") {
        item.element.style.backgroundImage = `url(${item.highSrc})`;
      }
      item.element.classList.add("smart-loaded");
    });
  }

  async run() {
    this.findImages();

    if (this.imagesToLoad.length === 0) {
      console.log("SmartLoader: dont find images with data-atribut");
      return;
    }

    const successful = await this.preloadAll();

    if (successful) {
      this.swapImages();
    } else {
      console.warn("SmartLoader: change images error download");
    }
  }
}

const loader = new SmartLoader();
loader.run();

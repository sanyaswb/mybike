/*
 * smart-loader.js
 * (Оновлена версія з коректною обробкою помилок)
 */
class SmartLoader {
  constructor() {
    this.imagesToLoad = [];
  }

  /**
   * Знаходить всі елементи на сторінці, які потрібно замінити.
   */
  findImages() {
    document.querySelectorAll("[data-src-high]").forEach((imgElement) => {
      this.imagesToLoad.push({
        element: imgElement,
        highSrc: imgElement.dataset.srcHigh,
        type: "img",
      });
    });

    document.querySelectorAll("[data-bg-high]").forEach((bgElement) => {
      this.imagesToLoad.push({
        element: bgElement,
        highSrc: bgElement.dataset.bgHigh,
        type: "bg",
      });
    });

    console.log(
      `SmartLoader: Знайдено ${this.imagesToLoad.length} зображень для заміни.`
    );
  }

  /**
   * Завантажує одне зображення в пам'ять.
   */
  preloadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      // ВАЖЛИВО: Використовуємо `decode()` для повної впевненості, що зображення готове
      img
        .decode()
        .then(() => resolve(src))
        .catch(() => reject(new Error(`Не вдалося завантажити ${src}`)));

      // Старий метод (також працює, але decode краще)
      // img.onload = () => resolve(src);
      // img.onerror = () => reject(new Error(`Не вдалося завантажити ${src}`));
    });
  }

  /**
   * Запускає завантаження всіх знайдених зображень високої якості.
   * (ОНОВЛЕНО: повертає true/false)
   */
  async preloadAll() {
    const promises = this.imagesToLoad.map((item) =>
      this.preloadImage(item.highSrc)
    );

    try {
      // Promise.all чекає на всі, або "падає" на першій помилці
      await Promise.all(promises);
      console.log("SmartLoader: Усі зображення високої якості завантажено.");
      return true; // Повертаємо успіх
    } catch (error) {
      console.error(
        "SmartLoader: Помилка під час завантаження зображень.",
        error
      );
      return false; // Повертаємо невдачу
    }
  }

  /**
   * Замінює зображення на сторінці.
   */
  swapImages() {
    this.imagesToLoad.forEach((item) => {
      if (item.type === "img") {
        item.element.src = item.highSrc;
      } else if (item.type === "bg") {
        item.element.style.backgroundImage = `url(${item.highSrc})`;
      }
      item.element.classList.add("smart-loaded");
    });

    console.log("SmartLoader: Усі зображення замінено на високу якість.");
  }

  /**
   * Головна функція запуску
   * (ОНОВЛЕНО: перевіряє результат перед заміною)
   */
  async run() {
    document.addEventListener("DOMContentLoaded", async () => {
      this.findImages();

      if (this.imagesToLoad.length === 0) {
        console.log("SmartLoader: Не знайдено зображень з data-атрибутами.");
        return;
      }

      console.log(
        "SmartLoader: Сторінка завантажена. Починаю завантаження high-res у фоні."
      );

      // 1. Чекаємо на результат завантаження
      const successful = await this.preloadAll();

      // 2. Замінюємо, ТІЛЬКИ ЯКЩО все пройшло успішно
      if (successful) {
        this.swapImages();
      } else {
        console.warn(
          "SmartLoader: Заміна зображень скасована через помилки завантаження."
        );
      }
    });
  }
}

// Запускаємо наш "Розумний Завантажувач"
const loader = new SmartLoader();
loader.run();

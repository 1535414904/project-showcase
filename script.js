const siteConfig = {
  // 你要修改網站內容時，優先改這一區。
  siteTitle: "全國專題競賽作品展示",
  siteDescription: "全國專題競賽作品展示頁，整合影片、海報、簡報、補充資料與聯絡方式。",
  youtubeUrl: "https://youtu.be/ia96zwjq1Qg",
  nav: {
    overview: "總覽",
    video: "影片",
    poster: "海報",
    slides: "簡報",
    extra: "補充",
    contact: "聯絡",
  },
  hero: {
    eyebrow: "全國專題競賽展示頁",
    title: "自適應模擬退火方法應用於手術排程系統設計與實作 - 作品導覽",
    description:
      "本頁整合介紹影片、A1 海報、競賽簡報、補充資料與聯絡方式，適合放在名片、展場桌牌或口頭簡報結尾，讓評審與觀眾可以快速延伸閱讀。",
    primaryButton: "開始瀏覽",
    secondaryButton: "查看簡報展示",
  },
  sections: {
    overview: {
      eyebrow: "01 / Overview",
      title: "作品總覽",
      description: "先整理專題名稱、問題背景、解決方法、成果亮點與展示素材，讓評審能快速掌握整體架構。",
    },
    video: {
      eyebrow: "02 / Video",
      title: "作品影片",
      description:
        "透過影片快速掌握作品動機、系統設計與實際展示成果，作為瀏覽完整資料前的重點導覽。",
    },
    poster: {
      eyebrow: "03 / Poster",
      title: "A1 海報展示",
      description: "以逐頁方式呈現海報內容，方便在手機與桌機上快速瀏覽作品架構與研究成果。",
    },
    slides: {
      eyebrow: "04 / Slides",
      title: "簡報展示",
      description: "整理競賽簡報重點，涵蓋問題背景、系統架構、實作方法、展示成果與未來發展。",
    },
    extra: {
      eyebrow: "05 / Extra",
      title: "補充展示資料",
      description: "補充展場展示資訊，協助觀眾從不同角度理解作品應用情境與展示配置。",
    },
    contact: {
      eyebrow: "06 / Contact",
      title: "聯絡與作品資訊",
      description: "整理評審或觀眾延伸聯繫時會需要的資訊，內容都可以在 script.js 開頭直接修改。",
    },
  },
  overview: {
    cards: [
      {
        label: "專題名稱",
        title: "自適應模擬退火方法應用於手術排程系統設計與實作",
        description: "用一句話說明作品主題與應用情境。",
      },
      {
        label: "問題背景",
        title: "手術排程容易受加班、超時與資源配置影響",
        description: "說明作品想解決的痛點、使用者與現場情境。",
      },
      {
        label: "解決方法",
        title: "以自適應模擬退火改善排程穩定性",
        description: "說明核心方法、系統功能與作品特色。",
      },
      {
        label: "成果亮點",
        title: "降低排程衝突並提升展示與決策效率",
        description: "放量化成果、展示結果、競賽亮點或使用價值。",
      },
    ],
  },
  video: {
    placeholderBig: "Video",
    placeholderTitle: "作品介紹影片",
    placeholderText: "影片內容載入中",
  },
  poster: {
    cardLabel: "海報展示",
    cardTitle: "A1 海報展示",
    pageMode: "1 至 3 頁",
  },
  slides: {
    cardLabel: "簡報展示",
    cardTitle: "競賽簡報展示",
    pageMode: "1 至 28 頁",
  },
  extra: {
    cardLabel: "補充資料",
    cardTitle: "補充展示圖",
    pageMode: "展示資料",
  },
  contact: {
    cards: [
      {
        label: "專題名稱",
        title: "自適應模擬退火方法應用於手術排程系統設計與實作",
        description: "可放完整專題名稱、競賽組別或作品一句話簡介。",
      },
      {
        label: "團隊資訊",
        title: "學校 / 科系 / 團隊名稱",
        description: "可放學校、科系、指導老師、組員姓名。",
      },
      {
        label: "聯絡方式",
        title: "email@example.com",
        description: "可放 Email、電話、Line ID 或其他希望評審聯繫的方式。",
      },
      {
        label: "作品連結",
        title: "GitHub / Demo / QR Code",
        description: "可放程式碼、系統展示、簡報檔或 QR Code 指向的公開連結。",
      },
    ],
  },
  footer: {
    text: "全國專題競賽作品展示頁",
    backToTop: "回到頂部",
  },
};

function getConfigValue(path) {
  return path.split(".").reduce((value, key) => value?.[key], siteConfig);
}

document.title = siteConfig.siteTitle;

const metaDescription = document.querySelector('meta[name="description"]');
if (metaDescription) {
  metaDescription.setAttribute("content", siteConfig.siteDescription);
}

document.querySelectorAll("[data-content]").forEach((element) => {
  const value = getConfigValue(element.dataset.content);
  if (typeof value === "string") {
    element.textContent = value;
  }
});

function getYoutubeEmbedUrl(url) {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1` : "";
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1` : "";
    }
  } catch {
    return "";
  }

  return "";
}

const videoTarget = document.querySelector("[data-youtube-player]");
const embedUrl = getYoutubeEmbedUrl(siteConfig.youtubeUrl);

if (videoTarget && embedUrl) {
  videoTarget.innerHTML = `
    <iframe
      src="${embedUrl}"
      title="作品介紹影片"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  `;
}

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const slides = Array.from(track?.querySelectorAll("img") ?? []);
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const status = carousel.querySelector("[data-carousel-status]");
  const dotsContainer = carousel.querySelector("[data-carousel-dots]");
  let currentIndex = 0;
  let touchStartX = 0;
  let touchStartY = 0;

  if (!track || slides.length === 0) return;

  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `切換到第 ${index + 1} 頁`);
    dot.addEventListener("click", () => setSlide(index));
    dotsContainer?.append(dot);
    return dot;
  });

  function setSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    status.textContent = `${currentIndex + 1} / ${slides.length}`;

    dots.forEach((dot, dotIndex) => {
      dot.setAttribute("aria-current", String(dotIndex === currentIndex));
    });
  }

  prevButton?.addEventListener("click", () => setSlide(currentIndex - 1));
  nextButton?.addEventListener("click", () => setSlide(currentIndex + 1));

  carousel.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    },
    { passive: true },
  );

  carousel.addEventListener(
    "touchend",
    (event) => {
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      if (Math.abs(deltaX) < 45 || Math.abs(deltaX) < Math.abs(deltaY)) return;
      setSlide(currentIndex + (deltaX < 0 ? 1 : -1));
    },
    { passive: true },
  );

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") setSlide(currentIndex - 1);
    if (event.key === "ArrowRight") setSlide(currentIndex + 1);
  });

  carousel.tabIndex = 0;
  setSlide(0);
});

document.addEventListener("contextmenu", (event) => {
  if (event.target instanceof HTMLImageElement) {
    event.preventDefault();
  }
});

document.addEventListener("dragstart", (event) => {
  if (event.target instanceof HTMLImageElement) {
    event.preventDefault();
  }
});

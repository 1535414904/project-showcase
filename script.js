const siteConfig = {
  // 你要修改網站內容時，優先改這一區。
  siteTitle: "全國專題競賽作品展示",
  siteDescription: "全國專題競賽作品展示頁，整合影片、海報、簡報、事蹟與聯絡方式。",
  youtubeUrl: "https://youtu.be/ia96zwjq1Qg",
  nav: {
    overview: "總覽",
    video: "影片",
    poster: "海報",
    slides: "簡報",
    achievements: "事蹟",
    contact: "聯絡",
  },
  hero: {
    eyebrow: "全國專題競賽展示頁",
    title: "自適應模擬退火方法應用於手術排程系統設計與實作 - 作品導覽",
    description:
      "本頁整合作品總覽、介紹影片、海報、簡報、事蹟時間軸與聯絡方式，讓評審與觀眾可以快速掌握手術排程系統的設計重點與展示成果。",
    primaryButton: "開始瀏覽",
    secondaryButton: "作品導覽",
  },
  sections: {
    overview: {
      eyebrow: "01 / Overview",
      title: "作品總覽",
      description: "整理問題背景、解決方法與成果亮點，讓評審先快速理解作品想解決的手術排程痛點與系統價值。",
    },
    video: {
      eyebrow: "02 / Video",
      title: "作品影片",
      description:
        "透過影片快速掌握作品動機、系統設計與實際展示成果，作為瀏覽完整資料前的重點導覽。",
    },
    poster: {
      eyebrow: "03 / Poster",
      title: "海報",
      description: "以逐頁方式呈現海報內容，方便在手機與桌機上快速瀏覽作品架構與研究成果。",
    },
    slides: {
      eyebrow: "04 / Slides",
      title: "簡報",
      description: "整理競賽簡報重點，涵蓋問題背景、系統架構、實作方法、展示成果與未來發展。",
    },
    achievements: {
      eyebrow: "05 / Achievements",
      title: "事蹟",
      description: "獎狀與參賽紀錄先保留為時間軸版型，之後可直接在 script.js 補上年份、獎項與說明。",
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
        description: "以手術室排程為應用場域，整合最佳化演算法與互動式系統，協助產生可調整、可比較的排程結果。",
      },
      {
        label: "問題背景",
        title: "手術排程容易受加班、超時與資源配置影響",
        description: "醫療現場需同時考量手術時間、醫師安排、手術室資源與臨床限制，人工排程容易耗時且難以兼顧整體品質。",
      },
      {
        label: "解決方法",
        title: "以自適應模擬退火改善排程穩定性",
        description: "透過自適應模擬退火方法搜尋較佳排程，並以系統介面呈現排程結果、衝突資訊與調整依據。",
      },
      {
        label: "成果亮點",
        title: "降低排程衝突並提升展示與決策效率",
        description: "作品可輔助手術排程規劃、縮短人工比較時間，並用視覺化方式展示演算法結果與臨床決策參考。",
      },
    ],
  },
  video: {
    placeholderBig: "Video",
    placeholderTitle: "作品介紹影片",
    placeholderText: "影片內容載入中",
  },
  poster: {
    cardLabel: "海報",
    cardTitle: "海報",
    pageMode: "1 至 3 頁",
  },
  slides: {
    cardLabel: "簡報",
    cardTitle: "簡報",
    pageMode: "1 至 25 頁",
  },
  achievements: {
    items: [
      {
        date: "待補日期",
        title: "獎狀或參賽事蹟",
        description: "之後提供獎狀圖片後，可放獎項名稱、競賽名稱與簡短說明。",
      },
      {
        date: "待補日期",
        title: "獎狀或參賽事蹟",
        description: "可依照時間順序新增更多項目，讓評審快速看到作品歷程。",
      },
    ],
  },
  contact: {
    cards: [
      {
        label: "專題名稱",
        title: "自適應模擬退火方法應用於手術排程系統設計與實作",
        description: "結合自適應模擬退火與互動式排程介面，打造兼具智慧決策、彈性調整與臨床實證的智能手術排程管理系統。",
      },
      {
        label: "團隊資訊",
        title: "國立高雄科技大學 / 電腦與通訊工程系 / 資料探勘與最佳化實驗室",
        description: "- 江傳文 教授\n- 王昱琪 大學生\n- 王晴葳 大學生 \n- 林永濬 大學生",
      },
      {
        label: "聯絡方式",
        title: "E-mail",
        description: "CCW@nkust.edu.tw",
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

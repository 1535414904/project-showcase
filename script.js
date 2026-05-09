const siteConfig = {
  // Paste your YouTube URL here. Examples:
  // https://youtu.be/VIDEO_ID
  // https://www.youtube.com/watch?v=VIDEO_ID
  youtubeUrl: "https://youtu.be/ia96zwjq1Qg",
};

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

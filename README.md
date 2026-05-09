# 全國專題競賽展示網頁

這是一個可直接部署的靜態網站，適合將網址轉成 QR code 放在名片上。頁面以圖片展示資料，不直接提供 PDF 下載入口；海報與簡報使用左右切換的完整頁面輪播。

## 使用方式

1. 用瀏覽器開啟 `index.html` 預覽。
2. 將 YouTube 影片網址填入 `script.js` 的 `youtubeUrl`。
3. 部署時若不想讓一般訪客直接下載原始 PDF，請不要上傳 PDF 原檔，只上傳 `assets` 圖片資料夾與網頁檔案。
4. 部署到 GitHub Pages、Netlify、Vercel 或學校網頁空間。
5. 取得公開網址後，再用 QR code 產生器製作名片用 QR code。

## 目前引用圖片

- `assets/poster/poster-01.jpg` 到 `poster-03.jpg`
- `assets/slides/slide-01.jpg` 到 `slide-28.jpg`
- `assets/extra/extra-01.jpg`

海報與簡報會自動縮放在展示框內，使用者可點左右按鈕、頁面圓點，或在手機上左右滑動切換頁面。

## 原始 PDF

- `A1_【全國專題競賽】海報.pdf`
- `最終版_【全國專題競賽】簡報.pdf`
- `放在桌子旁邊.pdf`

這些 PDF 留在本機方便更新，但正式部署時建議不要上傳。

## 後續可客製

- 將演算法流程改成正式流程與專有名詞。
- 補上團隊名稱、成員、指導老師、競賽組別。
- 部署後產生 QR code 圖檔，放入名片設計。

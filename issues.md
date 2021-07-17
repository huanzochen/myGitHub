### 已知問題
1. infinite scroll 瀏覽器縮放時會失效 因為 ref.current.getBoundingClientRect().bottom  會大於 windows.innerHeight 
2. FunctionBar 手機板過大導致會看不到部分欄位的問題.
3. fetchRepos 沒做到分頁查詢 所以只會返回前 100 的 repos. 做法可參考 userSlice.js 
4. WrapperMenu 的 flex-wrap 不知道該怎麼才能完美 (寫定 width size?)
5. SelectMenu 做好功能 但無法做到 github 的 details-overlay (全螢幕覆蓋式關閉)

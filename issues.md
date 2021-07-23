### 已知問題
1. infinite scroll 瀏覽器縮放時會失效 因為 ref.current.getBoundingClientRect().bottom  會大於 windows.innerHeight 
2. FunctionBar 手機板過大導致會看不到部分欄位的問題.
3. fetchRepos 沒做到分頁查詢 所以只會返回前 100 的 repos. 做法可參考 userSlice.js 
4. WrapperMenu 的 flex-wrap 不知道該怎麼才能完美 (寫定 width size?)
5. ~~已完成 SelectMenu 做好功能 但無法做到 github 的 details-overlay (全螢幕覆蓋式關閉)~~ 
6. searchedRepoIds 沒有 InfiniteScroll (預設有 search 的話就不會有很多結果 所以目前沒做這功能)
7. SearchBar 點搜尋筐會自動放大的問題.
7. SelectMenu 沒有 pointer-event!


### Thinking
1. Repositories 中初次載入 fetchRepos 的 useEffect, 在考慮設定成 
    - [repoIds] 每次 repoIds 變更時才會跑
    - [] 只會跑一次 
    目前好像都不影響 
    https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
    
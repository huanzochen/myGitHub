### 已知問題
1. infinite scroll 瀏覽器縮放時會失效 因為 ref.current.getBoundingClientRect().bottom  會大於 windows.innerHeight 
2. FunctionBar 手機板過大導致會看不到部分欄位的問題.
3. fetchRepos 沒做到分頁查詢 所以只會返回前 100 的 repos. 做法可參考 userSlice.js 


### dev
1. 改變 Reository.js 畫面布局 (多包了一個 div)使的 ClassifyButton 的 flex-grow: 1; 會怪怪的 (button 會變超大) 需要改變
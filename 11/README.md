##Item 11 善於使用Closures
1. Javascript允許我們<strong>參考(refer to)</strong>定義在<strong>目前</strong>函數外的變數
2. 在外層函式回傳後，內層函式也能夠<strong>參考</strong>定義在那些外層函式中的變數 --> Closures的存活時間可以比建立他們的函式還要長。 --> 留意memory!!
3. closures能夠更新外層變數的值

###注意事項：
1. 如果一個函式會追蹤來自包含它們的範疇中的變數，就被稱作是closures(閉包)。
2. 這邊要留意Closures的特性：Closures實際上儲存的是外層變數的<strong>參考(references)</strong>，而非是它們的值(value)。


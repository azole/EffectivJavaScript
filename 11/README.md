#Rule 11 善於使用Closures
1. Javascript允許我們"參考"定義在"目前"函數外的變數
2. 在外層函式回傳後，內層函式也能夠參考定義在那些外層函式中的變數
3. closures能夠更新外層變數的值

注意事項：
這邊要留意Closures的特性：Closures實際上儲存的是外層變數的"參考" (references)，而非是它們的值(value)。


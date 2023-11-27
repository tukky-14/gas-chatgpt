### GAS で ChatGPT API を使用

1. Google スプレッドシートを作成
2. 拡張機能 > AppsScirpt を選択
3. ソースを貼り付け
4. スクリプトプロパティに OPENAI の API キーを設定
   （サイドバーの設定アイコン > スクリプトプロパティ）
   - プロパティ：OPENAI_API_KEY
   - 値　　　　：自分の API キー
5. セル内の関数として使用する
   ```
   =GPT("[プロンプト]")
   ```

<br/>

**参考資料**

- [【やってみた】非エンジニアが OpenAI API×GAS を活用しスプレッドシートで文章チェックを実施してみた](https://dev.classmethod.jp/articles/non-tect-openai-gas1031/)

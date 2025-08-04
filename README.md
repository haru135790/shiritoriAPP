# しりとりゲーム

## Let's Play !
[しりとりゲーム](https://haru135790.github.io/shiritoriApp/)

## 概要
タイムアタック形式のしりとりです。
制限時間30秒以内になるべく多くの単語をつなげましょう。

使用可能な単語は約2万語です。[教育基本語彙データベース・日本語教育基本語彙データベース](https://mmsrv.ninjal.ac.jp/brfvep/)を参考にしています。

## ルール
1. ページのロードが完了すると、最初の単語がランダムで決定されます。
2. テキストボックスに、「前の単語」の最後の文字で始まる単語を入力します。
3. 単語を入力後、キーボードのEnterキーを押すか、「送信」をクリックします。
4. 入力した単語が適切な場合、その単語がしりとりリストに追加され、次の単語を入力することができます。
5. 制限時間の30秒以内にできるだけ多くの単語をつなげてください。
6. 「リセット」を押すと、ゲームがリセットされます。

### 単語を入力する際の注意
入力された単語が以下の条件に当てはまる場合、エラーが表示されます。
- 入力する単語にひらがな以外の文字（カタカナ、漢字、英数字など）が含まれている場合。
- 入力する単語が前の単語の最後の文字以外で始まる場合。
- 入力する単語が単語リストに存在しない場合。
- 入力が1文字のみの場合。

### ゲームの終了
下記の条件のいずれかが満たされると、ゲームが終了します。
- 制限時間の30秒が経過する。
- 末尾が「ん」で終わる単語を入力した。
- 入力した単語がすでに使用された単語である。

## 使用技術
- Next.js
- React
- Tailwind CSS
- GitHub Pages

## 参考にしたサイト
- Next.js
  - [Next.js Docs](https://nextjs.org/docs)
  - [YouTube - 【超入門】Next.jsの基本がすぐ分かる！アニメーションで解説してみた](https://www.youtube.com/watch?v=U6GqYyW6FxM)
  
- Tailwind CSS
  - [Tailwind CSS Docs](https://tailwindcss.com/docs)
  - [Zenn - Tailwind CSS 入門と実践](https://zenn.dev/yohei_watanabe/books/c0b573713734b9)
  
- React
  - [React Docs](https://ja.react.dev/reference/react)
  - [YouTube - 【React入門】完全初心者OK！１から簡単なTodoアプリを作ってReactの１歩を踏み出してみよう ~Reactチュートリアル~](https://www.youtube.com/watch?v=nRCNL9T3J98)
  - [YouTube - 【2025年最新】世界一簡単なReact講座！JavaScript初心者・中級者は必見](https://www.youtube.com/watch?v=TgU-FT2WdS4)
  - [Qiita - React hooksを基礎から理解する (useRef編)](https://qiita.com/seira/items/0e6a2d835f1afb50544d)

- GitHub Pages
  - [GitHub Pages Docs](https://docs.github.com/ja/pages)
  - [Qiita - GitHub Pagesの落とし穴と便利なTips](https://qiita.com/smallriv/items/997c9c19bef031460b0e)

- Javascript、HTML
  - [Note - Angular_input要素をエンターキーでsubmitする　#394](https://note.com/ym202110/n/n63af85c3ae43)

- その他(全体的な参考)
  - [Qiita -  Next.js で作ったサイトを GitHub Pages で公開する方法を爆速で丁寧に説明する](https://qiita.com/unreadabread/items/920420c24fc49cb3b392#%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB)
  

## その他
- コードの補完やデバックにGithub copilotを使用して開発しました。
- github pagesでホスティングしています。

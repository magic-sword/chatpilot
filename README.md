# chatpilot

## 開発者へ
このアプリケーションは、[Electron](https://www.electronjs.org/)によって作成されています<br>
[参考](https://ics.media/entry/7298/) 最新版で学ぶElectron入門

### 開発環境の構築
1. Node.jsのインストール<br>
まずは「[Node.js](https://nodejs.org/ja/)」をインストールしましょう。Node.jsをインストールすれば、npmコマンドが使用可能となります。

2. Gitでクローン<br>
このリポジトリをクローンしてください

3. 必要なパッケージをインストール<br>
コマンドプロンプトを起動し、クローンしてダウンロードが管理したフォルダに移動します<br>
以下のコマンドを実行して、package.jsonに記録されている必要なパッケージを自動でインストールします([参考](https://www.sejuku.net/blog/75691))<br>
`npm install`

4. 始めましょう！<br>
以下のコマンドを実行して、アプリケーションの実行、デバッグが出来ます<br>
`npm run start`

以下のコマンドを実行してビルドします
* Windows<br>
`npm run build-windows`
* macOS(darwin)<br>
`npm run build-macOS`

### Youtubeのコメントを取得する技術
オープンソースで実装してくださっている偉大な先駆者がいらっしゃたので、利用させていだだきます<br>
`youtube-chat`<br>
[参考](https://zenn.dev/linatsukusu/articles/youtube-chat-v2) Nodeで公式API使わずYoutubeLiveのチャットを取得するやつv2を公開した

YouTubeDataAPIは1日あたりの使用量が決められていて、1日12時間とか配信してたら制限を超えてしまうらしい
そのため、APIを使わずに取得する
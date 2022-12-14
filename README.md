# chatpilot

## 開発者へ
このアプリケーションは、ElectronとVue2 + TypeScriptで構成されています<br>
[参考](https://www.suzu6.net/posts/260-electron-vue-develop/) ElectronとVue3 + TypeScriptでデスクトップアプリを作る<br>
[参考](https://future-architect.github.io/articles/20210107/#proxy%E7%92%B0%E5%A2%83%E4%B8%8B%E3%81%A7%E3%81%AEElectron%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E9%96%8B%E7%99%BA) Electronの使い方 Web開発の技術でデスクトップアプリを作ろう

Vueプロジェクトの構成は以下の通り
<pre>
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter, Unit
? Choose a version of Vue.js that you want to start the project with 2.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
</pre>

### [Electron](https://www.electronjs.org/)<br>
[参考](https://ics.media/entry/7298/) 最新版で学ぶElectron入門<br>
[参考](https://blog.katsubemakito.net/nodejs/electron/1st) \[Electron\] Webの技術だけでWindowsやmacOS用のアプリを作成する electron-builder編

### [Vue+TypeScript]
[参考](https://qiita.com/nrslib/items/be90cc19fa3122266fd7#%E5%B0%8F%E3%81%95%E3%81%AA%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88) vue.js + typescript = vue.ts ことはじめ

[参考](https://miyablo.sakura.ne.jp/home/development/vue-typescript/)【Vue.js】Vue + typescript について (vue-class-component, vue-property-decorator って何？)

[参考](https://note.com/shunex/n/n50cd8e1ec4fe) Vue3でもClass Style Componentが使えそう<br>
    Vue3から@Componentは@Optionsに変わった

[参考](https://reffect.co.jp/vue/vue3-typescript) 簡単な例で始めるVue3でTypeScript入門

[参考](https://www.ragate.co.jp/blog/articles/8703) CompositionAPI VS ClassComponent！Vue3で推奨されたCompositionAPIについて実装経験者が深掘りします<br>
ClassComponent<br>
* CompositionAPI と比較して処理のオーバーヘッドが多いためパフォーマンスは Vue3 に劣る
* decorators で宣言された Props を参照する方法がないため、this.$props使用時に TS サポートが無効になる
* this によるスコープを要するので、コンストラクターに依存してしまう（コンストラクターによるブラックボックスな処理の存在を前提として実装）
* Vue3 とは別で独自にメンテナンスされており、長期開発を見据えると少々懸念あり
<br>結論：Vue3の新規プロジェクトでは CompositionAPI を採用すべし


### 開発環境の構築
1. Node.jsのインストール<br>
まずは「[Node.js](https://nodejs.org/ja/)」をインストールしましょう。Node.jsをインストールすれば、npmコマンドが使用可能となります。<br>
この時、インストールするのは推奨版(LTS)としてください<br>
最新版(v17)などでは、実行時にエラーが発生します(将来的には修正されるよていらしい)[参考](https://qiita.com/cnloni/items/1c83cac956599fb24158)


2. Vue CLIをインストール<br>
`npm install -g @vue/cli`



2. Gitでクローン<br>
このリポジトリをクローンしてください

3. 必要なパッケージをインストール<br>
コマンドプロンプトを起動し、クローンしてダウンロードが管理したフォルダに移動します<br>
以下のコマンドを実行して、package.jsonに記録されている必要なパッケージを自動でインストールします([参考](https://www.sejuku.net/blog/75691))<br>
`npm install`

4. 始めましょう！<br>
以下のコマンドを実行して、アプリケーションの実行、デバッグが出来ます<br>
`npm run electron:serve`<br>
以下のコマンドを実行してビルドします<br>
`npm run electron:build`

### Youtubeのコメントを取得する技術
オープンソースで実装してくださっている偉大な先駆者がいらっしゃたので、利用させていだだきます<br>
`youtube-chat`<br>
[参考](https://zenn.dev/linatsukusu/articles/youtube-chat-v2) Nodeで公式API使わずYoutubeLiveのチャットを取得するやつv2を公開した

YouTubeDataAPIは1日あたりの使用量が決められていて、1日12時間とか配信してたら制限を超えてしまうらしい
そのため、APIを使わずに取得する

### トラブルシューティング
#### \[eslint\]のエラーが出た場合
書式統一チェックツールが違反を検知し、エラーを出しています<br>

Microsoftの[ESLint拡張機能](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)をVS Codeにインストールしてください。<br>
これによりeslintのエラーがVS Codeで表示されるだけでなく、保存時に自動整形されるようになるはずです

[参考](https://www.wakuwakubank.com/posts/716-javascript-eslint-prettier/) ESLintとPrettierの使い方(静的検証, スタイル統一)

[参考](https://marsquai.com/745ca65e-e38b-4a8e-8d59-55421be50f7e/1f67fdab-8e00-4ae1-a1b9-077d5a30a5d6/744a0641-0220-4e99-86c5-efcb305638b9/) 【TypeScript】VSCodeでESLintによる自動フォーマット設定


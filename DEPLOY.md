# デプロイ手順書：くれた夫婦のAI旅と暮らし

> 📌 このブログは **完全無料** で公開できます。毎月のサーバー代は **0円** です🎉

---

## 目次
1. ローカルで動かしてみる
2. GitHubにコードをアップロードする
3. Cloudflare Pages でデプロイ（推奨）
4. GitHub Pages でデプロイ（代替）
5. 記事を更新するときのコマンド

---

## 1. ローカルで動かしてみる

まず手元のパソコンでブログが正しく動くか確認します。

例え話：これは「完成した家を本番の土地に建てる前に、模型で試し組みする」作業です。

```bash
# ブログフォルダへ移動
cd "/Users/koki/08　Antigravity/副業ブログ"

# 必要な道具（パッケージ）をインストール
npm install

# ローカルサーバーを起動
npm run dev
```

成功すると http://localhost:4321 でブログが確認できます。

---

## 2. GitHubにコードをアップロードする

GitHubは「コードの保管倉庫」です。ここにコードを送ることで、世界中からアクセスできるようになります。

### GitHubでリポジトリを作成
1. https://github.com にログイン（アカウントがない場合は無料作成）
2. 右上の「+」→「New repository」をクリック
3. リポジトリ名：kureta-fufu-blog
4. 「Public」を選択 → 「Create repository」

### ターミナルでコードをアップロード

```bash
cd "/Users/koki/08　Antigravity/副業ブログ"

git init
git add .
git commit -m "最初のブログコード"

# URLは自分のものに変更してください
git remote add origin https://github.com/あなたのGitHubユーザー名/kureta-fufu-blog.git
git branch -M main
git push -u origin main
```

---

## 3. Cloudflare Pages でデプロイ（推奨）

おすすめ理由：無料・高速・設定が簡単・カスタムドメインも無料

### ビルド設定

| 設定項目 | 入力値 |
|---------|--------|
| Framework preset | Astro |
| Build command | npm run build |
| Build output directory | dist |
| Node.js version | 20 |

手順：
1. https://pages.cloudflare.com へアクセス
2. 「Create a project」→「Connect to Git」
3. GitHubアカウントと連携
4. kureta-fufu-blog リポジトリを選択
5. 上記ビルド設定を入力
6. 「Save and Deploy」をクリック
7. 数分後に https://kureta-fufu-blog.pages.dev で公開完了！

重要：デプロイ後、astro.config.mjs の site の値を
https://kureta-fufu-blog.pages.dev に変更し、再pushしてください。

---

## 4. GitHub Pages でデプロイ（代替）

.github/workflows/deploy.yml が自動でデプロイしてくれます。

設定手順：
1. GitHubのリポジトリページを開く
2. 「Settings」タブをクリック
3. 左メニューの「Pages」をクリック
4. Source を「GitHub Actions」に変更
5. 次回 main ブランチへのプッシュで自動デプロイ！

公開URL：https://あなたのGitHubユーザー名.github.io/kureta-fufu-blog/

注意：GitHub Pages の場合は astro.config.mjs に以下を追加：
  base: '/kureta-fufu-blog',

---

## 5. 記事を更新するときのコマンド

新しい記事を書いて公開するまでの流れ（これだけ覚えれば大丈夫！）：

```bash
cd "/Users/koki/08　Antigravity/副業ブログ"

git add .
git commit -m "記事追加: ○○の旅行記"
git push
```

Cloudflare Pagesなら1〜2分で自動的に公開されます！

---

## 新しい記事の書き方

src/content/posts/ フォルダに新しいMarkdownファイルを作成してください。
ファイル名がURLになります（英数字・ハイフンのみ推奨）。

例：
- spain-venice-2026.md → /posts/spain-venice-2026
- kakei-kokai-2026-10.md → /posts/kakei-kokai-2026-10

記事のフロントマター（タイトル・日付などのメタ情報）は
src/content/posts/first-post.md を参考にしてください。

---

困ったことがあればお気軽にご相談ください！

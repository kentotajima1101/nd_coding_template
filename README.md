# nd_coding_template
ノックデザインのコーディングテンプレート

## ディレクトリ構造
```html
nd_coding_template/
├── index.html
└── asset/
    ├── css/ (エクスポートされたcssファイル)
    │   ├── import.css
    │   └── import.css.map
    ├── images/
    │   ├── common/ （共通で使う画像を格納）
    │   └── page/ （各ページで使う画像を格納。ファイルはページURLと合わせる）
    ├── js/
    │   └── common.js
    └── style/
        ├── import.scss  （scssの読み込みファイル）
        ├── no_edit （編集不可のディレクトリ）
        │   ├── _class.scss  （共通クラスが記載されたファイル）
        │   └── _reset.scss （リセット用のファイル）
        └── style （基本的に編集していくディレクトリ）
            ├── _style.scss （基本的に自由に書き込んで良いファイル）
            └── _variable.scss  （変数を指定するファイル）
```

## 命名ルール
- RSCSSというCSS設計手法をもとに命名ルールを策定しております

### RSCSSの使い方
RSCSSには主に以下の概念があります。
- Components（コンポーネント）
- Elements（エレメンツ）
- Variants（バリアント）
### Components（コンポーネント）
Components（コンポーネント）はパーツの一番大枠の要素
Components（コンポーネント)は単語ふたつをハイフンで連結します。
```html
.login-form {
  /* ... */ 
}
```
 
### Elements（エレメンツ）
Elements（エレメンツ）はコンポーネントの中の要素
Elements（エレメンツ)は単語ひとつで構成されます。
(下の「.field」「.action」がエレメンツ)
```html
.login-form {
  .name {
    /* ... */ 
  }
  .password {
    /* ... */ 
  }
}
```
 
 ### Variants（バリアント）
 Variants（バリアント）は汎用的に使われる要素とは一部異なる場合に使います。
 Variants（バリアント）の前にはハイフンが付きます。
```html
.entry-button {
  &.-wide {
    /* ... */ 
  }
  &.-min {
    /* ... */ 
  }
  &.-active {
    /* ... */ 
  }
}
```
参考：https://mameshibaweb.com/rscss/

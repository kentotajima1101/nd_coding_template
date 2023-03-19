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


<br><br><br><br>
___


# テンプレートに組み込まれているクラス
要素に対して、margin-topだけを当てたい時などに毎回独自のクラス名を当ててスタイルを書いていくと、スタイルの行数も増える上に効率も悪いので、
よく使うクラスなどはあらかじめテンプレートに含んでおります。

また以下で出てくるクラス名の後ろに[-tb]や[-sp]に関してはtb=タブレット時のクラス、sp=スマホ時のクラスといった意味になります。


## マージン系
.mt(margin-top)、 .ml(margin-left)、 .mr(margin-right)、 .mb(margin-bottom)
```html
<!--使用例-->
<div class="mt10 mt5-tb mt0-sp">
</div>
```
このボックスはPCの時はmargin-topが10px、タブレットの時はmargin-topが5px、スマホの時はmargin-topが0pxになります。<br>
※マージンのクラスは0〜120pxまで用意されています。

## パディング系
.pt(padding-top)、 .pl(padding-left)、 .pr(padding-right)、 .pb(padding-bottom)
```html
<!--使用例-->
<div class="pt10 pt5-tb pt0-sp">
</div>
```
このボックスはPCの時はpadding-topが10px、タブレットの時はpadding-topが5px、スマホの時はpadding-topが0pxになります。<br>
※パディングのクラスは0〜120pxまで用意されています。

## フォントサイズ
.f○○px(font-size:○○px)
```html
<!--使用例-->
<p class="f10px f8px-tb">テキスト</p>
```
このフォントサイズはPC時10pxになり、タブレット時に8pxになります。<br>
※フォントサイズのクラスは8px〜40pxまで用意されています。

## ラインハイト
.lh○○(line-height:○.○;)
```html
<!--使用例-->
<p class="lh20 lh15-tb">テキスト</p>
```
このフォントのラインハイトPC時に2になりタブレット時は1.5になります。<br>
※ラインハイトのクラスは10(line-height:1;)〜20(line-height:2;)まで用意されています。

## テキストアライン
.left-text(text-align:left;), .right-text(text-align:right;), .center-text(text-align:center;)
```html
<!--使用例-->
<p class="left-text center-text-tb">テキスト</p>
```
このテキストはPC時に左揃えになり、タブレット時に中央揃えになります。

## レタースペーシング
.ls○○(letter-spacing:0.0○○;)
```html
<!--使用例-->
<p class="ls30 ls20-tb">テキスト</p>
```
このフォントのレタースページングはPC時に0.03emになりタブレット時は0.02emになります。<br>
※レタースページングのクラスは20(letter-spacing:0.02em;)〜100(letter-spacing:0.1em;)まで用意されています。

## フォントウェイト
.fw○○○(font-weight:○○○;)
```html
<!--使用例-->
<p class="fw900">テキスト</p>
```
このフォントのフォントウェイトは900になります。<br>
※フォントウェイトのクラスは100(font-weight:100;)〜900(font-weight:900;)まで用意されています。

## ポジション系
.absolute(position:absolute;), .relative(position:relative;), .static(position:static;)
```html
<!--使用例-->
<div class="absolute">
</div>
```
このボックスはアブソリュートで配置されます。

## フロート
.left-box(float:left;), .right-box(float:right;)
```html
<!--使用例-->
<div class="left-box">
</div>
```
このボックスはフロートレフトが適応されます。

## ボックス中央寄せ用クラス
.center-box(margin-left:auto; margin-right:auto;)
```html
<!--使用例-->
<div class="left-box">
</div>
```
このボックスは中央寄せになります。

## 表示、非表示系クラス
.pc, .pctb, .tb, .spの4つのクラスがあり、それぞれ以下の画面サイズで表示、非表示を切り替えることができます。
<table>
<tr>
<th></th>
<th>PC</th>
<th>タブレット</th>
<th>スマホ</th>
</tr>
<tr>
<th>.pc</th>
<td>表示</td>
<td>非表示</td>
<td>非表示</td>
</tr>
<tr>
<th>.pctb</th>
<td>表示</td>
<td>表示</td>
<td>非表示</td>
</tr>
<tr>
<th>.tb</th>
<td>非表示</td>
<td>表示</td>
<td>表示</td>
</tr>
<tr>
<th>.sp</th>
<td>非表示</td>
<td>非表示</td>
<td>表示</td>
</tr>
</table>

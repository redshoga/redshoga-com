import { Post } from "./index.type";

export const _20240112: Post = {
  title: "タイトル",
  slug: "20240112",
  date: new Date("2024-01-12"),
  content: (
    <div>
      <p>
        これはブログの例文です。以下のようなHTMLタグを使用することができます。
      </p>

      <h2>2. 引用と強調</h2>
      <blockquote>
        "人生は旅だ。急ぐ必要はないが、止まらないことが重要だ。"
      </blockquote>
      <p>
        <strong>強調</strong>や<em>斜体</em>
        を使用して、重要な部分を目立たせることができます。
      </p>

      <h3>3. コードブロック</h3>
      <p>プログラムのコードを含む場合:</p>
      <pre>
        <code>const a =() =&gt;{}; console.log(greet("太郎"));</code>
      </pre>

      <h3>4. 画像</h3>
      <p>記事に画像を追加することで、視覚的に魅力的になります。</p>
      <img src="example-image.jpg" alt="公園の風景" width="600" />

      <h3>5. 表の使用</h3>
      <p>データや比較を表形式で示すと便利です。</p>
      <table>
        <thead>
          <tr>
            <th>項目</th>
            <th>詳細</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>価格</td>
            <td>¥500</td>
          </tr>
          <tr>
            <td>在庫</td>
            <td>あり</td>
          </tr>
        </tbody>
      </table>

      <h3>6. ボタンリンク</h3>
      <p>特定のリンクにボタン風のデザインをつけることも可能です。</p>

      <h3>7. 区切り線</h3>
      <p>記事の区切りには水平線を使用します。</p>
      <hr />

      <h3>8. フォーム</h3>
      <p>記事の最後に読者の意見を集めるフォームを配置できます。</p>
    </div>
  ),
};

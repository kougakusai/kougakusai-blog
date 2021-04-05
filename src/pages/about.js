import Layout from '../../components/layout';
import Title from '../comonents/organisms/title';

export default function About() {
  return (
    <Layout>
      <div>
        <Title title="ABOUT KOUGAKUSAI BLOG" />
      </div>
      <hr></hr>
      <article>
        <section>
          <h2>このサイトについて</h2>
          <p>
            　このサイトでは、こうがく祭の運営を担当する実行委員の学生が、仕事内容や創意工夫・使用した技術などについて紹介します。
          </p>
        </section>
        <br></br>
        <section>
          <h2>こうがく祭とは</h2>
          <p>
            　
            <a title="2020年度こうがく祭HPへ" href="https://kougakusai.jp/">
              こうがく祭
            </a>
            は、茨城大学工学部で毎年11月頃に開催される学園祭です。工学部ならではの企画・研究室公開・サークル発表や模擬店などを日立キャンパスで開催しています。毎年一般の方や学生の方含め多くの方にご参加していただいております。
            2020年度は、オンラインで開催いたしました。
          </p>
        </section>
      </article>
    </Layout>
  );
}

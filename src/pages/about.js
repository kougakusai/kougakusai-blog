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
            　このサイトでは、2020年11月03日にオンライン形式で開催しました、茨城大学工学部の2020年度こうがく祭の運営を担当したこうがく祭実行委員の学生が、運営の仕事内容や使用した技術などについて紹介します。
          </p>
        </section>
        <br></br>
        <section>
          <h2>こうがく祭とは</h2>
          <p>
            　
            <a title="2020年度こうがく祭HPへ" href="https://kougakusai.jp/">
              こうがく祭
            </a>
            は、茨城大学工学部で秋頃に開催される学園祭です。研究室公開・サークル発表や模擬店などを日立キャンパスで開催しています。
          </p>
        </section>
      </article>
    </Layout>
  );
}

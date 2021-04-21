import Layout from '../../components/layout';
import Title from '../comonents/organisms/title';
import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Head>
        <title>このサイトについて</title>
      </Head>
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
        {/*
        <div>
          <div className="mb-5">
            <Title title="このサイトについて" />
          </div>
          <div className="sm:ml-50">
            <p>このウェブサイトはこうがく祭広報藩HP村が作成・運営するこうがく祭のブログです。</p>
            <p>
              こうがく祭実行委員会についてや広報藩が使用する技術についての紹介などをしていく予定です。
            </p>
          </div>
        </div>
        */}
      </Layout>
    </div>
  );
};

export default About;

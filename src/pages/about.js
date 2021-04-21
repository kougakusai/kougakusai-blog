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
        {/* <div className="bg-purple-100 flex flex-col items-center justify-center h-screen w-4/5 max-w-5xl mx-auto">
        <div className="flex flex-row h-full w-full">
          <SideBar />
          <div className="border-8 border-transparent flex flex-col lg:h-full h-4/5 items-center justify-evenly text-center w-full">
            <h1 className="text-4xl text-blue-700 mb-2">About Page</h1>
            <p className="mb-8">
              ここはこうがく祭のぎじゅつブログ。<br></br>
              つかったぎじゅつのおはなしを日立からおとどけするよ!
            </p>
            <p>[Any Contents]</p>
          </div>
        </div>
      </div> */}
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
      </Layout>
    </div>
  );
};

export default About;

import Footer from 'src/comonents/organisms/footer';
import SideBar from 'src/comonents/organisms/sidebar';
import Layout from '../../components/layout';
import Title from '../comonents/organisms/title';
const About = () => {
  return (
    <div>
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
          <Title title="このサイトについて" />
        </div>
      </Layout>
    </div>
  );
};

export default About;

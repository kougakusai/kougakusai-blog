import SideBar from 'src/comonents/organisms/sidebar';
import SNSButtons from '../comonents/molecules/snsbuttons';

const About = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <SideBar />
      <section className="bg-purple-100 border-8 border-transparent flex flex-1 flex-col h-full items-center justify-evenly text-center w-full">
        <h1 className="text-4xl text-blue-700 mb-2">About Page</h1>
        <p className="mb-8">
          ここはこうがく祭のぎじゅつブログ。<br></br>
          つかったぎじゅつのおはなしを日立からおとどけするよ!
        </p>
        <p>[Any Contents]</p>
      </section>
    </div>
  );
};

export default About;

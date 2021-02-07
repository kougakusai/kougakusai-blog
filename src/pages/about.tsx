import SideBar from 'src/comonents/organisms/sidebar';
import SNSButtons from '../comonents/molecules/snsbuttons';

const About = () => {
  return (
    <div className="w-screen h-screen flex lg:flex-row flex-col-reverse">
      <SideBar />
      <section className="bg-purple-100 border-8 border-transparent flex flex-1 flex-col lg:h-full h-4/5 items-center justify-evenly text-center w-full">
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

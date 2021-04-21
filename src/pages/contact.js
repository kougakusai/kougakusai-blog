import Layout from '../../components/layout';
import Title from '../comonents/organisms/title';
import Head from 'next/head';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>お問い合わせ</title>
      </Head>
      <Layout>
        <div>
          <Title title="お問い合わせ" />
        </div>

        <div className="sm:ml-50">
          <p>質問等があれば下記の連絡先へお気軽にお問い合わせください。</p>
          <div className="mt-3 mb-2 mb-5">
            <h3>メールアドレス</h3>
            <p>kougakusaihp@gmail.com</p>
          </div>
        </div>

        <div className="sm:ml-50">
          <div className="mt-3 mb-2 mb-5">
            <h3>Twitter(DMへ)</h3>
            <p>
              <a href="https://twitter.com/2021kougakusai">@2021kougakusai</a>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

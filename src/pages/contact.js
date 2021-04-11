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
      </Layout>
    </div>
  );
}

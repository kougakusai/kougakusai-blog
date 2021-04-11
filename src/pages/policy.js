import Layout from '../../components/layout';
import Title from '../comonents/organisms/title';
import Head from 'next/head';

export default function Policy() {
  return (
    <div>
      <Head>
        <title>プライバシーポリシー</title>
      </Head>
      <Layout>
        <div>
          <Title title="プライバシーポリシー" />
          <p>このウェブサイトは、茨城大学こうがく祭の公式ブログ（以下「当サイト」）です。</p>
          <p>
            当サイトは、こうがく祭実行委員会（以下「当委員会」）が作成・管理しています。ご質問やご意見などがありましたら、「お問い合わせ」のページ
            よりお気軽にご連絡ください。
          </p>
        </div>
      </Layout>
    </div>
  );
}

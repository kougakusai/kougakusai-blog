import Layout from '../../components/layout';
import Title from '../comonents/organisms/title';
import Head from 'next/head';
import Link from 'next/link';

export default function Policy() {
  return (
    <div>
      <Head>
        <title>サイトポリシー</title>
      </Head>
      <Layout>
        <div>
          <div className="mb-5">
            <Title title="サイトポリシー" />
          </div>
          <div className="sm:ml-50">
            <p>
              このウェブサイトは、茨城大学こうがく祭実行委員会の公式ブログ（以下「当サイト」）です。
            </p>
            <p>
              当サイトは、こうがく祭実行委員会（以下「当委員会」）が作成・管理しています。ご質問やご意見などがありましたら、
              <Link href="./contact">
                <a>「お問い合わせ」のページ</a>
              </Link>
              よりお気軽にご連絡ください。
            </p>
            <p>
              なお、サイトポリシーの内容を予告なしに変更する場合がありますので、あらかじめご了承ください。
            </p>
            <div className="mt-3 mb-2">
              <h3>免責事項</h3>
              <p>
                当サイトに情報を掲載するにあたっては細心の注意を払っていますが、情報の正確性および完全性を保証するものではありません。
                <br />
                当サイトに掲載されている情報を予告なしに変更する場合があります。
                <br />
                当サイトに掲載されている情報を利用したことで生じた損失に関して、当委員会は一切の責任を負いません。
              </p>
            </div>
            <div className="mt-3 mb-2">
              <h3>著作権</h3>
              <p>
                当サイトに掲載されているコンテンツなどは、当委員会または出展企画が著作権を有しており、著作権法によって認められる場合を除き、著作権者の許可なくこれらを利用することはできません。
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

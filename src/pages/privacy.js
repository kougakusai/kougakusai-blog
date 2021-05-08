import Layout from '../../components/layout';
import Title from '../comonents/organisms/title';
import Head from 'next/head';

export default function Privacy() {
  return (
    <div>
      <Head>
        <title>プライバシーポリシー</title>
      </Head>
      <Layout>
        <div>
          <div className="mb-5">
            <Title title="プライバシーポリシー" />
          </div>
          <div className="sm:ml-50">
            <p>
              こうがく祭実行委員会（以下「当委員会」）は，本ウェブサイト上（以下「当サイト」）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
            </p>
            {/* <p>
              当サイトは、こうがく祭実行委員会（以下「当委員会」）が作成・管理しています。ご質問やご意見などがありましたら、「お問い合わせ」のページ
              よりお気軽にご連絡ください。
            </p> */}
            <p>
              なお、サイトポリシーの内容を予告なしに変更する場合がありますので、あらかじめご了承ください。
            </p>
            <br />
            <div className="mt-3 mb-5">
              <h3>個人情報の利用目的</h3>
              <p>
                当サイトでは、お問い合わせ時に、お名前、メールアドレス等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。
                お預かりした個人情報は、当委員会からのご質問に対する回答等に利用いたします。
              </p>
            </div>

            <div className="mt-3 mb-2 mb-5">
              <h3>個人情報の安全管理</h3>
              <p>
                当委員会は、ご提供いただいた個人情報を正確にデータ処理し、当委員会が保有する個人情報の安全性を確保するため、適切な保護・安全対策を実施し、個人情報の紛失、破壊、改ざん、漏えいの防止に努めます。
              </p>
            </div>

            <div className="mt-3 mb-2 mb-5">
              <h3>個人情報の第三者への開示・提供の禁止</h3>
              <p>
                当委員会は、個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
              </p>
              <ul>
                <li>ご本人様の同意がある場合</li>
                <li>法令に基づき開示することが必要である場合</li>
                <li>人の生命、身体又は財産の保護のために必要がある場合</li>
              </ul>
            </div>
            <div className="mt-3 mb-2 mb-5">
              <h3>ご本人の照会</h3>
              <p>
                ご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人様であることを確認の上、対応させていただきます。ご本人であることが確認できない場合には、照会に応じません。
              </p>
            </div>
            <div className="mt-3 mb-2 mb-5">
              <h3>お問い合せ</h3>
              <p>メールアドレス：kougakusaihp@gmail.com</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

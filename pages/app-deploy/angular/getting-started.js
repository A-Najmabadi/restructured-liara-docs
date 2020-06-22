import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>Angular سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های Angular</h1>
    <span className="pageDescription">(Angular Apps)</span>

    <h3>🚀 شروع به کار</h3>
    <video
      src="https://files.liara.ir/liara/react.mp4"
      controls="controls"
      className="block w-full"
    ></video>
    <p>
      در این بخش به شما کمک میکنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      Angular را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی در
      لیارا آشنا میشوید و میتوانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <Link href="/app-deploy/angular/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);

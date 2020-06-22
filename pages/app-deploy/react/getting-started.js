import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>ReactJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های ReactJS</h1>
    <span className="pageDescription">(ReactJS Apps)</span>

    <h3>🚀 شروع به کار</h3>
    <video
      src="https://files.liara.ir/liara/react.mp4"
      controls="controls"
      className="block w-full"
    ></video>

    <p>
      در این بخش به شما کمک میکنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      ReactJS را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی در
      لیارا آشنا میشوید و میتوانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>
    <Notice variant="info">
      برنامه‌های NextJS را باید در{" "}
      <Link href="/app-deploy/nodejs/getting-started">پلتفرم NodeJS</Link> مستقر
      کنید.
    </Notice>
    <br />

    <Link href="/app-deploy/react/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);

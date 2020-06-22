import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>Static سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های Static</h1>
    <span className="pageDescription">(Static Apps)</span>

    <h3>🚀 شروع به کار</h3>
    <video
      src="https://files.liara.ir/liara/react.mp4"
      controls="controls"
      className="block w-full"
    ></video>
    <p>
      در این بخش به شما کمک میکنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      Static را روی بستر ابری لیارا مستقر کنید. برنامه‌های Static در حقیت شامل
      برنامه‌هایی می‌شوند که با HTML/CSS/JS ساخته شده‌اند یا نسخه‌ای Build شده از
      فریم‌ورک‌های JS مثل React یا Vue هستند. در هر گام، شما با یک ویژگی در
      لیارا آشنا میشوید و میتوانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <Link href="/app-deploy/static/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);

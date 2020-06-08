import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>ASP.Net Core سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>پلتفرم ASP.Net Core</h1>
    <span className="pageDescription">(ASP.Net Core Platform)</span>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h3>انتخاب نسخه‌ی ASP.Net Core</h3>
    <p>
      به‌صورت پیش‌فرض، برنامه‌ی شما روی نسخه‌ی ۳.۱ این پلتفرم اجرا می‌شود.
      می‌توانید داخل فایل <span className="code"> liara.json</span>
      نسخه‌ی مدنظرتان را به شکل زیر تعیین کنید. سپس بعد از یک بار دیپلوی،
      برنامه‌ی شما روی نسخه‌ی تعیین شده اجرا خواهد شد.
    </p>
    <pre>
      <code>
        {`{
  "netcore": {
    "version": "3.1"
  }
}`}
      </code>
    </pre>
    <p>در حال حاضر، از نسخه‌های زیر پشتیبانی می‌شود:</p>
    <ul>
      <li>3.1</li>
      <li>3.0</li>
      <li>2.2</li>
      <li>2.1</li>
    </ul>
  </Layout>
);

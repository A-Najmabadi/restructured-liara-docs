import Layout from "../../../components/Layout";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>Static سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>سایت‌های Static</h1>
    <span className="pageDescription">(Static Sites)</span>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h3>تنظیمات Nginx</h3>
    <p>
      استقرار برنامه‌های استاتیک، توسط وب‌سرور
      <span className="code">Nginx</span>
      انجام می‌گیرد. در شرایط مختلف، ممکن است که نیاز داشته باشید این وب‌سرور را
      مطابق با نیازهای‌تان تنظیم کنید. برای این کار، کافیست که در ریشه‌ی
      برنامه‌ی‌تان، فایلی با نام
      <span className="code">liara_nginx.conf</span>
      ایجاد کنید. به‌صورت پیش‌فرض، برای برنامه‌های استاتیک، این فایل به شکل زیر
      تعریف شده‌است:
    </p>
    <pre>
      <code>
        {`location / {
  index  index.html index.htm;
}`}
      </code>
    </pre>
    <p>که شما می‌توانید آن را به شیوه‌ی خودتان گسترش دهید:</p>
    <pre>
      <code>
        {`location / {
  # ...
}
location /api {
  # ...
}
location /images {
  # ...
}`}
      </code>
    </pre>
  </Layout>
);

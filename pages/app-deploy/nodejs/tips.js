import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        توضیحات و نکات تکمیلی در برنامه‌های NodeJS - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/nodejs.svg"
        alt="nodejs"
      />
      <div className="page-title">
        <h1>برنامه‌های NodeJS</h1>
        <span className="page-description">(NodeJS Apps)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h3>ES6 و build کردن برنامه</h3>
    <p>
      اگر برنامه‌ی‌تان را با ES6 و یا بالاتر نوشته‌اید و برنامه‌ی‌تان قبل از
      اجرا شدن، نیاز به build شدن دارد، باید یک اسکریپت دیگر با نام
      <span className="code">build</span>
      تعریف کنید و دستورات لازم برای build شدن برنامه‌ی‌تان را داخل{" "}
      <span className="code">package.json</span> تعریف کنید.
      <br />
      برای نمونه:
    </p>
    <pre>
      <code>
        {`{
  "scripts": {
    "start": "node build/server.js",
    "build": "gulp build"
  }
}`}
      </code>
    </pre>

    <h3>انتخاب نسخه‌ی NodeJS</h3>
    <p>
      به‌صورت پیش‌فرض، برنامه‌ی شما روی نسخه‌ی ۱۲ این پلتفرم اجرا می‌شود. در
      صورتی که قصد دارید نسخه دیگری را برای اجرای برنامه‌ی‌تان استفاده کنید
      می‌توانید داخل فایل <span className="code">liara.json</span> بخش زیر را
      اضافه کنید: (فایل زیر برای یک برنامه تستی در نظر گرفته شده است.)
    </p>
    <pre>
      <code>
        {`{
  "platform": "node",
  "app": "nodejs-starter",
  "port": 8000,
  "node": {
    "version": "14"
  }
}`}
      </code>
    </pre>
    <p>در حال حاضر، از نسخه‌های زیر پشتیبانی می‌شود:</p>
    <ul>
      <li>8</li>
      <li>10</li>
      <li>12</li>
      <li>14</li>
    </ul>

    <a name="adonisjs" />
    <h3>استقرار فریم‌ورک AdonisJS</h3>
    <p>
      اگر از فریم‌ورک AdonisJS استفاده می‌کنید، نیاز به تنظیمات خاصی ندارید و
      مطابق با مواردی که در بالا گفته شد، می‌توانید برنامه‌ی‌تان را در لیارا
      مستقر کنید. تنها خطای خاصی که ممکن است با آن مواجه شوید این است که این
      فریم‌ورک وجود یک فایل
      <span className="code">.env</span>
      را در ریشه‌ی برنامه الزامی می‌داند. اما چون در لیارا، شما متغیرهای‌تان را
      از بخش «تنظیمات برنامه» وارد می‌کنید، ممکن است با خطای زیر مواجه شوید:
    </p>
    <pre>
      <code>Error: ENOENT: no such file or directory, open '/app/.env'</code>
    </pre>
    <p>
      برای رفع این مشکل، فقط کافیست که متغیر زیر را هم از بخش تنظیمات برنامه،
      وارد کنید و بعد ذخیره کنید:
    </p>
    <pre>
      <code>{`ENV_SILENT=true`}</code>
    </pre>
    <p>
      این مورد در مستندات AdonisJS هم با عنوان{" "}
      <a
        href="https://adonisjs.com/docs/4.1/configuration-and-env#_disabling_the_env_file"
        target="_blank"
        rel="noopener"
      >
        Disabling the .env file
      </a>{" "}
      گفته شده‌است.
    </p>

    <h3>تنظیم منطقه‌ی زمانی (TimeZone)</h3>
    <p>
      به صورت پیش‌فرض، منطقه‌ی زمانی بر روی Asia/Tehran تنظیم شده است. برای
      تغییر مقدار پیش‌فرض، می‌توانید از پارامتر
      <span className="code">timezone</span>
      در فایل <span className="code">liara.json</span>
      استفاده کنید. برای نمونه:
    </p>
    <pre>
      <code>
        {`{
  "platform": "node",
  "app": "nodejs-starter",
  "port": 8000,
  "node": {
    "timezone": "America/Los_Angeles"
  }
}`}
      </code>
    </pre>

    <a name="npm-auditing"></a>
    <h3>گزارش مشکلات امنیتی پکیج‌های نصب شده با npm</h3>
    <p>
      قابل انکار نیست که تعداد پکیج‌های npm بسیار زیاد هستند و برخی از آن‌ها هم
      ممکن است دارای مشکلات امنیتی باشند و بسیاری از این مشکلات امنیتی هم بعدها
      در نسخه‌های جدیدی که ارائه می‌کنند رفع می‌شود. اما شما چگونه می‌توانید
      مطمئن شوید که نسخه‌ی فعلی پکیج‌هایی که نصب کرده‌اید دارای مشکل هستند یا
      نه؟ چگونه می‌توانید متوجه شوید که آیا راه حلی هم برای این مشکل وجود دارد
      یا نه؟
    </p>
    <p>
      لیارا می‌تواند گزارشات کاملی را درباره مشکلات امنیتی برنامه‌ی‌تان در پنل
      کاربری به شما نمایش دهد. فقط کافی است که در فایل
      <span className="code">liara.json</span>
      برنامه‌ی خود، <span className="code">npmAudit</span>
      را برابر <span className="code">true</span> قرار دهید. این قابلیت به صورت
      پیش‌فرض غیر فعال است. برای نمونه:
    </p>
    <pre>
      <code>
        {`{
  "platform": "node",
  "app": "nodejs-starter",
  "port": 8000,
  "node": {
    "version": "10",
    "npmAudit": true
  }
}`}
      </code>
    </pre>
    <p>
      و حالا از این پس هر بار که دستور
      <span className="code">liara deploy</span>
      را برای استقرار و بروزرسانی برنامه‌ی‌تان وارد کنید، گزارش امنیتی نیز
      برای‌تان قابل مشاهده خواهد بود.
    </p>
    <ZoomableImage src="/static/npm-auditing.png" alt="صفحه‌ی گزارشات امنیتی" />
  </Layout>
);

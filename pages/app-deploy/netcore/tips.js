import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>ASP.Net Core سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های ASP.Net Core</h1>
    <span className="pageDescription">(ASP.Net Core Apps)</span>

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

    <h3>تنظیمات مرتبط با ساختار برنامه</h3>
    <p>
      لیارا به صورت خودکار سعی می‌کند که تنظیمات مناسب برنامه‌ی شما را تشخیص دهد
      و برنامه‌ی شما را در بهترین حالت مستقر کند. اما با توجه به تنوع ساختار برنامه‌های
      ASP.Net Core،
      ممکن است که برخی از این تشخیصات خودکار با مشکل مواجه شوند و لیارا نتواند برنامه‌ی شما را به درستی مستقر کند.
    </p>
    <p>
      در چنین حالاتی ممکن است با خطاهایی مانند خطای زیر روبه‌رو شوید:
    </p>
    <pre>
      <code>
{`It was not possible to find any installed .NET Core SDKs
Did you mean to run .NET Core SDK commands? Install a .NET Core SDK from:
https://aka.ms/dotnet-download`}
      </code>
    </pre>

    <p>
      این امکان برای شما فراهم شده که به جای اتکا به قابلیت تشخیص خودکار لیارا، پارامترهای مورد نیاز
      برای استقرار برنامه‌ی‌تان را خودتان تعریف کنید. این کار به کمک تعریف فایل
      <span className="code">liara.json</span>
      در ریشه‌ی برنامه‌تان امکان‌پذیر است.
    </p>
    <Highlight className="json">
      {`{
  "platform": "netcore",
  "netcore": {
    "finalDllName": "MyProjectName",
    "csprojectFile": "path/to/folder/my.csproj"
  }
}`}
    </Highlight>
    <p>
      <ul>
        <li>
          <span className="code">finalDllName</span>:
          نام فایل <span className="code">.dll</span>
          نهایی برنامه که بعد از بیلدکردن ساخته می‌شود. (بدون پسوند)
        </li>
        <li>
          <span className="code">csprojectFile</span>:
          مسیر فایل <span className="code">.csproj</span>
          اصلی برنامه. (به صورت نسبی وارد شود)
        </li>
      </ul>
    </p>
  </Layout>
);

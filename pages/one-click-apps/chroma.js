import Head from "next/head";
import Link from "next/link";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>مستندات نصب و راه‌اندازی Chroma - لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="chroma" />
      <div className="page-title">
        <h1>داده‌کاوی با دیتابیس Chroma</h1>
        <span className="page-description">(Apache Answer one-click app)</span>
      </div>
    </div>

    <p>
      <a
        href="https://github.com/chroma-core/chroma"
        target="_blank"
        rel="noopener"
      >
        Chroma
      </a>{" "}
      یک دیتابیس متن‌باز built-in است و ساخت برنامه‌های LLM (مدل‌های زبانی بزرگ)
      را تا حد بسیار زیادی ساده می‌کند. Chroma شامل SDK Client پایتون و
      جاوااسکریپت/تایپ‌اسکریپت نیز هست و در notebook هم اجرا می‌شود.
    </p>

    <h3>🚀 راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/chroma/chroma.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده Chroma باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Chroma را
      انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید. در آخر پس از
      انتخاب شبکه خصوصی و پلن، بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک
      کنید.
    </p>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>
    <h4>احراز هویت در Chroma</h4>
    <p>
      به صورت پیش‌فرض، Chroma بدون احراز هویت اجرا می‌شود؛ اما ما برای حفظ
      اطلاعات شما، احراز هویت را در Chroma فعال کرده‌ایم. پس از ساخت برنامه،
      کافیست تا وارد <strong>تنظیمات</strong>، بخش <strong>متغیرها</strong>{" "}
      شوید؛ مقدار متغیر محیطی{" "}
      <span className="code">CHROMA_SERVER_AUTH_CREDENTIALS</span>
      برای احراز هویت به کار خواهد رفت.
    </p>

    <h4 id="upgrade">تغییر نسخه‌ی برنامه مستقر شده</h4>
    <p>
      برخی مواقع لازم شده که نسخه برنامه‌ی آماده‌ای که مستقر کردیم رو تغییر
      بدیم. برای مثال، نسخه جدیدی از آن برنامه منتشر شده و ما می‌خواهیم از آن
      استفاده بکنیم. نکته‌ای که باید قبل تغییر نسخه برنامه‌مان در نظر داشته
      باشیم، این است که آن نسخه با لیارا سازگاری داشته باشد و در صورتی که لازم
      باشد از دیسک‌ها برای مواردی همچون تغییرات در برنامه یا نگهداری اطلاعات‌مان
      استفاده بکنیم. یا حتی لازم باشد یک سری متغیر‌هایی در برنامه‌مان تنظیم
      کنیم. در اینجا شما می‌تونید یک نمونه ساده از تغییر نسخه را مشاهده کنید.
      برای شروع لازم هست ابتدا در سیستم لوکال فایلی تحت عنوان{" "}
      <span className="code">liara.json</span>
      ایجاد کنید و مقادیر زیر رو در اون قرار بدید:
    </p>
    <Highlight className="json">
      {`{
    "image": "chromadb/chroma:<your-version>",
    "port": 8000,
    "app": "<your-app-name>",
    "disks": [
      {
        "name": "data",
        "mountTo": "/chroma/chroma"
      }
  ]
}`}
    </Highlight>
    <p>
      در اینجا مقدار app، برابر هست با نام برنامه‌ای که در لیارا ایجاد کردید و
      مقدار image، برابر هست نام image برنامه‌تان. در قسمت port، پورتی که
      برنامه‌تان بر روی آن اجرا می‌شود و در قسمت disks، قرار داده شده است نام
      دیسک‌هایی که به صورت پیش‌فرض برای برنامه‌تان نیاز هست. در نهایت با{" "}
      <span className="code">liara-cli</span> و سپس دستور زیر برنامه‌تان مستقر
      کنید:
    </p>
    <Highlight className="json">{`liara deploy`}</Highlight>
  </Layout>
);

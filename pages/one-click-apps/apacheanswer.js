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
      <title>مستندات نصب و راه‌اندازی Apache Asnwer - لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="apacheanswer" />
      <div className="page-title">
        <h1>پلتفرم پرسش و پاسخ Apache Answer</h1>
        <span className="page-description">(Apache Answer one-click app)</span>
      </div>
    </div>

    <p>
      <a
        href="https://github.com/apache/incubator-answer"
        target="_blank"
        rel="noopener"
      >
        Apache Answer
      </a>{" "}
      یک پلتفرم رایگان و متن‌باز Q&A (پرسش و پاسخ) است که می‌تواند برای هرتیمی
      در هر مقیاسی مناسب باشد. فرقی ندارد که Apache Answer یک انجمن باشد، یک
      help center یا یک پلتفرم اشتراک دانش (مانند StackOverFlow)؛ شما می‌توانید
      همواره روی Apache Answer حساب کنید.
    </p>

    <h3>🚀 راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/apacheanswer/apacheanswer.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده Apache Answer باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Apache Answer
      را انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید. در آخر پس از
      انتخاب شبکه خصوصی و پلن، بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک
      کنید.
    </p>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4>اتصال به دیتابیس</h4>
    <p>
      در قدم دوم نصب برنامه Apache Answer باید تنظیمات مربوط به دیتابیس را
      پیکربندی کنید. دقت داشته باشید که اگر قصد دارید به دیتابیس در شبکه خصوصی
      متصل شوید، برنامه Apache Answer و دیتابیس هر دو باید در یک شبکه خصوصی
      مشترک قرار داشته باشند. پیشنهاد می‌شود که از دیتابیس SQLite استفاده کنید؛
      چون به تنظیمات خاصی احتیاج ندارد و ما از قبل یک دیسک برای انجام این کار در
      برنامه Apache Answer برای شما، تعریف کرده‌ایم.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/apacheanswer/apacheanswer_db_conf.png"></ZoomableImage>

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
    "image": "apache/answer:<your-version>",
    "port": 80,
    "app": "<your-app-name>",
    "disks": [
      {
        "name": "data",
        "mountTo": "/data"
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

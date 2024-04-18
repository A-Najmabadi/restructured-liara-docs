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
      <title>مستندات نصب و راه‌اندازی Appsmith - لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="appsmith" />
      <div className="page-title">
        <h1>پلتفرم Appsmith</h1>
        <span className="page-description">(Appsmith one-click app)</span>
      </div>
    </div>

    <p>
      <a
        href="https://github.com/appsmithorg/appsmith"
        target="_blank"
        rel="noopener"
      >
        Appsmith
      </a>{" "}
      یک ابزار توسعه‌دهنده متن‌باز (open-source) است که به توسعه برنامه‌هایی مثل
      داشبردها، رابط‌های کاربری گرافیکی دیتابیس‌ها، پنل‌های ادمین، ابزارهای
      پشتیبانی مشتری و ... سرعت بسیار زیادی می‌بخشد. شما با استفاده از Appsmith
      می‌توانید با یک drag & drop ساده‌ی ویجت‌های از پیش ساخته شده، رابط کاربری
      مد نظر خود را بسازید، در امنیت کامل به دیتابیس‌ها و APIهای خود متصل شوید،
      و با استفاده از کوئری‌ها یا JavaScript داده‌های خود را بنویسید یا وارد
      کنید.
    </p>

    <h3>🚀 راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/appsmith/appsmith.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده Appsmith باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Appsmith را
      انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید. در آخر پس از
      انتخاب شبکه خصوصی و پلن، بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک
      کنید.
    </p>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

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
    "image": "appsmith/appsmith-ee:<your-version>",
    "port": 80,
    "app": "<your-app-name>",
    "disks": [
      {
        "name": "data",
        "mountTo": "/appsmith-stacks"
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

    <h4 id="set-envs">پیکربندی و تنظیم متغیرهای Appsmith</h4>
    <p>
      در ابتدا، کافیست که وارد بخش <b>دیسک‌ها</b> برنامه‌ Appsmith خود در لیارا
      شوید سپس، بر روی دیسک data کلیک کنید و یک <a href="">دسترسی FTP</a> جدید
      ایجاد کنید. سپس با استفاده از دسترسی FTP به دیسک متصل شوید و به مسیر زیر
      بروید:
    </p>
    <Highlight className="shell">{`configuration/docker.env`}</Highlight>
    <p>
      پس از بازکردن فایل <span className="code">docker.env</span> با ادیتور
      مدنظرتان، کافیست تا متغیرهای موجود در آن را بنا به نیاز خود، تغییر دهید یا
      مقداردهی کنید. به عنوان مثال. برای اضافه کردن کلید API Google Maps فقط
      کافیست که قطعه کد زیر را در فایل مذکور، وارد کنید:
    </p>
    <Highlight className="shell">
      {`APPSMITH_GOOGLE_MAPS_API_KEY=YOUR_API_KEY`}
    </Highlight>
    <p>
      و به جای عبارت <span className="code">YOUR_API_KEY</span> مقدار Google API
      key خود را وارد کنید.
    </p>
    <p>
      در نهایت کافیست تا تغییرات را ذخیره کنید و در بخش <b>اطلاعات کلی</b> در
      لیارا، برنامه Appsmith خود را ری‌استارت کنید تا تغییرات در برنامه‌تان لحاظ
      شوند.
    </p>
  </Layout>
);

import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات تنظیم متغیرها (Environment Variables) در برنامه‌های NextJS -
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="next" />
      <div className="page-title">
        <h1>پلتفرم NextJS</h1>
        <span className="page-description">(NextJS Platform)</span>
      </div>
    </div>

    <h3>تنظیم متغیرها (Environment Variables)</h3>
    <p>
      متغیرهای محیطی یا همان Environment Variables به شما کمک می‌کنند تا
      برنامه‌ی‌تان در هر محیط اطلاعات مربوط به همان محیط را دریافت کند. برای
      مثال، اطلاعات اتصال به دیتابیس را می‌توانید از این بخش وارد کنید.{" "}
      <Link href="/app-features/environment-variables">توضیحات بیشتر</Link>
    </p>
    <p>
      برای افزودن یک ENV کافیست که به بخش تنظیمات برنامه‌ی‌تان بروید و یک key به
      عنوان اسم و یک value به عنوان مقدار اضافه کنید، و با زدن دکمه{" "}
      <b>ثبت تغییرات</b> یک ENV به برنامه‌ی‌تان اضافه کنید. برای نمونه، ENV ای
      با عنوان NEXT_PUBLIC_LIARA_URL و مقدار https://liara.ir را به این صورت
      اضافه کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/liara/nextjs/nextjs-envs.png" />
    <p> حالا به راحتی می‌توانید از‌ آن در برنامه‌ی‌تان استفاده کنید:</p>
    <Highlight className="js">
      {`console.log(\`app listening on port 3000 on \${process.env.NEXT_PUBLIC_LIARA_URL}\`)`}
    </Highlight>
    <p>
      بعد از کلیک روی دکمه <b>ثبت تغییرات</b> برنامه‌ی‌ شما به صورت خودکار
      ری‌استارت می‌شود و در استقرار جدید این متغیر‌های محیطی در داخل برنامه قابل
      استفاده می‌شوند. به این شیوه که LIARA_URL را اضافه کردید می‌توانید هر ENV
      دیگری را نیز به برنامه اضافه کنید.
    </p>
    <Notice variant="warning">
      توجه داشته باشید که متغیرهای محیطی برنامه حتماً باید با عبارت{" "}
      <span className="code">NEXT_PUBLIC_</span>
      شروع شوند تا به درستی بارگذاری شوند. همچنین اگر که بعد از استقرار، متغیر
      محیطی جدیدی را تعریف کردید؛ برای بارگذاری درست آن، باید برنامه را یک‌بار
      ری‌استارت کنید.
    </Notice>
    <br />
    <Link href="/app-deploy/nextjs/logs" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);

import Layout from "../../../components/Layout";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات آبجکت‌استوریج</title>
    </Head>

    <h1>آبجکت استوریج</h1>
    <span className="pageDescription">(Object Storage)</span>

    <h3>درباره Object Storage</h3>

    <p>
      آبجکت‌استوریج یکی از روش‌های ذخیره سازی فایل‌هاست. فایل‌هایی با فرمت‌های
      تصویری، صوتی، ویدیویی یا pdf و یا هر مدل فایل دیگری. حتی میتوانید لاگ‌های
      نرم‌افزار خود را نیز در آبجکت‌استوریج به راحتی ذخیره کنید. اما تفاوت آبجکت
      استوریج با بقیه روش‌های ذخیره‌سازی چیست؟
    </p>
    <p>
      آبجکت استوریج‌ها روش جدیدی برای ذخیره‌سازی اطلاعات هستند که فلسفه اصلی و
      کاربردی آن‌ها برای برنامه‌نویسان را شاید بشود در ۲ چیز خلاصه کرد:
    </p>
    <ul>
      <li>
        <p>
          {" "}
          <b>مقیاس پذیری راحت:</b> یعنی بشود به راحتی میزان فضای ذخیره‌سازی را
          افزایش داد. این موضوع مدیون معماری Object Storage هاست که امکان
          مقیاس‌پذیری را فراهم کرده است.
        </p>
      </li>
      <li>
        <p>
          {" "}
          <b>ذخیره‌سازی فایل‌ها به وسیله HTTP</b>: روش ارتباط با Object Storage
          به وسیله فراخوانی‌های سیستمی با لایه ‌filesystem سیستم‌عامل‌ها نیست.
          بلکه به وسیله درخواست‌های HTTP میتوان با آبجکت‌استوریج ارتباط برقرار
          کرد. این موضوع باعث شده تا ساختار استانداردی مستقل از زبان و سیستم
          عامل برای همه زبان‌های برنامه‌نویسی به وجود بیاید. ساختاری که کمپانی
          آمازون آن را ایجاد کرده و نام آن <b>S3</b> است.
        </p>
      </li>
    </ul>

    <h3>سرویس فایل در لیارا</h3>
    <p>
      لیارا برای راحتی کار برنامه‌نویسان و توسعه‌دهندگان نرم‌افزار، بستر Object
      Storage را تحت عنوان <b>سرویس فایل</b> ارائه میدهد. در سرویس فایل، لیارا
      از نرم‌افزار قدرتمند{" "}
      <a href="https://min.io/" target="_blank">
        Minio
      </a>{" "}
      برای راه‌اندازی بستر Object Storage استفاده میکند. راه‌اندازی و نگهداری و
      مانیتورینگ سلامت سرویس فایل به عهده لیاراست و شما کافیست با چند کلیک سرویس
      فایل را راه‌اندازی کنید و از مزایای آن بدون هیچ دردسری در ‌پروژه‌ی‌تان
      بهره‌مند شوید.
    </p>

    <h3>اگر تا به حال با Object Storage ها کار نکرده‌اید:</h3>
    <p>
      در ساختارهای معمولی ذخیره‌سازی اطلاعات که روزمره با آن ها سروکار داریم مثل
      ساختار ذخیره فایل در تلفن‌های همراه‌مان یا سیستم‌عامل‌هایمان مثل ویندوز و
      لینوکس، اطلاعات در قالب پوشه ها یا دایرکتوری‌ها ذخیره میشوند. اما در
      Object Storage ها قضیه کمی متفاوت است. معماری Object Storage ها اصطلاحا
      ساختار flat دارد. یعنی اطلاعات در یک سطح ذخیره میشوند و خبری از دایرکتوری
      و پوشه نیست. به همین دلیل مفهومی به اسم Bucket ها وجود دارد که به کمک آن
      ها میتوانیم رفتاری شبیه پوشه و دایرکتوری داشته باشیم. مثلا باکت تصاویر
      درست کنیم یا باکت پروژه دانشگاه. هیچ محدودیتی وجود ندارد. باکت‌ها به شما
      کمک میکنند که اطلاعات را در ساختاری منسجم‌تر و قابل تفکیک‌تر از نظر خودتان
      ذخیره کنید.
    </p>
  </Layout>
);

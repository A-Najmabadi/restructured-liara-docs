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
      <title>مستندات نصب و راه‌اندازی Varnish Cache - لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="varnish" />
      <div className="page-title">
        <h1>پلتفرم Varnish Cache</h1>
        <span className="page-description">(Varnish Cache one-click app)</span>
      </div>
    </div>

    <p>
      <a
        href="https://github.com/varnishcache/varnish-cache"
        target="_blank"
        rel="noopener"
      >
        Varnish Cache
      </a>{" "}
      یک شتاب‌دهنده برنامه‌های وب است که به عنوان caching <strong>HTTP</strong>{" "}
      reverse proxy نیز، شناخته می‌شود. فقط کافیست تا Varnish Cache را در مقابل
      سروری که از طریق پروتکل HTTP با سایر سرورها و یا مشتری‌ها ارتباط برقرار
      می‌کند؛ نصب کنید و آن را برای cache کردن محتوای سرور، پیکر بندی کنید تا
      بتواند تاثیر فوق‌العاده خود را در برنامه شما بگذارد. Varnish Cache واقعاً
      سریع است! بسته به معماری شما، می‌تواند سرعت بالا آمدن وب‌سایت را 300 تا
      1000 برابر افزایش دهد.
    </p>

    <h3>🚀 راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/varnish/varnish.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده Varnish Cache باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Varnish Cache
      را انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید. در آخر پس از
      انتخاب شبکه خصوصی و پلن، بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک
      کنید.
    </p>
    <Notice variant="info">
      دقت داشته باشید که Varnish Cache را باید در شبکه خصوصی مشترکی با برنامه‌ای
      که قصد دارید Varnish را بر روی آن نصب کنید؛ قرار بدهید در غیر این‌صورت،
      Varnish به برنامه‌تان، متصل نخواهد شد.
    </Notice>

    <h3 id="envs">تنظیم متغیرهای محیطی Varnish Cache</h3>
    <p>
      پس از ساخت برنامه Varnish Cache کافیست که وارد قسمت{" "}
      <strong>تنظیمات</strong> آن در پنل‌کاربری شوید و در قسمت متغیرهای محیطی،
      متغیرهای محیطی موجود را بر حسب اطلاعات زیر، تغییر دهید:
    </p>
    <ul>
      <li>
        <span className="code">VARNISH_BACKEND_HOST</span>: مقدار این متغیر باید
        شناسه برنامه مد نظر شما باشد.
      </li>
      <li>
        <span className="code">VARNISH_BACKEND_PORT</span>: مقدار این متغیر باید
        پورتی باشد که برنامه شما در آن به درخواست کاربران listen می‌کند.
      </li>
      <li>
        <span className="code">VARNISH_TTL</span>: در این متغیر باید مقدار
        time-to-live را مشخص کنید. 120 برای دو دقیقه (مقدار استاندارد) مناسب
        است.
      </li>
      <li>
        <span className="code">VARNISH_SIZE</span>: در این متغیر باید اندازه
        حافظه cache را مشخص کنید (مقدار استاندارد آن 2G است).
      </li>
    </ul>
    <Notice variant="info">
      می‌توانید مقدار پورت هر برنامه را در قسمت تاریخچه آن در پنل کاربری لیارا،
      مشاهده کنید. مقدار پورت برای برنامه‌های وردپرسی نیز، 80 است.
    </Notice>
    <p>
      پس از تنظیم متغیرهای محیطی، کافیست تا دامنه پیش‌فرض برنامه خود را خاموش
      کنید و دامنه‌های مدنظر خود را در Varnish Cache تعریف کنید تا Varnish Cache
      با موفقیت بر روی برنامه‌تان نصب شود.
    </p>
  </Layout>
);

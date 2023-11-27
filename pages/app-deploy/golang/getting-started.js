import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Golang - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="go" />
      <div className="page-title">
        <h1>پلتفرم Golang</h1>
        <span className="page-description">(Golang Platform)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه Golang را با استفاده از
      ابزار <Link href="/app-deploy/django/desktop">Liara Desktop</Link>، بر روی
      لیارا مستقر کنید. البته درصورتی که استفاده از Terminal را ترجیح می‌دهید یا
      تصمیم داشته باشید با <Link href="/cicd/about">راه‌اندازی CI/CD</Link>،
      مسئولیت استقرار برنامه‌ی خود را به سرویس{" "}
      <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپرید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/django/cli">Liara CLI</Link> وجود دارد. البته این
      نکته را در نظر داشته باشید که برای استقرار برنامه‌های golang در لیارا از
      پلتفرم <a href="/app-deploy/docker/getting-started"> Docker </a> استفاده
      خواهد شد. در ادامه در هر گام، با یک ویژگی هاست ابری Golang لیارا آشنا
      خواهید شد و می‌توانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>
      ما همراه شما هستیم. برای اینکه عملیات استقرار پروژه شما را بیش از پیش،
      ساده‌تر کنیم؛ آموزش صفر تا صد استقرار برنامه Golang در لیارا را برای شما
      تهیه کرده‌ایم؛ در این دوره آموزشی، تمامی مراحل لازم برای استقرار و اجرای
      یک برنامه، قدم به قدم توضیح داده شده است. برای مشاهده آموزش کلیک کنید:{" "}
      <a href="/tv/courses/golang">
        صفر تا صد استقرار برنامه‌های Golang در لیارا
      </a>
    </p>
    <br />

    <Link href="/app-deploy/golang/desktop" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);

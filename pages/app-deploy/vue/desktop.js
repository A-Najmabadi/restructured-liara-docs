import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استقرار برنامه‌های Vue با استفاده از ابزار Liara Desktop - سرویس
        ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="vue" />
      <div className="page-title">
        <h1>برنامه‌های Vue</h1>
        <span className="page-description">(Liara Desktop)</span>
      </div>
    </div>

    <h3>استقرار با Liara Desktop</h3>

    <Notice variant="info">
      در حال حاضر تنها نسخه‌ی ویندوز ابزار Liara Desktop منتشر شده و برای
      استقرار برنامه‌های Vue در سیستم‌عامل لینوکس و مک می‌توانید از ابزار{" "}
      <Link href="/app-deploy/vue/cli">Liara CLI</Link> استفاده کنید.
    </Notice>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/vue/vue-desktop.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Link href="/app-deploy/vue/cli">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
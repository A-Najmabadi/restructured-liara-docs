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
      <title>مستندات نصب و راه‌اندازی Meilisearch - لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="meilisearch" />
      <div className="page-title">
        <h1>موتور جستجو Meilisearch</h1>
        <span className="page-description">(Meilisearch Search Engine)</span>
      </div>
    </div>

    <p>
      <a
        href="https://github.com/meilisearch/meilisearch"
        target="_blank"
        rel="noopener"
      >
        Meilisearch
      </a>{" "}
      یک موتور جستجو متن‌باز و قابل‌تنظیم است که برای ایجاد سیستم‌های جستجوی
      سریع و دقیق در برنامه‌ها و وب‌سایت‌ها استفاده می‌شود. این ابزار، به عنوان
      یک جایگزین مناسب برای Elasticsearch یا Algolia شناخته می‌شود و قابلیت‌هایی
      مانند پشتیبانی از جستجوهای تصویری، پشتیبانی از زبان‌های مختلف، جستجوی متن
      کامل، پشتیبانی از نوع داده‌های مختلف و ... را فراهم می‌کند.
    </p>

    <h3>🚀 راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/liara/one-click-apps/meilisearch.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده Meilisearch باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Meilisearch را
      انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید. در آخر پس از
      انتخاب شبکه خصوصی و پلن، بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک
      کنید.
    </p>

    <h3 id="proxy">متغیر MEILI_MASTER_KEY</h3>
    <p>
      پس از ساخته شدن برنامه Meilisearch یک token به نام{" "}
      <span className="code">MEILI_MASTER_KEY</span> برای برنامه، ایجاد می‌شود و
      شما می‌توانید در بخش <strong>تنظیمات، متغیرها</strong> به این token دسترسی
      داشته باشید و حتی مقدار آن را تغییر دهید. پس از تغییر مقدار، ممکن است
      برنامه یک‌بار ری‌استارت شود.
    </p>
    <ZoomableImage src="https://files.liara.ir/liara/one-click-apps/meilisearch-token.png"></ZoomableImage>

    <p>
      با استفاده از این توکن، می‌توانید برنامه خود را به Meilisearch متصل کنید،
      در ادامه، قطعه کدی برای اتصال به Meilisearch در زبان برنامه‌نویسی پایتون،
      آورده شده است:
    </p>
    <Highlight className="python">
      {`from meilisearch.client import Client

client = Client('your-meilisearch-address', 'meili-master-key')

index = client.index('books')

documents = [
    {'id': 1, 'title': 'Harry Potter', 'author': 'J.K. Rowling'},
    {'id': 2, 'title': 'Lord of the Rings', 'author': 'J.R.R. Tolkien'},
    # Add more documents as needed
]

index.add_documents(documents)


result = index.search('Harry Potter')
for hit in result['hits']:
    print(hit)
`}
    </Highlight>
    <p>
      در کد فوق، باید به جای{" "}
      <span className="code">your-meilisearch-address</span> و{" "}
      <span className="code">meili-master-key</span> به ترتیب آدرس کامل
      Meilisearch و مقدار <span className="code">MEILI_MASTER_KEY</span> را وارد
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
    "image": "getmeili/meilisearch:<your-version>",
    "port": 7700,
    "app": "<your-app-name>",
    "disks": [
      {
        "name": "data",
        "mountTo": "/meili_data"
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

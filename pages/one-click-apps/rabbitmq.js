import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>مستندات RabbitMQ - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="rabbitmq" />
      <div className="page-title">
        <h1>میان‌افزار RabbitMQ</h1>
        <span className="page-description">(RabbitMQ one-click app)</span>
      </div>
    </div>
    <p>
      <a href="https://github.com/rabbitmq" target="_blank" rel="noopener">
        RabbitMQ
      </a>{" "}
      پرکاربردترین واسط پیام (Message Broker) متن‌باز است که بیش از ده‌ها هزار
      کاربر از آن استفاده می‌کنند. RabbitMQ منابع سخت‌افزاری خیلی کمی را اشغال
      می‌کند و عملیات استقرار بسیار ساده‌ای دارد. از مزایای این Message Broker
      می‌توان به پشتیبانی آن از پروتکل‌های AMQP و MQTT و خیلی پروتکل‌های معروف
      دیگر اشاره کرد. این رابط پیام، امکاناتی نظیر اطمینان از رسیدن پیام‌ها به
      مقصد، توزیع مجدد پیام‌ها در صورت لزوم، و مدیریت صف‌های پیام را فراهم
      می‌کند.
    </p>

    <h3>🚀 راه‌اندازی</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/rabbitmq/rabbitmq.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده RabbitMQ باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی RabbitMQ را
      انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید، همچنین پلن مورد
      نظر خود را انتخاب کنید و در آخر بر روی دکمه‌ی{" "}
      <strong>ایجاد برنامه</strong> کلیک کنید.
    </p>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4>پورت‌های برنامه</h4>
    <ul>
      <li>
        پورت <span className="code">15672</span>: پورت رابط کاربری rabbitmq که
        با آن می‌توانید وارد داشبرد rabbitmq شوید.
      </li>
      <li>
        پورت <span className="code">5672</span>: پورت اتصال که با این پورت
        می‌توانید producer و consumer را در شبکه خصوصی به یکدیگر متصل کنید.
      </li>
    </ul>
    <Notice variant="info">
      دقت داشته باشید در صورتی دو برنامه producer و consumer می‌توانند با یکدیگر
      از طریق RabbitMQ ارتباط داشته باشند که هر سه برنامه RabbitMQ و Producer و
      Consumer در یک شبکه خصوصی قرار داشته باشند و برنامه‌های producer و
      consumer از پورت 5672 در شبکه خصوصی به RabbitMQ متصل شوند.
    </Notice>

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
    "image": "rabbitmq:<your-version>",
    "port": 15672,
    "app": "<your-app-name>",
    "disks":[
      {
        "name": "data",
        "mountTo": "/var/lib/rabbitmq"
      }
    ]
}`}
    </Highlight>
    <p>
      در اینجا مقدار app، برابر هست با نام برنامه‌ای که در لیارا ایجاد کردید و
      مقدار image، برابر هست نام image برنامه‌تان. در قسمت port، پورتی که
      برنامه‌تان بر روی آن اجرا می‌شود. در نهایت با{" "}
      <span className="code">liara-cli</span> و سپس دستور زیر برنامه‌تان مستقر
      کنید:
    </p>
    <Highlight className="json">{`liara deploy`}</Highlight>
  </Layout>
);

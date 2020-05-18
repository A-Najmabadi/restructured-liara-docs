import Layout from '../../../components/Layout'
import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات استقرار برنامه‌های Flask - Flask deployment</title>
    </Head>

    <h1>استقرار برنامه‌های Flask</h1>
    <p>
      برنامه‌ی شما باید دارای فایل
      <span className="code">requirements.txt</span>
      باشد و حتما مطمئن شوید که Flask در این فایل وجود داشته باشد تا بتواند در لیارا مستقر شود.
    </p>
    
    <h3>شروع عملیات استقرار</h3>
    <p>
      در ابتدا مطمئن شوید که
      <span className="code">@liara/cli</span>
      را روی کامپیوترتان نصب کرده‌اید.
      {' '}
      <Link href="/clients/cli" title="مستندات CLI">اطلاعات بیشتر</Link>
      <br/>
      سپس دستور زیر را داخل برنامه‌ی‌تان اجرا کنید:
    </p>
    <pre>
      <code>
        liara deploy
      </code>
    </pre>
    <p>
      لیارا به صورت خودکار، تشخیص خواهد داد که برنامه‌ی شما را باید به عنوان یک برنامه‌ی
      Flask
      اجرا کند و عملیات استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود داشت، می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>
        liara deploy --platform=flask
      </code>
    </pre>

    <h3>پکیج‌ها به صورت خودکار نصب می‌شوند</h3>
    <p>
      لیارا به صورت خودکار پکیج‌هایی که در فایل‌های
      <span className="code">requirements.txt</span>
      لیست شده‌اند را برای شما نصب می‌کند.
      پس نیازی ندارید که به دنبال اجرای دستورات
      <span className="code">pip install</span>
      باشید.
      از آن‌جایی که اجرای این دستورات زمان‌بر است، برای سرعت بیشتر، این دستورات را روی سرورهای قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر نمانید.
    </p>

    <h3>اتصال به دیتابیس</h3>
    <p>
      شما می‌توانید از بخش «دیتابیس‌ها»، یک دیتابیس
      MySQL یا MongoDB
      ایجاد کنید.
      بعد از ایجاد دیتابیس، در لیست دیتابیس‌ها، روی دیتابیس موردنظرتان کلیک کنید تا
      اطلاعات اتصال به آن برای‌تان نمایش داده شود.
      <br/>

      هر برنامه‌ای یک بخش تنظیمات دارد که از طریق آن می‌توانید متغیرهای لازم را برای برنامه تعریف کنید.
      (<Link href="/apps/environment-variables" title="مستندات متغیرها">اطلاعات بیشتر</Link>)

      <br/>
      شما می‌توانید به هر صورت که مایل هستید اطلاعات دیتابیس را به برنامه‌ی‌تان بدهید. ما پیشنهاد می‌کنیم
      متغیری مانند زیر را در بخش تنظیمات برنامه ایجاد و مقداردهی کنید:
    </p>
    <pre>
      <code>
{`DATABASE_URL=mysql://root:PASSWORD@HOST:PORT/my_database`}
      </code>
    </pre>
    <p>
      توجه کنید که متغیر بالا، صرفا جهت نمونه آورده شده و شما باید مقدار آن را با اطلاعات دیتابیسی که ساختید پر کنید.
      نکته‌ی دیگری که باید به آن توجه کنید این است که در مثال بالا، فرض بر این بوده است که شما به سرور دیتابیس‌تان متصل شده و یک دیتابیس با نام
      <span className="code">my_database</span>
      ساخته‌اید.
    </p>
  </Layout>
)

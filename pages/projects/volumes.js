import Layout from '../../components/Layout'
import Head from 'next/head'

export default () => (
  <Layout>
    <Head>
      <title>Liara | والیوم‌ها - Volumes</title>
    </Head>

    <h1>ذخیره‌ی داده‌ها (Volumes)</h1>
    <p>
      فایل‌سیستم در لیارا زودگذر و فانی است، این یعنی هر فایلی که در کنار پوشه‌های
      پروژه‌ی‌های‌تان ذخیره کنید، بعد از یک عملیات استقرار و یا یک ری‌استارت، از بین خواهند رفت.
      لیارا امکانی با عنوان Volume
      دارد که می‌تواند فایل‌های درون یک پوشه‌ی خاص که شما آن را مشخص می‌کنید را نگه‌داری کند.
    </p>
    <p>
      برای مثال ممکن است یک پوشه با نام
      <span className="code">uploads/</span>
      داشته باشید که می‌توانید آن را به عنوان Volume
      تعریف کرده و دیگر نگران از بین رفتن فایل‌های درون این پوشه نباشید.
      در پروژه‌هایی که از Laravel
      به عنوان فریم‌ورک اصلی استفاده می‌کنید، ممکن است که پوشه‌ی
      <span className="code">storage</span>
      را به عنوان Volume
      تعریف کنید.
    </p>

    <h3>سرویس فایل لیارا</h3>
    <p>
      پیشنهاد ما این است که تا حد ممکن، فایل‌های‌تان را داخل پوشه‌ای کنار کدهای‌تان ذخیره نکنید.
      این عمل باعث می‌شود که پروژه‌ی شما مقیاس‌پذیر نباشد و در آینده در صورتی که ترافیک سایت‌تان بالا رفت، ممکن با مشکلاتی مواجه شوید.
      به‌طور کلی، این معماری را توصیه نمی‌کنیم و پیشنهاد می‌کنیم حتما از
      {' '}
      <a href="/storage/overview" title="Liara Object Storage">سرویس فایل لیارا</a>
      {' '}
      برای ذخیره‌ی فایل‌های‌تان
      استفاده کنید تا امکانات بیشتری داشته باشید و همین‌طور پروژه‌ی‌تان آماده‌ی رویارویی با مقیاس و ترافیک بالا باشد.
    </p>
    
    <h3>تعریف Volume</h3>
    <p>
      تعریف‌کردن Volume
      به کمک فایل
      <span className="code">liara.json</span>
      صورت می‌گیرد.
    </p>
    <pre>
      <code>
{`{
  "volume": "/var/www/html/storage"
}`}
      </code>
    </pre>
    <p>
      پروژه‌های لاراولی داخل
      <span className="code">/var/www/html</span>
      نگه‌داری می‌شوند، پس باید با توجه به این مسیر، Volume تان را تعریف کنید.
      توجه داشته باشید که مسیری که داخل
      Volume
      تغریف می‌کنید، همان مسیری است که در نهایت در سرور لیارا قرار خواهد گرفت. برای مثال، لیارا
      پروژه‌های NodeJS
      ای را روی سرور داخل پوشه‌ی
      <span className="code">/app</span>
      نگه‌داری می‌کند، پس اگر پروژه‌ی شما دارای پوشه‌ی uploads
      باید به این شکل عمل کنید:
    </p>
    <pre>
      <code>
{`{
  "volume": "/app/uploads"
}`}
      </code>
    </pre>
  </Layout>
)

---
title: طقم إندابا
next: /quickstart/app/
lang: ar-x-mtfrom-en
---
<ReadTime/> 

<h1 style=";text-align:right;direction:rtl">طقم إندابا</h1>
 

<Leader> 

يتوفر Indaba كمجموعة مستقلة ومحمولة، وهي نسخة قائمة بذاتها من Indaba تسمح لك بدعم سير عمل Indaba بالكامل في الميدان دون الاتصال بالإنترنت.
 

</Leader> 

<h2 style=";text-align:right;direction:rtl">التثبيت الأولي</h2>
 

<ol style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">قم بتنزيل الملف التالي على محرك أقراص USB واستخدم <a href="https://etcher.balena.io/">Balena Etcher</a> لوضعه على بطاقة SD (بحد أدنى 32 جيجابايت):</li></ol>
 

<blockquote style=";text-align:right;direction:rtl">نصيحة: <span class="code">انقر بزر الماوس الأيمن</span> ثم <span class="code">حفظ الرابط باسم</span> لتنزيل الملفات التالية:</blockquote>
 

<TitanVersion version="indaba-rpi.version" file="indaba-rpi.zip"/> 

<!-- - [images.tar](http://download.indaba.dev/images.tar) --> 

<ol start="2" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">تأكد من أن مجموعة لوحة المعلومات تحتوي على طاقة بطارية كافية أو أنها متصلة بالتيار الكهربائي.</li></ol>
 

<ol start="3" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">أدخل SD الذي تم إنشاؤه حديثًا في وحدة الحساب في Dashboard Kit.</li></ol>
 

<blockquote style=";text-align:right;direction:rtl">نصيحة: في المرة الأولى التي تقوم فيها بتشغيله باستخدام بطاقة SD تم إنشاؤها حديثًا، قد يستغرق تثبيته ما يصل إلى 15 دقيقة.</blockquote>
 

<strong>لا تقم بإيقاف التشغيل حتى اكتمال التثبيت</strong>
 

<ol start="4" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">للتحقق من تقدم عملية التثبيت، انضم إلى شبكة <span class="code">INDABA</span> WiFi باستخدام أي جهاز وقم بزيارة <a href="http://indaba.local">http://indaba.local</a> أو <a href="http://10.10.10.1">http://10.10.10.1</a> .</li></ol>
 

<ol start="5" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">بمجرد ظهور لوحة معلومات Indaba في متصفحك، فأنت جاهز للمتابعة.</li></ol>
 

<h2 style=";text-align:right;direction:rtl">تحديثات البرنامج</h2>
 

يمكنك تحديث برنامج لوحة المعلومات عند توفر التحديثات.
 

<ol style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">قم بتحميل الملف التالي:</li></ol>
 

<blockquote style=";text-align:right;direction:rtl">نصيحة: <span class="code">انقر بزر الماوس الأيمن</span> ثم <span class="code">حفظ الرابط باسم</span> لتنزيل الملفات التالية:</blockquote>
 

<TitanVersion version="indaba-update.version" file="indaba-update.tar"/> 

<ol start="2" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">انسخ هذا الملف إلى المجلد الجذر لوحدة USB مع التأكد من أنه يسمى <span class="code">indaba-update.tar</span> (لا تحتاج إلى استخدام <span class="code">Balena Etcher</span> كما هو الحال مع التثبيت لأول مرة).</li></ol>
 

<h1 style=";text-align:right;direction:rtl">تعيين</h1>
 

<h2 style=";text-align:right;direction:rtl">التشغيل</h2>
 

اضغط على زر الطاقة مرة واحدة ثم حرره.
 

<h2 style=";text-align:right;direction:rtl">إيقاف التشغيل</h2>
 

استمر في الضغط على زر الطاقة لمدة 3 ثوانٍ ثم حرره. انتظر حتى ينطفئ الضوء الموجود على جهاز إرسال WiFi قبل إغلاق العلبة.
 

<!-- ## Initial Device Connection 

إذا كان التطبيق يعمل على الكمبيوتر، وجميع الأجهزة متصلة بشبكة WiFi، فيمكنك فتح التطبيق على كل جهاز يعمل بنظام Android.
 

في التشغيل الأول، سيبحث التطبيق عن تطبيق محلي يعمل على جهاز الكمبيوتر، وقد يستغرق ذلك ما يصل إلى 30 ثانية.
 

يجب تنفيذ هذه الخطوة الأولية مع المشاركين في نطاق شبكة WiFi:
 

<ol style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">اطلب من كل مجموعة أن تختار جلسة التصوير التي تريد أن يشاركوا فيها.</li></ol>
 
<ol start="2" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">اسمح لهم بتسجيل الدخول واختيار الكاميرا وفتح شاشة الكاميرا.</li></ol>
 

{% تلميح نمط = &quot;معلومات&quot; %}
 
بمجرد انضمام الجهاز إلى شاشة الكاميرا وتنزيل الأصول اللازمة، يستطيع المشاركون المساهمة بالمحتوى دون الاتصال بشبكة WiFi.
 
{% نهاية %}
 

<h2 style=";text-align:right;direction:rtl">التقاط المحتوى</h2>
 

يمكن إنجاز هذه العملية دون الاتصال بالإنترنت، أي أنه لا يلزم أن يكون الكمبيوتر واتصال WiFi متاحين.
 

<h2 style=";text-align:right;direction:rtl">تحميل المحتوى</h2>
 

<em><strong>يتطلب اتصال واي فاي بالكمبيوتر</strong></em>
 

يجب أن يبدأ التحميل عندما يكون كل جهاز متصلاً بشبكة WiFi ويكون التطبيق قيد التشغيل على الكمبيوتر. في بعض الحالات، قد يكون تحميل جهاز واحد في كل مرة أسرع من محاولة مزامنة جميع الأجهزة في وقت واحد.
 

اعتمادًا على المشاركين، يمكن دمج عملية التحميل هذه في &quot;محطات التوقف&quot; أثناء عملية التصوير.
 

<h2 style=";text-align:right;direction:rtl">مراجعة المحتوى</h2>
 

<em><strong>يتطلب اتصال واي فاي بالكمبيوتر</strong></em>
 

بمجرد تحميل المحتوى من أحد الأجهزة، يصبح متاحًا لجميع المشاركين لعرضه واستخدامه في إنشاء القصص.
 

<h2 style=";text-align:right;direction:rtl">تحرير المحتوى</h2>
 

<em><strong>يتطلب اتصال واي فاي بالكمبيوتر</strong></em>
 

يمكن تحرير قصص متعددة في وقت واحد، ولكن تتم معالجة كل منها في قائمة الانتظار.
 

يتضمن &quot; <strong>نشر</strong> &quot; القصة قيام التطبيق بإنشاء ملف فيديو واحد من قصة المشاركين.
 

تتم معالجة (نشر) قصة واحدة فقط في المرة الواحدة، لذلك قد يكون هناك تأخير للمشاركين الذين ينتظرون انتهاء قصتهم من المعالجة.
 

{% تلميح نمط = &quot;معلومات&quot; %}
 
يستهلك Indaba قدرًا كبيرًا من طاقة البطارية، خاصة عند نشر القصة. راقب بطارية الكمبيوتر المحمول لديك وتحكم في استهلاك الطاقة عند الضرورة.
 

ستستمر معالجة القصص دون توفر جهاز Android.
 
{% نهاية %}
 

<h2 style=";text-align:right;direction:rtl">تقديم المحتوى</h2>
 

يمكن تشغيل المحتوى المنشور منخفض الدقة مباشرة من أجهزة Android التي أنشأت المحتوى، ومع ذلك يمكنك فتح دليل التحميل الموجود على الكمبيوتر وتشغيل الإصدارات عالية الجودة مباشرة. --&gt;
 

<h1 style=";text-align:right;direction:rtl">صيانة</h1>
 

<h2 style=";text-align:right;direction:rtl">نسخ إحتياطي للبيانات</h2>
 

تتلف بطاقات SD في بعض الأحيان، لذا فمن الممارسات الجيدة الحفاظ على تحديثات منتظمة لبيانات Indaba الموجودة في Indaba Kit.
 

لإجراء نسخة احتياطية:
 

<ol style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">أدخل عصا USB في <span class="code">مجموعة Indaba</span> .</li></ol>
 
<ol start="2" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">قم بتحديث <span class="code">لوحة تحكم المسؤول</span> وحدد <span class="code">النسخ الاحتياطي إلى محرك الأقراص هذا</span> .</li></ol>
 
<ol start="3" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">انتظر حتى اكتمال الظهر.</li></ol>
 

سيتم إنشاء نسخة احتياطية جديدة على محرك أقراص USB في كل مرة يتم فيها الضغط على الزر. ستكون هذه النسخة الاحتياطية في المجلد <span class="code">/indaba/...timestamp... الموجود</span> على محرك الأقراص.
 

تأكد من إزالة محرك أقراص USB هذا وتخزينه بعيدًا عن Indaba Kit لتجنب فقدان البيانات.
 

<h2 style=";text-align:right;direction:rtl">إستعادة البيانات</h2>
 

إذا كنت بحاجة إلى استعادة نسخة احتياطية سابقة لسبب ما، فاتبع الخطوات التالية:
 

<ol style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">حدد موقع محرك أقراص USB باستخدام نسخة احتياطية تم إنشاؤها مسبقًا.</li></ol>
 
<ol start="2" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">تأكد من أن لديك مجموعة Indaba Kit العاملة (أي يمكنك الوصول إلى لوحة المعلومات عبر متصفح متصل بشبكة <span class="code">INDABA</span> WiFi). إذا تعذر بدء تشغيل مجموعة Indaba الخاصة بك، فستحتاج إلى اتباع الخطوات الواردة في <span class="code">التثبيت الأولي</span> واستعادة المجموعة الخاصة بك إلى حالتها الافتراضية.</li></ol>
 
<ol start="3" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">قم بتوصيل محرك أقراص USB بالنسخ الاحتياطية الخاصة بك وقم بزيارة لوحة المعلومات في المتصفح.</li></ol>
 
<ol start="4" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">حدد الجزء الخلفي الذي تريد استعادته من القائمة الموجودة في لوحة التحكم. انقر فوق الزر <span class="code">&quot;استعادة</span> &quot; بجوار النسخة الاحتياطية.</li></ol>
 

<blockquote style=";text-align:right;direction:rtl">ملاحظة: بما أن مجموعة Indaba غير متصلة بالإنترنت، فقد لا تكون التواريخ/الأوقات المذكورة منطقية، ولكنها ستكون مرتبة حسب وقت إجراء النسخ الاحتياطية.</blockquote>
 

<blockquote style=";text-align:right;direction:rtl">ملاحظة: سيتم مسح جميع البيانات عند إجراء الاستعادة. كن حذرًا بشأن النسخة الاحتياطية التي تختارها.</blockquote>
 

<h2 style=";text-align:right;direction:rtl">النسخ الاحتياطي في حالات الطوارئ</h2>
 

استخدم هذا كملاذ أخير، عندما لا تتمكن من بدء تشغيل Indaba في حالة يمكنك من خلالها تشغيل النسخ الاحتياطي من لوحة المعلومات. سيسمح لك على الأقل بإنقاذ ملفات الفيديو، ولكن اعتمادًا على سبب الفشل، قد لا يسمح لك باستعادة المجموعة بأكملها إلى حالتها السابقة.
 

<ol style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">قم بإنشاء ملف فارغ يسمى <span class="code">EMERGENCYBACKUP</span> على محرك أقراص USB باستخدام جهاز كمبيوتر عادي.</li></ol>
 
<ol start="2" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">أدخل محرك أقراص USB في <span class="code">مجموعة Indaba</span> .</li></ol>
 
<ol start="3" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">انتظر لمدة 10 دقائق على الأقل، ثم قم بإزالة محرك أقراص USB.</li></ol>
 
<ol start="4" style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl">أدخل محرك أقراص USB في كمبيوتر آخر وتحقق من وجود ملفات النسخ الاحتياطي.</li></ol>
 

<h2 style=";text-align:right;direction:rtl">هيكل النسخ الاحتياطي</h2>
 

<em>بالنسبة للسلوك الطبيعي، ليس من الضروري فهم بنية مجلد النسخ الاحتياطي.</em>
 

<pre style=";text-align:right;direction:rtl"><code class="language-bash"></code></pre>
 
محرك أقراص USB/
 
├─ إندابا/
 
│ ├─ indaba-logs/# موقع السجلات التي يتم إنشاؤها في كل مرة يتم فيها إدخال محرك أقراص USB في الجهاز.
 
│ │ ├─ logs-%timestamp%/# محتويات نسخة احتياطية لسجلات واحدة (ملفات .log متعددة)
 
│ ├─ indaba-em-backup/
 
│ │ ├─ النسخ الاحتياطي-%timestamp%/# محتويات عملية نسخ احتياطي واحدة لحالات الطوارئ.
 
│ │
 
│ ├─ %الطابع الزمني%/
 
│ │ ├─ تحميل/# محتويات دليل وسائط إندابا
 
│ │ ├─ *.json # كل ملف JSON هو نسخة احتياطية لمجموعة قاعدة البيانات
 
│ │ ├─ indaba.redis # النسخ الاحتياطي لخدمة جلسة Redis
 
│
 
│ indaba-update.tar # ملف تم تنزيله من الإنترنت يحتوي على تحديث لـ Indaba
 
│ indaba-update.tar.done # تمت إعادة تسمية ملف التحديث عند نجاح التحديث
 
│
 
│ EMERGENYBACKUP # الملف المستخدم لبدء عملية النسخ الاحتياطي في حالات الطوارئ
 
│ EMERGENYBACKUP.done # تم وضع الملف على محرك الأقراص للإشارة إلى اكتمال النسخ الاحتياطي للطوارئ
 
<pre style=";text-align:right;direction:rtl"><span class="code"></span></pre>
 


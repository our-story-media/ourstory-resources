---
title: استكشاف الأخطاء وإصلاحها
lang: ar-x-mtfrom-en
---
<h1 style=";text-align:right;direction:rtl"> استكشاف الأخطاء وإصلاحها </h1> 

<h2 style=";text-align:right;direction:rtl"> لوحة القيادة تيتان </h2> 

<h3 style=";text-align:right;direction:rtl"> توقف التثبيت/عدم القيام بأي شيء </h3> 

 عند استخدام إصدار <span class="code">Toolbox</span> من Indaba Titan (الذي يدعمه Docker Toolbox) ، هناك أحيانًا مشكلات يفشل فيها Docker في البدء. غالبًا ما تكون أسهل طريقة لتشغيلها مرة أخرى هي:  

<ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> أعد تشغيل الجهاز </li></ul> 
<ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> غالبًا ما يؤدي تغيير الشبكة أثناء تعليق عامل الميناء إلى استمرارها. </li></ul> 
<ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> محاولة بدء Indaba Titan لأول مرة أثناء الاتصال بالإنترنت (من الناحية النظرية لا تحتاج إلى تنزيل أي شيء ولكن هذا يجعلها تعمل في بعض الأحيان). </li></ul> 

<h3 style=";text-align:right;direction:rtl"> لن يتم إعادة توصيل الشبكة بعد إغلاق لوحة المعلومات </h3> 

 قم بتشغيل أداة <span class="code">Fix Network</span> المثبتة بجانب Indaba Dashboard.  

<h2 style=";text-align:right;direction:rtl"> نشر القصة </h2> 

<h3 style=";text-align:right;direction:rtl"> طول الفيديو ليس صحيحًا </h3> 

 في بعض الأحيان ، لا يبلغ الجهاز الذي سجل مقطع الفيديو الأصلي عن الطول بشكل صحيح ، ويتسبب ذلك في حدوث مشكلات في خطوة نشر القصة. يمكن تصحيح ذلك بسهولة باتباع الخطوات التالية:  

<ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> استنساخ القصة التي بها القضايا </li></ul> 
<ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> افتح القصة في محرر تطبيق Android </li></ul> 
<ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> اضغط على الزر <span class="code">Trim</span> ثم الزر <span class="code">Back (رجوع)</span> لكل مقطع فيديو في القصة بدوره. (هذا يتجاوز الطول المبلغ عنه) </li></ul> 
<ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> احفظ القصة وانشرها مرة أخرى </li></ul> 

<h2 style=";text-align:right;direction:rtl"> تطبيق Android </h2> 

 إذا جربت الخطوات التالية وما زلت تواجه مشكلة في الاتصال بلوحة تحكم Indaba ، فحاول تعطيل جدار حماية Windows. يمكن أن يؤدي هذا غالبًا إلى إصلاح هذه المشكلات ، ولكن لا يوصى به كخطوة أولى.  

<h3 style=";text-align:right;direction:rtl"> أخطاء </h3> 

 <strong>الخطأ 1: لا يوجد اتصال بالشبكة</strong>  
 يشير هذا الخطأ إلى أن الجهاز ليس لديه اتصال WiFi (أو 3G).  

 <strong>الخطأ 2: لا يمكن الاتصال بالتطبيق</strong>  

 <strong>الخطأ 3: مفتاح API غير صالح</strong>  

 <strong>الخطأ 4: نواجه مشكلة في استرداد معلوماتك. قم بتسجيل الدخول مرة أخرى للمتابعة</strong>  

 <strong>الخطأ 5: يرجى محاولة تسجيل الدخول مرة أخرى</strong>  

 <strong>خطأ 6: تم إلغاء الطلب من قبل المشارك</strong>  

 <strong>الخطأ 7: خطأ في الخادم</strong>  

 <strong>خطأ 8: خطأ غير معروف في الشبكة</strong>  

<h3 style=";text-align:right;direction:rtl"> شاشة الاتصال </h3> 

 تحتوي شاشة الاتصال على قائمة من 4 فحوصات يقوم بها التطبيق عند بدء التشغيل. يمكن أن تساعدك عمليات التحقق هذه في تشخيص المشكلات المحتملة في إعداد Indaba.  

<ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> <strong>WiFi Connected</strong> : يتحقق هذا مما إذا كان لديك اتصال WiFi نشط متصل به الهاتف. إذا لم يتم تحديد ذلك ، فتحقق من توصيل الجهاز بشبكة Indaba المحلية. </li></ul> 
<ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> <strong>تصحيح نطاق عنوان IP</strong> : يتحقق هذا مما إذا كانت الشبكة التي يتصل بها تم إعدادها لـ Indaba ، حيث يتم تخصيص عنوان IP لها في النطاق 10.10.10.x. إذا لم يتم تحديد ذلك ، تحقق من شبكة WiFi المتصلة وتحقق من أن شبكة WiFi هذه هي Indaba. </li></ul> 
<ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> <strong>تم العثور على تطبيق عن بُعد</strong> : يتحقق هذا من إمكانية العثور على كمبيوتر Titan Dashboard على شبكة WiFi. إذا لم يتم وضع علامة على هذا ، فتحقق من أن جهاز الكمبيوتر الخاص بك قيد التشغيل ومتصل بشبكة Indaba WiFi وقد قام بتكوين عنوان IP الخاص به بشكل صحيح. </li></ul> 
<ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> <strong>تم تأسيس الاتصال</strong> : يتحقق هذا من إمكانية الاتصال بلوحة البيانات. إذا لم يتم تحديدها ، فتحقق من أن تطبيق Dashboard يعمل على جهاز الكمبيوتر الخاص بك وأعد تشغيله إذا لزم الأمر. </li></ul> 


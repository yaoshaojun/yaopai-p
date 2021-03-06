<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <title>YAOPAI|全球预约摄影师平台</title>
    <meta name="renderer" content="webkit">
    <META HTTP-EQUIV="Pragma" CONTENT="no-cache">
    <META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
    <META HTTP-EQUIV="Expires" CONTENT="0">
    <meta name="author" content="YAOPAI TEAM">
    <meta http-equiv="keywords" content="YAOPAI,邀拍,北京邀拍,预约摄影师,婚纱照,婚礼跟拍,写真,私房,旅拍,亲子照,商业拍摄" />
    <meta name="description" content="YAOPAI 是一个全球预约摄影师的平台，YAOPAI 官方微信：yaopaizzz 联系电话：0371-65337727 ；这里汇聚上千位优质摄影师，解放摄影手艺人，让摄影师随时随地接单。如果您有拍摄需求，可以随时随地通过YAOPAI 预约属于您的style、挑选您专属的摄影师。在YAOPAI 您可以更方便、更高效的预约高品质的摄影服务。" />
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <link rel="stylesheet" href="//cdn.staticfile.org/twitter-bootstrap/3.3.5/css/bootstrap.min.css">
    <link href="//cdn.bootcss.com/cropperjs/0.7.2/cropper.min.css" rel="stylesheet">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1465725935_7881246.css">
    <link rel="icon" href="favicon.ico">
    <script>
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?d816860fca72d9a5fa9d446b0ebe52f3";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    </script>
</head>
  <body>
    <!--[if lt IE 10]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <div id="content"></div>
    <div id="alerts"></div>
    <script>
      <!--修复浏览器上传裁剪封面的兼容性问题-->
      if (!HTMLCanvasElement.prototype.toBlob) {
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
          value: function (callback, type, quality) {

            var binStr = atob( this.toDataURL(type, quality).split(',')[1] ),
              len = binStr.length,
              arr = new Uint8Array(len);

            for (var i=0; i<len; i++ ) {
              arr[i] = binStr.charCodeAt(i);
            }

            callback( new Blob( [arr], {type: type || 'image/png'} ) );
          }
        });
      }
    </script>
    <script src="//cdn.staticfile.org/jquery/1.11.3/jquery.min.js"></script>
    <script src="//cdn.staticfile.org/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="//cdn.staticfile.org/plupload/2.1.8/plupload.full.min.js"></script>
    <script src="//cdn.staticfile.org/plupload/2.1.8/i18n/zh_CN.js"></script>
    <script src="//cdn.bootcss.com/cropperjs/0.7.2/cropper.js"></script>
    <!-- <script src="//cdn.bootcss.com/qiniu-js/1.0.15-beta/qiniu.js"></script> -->
  </body>
</html>

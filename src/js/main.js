;(function () {
  var userAgent = navigator.userAgent
  var Android = /Android/.test(userAgent)
  var iOS = /iPhone|iPad/.test(userAgent)
  var Wechat = /MicroMessenger/.test(userAgent)
  var Weibo = /Weibo/.test(userAgent)
  var iOSWebView = iOS && !/Version.+Safari/.test(userAgent)
  var iOSSafari = iOS && !iOSWebView
  var Douban = /douban/.test(userAgent)
  var QQ = /\sQQ\//.test(userAgent)
  window.ua = {
    iOS: iOS,
    Android: Android,
    Wechat: Wechat,
    Weibo: Weibo,
    iOSWebView: iOSWebView,
    iOSSafari: iOSSafari,
    Douban: Douban,
    QQ: QQ
  }
  window.document.addEventListener('touchstart', function () {}, false)
  var weboDownloadUrl = 'http://t.cn/Rt8oSLV'
  var wechatDownloadUrl = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.zhihu.android&g_f=991703'
  var apkDownloadUrl = 'http://api.zhihu.com/client/download/apk'
  var appleStoreUrl = 'itms-apps://itunes.apple.com/app/apple-store/id432274380'
  var doc = window.document.documentElement
  var initDataUa = function () {
    if (ua.iOSWebView) {
      doc.dataset.ua = 'iOSWebView'
    } else if (ua.iOSSafari) {
      doc.dataset.ua = 'iOSSafari'
    } else if (ua.Android) {
      doc.dataset.ua = 'Android'
    }
  }
  var initGuide = function () {
    doc.dataset.layout = 'showOpenGuide'
    var t = document.querySelector('#guideText')
    if (ua.iOSSafari) {
      t.textContent = '请下拉页面点击「打开」'
    } else if (ua.iOS) {
      t.textContent = '请点击右上角用「Safari」打开'
    } else {
      t.textContent = '请点击右上角用浏览器打开'
    }
  }
  var initDownloadLink = function () {
    var downloadLinkElement = document.querySelector('#downloadLink')
    if (ua.Weibo) {
      downloadLinkElement.href = weboDownloadUrl
    } else if (ua.Wechat) {
      downloadLinkElement.href = wechatDownloadUrl
    } else if (ua.Android) {
      downloadLinkElement.href = apkDownloadUrl
    } else if (ua.iOS) {
      downloadLinkElement.href = appleStoreUrl
    } else {
      downloadLinkElement.href = 'https://www.zhihu.com/app'
    }
  }

  // 初始值为: iOSSafari, 如果不是则进行初始化
  doc.hidden = true
  initDataUa()
  initDownloadLink()
  initGuide()
  doc.hidden = false
})()

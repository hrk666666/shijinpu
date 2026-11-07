# WebView JS 桥：方法名与方法签名不能被混淆，否则 @JavascriptInterface 失效
-keepattributes JavascriptInterface
-keepclassmembers class com.shijinpu.reader.MainActivity$Shell {
    public *;
}
-keep class androidx.webkit.** { *; }

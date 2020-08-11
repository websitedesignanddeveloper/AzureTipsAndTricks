(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{478:function(e,t,o){"use strict";o.r(t);var s=o(43),a=Object(s.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("📺 Watch the video : "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=wyuxnZZMeak&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=25?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Work with Log Stream and Azure App Services"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"working-with-log-stream-and-azure-app-services"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#working-with-log-stream-and-azure-app-services","aria-hidden":"true"}},[e._v("#")]),e._v(" Working with Log Stream and Azure App Services")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("Log Stream")]),e._v(" is the ability to see logging information in real-time (or as close to it as possible). You can do this by using the Azure Portal or through some of CLI tooling such as PowerShell or BASH.")]),e._v(" "),o("p",[e._v("In order to take advantage of this, you'll need to log into your Azure account and go to your App Service that you created and look under "),o("strong",[e._v("Monitoring")]),e._v(" then you will see "),o("strong",[e._v("Log Stream")]),e._v(". Open it and you'll see the following message "),o("code",[e._v("Application logs are switched off. You can turn them on using the 'Diagnostic logs' settings.")])]),e._v(" "),o("p",[e._v("In order to correct this, we'll need to go to the "),o("strong",[e._v("Diagnostic logs")]),e._v(" setting in the same panel.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/logstream1.png")}}),e._v(" "),o("p",[e._v("Here you'll see the following options:")]),e._v(" "),o("ul",[o("li",[e._v("Application Logging - which allows you to collect diagnostic traces from your web code. This is requrired for the streaming log feature and turns itself off after 12 hours.")]),e._v(" "),o("li",[e._v("Application Logging (Blob) - logs are collected in the blob container that is specified under Storage Settings.")]),e._v(" "),o("li",[e._v("Web server logging - Gathers diagnostic information for your web server.")]),e._v(" "),o("li",[e._v("Detailed error messages - Gathers detailed error messages from your web app.")]),e._v(" "),o("li",[e._v("Failed request tracing - Gathers diagnostic information on failed request.")])]),e._v(" "),o("p",[o("strong",[e._v("Hold Up")]),e._v(" You can easily change options such as the size of log files that it will keep as well as the number of days to keep the log files in retention. You can also download the log files via FTP and FTPS.")]),e._v(" "),o("p",[e._v("Go ahead and turn "),o("strong",[e._v("Application Logging(Filesystem)")]),e._v(" to On and the "),o("strong",[e._v("Level")]),e._v(" to "),o("strong",[e._v("Info")]),e._v(" press save. Go back and click on the "),o("strong",[e._v("Log Stream")]),e._v(" setting and visit your web page (that is hosted on *.azurewebsites.net).")]),e._v(" "),o("p",[e._v("You should see the following:")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/logstream2.png")}}),e._v(" "),o("p",[e._v("If you look at the first couple of lines, then you'll see a "),o("strong",[e._v("ReadyForRequest")]),e._v(" on port 80. Then a request coming from our web browser that includes pulling down the "),o("code",[e._v("favicon.ico")]),e._v(" file (which is the only image being sent down).")]),e._v(" "),o("h5",{attrs:{id:"adding-trace-logging-in-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-trace-logging-in-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding Trace Logging in Code")]),e._v(" "),o("p",[e._v("If you’re using ASP.NET MVC, then navigate to your "),o("strong",[e._v("appname/Controllers/HomeController.cs")]),e._v(" file (or wherever you'd like to test this functionality) and add the following line as shown below :")]),e._v(" "),o("div",{staticClass:"language-csharp line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-csharp"}},[o("code",[e._v("System"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Diagnostics"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Trace"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("WriteLine")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Entering the About View"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("Head back over to "),o("strong",[e._v("Diagnostic logs")]),e._v(" and change the "),o("strong",[e._v("Level")]),e._v(" to "),o("strong",[e._v("Verbose")]),e._v(" press save since we just used a WriteLine command. Switch back over to the "),o("strong",[e._v("Log Stream")]),e._v(" option and review the "),o("strong",[e._v("Application Log")]),e._v(" after it calls your "),o("code",[e._v("Trace.WriteLine")]),e._v(" command and you should see the following:")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/logstream3.png")}})])},[],!1,null,null,null);t.default=a.exports}}]);
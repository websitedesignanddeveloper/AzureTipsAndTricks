(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{349:function(e,t,l){"use strict";l.r(t);var r=l(43),a=Object(r.a)({},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("div",{staticClass:"tip custom-block"},[l("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),l("p",[e._v("💡 Learn more : "),l("a",{attrs:{href:"https://docs.microsoft.com/azure/cloud-shell/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Overview of Azure Cloud Shell"),l("OutboundLink")],1),e._v(".")])]),e._v(" "),l("h4",{attrs:{id:"quickly-display-a-list-of-all-azure-web-apps-url-from-azure-cloud-shell"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#quickly-display-a-list-of-all-azure-web-apps-url-from-azure-cloud-shell","aria-hidden":"true"}},[e._v("#")]),e._v(" Quickly display a list of all Azure Web Apps URL from Azure Cloud Shell")]),e._v(" "),l("p",[e._v("Often I need to quickly list out the URLs for all Azure App Services in a given resource. In the past, when it just a small number then I'd do it manually, but it has recently grown to a point where I needed to find a better way.")]),e._v(" "),l("p",[e._v("Enter PowerShell and Azure Cloud Shell.")]),e._v(" "),l("p",[e._v("Wherever you are logged in with Azure Cloud Shell and are using PowerShell, then you can quickly run this command:")]),e._v(" "),l("p",[l("code",[e._v("Get-AzureRmWebApp | foreach-object {$_} | select-object SiteName, DefaultHostName, ResourceGroup")])]),e._v(" "),l("img",{attrs:{src:e.$withBase("/files/powershellallwebsites.png")}})])},[],!1,null,null,null);t.default=a.exports}}]);
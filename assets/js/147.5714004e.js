(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{439:function(e,t,r){"use strict";r.r(t);var a=r(43),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥 Make sure you "),r("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),r("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=ICkEwIW35RM&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=82?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Build multi-service applications on Kubernetes with Azure Dev Spaces: Part 2"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/intro-kubernetes?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"develop-multi-service-applications-on-kubernetes-with-azure-dev-spaces"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#develop-multi-service-applications-on-kubernetes-with-azure-dev-spaces","aria-hidden":"true"}},[e._v("#")]),e._v(" Develop multi-service applications on Kubernetes with Azure Dev Spaces")]),e._v(" "),r("p",[e._v("This is part 2 of a 3-part series of articles about "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/dev-spaces/about?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Dev Spaces"),r("OutboundLink")],1),e._v(". In "),r("strong",[e._v("part 1 - Get started with .NET Core on Kubernetes with Azure Dev Spaces")]),e._v(", we set up a "),r("a",{attrs:{href:"https://azure.microsoft.com/services/kubernetes-service/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes"),r("OutboundLink")],1),e._v(" cluster in Azure and enabled Azure Dev Spaces for it, so that we could easily run and debug an application on it.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip228.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks Part 228 - Part 1 Get started with .NET Core on Kubernetes with Azure Dev Spaces"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip229.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks Part 229 - Part 2 Develop multi-service applications on Kubernetes with Azure Dev Spaces"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Azure Tips and Tricks Part xxx - Part 3 Use Azure Dev Spaces to collaborate with a team on Kubernetes")])]),e._v(" "),r("p",[e._v("In this article, we are going use Kubernetes and Azure Dev Spaces to build a "),r("strong",[e._v("multi-service application")]),e._v(", with multiple containers that can communicate with each other.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),r("li",[e._v("The "),r("a",{attrs:{href:"https://dotnet.microsoft.com/download?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core SDK"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("The latest version of "),r("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Execute all the steps of "),r("strong",[e._v("part 1 - Get started with .NET Core on Kubernetes with Azure Dev Spaces")])])]),e._v(" "),r("h4",{attrs:{id:"run-an-api-in-a-separate-container"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-an-api-in-a-separate-container","aria-hidden":"true"}},[e._v("#")]),e._v(" Run an API in a separate container")]),e._v(" "),r("p",[e._v("In part 1, we ran the "),r("strong",[e._v("webfrontend")]),e._v(" application. Now, we are also going to run a new service, called "),r("strong",[e._v("mywebapi")]),e._v(" and have "),r("strong",[e._v("webfrontend")]),e._v(" call that service.")]),e._v(" "),r("p",[e._v("The "),r("strong",[e._v("mywebapi")]),e._v(" is part of the Azure Dev Spaces sample application. Let's set it up:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("If you do not have it on your local machine anymore, go to the "),r("a",{attrs:{href:"https://github.com/Azure/dev-spaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Dev Spaces sample application"),r("OutboundLink")],1),e._v(" and "),r("strong",[e._v("clone or download")]),e._v(" it")])]),e._v(" "),r("li",[r("p",[e._v("On your local machine, navigate to the "),r("strong",[e._v("samples/dotnetcore/getting-started/mywebapi")]),e._v(" directory")])]),e._v(" "),r("li",[r("p",[e._v("Open the "),r("strong",[e._v("mywebapi")]),e._v(" folder with "),r("strong",[e._v("VS Code")]),e._v(". This will open an ASP.NET Core Web API application")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/30mywebapiinvscode.png")}}),e._v(" "),r("p",[e._v("(The mywebapi project in VS Code)")])])]),e._v(" "),r("p",[e._v("We will now run the application with Azure Dev Spaces:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("In VS Code, go to "),r("strong",[e._v("View > Command Palette")]),e._v(" and type or select the command "),r("strong",[e._v("Azure Dev Spaces: Prepare configuration files for Azure Dev Spaces")]),e._v(". This will add debug capabilities to the project by using Azure Dev Spaces")])]),e._v(" "),r("li",[r("p",[e._v("You'll be asked if you want to configure a publicly accessible endpoint for the service. Click "),r("strong",[e._v("No")]),e._v(", as we only want the "),r("strong",[e._v("webfrontend")]),e._v(" application to talk to the service")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/30configureendpoint.png")}}),e._v(" "),r("p",[e._v("(Configure a public endpoint for the service)")])]),e._v(" "),r("li",[r("p",[e._v("Press "),r("strong",[e._v("F5")]),e._v(" to run the application")])]),e._v(" "),r("li",[r("p",[e._v("The address that the service runs on will show up in the logs and in the bottom of VS Code, in the orange bar. Open a browser and navigate to the service and put "),r("strong",[e._v("/api/values")]),e._v(" at the end of the address (if it isn't yet)")])])]),e._v(" "),r("p",[e._v("The service runs on a "),r("strong",[e._v("localhost")]),e._v(" address, but it actually runs in a container in the dev space in Azure. It is a localhost address and not an Azure address, because the service is only accessible to services in the dev space in Azure. Azure Dev Spaces makes it look like the service runs locally, by temporarily creating an SSH tunnel to the container. This makes it easy for us to test the service. Cool, right?")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/30apirunning.png")}}),e._v(" "),r("p",[e._v("(The API appears to run locally, but runs in Azure)")]),e._v(" "),r("h4",{attrs:{id:"call-the-api-from-another-container"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#call-the-api-from-another-container","aria-hidden":"true"}},[e._v("#")]),e._v(" Call the API from another container")]),e._v(" "),r("p",[e._v("The API is running, and we'll leave it as is for now, with the debugger attached in VS Code.\nNow, we will change the "),r("strong",[e._v("webfrontend")]),e._v(" project, so that it calls the "),r("strong",[e._v("mywebapi")]),e._v(".")]),e._v(" "),r("ol",[r("li",[e._v("Open the "),r("strong",[e._v("webfrontend")]),e._v(" project in VS Code (it is located in "),r("strong",[e._v("samples/dotnetcore/getting-started/webfrontend")]),e._v(")")]),e._v(" "),r("li",[e._v("In the "),r("strong",[e._v("HomeController.cs")]),e._v(" file, change the "),r("strong",[e._v("About")]),e._v(" action into the following:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('public async Task<IActionResult> About()\n{\n    var client = _httpClientFactory.CreateClient();\n    \n    // Call *mywebapi*, and display its response in the page\n    var request = new System.Net.Http.HttpRequestMessage();\n    request.RequestUri = new Uri("http://mywebapi/api/values/1");\n    if (this.Request.Headers.ContainsKey("azds-route-as"))\n    {\n        // Propagate the dev space routing header\n        request.Headers.Add("azds-route-as", this.Request.Headers["azds-route-as"] as IEnumerable<string>);\n    }\n    var response = await client.SendAsync(request);\n    ViewData["Message"] = await response.Content.ReadAsStringAsync();\n\n    return View();\n}\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br")])]),r("p",[e._v("The code calls the api and uses the address http://mywebapi for that. This address is only known within the Kubernetes cluster and is not accessible outside it, because we haven't exposed the mywebapi as a publicly accessibly service. "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/http-requests",target:"_blank",rel:"noopener noreferrer"}},[e._v("Click here"),r("OutboundLink")],1),e._v(" for more information on using IHttpClientFactory.")]),e._v(" "),r("p",[e._v("The code also forwards the "),r("strong",[e._v("azds-route-as")]),e._v(" header from the incoming request to the outgoing request. We'll see how this helps teams with collaborative development in part 3 of this series.")]),e._v(" "),r("p",[e._v("Let's debug the service to see if it works:")]),e._v(" "),r("ol",[r("li",[e._v("The "),r("strong",[e._v("mywebapi")]),e._v(" project is still running with a debugger attached. If it isn't, go to the VS Code of mywebapi and press "),r("strong",[e._v("F5")])]),e._v(" "),r("li",[e._v("In the VS Code of mywebapi, set a breakpoint inside the "),r("strong",[e._v("Get(int id)")]),e._v(" method")]),e._v(" "),r("li",[e._v("In the VS Code of mywebfrontend, set a breakpoint in the "),r("strong",[e._v("About")]),e._v(" method in the "),r("strong",[e._v("HomeController")]),e._v(", on the line "),r("strong",[e._v("var response = await client.SendAsync(request);")]),e._v(" and press "),r("strong",[e._v("F5")])]),e._v(" "),r("li",[e._v("Open the "),r("strong",[e._v("webfrontend")]),e._v(" app in a browser and click on the "),r("strong",[e._v("About")]),e._v(" menu-item")]),e._v(" "),r("li",[e._v("The breakpoint in the "),r("strong",[e._v("webfrontend")]),e._v(" project should now be hit. Step over it (press "),r("strong",[e._v("F10")]),e._v(")")]),e._v(" "),r("li",[e._v("Now, the breakpoint in the "),r("strong",[e._v("mywebapi")]),e._v(" will be hit. Let the code continue (press "),r("strong",[e._v("F5")]),e._v(")")]),e._v(" "),r("li",[e._v("This returns us to the code of "),r("strong",[e._v("webfrontend")]),e._v(", where the result variable will be populated. Let the code continue (press "),r("strong",[e._v("F5")]),e._v(")")]),e._v(" "),r("li",[e._v("Take a look at the "),r("strong",[e._v("webfrontend")]),e._v(" app in the browser. It should now display something like "),r("strong",[e._v("Hello from mywebapi")])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/30results.png")}}),e._v(" "),r("p",[e._v("(The result of calling the API)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/dev-spaces/about?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Dev Spaces"),r("OutboundLink")],1),e._v(" makes it really easy to create multi-service applications that run in multiple containers in Kubernetes. As we've seen, it bridges the gap between the local machine and Azure by making it easy for us to call the api on localhost. And even though all the containers actually run in Azure, changing things and debugging is very fast and easy, which makes this a great developer experience. Go and check it out!")])])},[],!1,null,null,null);t.default=n.exports}}]);
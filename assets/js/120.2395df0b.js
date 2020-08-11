(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{557:function(e,t,a){"use strict";a.r(t);var s=a(43),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥 Checkout our new Azure Developer page at "),a("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=0iElLmclS5s&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=61&t=3s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to work with Azure Cosmos DB and the JavaScript SDK"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/cosmos-db?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"working-with-azure-cosmosdb-and-the-javascript-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-azure-cosmosdb-and-the-javascript-sdk","aria-hidden":"true"}},[e._v("#")]),e._v(" Working with Azure CosmosDB and the JavaScript SDK")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://azure.microsoft.com/services/cosmos-db?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB"),a("OutboundLink")],1),e._v(" is a cloud native, no-sql database that enables you to work with data without having to worry about infrastructure. It also enables you to create geographically performant applications by providing geo-replication features with multiple writable nodes.")]),e._v(" "),a("p",[e._v("You can choose how you talk to Cosmos DB by choosing the API that fits your needs. You can use the SQL, Gremlin, Cassandra, MongoDB and Table APIs. And you can use a variety of SDKs to talk to all of these APIs. There are SDKs for .NET (Core), Xamarin, Java, Python an now also a new SDK for JavaScript.")]),e._v(" "),a("p",[e._v("Let's take a look at how you can use the JavaScript SDK for Cosmos DB.")]),e._v(" "),a("h4",{attrs:{id:"_1-create-a-new-cosmos-db-account-and-documents-to-work-with"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-new-cosmos-db-account-and-documents-to-work-with","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Create a new Cosmos DB account and documents to work with")]),e._v(" "),a("p",[e._v("To get started, we'll first create a new Azure Cosmos DB account and create some documents in it. We will do this using the Azure portal.")]),e._v(" "),a("ol",[a("li",[e._v('In the Azure portal, click on the "'),a("strong",[e._v("Create a new resource")]),e._v('" button (the green plus sign in the top-left corner)')]),e._v(" "),a("li",[e._v("Search for "),a("strong",[e._v('"cosmos db"')])]),e._v(" "),a("li",[e._v("The search results will now show "),a("strong",[e._v("Azure Cosmos DB")]),e._v(". Click on it and click on "),a("strong",[e._v("Create")])]),e._v(" "),a("li",[e._v("The "),a("strong",[e._v("Create Azure Cosmos DB account")]),e._v(" blade shows up.\n"),a("ol",[a("li",[e._v("Pick or create a "),a("strong",[e._v("Resource group")])]),e._v(" "),a("li",[e._v("Fill in an "),a("strong",[e._v("Account Name")])]),e._v(" "),a("li",[e._v("Choose the "),a("strong",[e._v("SQL")]),e._v(" API as that is what we will use. This API uses a SQL-like language to query documents in the database and it very simple to use")]),e._v(" "),a("li",[e._v("Pick a "),a("strong",[e._v("Location")])]),e._v(" "),a("li",[e._v("Disable "),a("strong",[e._v("Geo-redundancy")]),e._v(". This feature provides high-availability by making sure that your data stays available, even if the current geographic region would fail")]),e._v(" "),a("li",[e._v("Leave "),a("strong",[e._v("Multi-region writes")]),e._v(" disabled. This is used to sync data to different regions to achieve faster geographic performance. We don't need it for this example")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("review + create")]),e._v(" and "),a("strong",[e._v("Create")]),e._v(" after that to deploy the Cosmos DB account. This can take a few minutes")])])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/CreateCosmosDB.png")}}),e._v(" "),a("p",[e._v("(Create a new Azure Cosmos DB Account)")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("When the Cosmos DB account is created, "),a("strong",[e._v("navigate to it")]),e._v(" in the Azure portal. We'll now create a database, a collection and some documents. For your reference: Cosmos DB accounts contain databases. Databases contain collections and collections contain documents, which are the things that contain the actual data")]),e._v(" "),a("li",[e._v("Click on the "),a("strong",[e._v("Data Explorer")]),e._v(" menu")]),e._v(" "),a("li",[e._v("Now click on the "),a("strong",[e._v("New collection")]),e._v(" button. This will open the "),a("strong",[e._v("Add collection blade")]),e._v(" "),a("ol",[a("li",[e._v("Fill in a "),a("strong",[e._v("Database Id")]),e._v(". Because we haven't created a database, we can add this directly when creating a new collection")]),e._v(" "),a("li",[e._v("Fill in a "),a("strong",[e._v("Collection Id")])]),e._v(" "),a("li",[e._v("Fill in a "),a("strong",[e._v("Partition key")]),e._v(". We'll use "),a("strong",[e._v('"name"')]),e._v(" as that is one of the key properties that we'll use in our data. The Partition key is used to group similar objects together. So in our case, the database can easily search through documents based on the "),a("strong",[e._v("name")]),e._v(" key. This increases query performance dramatically")]),e._v(" "),a("li",[e._v("We'll leave the throughput as is. This is the number of Request Units (RUs) that expresses how many database operations per hour you can use within this collection. You can read more about how RUs are defined "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/request-units?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v("\n5.Click "),a("strong",[e._v("OK")]),e._v(" to create the collection")])])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/AddNewCollection.png")}}),e._v(" "),a("p",[e._v("(Add a new collection to Cosmos DB in the Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Now that we have a collection, we can add some documents to it that we can query later. In the Data Explorer, navigate to the "),a("strong",[e._v("Documents node")]),e._v(" under the collection. From here, click on the "),a("strong",[e._v("New Document")]),e._v(" button")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/AddDocuments.png")}}),e._v(" "),a("p",[e._v("(Add documents to Cosmos DB in the Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[e._v("Now add a document with the following values:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "id": "1",\n    "category": "personal",\n    "name": "groceries",\n    "description": "Pick up apples and strawberries.",\n    "isComplete": false\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("ol",{attrs:{start:"10"}},[a("li",[e._v("Add another document with these values:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "id": "2",\n    "category": "work",\n    "name": "invoice",\n    "description": "Create an invoice for contoso.",\n    "isComplete": false\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("That's it! Now we can start using the JavaScript SDK to work with Cosmos DB.")]),e._v(" "),a("h4",{attrs:{id:"_2-create-a-node-js-app-that-uses-the-cosmos-db-javascript-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-a-node-js-app-that-uses-the-cosmos-db-javascript-sdk","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Create a Node.js app that uses the Cosmos DB JavaScript SDK")]),e._v(" "),a("p",[e._v("The Cosmos DB JavaScript SDK is primarily meant for use in Node.js applications, although you can also use it in client-side, JavaScript applications. Let's create a simple Node.js app and use the Cosmos DB JavaScript SDK in it.")]),e._v(" "),a("ol",[a("li",[e._v("First, you need to install "),a("strong",[e._v("Node.js")]),e._v(" on your machine. You can do that by installing Node.js with a installer from "),a("a",{attrs:{href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Open Visual Studio Code")]),e._v(" "),a("li",[e._v("Open the "),a("strong",[e._v("explorer")]),e._v(" and "),a("strong",[e._v("open a folder")]),e._v(" that you will use to create the Node.js app in")]),e._v(" "),a("li",[e._v("Create a "),a("strong",[e._v("New File")]),e._v(" and call it "),a("strong",[e._v("App.js")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/CreateNewFileInVSCode.png")}}),e._v(" "),a("p",[e._v("(Create a new file in Visual Studio Code)")]),e._v(" "),a("ol",[a("li",[e._v("Install the "),a("strong",[e._v("Cosmos DB JavaScript SDK")]),e._v(" by opening a terminal and running the command "),a("strong",[e._v('"npm i @azure/cosmos"')]),e._v(". You can ignore the warnings. These aren't important for our scenario")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/InstallCosmosDBPackage.png")}}),e._v(" "),a("p",[e._v("(Install the Cosmos DB JavaScript SDK)")]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("In the "),a("strong",[e._v("App.js")]),e._v(" file, paste the following code and fill in the "),a("strong",[e._v("Cosmos DB endpoint, masterKey, databaseId and containerId")])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('const cosmos = require("@azure/cosmos");\nconst CosmosClient = cosmos.CosmosClient;\n \nconst endpoint = "[hostendpoint]"; // Add your endpoint\nconst masterKey = "[database account masterkey]"; // Add the masterkey of the endpoint\nconst client = new CosmosClient({ endpoint, auth: { masterKey } });\nconst databaseId  = "[databaseId]"; // Add the Database ID\nconst containerId  = "[containerId]"; // Add the Container ID\n\nconst querySpec = {\n    query: "SELECT * FROM c"    \n};\n\nasync function run() {\n\n    const { result: results } = await client.database(databaseId).container(containerId).items.query(querySpec, { enableCrossPartitionQuery: true }).toArray();\n\n    for (var queryResult of results) {\n        let resultString = JSON.stringify(queryResult);\n        console.log(`\\tQuery returned ${resultString}\\n`);\n    }\n}\n\nasync function handleError(error) {\n    console.log("\\nAn error with code \'" + error.code + "\' has occurred:");\n    console.log("\\t" + error.body || error);\n}\n\nrun().catch(handleError);\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br")])]),a("p",[e._v('This code instantiates a new Cosmos DB Client that it uses to execute a simple query against ("SELECT * FROM c"). And it outputs the results of the query in the console window.')]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Our Node.js application is complete, so we can run it. In a terminal window in Visual Studio Code, run the command "),a("strong",[e._v('"node App.js"')]),e._v(". This will run the application and output the results, which should be the contents of the two documents that we've added earlier")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/RunTheApp.png")}}),e._v(" "),a("p",[e._v("(Run the Node.js app in Visual Studio code)")]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[e._v("As a bonus, I've published the application to an Azure App Service Web App to see if it would work there. You can easily do this by following "),a("a",{attrs:{href:"https://code.visualstudio.com/tutorials/nodejs-deployment/getting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("this tutorial"),a("OutboundLink")],1),e._v(" on Microsoft docs. It works and shows the screen that you see in the image below")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/RunTheAppInAppService.png")}}),e._v(" "),a("p",[e._v("(Run the Node.js app in an Azure App Service Web App)")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Azure Cosmos DB is a great database for no-sql data. Microsoft has made it so that you can easily create and use it and that you can use it however you like. You can choose the API that you use to talk to it and you can use it with almost any programming language. The new Azure Cosmos DB JavaScript SDK proves that you can easily use Cosmos DB from Node.js applications. You can find out more about the specific functionality of the JavaScript SDK "),a("a",{attrs:{href:"https://github.com/Azure/azure-cosmos-js?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". Go and check it out!")])])},[],!1,null,null,null);t.default=n.exports}}]);
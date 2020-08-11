(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{387:function(e,t,a){"use strict";a.r(t);var s=a(43),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/workloads/sap/get-started?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Use Azure to host and run SAP workload scenarios"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"sap-on-azure-in-plain-english-part-1-of-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sap-on-azure-in-plain-english-part-1-of-2","aria-hidden":"true"}},[e._v("#")]),e._v(" SAP on Azure in Plain English Part 1 of 2")]),e._v(" "),a("p",[e._v("In this series, I take a look at SAP coming from someone who hasn't used it before.")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"./tip170.html"}},[e._v("Part 1 - This post")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"./tip171.html"}},[e._v("Part 2")])],1)]),e._v(" "),a("h4",{attrs:{id:"sap-a-brief-history-lesson-from-1973-2018"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sap-a-brief-history-lesson-from-1973-2018","aria-hidden":"true"}},[e._v("#")]),e._v(" SAP - A brief history lesson from 1973 - 2018")]),e._v(" "),a("p",[e._v("SAP, the world's third-largest software company, produces business applications including customer relationship management (CRM) and enterprise resource planning (ERP) solutions. Since its first product was released in 1973, the company has made major changes to its software to accommodate industry trends from mainframes through to cloud computing.")]),e._v(" "),a("p",[e._v("In 2010, with a focus on cloud computing, SAP developed the new SAP HANA platform, which is built on a proprietary database engine and forms the foundation of all its latest offerings. In 2015, SAP launched S/4HANA, which is a Business Suite implementation on this HANA platform. Microsoft and SAP have partnered to provide a range of SAP solutions running in the Azure cloud.")]),e._v(" "),a("h4",{attrs:{id:"tell-me-more-about-sap-on-azure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tell-me-more-about-sap-on-azure","aria-hidden":"true"}},[e._v("#")]),e._v(" Tell me more about SAP on Azure?")]),e._v(" "),a("p",[e._v("Traditionally, SAP systems were designed to be hosted on-premises and required a significant hardware investment. Using Azure we support both the traditional NetWeaver-based and HANA-based solutions.")]),e._v(" "),a("p",[e._v("You can also run your SAP applications in Azure which features the broadest global footprint, the largest compliance portfolio, embedded security, enterprise-grade SLAs, and industry-leading support. Azure supports the largest SAP HANA workloads of any hyperscale cloud provider.")]),e._v(" "),a("h4",{attrs:{id:"what-offerings-are-available"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-offerings-are-available","aria-hidden":"true"}},[e._v("#")]),e._v(" What offerings are available?")]),e._v(" "),a("p",[e._v("Azure has a number of preconfigured (and SAP certified) virtual machine images, published by SAP and third-party Linux vendors, so that you can spin up your infrastructure in minutes rather than the weeks it would take on-premises. You can select from a wide range of virtual machine SKUs and even add your own license. Just search for "),a("strong",[e._v("Marketplace")]),e._v(" and click on "),a("strong",[e._v("Compute")]),e._v(" and filter by "),a("strong",[e._v("SAP")]),e._v(".")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-sap-vms.png")}}),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("SAP HANA express edition (Server + Applications)")]),e._v(" image contains a full development image and will deploy to a D12v2 virtual machine. Storage and networking options are preconfigured to ensure you can quickly create a system that will support SAP HANA.")]),e._v(" "),a("p",[e._v("SAP HANA, express edition includes the in-memory data engine with advanced analytical data processing engines for business, text, spatial and graph data - supporting multiple data models on a single copy of the data The software license allows for both non-production and production use cases, enabling you to quickly prototype, demo and deploy next-generation applications with SAP HANA, express edition.\nThis image contains only the advanced data processing engines, without XSA stack, web based IDE and administration tools.")]),e._v(" "),a("p",[e._v("Below, I've started creating a VM using this template. If you are doing the same (just for testing) then you'll want to leave the "),a("strong",[e._v("Size")]),e._v(" as-is as dropping down to a "),a("strong",[e._v("Basic A0")]),e._v(" won't work. You want to make sure that the "),a("strong",[e._v("Image")]),e._v(" is **SAP HANA, express edition (Server + Applications)")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-sap-create-vm.png")}}),e._v(" "),a("p",[e._v("It's important to note at this stage that these VMs are not available in all regions. If you select a region where the required machines are not available, the entry next to "),a("strong",[e._v("Size")]),e._v(" will be blank. You can skip straight to "),a("strong",[e._v("Review + Create")]),e._v(" at this point or customize options for disks, networking, etc.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-sap-review.png")}}),e._v(" "),a("p",[e._v("After you hit "),a("strong",[e._v("Create")]),e._v(" on the review screen, you'll reach a status page showing the deployment in progress and finally when it has completed.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-sap-creation.png")}}),e._v(" "),a("p",[e._v("Come back tomorrow and we'll take a look at this VM and start setting everything up.")])])},[],!1,null,null,null);t.default=r.exports}}]);
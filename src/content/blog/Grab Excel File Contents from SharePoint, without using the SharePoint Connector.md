---
draft: false
title: "Grab Excel Files from SharePoint without the SharePoint Connector(s)"
snippet: "We all know that Sharepoint.Contents and SharePoint.Files have their uses, however they suffer from a massive speed deficit..."
image: {
    src: "../../assets/cloud.jpg",
    alt: "API"
}
publishDate: "2023-07-03 11:40"
category: "Development, Requirements, PowerQuery"
author: "Marc Mason"
tags: [Reporting, Power BI, PowerQuery]
---

In this article I will show you how to use the OData connector and Web.Contents function to pull data from multiple Excel documents stored in a SharePoint folder. We will do this WITHOUT using the built in SharePoint connectors.

I first had the idea to avoid using the SharePoint connectors after trying to use them to pull 90 MB of Excel documents (about 120 files) from a SharePoint folder and it taking over 20 minutes. I thought, "there must be a quicker way to do this.". 


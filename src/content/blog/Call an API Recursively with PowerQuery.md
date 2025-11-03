---
draft: false
title: "Calling an API recursiveley with PowerQuery"
snippet: "You've found a great API, but it has a record limit, what next...!"
image: {
    src: "/assets/API_Calling.jpg",
    alt: "API"
}
publishDate: "2023-07-03 11:39"
category: "Development, Requirements, PowerQuery"
author: "Marc Mason"
tags: [Reporting, Power BI, PowerQuery]
---

Here I will give an example and some sample code that you can possibly use the next time you need to call an API that you know has more results than it is giving you.

The API I will be using is the SharpSpring CRM API but the logic can apply to most API's.

Essentialy, we construct a function and a query, within the query we use the function to call the API, then increment a variable by some amount, cache the results and repeat, incrementing the variable and appending the results each time until there are no more results, or if you decide to limit the number of results, your limit is reached.

export const dashboard = [
  {
    id: 1,
    title: "Get User's Charts Data",
    Type: "GET",
    url: "https://analytics-backend.fori.co/api/userData/mydashboard",
    parameters: [
      { Field: "token", Type: "String", Description: "Token of the user" },
    ],
    pre: `
    req.headers:{
      Authorization:Bearer {token}
    },
    response:{
      userData: Object,
      message: String,
      success: Boolean,
      report: Integar
    }
`,
    cases: [
      {
        id: 1,
        title: "Success",

        response: "Message: Data Successfully Refreshed",
      },
      {
        id: 2,
        title: "If Form Is Not Connected",
        response: "Message: No data found",
      },
    ],
  },
  {
    id: 2,
    title: "Create User Form Data",
    Type: "POST",
    url: "https://analytics-backend.fori.co/api/userData/:id",
    parameters: [
      { Field: "url", Type: "String", Description: "Url of the api" },
      { Field: "curency", Type: "String", Description: "Currency" },
      { Field: "secretKey", Type: "String", Description: "Secret key" },
      {
        Field: "dashboardName",
        Type: "String",
        Description: "Name of the Dashboard",
      },
      {
        Field: "dashboardColor",
        Type: "String",
        Description: "Color of the Dashboard",
      },
    ],
    pre: `
    req.headers:{
            Authorization:Bearer {token}
    },
    req.body:{
      url: String,
      curency: String,
      secretKey: String,
      dashboardName: String,
      dashboardColor: String,
    }
    response:{
      message: String,
    }
`,
    cases: [
      {
        id: 1,
        title: "Success",
        response: "Message: You have provided you Credentials sucessfully",
      },
      {
        id: 2,
        title: "If User is not found",
        response: "Message: User Not Found",
      },
      {
        id: 3,
        title: "If Form Data Is Already Provided",
        response: "Message: You have already connected",
      },
      {
        id: 4,
        title: "If Any Key Is Missing",
        response: "Message: Please Add your '(missing key') ",
      },
    ],
  },
  {
    id: 3,
    title: "Update User Form Data",
    Type: "PUT",
    url: "https://analytics-backend.fori.co/api/userData/:id",
    parameters: [
      { Field: "url", Type: "String", Description: "Url of the api" },
      { Field: "curency", Type: "String", Description: "Currency" },
      { Field: "secretKey", Type: "String", Description: "Secret key" },
      {
        Field: "dashboardName",
        Type: "String",
        Description: "Name of the Dashboard",
      },
      {
        Field: "dashboardColor",
        Type: "String",
        Description: "Color of the Dashboard",
      },
    ],
    pre: `
    req.headers:{
      Authorization:Bearer {token}
    },
    req.body:{
      url: String,
      curency: String,
      secretKey: String,
      dashboardName: String,
      dashboardColor: String,
    }
    response:{
      message: String,
    }
`,
    cases: [
      {
        id: 1,
        title: "Success",
        response: "Message: Form Data Is Updated",
      },
      {
        id: 2,
        title: "If User is not found",
        response: "Message: User Not Found",
      },
    ],
  },
  {
    id: 4,
    title: "NewsLetter Subscription",
    Type: "POST",
    url: "https://analytics-backend.fori.co/api/userData/newsletter",
    parameters: [
      { Field: "email", Type: "String", Description: "Email of the user" },
    ],
    pre: `
    req.body:{
      email: String,
    }
    response:{
      message: String,
    }
`,
    cases: [
      {
        id: 1,
        title: "Success",
        response: "Message: Subcription Successful",
      },
      {
        id: 2,
        title: "If The User Is Already Subscribed",
        response: "Message: The User Is Already Subscribed",
      },
    ],
  },
];

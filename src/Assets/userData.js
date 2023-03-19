export const users = [
  {
    id: 1,
    title: "Verify User",
    Type: "POST",
    url: "https://analytics-backend.fori.co/api/users/verifyUser",
    pre: `
    
      req.body:{
        firstName: String,
        email: String,
        password: String
      },
      response:{
        message: String
      }
    
  `,
    parameters: [
      {
        Field: "firstName",
        Type: "string",
        Description: "Name of the user to be varified",
      },
      {
        Field: "email",
        Type: "string",
        Description: "Email of the user to be varified",
      },
      {
        Field: "password",
        Type: "string",
        Description: "Password of the user to be varified",
      },
    ],
    cases: [
      {
        id: 1,
        title: "Success",
        response: "Message: Email Sent, Please Check Your Inbox",
      },
      {
        id: 2,
        title: "If email Is Missing",
        response: "Message: Please provide email, first Name and password",
      },
      {
        id: 3,
        title: "If password Is Missing",
        response: "Message: Please provide email, first Name and password",
      },
      {
        id: 4,
        title: "If firstName Is Missing",
        response: "Message: Please provide email, first Name and password",
      },
    ],
  },
  {
    id: 2,
    title: "Register User",
    Type: "POST",
    url: "https://analytics-backend.fori.co/api/users/register",
    parameters: [
      { Field: "token", Type: "string", Description: "Token of the user" },
    ],
    pre: `
    req.body:{
      token:string,
    },
    response:{
        message: String,
        _id: String,
        firstName: String,
        userData: Object,
        record: Array,
        email: String,
        token: String
    }
`,
    cases: [
      { id: 1, title: "Success", response: "Message: Registration Successful" },
      {
        id: 2,
        title: "If Token Is Missing or Expired",
        response: "Message: Token Expired Or Invalid",
      },
    ],
  },
  {
    id: 3,
    title: "Login User",
    Type: "POST",
    url: "https://analytics-backend.fori.co/api/users/login",
    parameters: [
      {
        Field: "email",
        Type: "string",
        Description: "Email of the user to be login",
      },
      {
        Field: "password",
        Type: "string",
        Description: "Password of the user to be login",
      },
    ],
    pre: `
    req.body:{
      email: String,
      password: String,
    },
    response:{
      message: String,
      _id: String,
      firstName: String,
      surName: String,
      email: String,
      jobTitle: String,
      companyName: String,
      companyType: String,
      contactNum: String,
      country: String,
      city: String,
      userData: Object,
      record: Array,
      token: String,
  }
`,
    cases: [
      {
        id: 1,
        title: "Success",
        response: "Message: Login Successful",
      },
      {
        id: 2,
        title: "If email Is Missing",
        response: "Message: Please provide email and password",
      },
      {
        id: 3,
        title: "If password Is Missing",
        response: "Message: Please provide email and password",
      },
      {
        id: 4,
        title: "If Invalid Credentials",
        response: "Message: Invalid Credentials",
      },
    ],
  },
  {
    id: 4,
    title: "Forgot Password",
    Type: "PUT",
    url: "https://analytics-backend.fori.co/api/users/forgot-password",
    parameters: [
      {
        Field: "email",
        Type: "string",
        Description: "Email of the user to be login",
      },
    ],
    pre: `
    req.body:{
      email: String,
    },
    response:{
      message: String,
  }
`,
    cases: [
      {
        id: 1,
        title: "Success",
        response: "Message: Check Your Email",
      },
      {
        id: 2,
        title: "If email Is Empty",
        response: "Message: Please provide email",
      },
      {
        id: 3,
        title: "If email Does Not Exist In Database",
        response: "Message: User Not Exists",
      },
    ],
  },
  {
    id: 5,
    title: "Reset Password",
    Type: "PUT",
    url: "https://analytics-backend.fori.co/api/users/reset-password",
    parameters: [
      {
        Field: "password",
        Type: "string",
        Description: "Password of the user to be varified",
      },
      { Field: "token", Type: "string", Description: "Token of the user" },
    ],
    pre: `
    req.body:{
      token: String,
      password:String,
    },
    response:{
      message: String,
  }
`,
    cases: [
      {
        id: 1,
        title: "Success",
        response: "Message: Reset Password Successful",
      },
      {
        id: 2,
        title: "If Token Is Expired",
        response: "Message: Incorrect or Expired Link",
      },
    ],
  },
];

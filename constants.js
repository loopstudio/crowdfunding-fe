export const START_DATE = "startDate";
export const END_DATE = "endDate";
export const FUND_GOAL = "fundGoal";
export const TITLE = "title";
export const SUBTITLE = "subtitle";
export const STORY = "story";
export const TOKEN = "token";
export const USERNAME = "username";
export const EMAIL = "email";
export const ACCESS_TOKEN = "accessToken";
export const PLEDGE_AMOUNT = "pledgeAmount";
export const LOG_OUT = "logOut";
export const SEARCH = "search";
export const TOTAL = "total";
export const URL = "url";
export const COLLABORATORS = "collaborators";

export const QUERIES = {
  campaigns: "campaigns",
  campaign: "campaign",
  tokens: "tokens",
  nonce: "nonce",
};

export const EVENTS = {
  approval: "Approval",
  pledge: "Pledge",
  launch: "Launch",
  claim: "Claim",
};

export const FUNCTIONS = {
  approve: "approve",
  launch: "launch",
  pledge: "pledge",
  claim: "claim",
};

export const ROUTES = {
  home: "/",
  login: "/login",
  signUp: "/signup",
  create: "/create",
  pledgedProjects: "/pledged-projects",
  createdProjects: "/created-projects",
  connectWallet: "/connect-wallet",
};

export const UNAUTHENTICATED_ITEMS = [
  { link: ROUTES.login, title: "Login" },
  { link: ROUTES.signUp, title: "Sign Up" },
];
export const HEADER_DROPDOWN_ITEMS = [
  { link: ROUTES.pledgedProjects, title: "Pledged Projects" },
  { link: ROUTES.createdProjects, title: "Created Projects" },
];

export const CAMPAIGN_MAX_DURATION = 20;
export const CAMPAIGN_MIN_DURATION = 1;

export const AMOUNT_OF_ELEMENTS_PER_PAGE = 9;
export const NUM_OF_ELEMENTS_MAIN = 12;

export const today = new Date();

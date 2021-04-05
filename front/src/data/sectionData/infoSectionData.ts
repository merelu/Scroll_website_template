import off_road from "../images/off_road.svg";
import services from "../images/services.svg";
import savings from "../images/savings.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "get access to our exclusive app that allows you to send unlimited transcations without getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: false,
  img: off_road,
  alt: "Car",
  dark: true,
  primary: true,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  description:
    "get access to our exclusive app that allows you to send unlimited transcations without getting charged any fees.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: savings,
  alt: "savings",
  dark: false,
  primary: false,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our Team",
  headline: "Creating an account is extremely easy",
  description:
    "get access to our exclusive app that allows you to send unlimited transcations without getting charged any fees.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: services,
  alt: "services",
  dark: false,
  primary: false,
};

import instagramIcon from "../../public/images/Footer/instagram.svg";
import twitterIcon from "../../public/images/Footer/twitter.svg";
import facebookIcon from "../../public/images/Footer/facebook.svg";
import phoneIcon from "../../public/images/Footer/phone.svg";
import gmailIcon from "../../public/images/Footer/gmail.svg";
import locationIcon from "../../public/images/Footer/location.svg";

export const socialData = [
  {
    icon: instagramIcon,
    name: "Instagram",
    link: "https://www.instagram.com/thekaayi/",
  },
  {
    icon: twitterIcon,
    name: "Twitter",
    link: "https://twitter.com/thekaayi",
  },
  {
    icon: facebookIcon,
    name: "Facebook",
    link: "https://www.facebook.com/thekaayi/",
  },
];

export const infoData = [
  {
    name: "location",
    icon: locationIcon,
    content: "Trivandrum, Kerala",
  },
  {
    name: "phone",
    icon: phoneIcon,
    content: "+91 8891304460",
  },
  {
    name: "email",
    icon: gmailIcon,
    content: "support@thekaayi.com",
  },
];

export const footerLinkData = [
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    name: "Cookies Policy",
    link: "/cookies-policy",
  },
  {
    name: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
];

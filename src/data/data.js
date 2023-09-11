import dashIcon from "../assets/icons/Group.svg";
import compaintsIcon from "../assets/icons/complaints.svg";
import requestsIcon from "../assets/icons/serv-requests.svg";
import bugsIcon from "../assets/icons/bugs.svg";
import enhanceIcon from "../assets/icons/enhancement.svg";
import reportIcon from "../assets/icons/report.svg";
import faqIcon from "../assets/icons/help.svg";

export const menu = [
  {
    id: 1,
    title: "GENERAL",
    listItems: [
      {
        id: 1,
        title: "Dashboard",
        url: "/",
        icon: dashIcon,
      },
      // {
      //   id: 2,
      //   title: "Products",
      //   url: "/products",
      //   icon: "product.svg",
      // },
    ],
  },
  {
    id: 2,
    title: "TASK CATEGORY",
    listItems: [
      {
        id: 1,
        title: "Customer Complaints",
        url: "/",
        icon: compaintsIcon,
      },
      {
        id: 2,
        title: "Service Requests",
        url: "/",
        icon: requestsIcon,
      },
      {
        id: 3,
        title: "System Bugs & Errors",
        url: "/",
        icon: bugsIcon,
      },
      {
        id: 4,
        title: "System Enhancements",
        url: "/",
        icon: enhanceIcon,
      },
    ],
  },
  {
    id: 3,
    title: "REPORTS",
    listItems: [
      {
        id: 1,
        title: "My Reports",
        url: "/",
        icon: reportIcon,
      },
    ],
  },
  {
    id: 4,
    title: "SUPPORT",
    listItems: [
      {
        id: 1,
        title: "FAQs",
        url: "/",
        icon: faqIcon,
      },
    ],
  },
];

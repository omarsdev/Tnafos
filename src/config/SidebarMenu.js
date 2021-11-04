import { FiHome } from "react-icons/fi";

export const SidebarMenu = [
  {
    id: 0,
    title: "Dashboard",
    icon: <FiHome />,
    to: "/",
    heading: null,
    
  },
  {
    id: 1,
    heading: "Organization",

    navitem: [
      {
        id: 0,
        title: "Company",
        icon: <FiHome />,
        // submenu: [
        //   {
        //     title: "branch 1",
        //     to: "/",
        //   },
        //   {
        //     title: "branch 2",
        //     to: "/",
        //   },
        // ],
      },
      {
        id: 1,
        title: "Users",
        icon: <FiHome />,
        // submenu: [
        //   {
        //     title: "branch 1",
        //     to: "/",
        //   },
        //   {
        //     title: "branch 2",
        //     to: "/",
        //   },
        // ],
      },
    ],
  },
  {
    id: 2,
    heading: "Estimates",
    navitem: [
      {
        id: 0,
        title: "Company",
        icon: <FiHome />,
        // submenu: [
        //   {
        //     title: "branch 1",
        //     to: "/",
        //   },
        //   {
        //     title: "branch 2",
        //     to: "/",
        //   },
        // ],
      },
      {
        id: 1,
        title: "Users",
        icon: <FiHome />,
        // submenu: [
        //   {
        //     title: "branch 1",
        //     to: "/",
        //   },
        //   {
        //     title: "branch 2",
        //     to: "/",
        //   },
        // ],
      },
    ],
  },
];
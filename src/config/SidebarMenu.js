import React from "react";

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
        to: "/company",
        // submenu: [
        //   {
        //     title: "Incoming",
        //     to: "/",
        //   },
        //   {
        //     title: "Outgoing",
        //     to: "/",
        //   },
        // ],
      },
      {
        id: 1,
        title: "Users",
        icon: <FiHome />,
        to: "/user",
        // submenu: [
        //   {
        //     title: "Incoming",
        //     to: "/",
        //   },
        //   {
        //     title: "Outgoing",
        //     to: "/",
        //   },
        // ],
      },
      {
        id: 2,
        title: "Services",
        icon: <FiHome />,
        to: "/service",
        // submenu: [
        //   {
        //     title: "Incoming",
        //     to: "/",
        //   },
        //   {
        //     title: "Outgoing",
        //     to: "/",
        //   },
        // ],
      },
    ],
  },
  {
    id: 2,
    heading: "Documents",
    navitem: [
      {
        id: 3,
        title: "Purchase Requests",
        icon: <FiHome />,
        submenu: [
          {
            title: "Incoming",
            to: "/",
          },
          {
            title: "Outgoing",
            to: "/",
          },
        ],
      },
      {
        id: 4,
        title: "Estimates",
        icon: <FiHome />,
        submenu: [
          {
            title: "Incoming",
            to: "/estimates/incoming",
          },
          {
            title: "Outgoing",
            to: "/estimates/outgoing",
          },
        ],
      },
      {
        id: 5,
        title: "Invoices",
        icon: <FiHome />,
        submenu: [
          {
            title: "Incoming",
            to: "/invoice/incoming",
          },
          {
            title: "Outgoing",
            to: "/invoice/outgoing",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    heading: "App Settings",
    navitem: [
      {
        id: 6,
        title: "Settings",
        icon: <FiHome />,
        to: "/settings",
        // submenu: [
        //   {
        //     title: "Incoming",
        //     to: "/",
        //   },
        //   {
        //     title: "Outgoing",
        //     to: "/",
        //   },
        // ],
      },
      {
        id: 7,
        title: "Payments",
        icon: <FiHome />,
        to: "/payment",
        // submenu: [
        //   {
        //     title: "Incoming",
        //     to: "/payment/incoming",
        //   },
        //   {
        //     title: "Outgoing",
        //     to: "/payment/outgoing",
        //   },
        // ],
      },
      {
        id: 8,
        title: "Clients",
        icon: <FiHome />,
        to: "/",
        // submenu: [
        //   {
        //     title: "Incoming",
        //     to: "/",
        //   },
        //   {
        //     title: "Outgoing",
        //     to: "/",
        //   },
        // ],
      },
    ],
  },
];

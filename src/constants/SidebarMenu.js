import React from "react";

import { FiMenu } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";

import { BiCog, BiUser, BiLineChart } from "react-icons/bi";
import { BsListCheck, BsCurrencyExchange } from "react-icons/bs";

import { VscTools } from "react-icons/vsc";
import { GiMoneyStack } from "react-icons/gi";

import { ImLibrary } from "react-icons/im";

export const SidebarMenu = [
  {
    id: 0,
    title: "Dashboard",
    icon: <FiMenu />,
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
        icon: <ImLibrary />,
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
        icon: <BiUser />,
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
        icon: <VscTools />,
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
        icon: <BsListCheck />,
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
        icon: <BiLineChart />,
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
        icon: <BsCurrencyExchange />,
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
        icon: <BiCog />,
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
        icon: <GiMoneyStack />,
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
        icon: <HiOutlineUserGroup />,
        to: "/clientshome",
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

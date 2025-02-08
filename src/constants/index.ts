import { Addon, Plan } from "@/types"

export const STEPS = [
  {
    label: "STEP 1",
    title: "YOUR INFO",
  },
  {
    label: "STEP 2",
    title: "SELECT PLAN",
  },
  {
    label: "STEP 3",
    title: "ADD-ONS",
  },
  {
    label: "STEP 4",
    title: "SUMMARY",
  },
]

export const STEPS_FRONTMATTER = [
  {
    title: "Personal info",
    desc: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    desc: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    desc: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing up",
    desc: "Double-check everything looks OK before confirming.",
  },
]

export const PLANS: {
  monthly: Plan[]
  yearly: Plan[]
} = {
  yearly: [
    {
      id: 1,
      name: "Arcade",
      icon: "/images/icon-arcade.svg",
      price: 90,
      type: "yearly",
    },
    {
      id: 2,
      name: "Advanced",
      icon: "/images/icon-advanced.svg",
      price: 120,
      type: "yearly",
    },
    {
      id: 3,
      name: "Pro",
      icon: "/images/icon-pro.svg",
      price: 150,
      type: "yearly",
    },
  ],
  monthly: [
    {
      id: 4,
      name: "Arcade",
      icon: "/images/icon-arcade.svg",
      price: 9,
      type: "monthly",
    },
    {
      id: 5,
      name: "Advanced",
      icon: "/images/icon-advanced.svg",
      price: 12,
      type: "monthly",
    },
    {
      id: 6,
      name: "Pro",
      icon: "/images/icon-pro.svg",
      price: 15,
      type: "monthly",
    },
  ],
}

export const ADD_ONS: Addon[] = [
  {
    id: 1,
    title: "Online service",
    desc: "Access to multiplayer games",
    price: 1,
    type: "monthly",
  },
  {
    id: 2,
    title: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: 2,
    type: "monthly",
  },
  {
    id: 3,
    title: "Customizable Profile",
    desc: "Custom theme on your profile",
    price: 2,
    type: "monthly",
  },
  {
    id: 4,
    title: "Online service",
    desc: "Access to multiplayer games",
    price: 10,
    type: "yearly",
  },
  {
    id: 5,
    title: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: 20,
    type: "yearly",
  },
  {
    id: 6,
    title: "Customizable Profile",
    desc: "Custom theme on your profile",
    price: 20,
    type: "yearly",
  },
]

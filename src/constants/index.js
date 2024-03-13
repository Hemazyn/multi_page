import { arcade, advance, pro } from "../assets";

const steps = [
     {
          id: 1,
          number: "1",
          step: "step 1",
          info: "your info"
     },
     {
          id: 2,
          number: "2",
          step: "step 2",
          info: "select plan"
     },
     {
          id: 3,
          number: "3",
          step: "step 3",
          info: "add-ons"
     },
     {
          id: 4,
          number: "4",
          step: "step 4",
          info: "summary"
     }
]

const plan = [
     {
          id: 1,
          icon: arcade,
          plan: "Arcade",
          perMonth: "$9/mo",
          perYear: "90/yr",
          bonus: "2 months free"
     },
     {
          id: 2,
          icon: advance,
          plan: "Advanced",
          perMonth: "$12/mo",
          perYear: "120/yr",
          bonus: "2 months free"
     },
     {
          id: 3,
          icon: pro,
          plan: "Pro",
          perMonth: "$15/mo",
          perYear: "$150/yr",
          bonus: "2 months free"
     }
]
const planType = [
     {
          id: 1,
          planTypeName: "Online service",
          planTypeText: "Access to multiplayer games",
          planPerMonth: "+$1/mo",
          planPerYear: "+$10/yr"
     },
     {
          id: 2,
          planTypeName: "Larger storage",
          planTypeText: "Extra 1TB of cloud save",
          planPerMonth: "+$2/mo",
          planPerYear: "+$20/yr"
     },
     {
          id: 3,
          planTypeName: "Customizable Profile",
          planTypeText: "Custom theme on your profile",
          planPerMonth: "+$2/mo",
          planPerYear: "+$20/yr"
     }
]

export { steps, plan, planType };
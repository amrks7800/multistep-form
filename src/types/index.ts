export type Plan = {
  id: number
  name: string
  icon: string
  price: number
  type: "yearly" | "monthly"
}

export type Addon = {
  id: number
  title: string
  desc: string
  price: number
  type: "yearly" | "monthly"
}

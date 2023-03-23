export interface Subscription {
  subscriptionId: number,
  expirationDate: string,
  tier: number,
  user: number
}

export interface User {
  userId: number,
  firstName: string,
  lastName: string,
  email: string,
  address: string,
  phoneNumber: string,
  dishPreferences: Dish[],
  allergies: Allergy[],
  subscription: number | void
}

export interface Tier {
  tierLevel: number,
  price: number,
  dishCount: number
}
export interface Allergy {
  allergyId: number,
  name: string
}

export interface Dish {
  dishId: number,
  name: string,
  description: string,
  calorieAmount: number,
  imgUrl: string,
  allergies: Allergy[]
}

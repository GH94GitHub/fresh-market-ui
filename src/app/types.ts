export interface Subscription {
  expirationDate?: string,
  billingPeriod: "TRIAL" | "MONTHLY" | "THREE_MONTHS"
  totalCost?: number,
  tier: Tier
}

export interface User {
  userId?: number,
  firstName: string,
  lastName: string,
  email: string,
  password?: string,
  address: string,
  phoneNumber?: string,
  dishPreferences?: Dish[],
  allergies?: Allergy[],
  familySize: number,
  subscription?: Subscription
}

export interface Tier {
  tierId: number,
  tierLevel: number,
  basePrice: number,
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
  category: string,
  allergies: Allergy[]
}

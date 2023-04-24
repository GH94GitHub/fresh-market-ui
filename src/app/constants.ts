
const EnvTypes = { TEST: "TEST", DEV: "DEV" };
/* Setting Environment */
const ENV: string = EnvTypes.TEST;
const PORT: number = getPort();
const DOMAIN: string = getDomain();
// NOTE: Change this to control the API usage throughout the application
const URL: string = `http://www.${DOMAIN}:${PORT}`;

function getPort(): number {
  switch(ENV) {
    case EnvTypes.TEST:
      return 3000;
    case EnvTypes.DEV:
      return 9001;
    default:
      return 3000;
  }
}
function getDomain(): string {
  switch(ENV) {
    case EnvTypes.TEST:
      return "localhost";
    case EnvTypes.DEV:
      return "localhost";
    default:
      return "localhost";
  }
}

export const DISH_CATEGORIES: string[] = [
    "Breakfast",
    "Dinner"
];

export const API = {
  USER_API: `${URL}/users`,
  DISH_API: `${URL}/dishes`,
  ALLERGY_API: `${URL}/allergies`,
  TIER_API: `${URL}/tiers`,
}

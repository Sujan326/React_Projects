export const API_KEY = "AIzaSyB8nUjbM0v1KByvsadEV2s1LVxtZq-8Tw4";

export const valueConverter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
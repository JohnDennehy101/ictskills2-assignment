import truncate from "lodash/truncate";

export function excerpt(string) {
  return truncate(string, {    
    length: 400, // maximum 400 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  });
}

export function isLoggedInUser() {
  let userSessionId = localStorage.getItem("session");
  return userSessionId;
}
export function existingGuestSession() {
 let guestSessionId = localStorage.getItem("guest-session");
  return guestSessionId;
}
export function determinePaginationRange(resultsLength) {
  return Math.ceil(resultsLength / 20);
}
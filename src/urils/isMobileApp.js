export const isMobileApp = () => {
  const queryParams = new URLSearchParams(document.location.search);
  const isMobileApp = queryParams.get("source");

  // return window.innerWidth < 700 && isMobileApp === "mobile-app";
  return window.innerWidth < 700;
};

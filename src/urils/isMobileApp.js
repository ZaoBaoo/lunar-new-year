export const isMobileApp = () => {
  const queryParams = new URLSearchParams(document.location.search);
  const isMobileApp = queryParams.get("source");

  if (window.innerWidth < 700 && isMobileApp === "mobile-app") {
    return true;
  } else {
    return false;
  }
};

export function middleEllipsis(str) {
  if (typeof str === "undefined" || str === null) {
    return "";
  }

  if (str.length < 16) {
    return str;
  }

  return str.substr(0, 8) + "..." + str.substr(str.length - 6, str.length);
}

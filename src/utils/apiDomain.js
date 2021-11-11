export function apiDomain() {
  const production = process.env.NODE_ENV === "production";
  return production
    ? "https://it-logger-jsonserver.herokuapp.com/"
    : "http://localhost:5000";
}

export const getRandomUser = async () => {
  const result = await fetch("https://randomuser.me/api/", {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    method: "GET",
  }).then((e) => e.json());
  return result;
};

export const getRandomUser = async () => {
  const result = await fetch("https://randomuser.me/api/", {
    headers: { "Content-Type": "aplication/json" },
  }).then((e) => e.json());
  return result;
};

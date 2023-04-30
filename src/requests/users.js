export async function fetchAllUsers() {
  return await instance.get("/users");
}

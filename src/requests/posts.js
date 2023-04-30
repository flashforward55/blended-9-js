export async function fetchAllPosts() {
  return await instance.get("/posts");
}

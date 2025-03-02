import type { Post } from "@/interface";
import { fetchContentType } from ".";

export async function getBlogs() {
  return await await fetchContentType<Post[]>("blogs", {
    populate: "*",
  });
}

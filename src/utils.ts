// import matter from "gray-matter";

export function truncateBlogSummary(content: string, size = 200): string {
  return content.slice(0, size).trimEnd() + '...';
}

export function reformatDate(fullDate: string): string {
  const date = new Date(fullDate);
  return date.toDateString().slice(3);
  // return date.toDateString().slice(4);
  // return date.getUTCMonth() + ' ' + date.getDay() + ', ' + date.getFullYear();
}

export function blogReadingTime(text = ''): string {
  const minutes = Math.ceil(text.split(/s/g).length / 200);
  return minutes + ' min read';
}

// export function getPosts(context) {
//   // const res = await getPosts();
//   // const json = await res.json();

//   // const siteConfig = await import(`../config.json`);
//   //get posts & context from folder
//   const posts = ((context) => {
//     const keys = context.keys();
//     const values = keys.map(context);
//     const data = keys.map((key, index) => {
//       // Create slug from filename
//       const slug = key
//         .replace(/^.*[\\\/]/, "")
//         .split(".")
//         .slice(0, -1)
//         .join(".");
//       const value = values[index];
//       // Parse yaml metadata & markdownbody in document
//       const document = matter(value.default);
//       return {
//         document,
//         slug,
//       };
//     });
//     return data;
//   })(require.context("../posts", true, /\.md$/));

//   return {
//     posts: posts,
//     // ...siteConfisg
//   };
// }

// export function getMetadata(posts) {
//   // console.log("POSTS:", posts);
//   let metadata = {
//     posts: posts,
//     categories: [],
//     tags: [],
//     authors: [],
//     postsByCategory: {},
//     postsByTag: {},
//     postsByAuthor: {},
//   };
//   posts.map((post) => {
//     const cat = post.document.data.category;
//     // console.log("METADATA TAGS:", post.document.data.tags);
//     const tags = post.document.data.tags;
//     const author = post.document.data.author;
//     // console.log("CAT:", cat);
//     // console.log("TAGS:", tags);
//     // console.log("AUTHOR:", author);
//     if (cat && cat !== "undefined" && !metadata.categories.includes(cat)) {
//       metadata.categories.push(cat);
//       metadata.postsByCategory[cat] = [];
//     }
//     if (tags && tags !== "undefined") {
//       tags.map((tag) => {
//         if (!metadata.tags.includes(tag)) {
//           metadata.tags.push(tag);
//           metadata.postsByTag[tag] = [];
//         }
//       });
//     }
//     if (
//       author &&
//       author !== "undefined" &&
//       !metadata.authors.includes(author)
//     ) {
//       metadata.authors.push(author);
//       metadata.postsByAuthor[author] = [];
//     }
//     metadata.postsByCategory[cat].push(post);
//     tags.map((tag) => {
//       metadata.postsByTag[tag].push(post);
//     });
//     metadata.postsByAuthor[author].push(post);
//   });
//   // console.log("METADATA: ", metadata);
//   return metadata;
// }

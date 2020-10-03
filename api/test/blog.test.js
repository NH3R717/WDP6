const request = require("supertest");
const app = require("../app");

describe("blog endpoints", () => {
  it("blog test", () => {
    const post = {
      id: "e9b9ab71-a04d-41d6-b0fd-14a8b9527199",
      title: "Great Post",
      post_by: "A. Person",
      tag_id: "5",
      score: "3",
      post: "A blog post about something interesting.",
      comment_id: "10",
      created_at: "2020",
    };
    expect(post).toHaveProperty("id");
    expect(post.title).not.toBeNull;
    expect(post.title).toEqual("Great Post");
  });
  // it("create a new blog post", async () => {
  //   const res = await request(app).post("/api/app").send({
  //     title: "A. Person",
  //     created_at: "2020",
  //   });
  //   expect(res.statusCode).toEqual(201);
  //   expect(res.body).toHaveProperty("id");
  //   expect(res.body).toHaveProperty("title");
  //   expect(res.body).toHaveProperty("post_by");
  //   expect(res.body).toHaveProperty("tag_id");
  //   expect(res.body).toHaveProperty("score");
  //   expect(res.body).toHaveProperty("post");
  //   expect(res.body).toHaveProperty("comment_id");
  //   expect(res.body).toHaveProperty("created_at");
  //   expect(res.body).toEqual(
  //     expect.objectContaining({
  //       title: "Great Post",
  //       created_at: "2020",
  //     })
  //   );
  //   expect(res.statusCode).toEqual(406);
  //   expect(res.body).toHaveProperty("errors");
  // });
  // it("get post by \'A. Person\'", () => {
  //   const res = await request(app)
  //     .get('/api/app')
  //     .query({
  //     post_by:'A. Person'
  //     })
  //   expect(res.statusCode).toEqual(200)
  // })
});

// describe("detailed discription", () => {
// it("", () => {
//   const name = {

//   }
// expect(post).toHaveProperty("id");
// });
// });

// npm test

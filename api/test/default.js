const request = require("supertest");
const app = require("../app");

describe("blog endpoints", () => {

  it("post submit", () => {
    const post = {
      id: "e9b9ab71-a04d-41d6-b0fd-14a8b9527199",
      title: "Great Post",
      content: "A blog post about something interesting.",
      username: "A_Person",
      tags: [1, 6, 8],
      votes: [{ "direction": 1, "id": "26d5689d-b15b-4a94-a699-44b3e0fdc401" }],
      createdAt: "2020",
      comments: [
        {
          content: 'Thanks for all the helpful resources!',
          createdAt: '2020-03-18 10:00:00.000',
          id: 'b04652f7-07fe-4211-8117-71448bf1a336',
          User: {
            username: 'rhigleyfs',
          },
          userId: '26d5689d-b15b-4a94-a699-44b3e0fdc401',
        },]
    };
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("title");
    // expect(post).toHaveProperty("junk");
    expect(post).toHaveProperty("content");
    expect(post).toHaveProperty("username");
    expect(post.title).not.toBeNull();
    expect(post.title).toEqual("Great Post");
  });

  it("create a new blog post", async () => {
    const res = await request(app).post("/api/app").send({
      title: "A. Person",
      created_at: "2020",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("title");
    expect(res.body).toHaveProperty("post_by");
    expect(res.body).toHaveProperty("tag_id");
    expect(res.body).toHaveProperty("score");
    expect(res.body).toHaveProperty("post");
    expect(res.body).toHaveProperty("comment_id");
    expect(res.body).toHaveProperty("created_at");
    expect(res.body).toEqual(
      expect.objectContaining({
        title: "Great Post",
        created_at: "2020",
      })
    );
    expect(res.statusCode).toEqual(406);
    expect(res.body).toHaveProperty("errors");
  });

  it("get post by \'A. Person\'", () => {
    const res = await request(app)
      .get('/api/app')
      .query({
        post_by: 'A. Person'
      })
    expect(res.statusCode).toEqual(201)
  });

});

// default test structure
describe("detailed description", async () => {
  it("", () => {
    const res = await request(app)
      .post('/api/place')
      .send({

      })
    expect(res.body).toHaveProperty("property");
    expect(res.statusCode).toEqual(201)
  });
  // addComment( { postId, text } )

  it("adds a comment to a post", () => {
    const addComment = {
      id: "e9b9ab71-a04d-41d6-b0fd-14a8b9527199",
      comments: [
        {
          content: 'Thanks for all the helpful resources!',
          createdAt: '2020-03-18 10:00:00.000',
          id: 'b04652f7-07fe-4211-8117-71448bf1a336',
          User: {
            username: 'rhigleyfs',
          },
          userId: '26d5689d-b15b-4a94-a699-44b3e0fdc401',
        },]
    }
    expect(addComment).toHaveProperty("id");
    expect(addComment).toHaveProperty("comment");
    expect(res.statusCode).toEqual(201)
  });

});

// npm test

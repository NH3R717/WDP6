const request = require("supertest");
const app = require("../app");

describe("post endpoints", () => {
    it("submit a post", async () => {
        const post = await request(app)
            .post('/api/posts')
            .send({
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
            });
        expect(post).toHaveProperty("id");
        expect(post).toHaveProperty("title");
        // expect(post).toHaveProperty("junk");
        expect(post).toHaveProperty("content");
        expect(post).toHaveProperty("username");
        expect(post.title).not.toBeNull();
        expect(post.content).not.toBeNull();
        expect(post.username).not.toBeNull();
        expect(post.title).toEqual("Great Post");
    });

    it('create a new post', async () => {
        const res = await request(app)
            .post('/api/posts')
            .send({
                id: 1,
                title: 'Test Title',
                username: "A_Person",
                tags: [1, 6, 8],
                votes: [{ "direction": 1, "userId": "26d5689d-b15b-4a94-a699-44b3e0fdc401" }],
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
            })
        // expect(res.statusCode).toEqual(201)
    })

    it("add a comment to a post", async () => {
        const res = await request(app)
            .update('/api/posts')
            .send({
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
            });
        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("comments");
        // expect(comment.id).not.toBeNull();
        // expect(comment.comments).not.toBeNull();
        expect(res.statusCode).toEqual(201)
    });

    it("add an upvote to a post", async () => {
        const res = await request(app)
            .post('/api/posts')
            .send({
                comments:
                    [{ "direction": 1, "id": "26d5689d-b15b-4a94-a699-44b3e0fdc401" }]
            })
        expect(res.body).toHaveProperty("comments");
        expect(res.statusCode).toEqual(201)

    });

    it("delete a post", () => {
        const res = await request(app)
            .delete('/api/post')
            .send({
                id: "e9b9ab71-a04d-41d6-b0fd-14a8b9527199"
            })
        expect(res.body).toHaveProperty("id");
        expect(res.body).toBeNull("id");
        expect(res.statusCode).toEqual(201)
    });

    it("get a post", () => {
        const res = await request(app)
            .get('/api/post')
            .send({
                id: "e9b9ab71-a04d-41d6-b0fd-14a8b9527199"
            })
        expect(res.body).toHaveProperty("id");
        expect(res.statusCode).toEqual(201)
    });

    it("get a post by tag", () => {
        const res = await request(app)
            .get('/api/post')
            .send({
                tag: [3]
            })
        expect(res.body).toHaveProperty("tag");
        expect(res.statusCode).toEqual(201)
    });

    it("get a post by user", () => {
        const res = await request(app)
            .get('/api/post')
            .send({
                username: "A_Person"
            })
        expect(res.body).toHaveProperty("username");
        expect(res.statusCode).toEqual(201)
    });



});
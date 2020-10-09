const request = require("supertest");
const app = require("../app");

describe("user endpoints", () => {

    it("update a tag to a user's watched [addToWatched(tagId)]", async () => {
        const res = await request(app)
            .post('/api/user')
            .send({
                userId: "26d5689d-b15b-4a94-a699-44b3e0fdc401",
                tags: [{
                    id: "36",
                    watching: "yes"
                }]
            })
        expect(res.body).toHaveProperty("tags");
        expect(res.body).toHaveProperty("userId");
        expect(res.statusCode).toEqual(201)
    });

    it("update a tag to a user's watched [fetchWatching()]", async () => {
        const res = await request(app)
            .get('/api/user')
            .send({
                userId: "26d5689d-b15b-4a94-a699-44b3e0fdc401",
                tags: [{
                    watching: "yes"
                }]
            })
        expect(res.body).toHaveProperty("userId");
        expect(res.body).toHaveProperty("tags");
        expect(res.statusCode).toEqual(201)
    });

    it("update a tag to a user's watched [removeFromWatched(tagId)]", async () => {
        const res = await request(app)
            .post('/api/user')
            .send({
                userId: "26d5689d-b15b-4a94-a699-44b3e0fdc401",
                tags: [{
                    id: "36",
                    watching: "no"
                }]
            })
        expect(res.body).toHaveProperty("tags");
        expect(res.body).toHaveProperty("userId");
        expect(res.statusCode).toEqual(201)
    });

    it("get a user [fetchUser(userId)]", async () => {
        const res = await request(app)
            .get('/api/user')
            .send({
                userId: "26d5689d-b15b-4a94-a699-44b3e0fdc401",
            })
        expect(res.body).toHaveProperty("userId");
        expect(res.statusCode).toEqual(201)
    });
});


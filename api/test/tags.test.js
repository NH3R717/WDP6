const request = require("supertest");
const app = require("../app");

describe("tag endpoints", () => {

    it("add a tag to watched", async () => {
        const res = await request(app)
            .post('/api/users')
            .send({
                userId: "26d5689d-b15b-4a94-a699-44b3e0fdc401",
                tags: [{
                    id: "36",
                    status: "watched"
                }]
            })
        expect(res.body).toHaveProperty("tags");
        expect(res.body).toHaveProperty("userId");
        expect(res.statusCode).toEqual(201)
    });
});
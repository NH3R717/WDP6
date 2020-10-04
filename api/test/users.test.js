const request = require("supertest");
const app = require("../app");

describe("user endpoints", () => {

    // watch is not a feature in the ShipIt project
    it("update a tag to a user's watched", async () => {
        const res = await request(app)
            .update('/api/users')
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

    it("get a user", async () => {
        const res = await request(app)
            .get('/api/users')
            .send({
                userId: "26d5689d-b15b-4a94-a699-44b3e0fdc401",
            })
        expect(res.body).toHaveProperty("userId");
        expect(res.statusCode).toEqual(201)
    });
});


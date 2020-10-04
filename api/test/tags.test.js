const request = require("supertest");
const app = require("../app");

describe("tag endpoints", () => {
    it("delete a tag to watched", async () => {
        const res = await request(app)
            .delete('/api/tags')
            .send({
                name: "skin tag"
            })
        expect(res.body).toHaveProperty("name");
        expect(res.statusCode).toEqual(201)
    });
});
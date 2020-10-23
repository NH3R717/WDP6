const request = require("supertest");
const app = require("../app");
const { users } = require("../../api/app/models")

describe("user endpoints", () => {

    // ! make these for each model – user

    let user;

    beforeEach(async () => {
        user = await users.create({
            username: "Test",
            password: "Test",
        })
    });

    // ! it.only for one test

    // it.only("update a tag to a user's watched [addToWatched(tagId)]", async () => {
    it("update a tag to a user's watched [addToWatched(tagId)]", async () => {
        const res = await request(app)
            .post('/tags/')
            .send({
                id: user.id,
                name: "A Tag"
            })
        // expect(res.body).toHaveProperty("tags");
        // expect(res.body).toHaveProperty("id");
        // expect(res.statusCode).toEqual(201);
    });

    it("update a tag to a user's watched [fetchWatching()]", async () => {
        const res = await request(app)
            .get('/users/')
            .send({
                id: "26d5689d-b15b-4a94-a699-44b3e0fdc401",
                tags: [{
                    watching: "yes"
                }]
            })
        // expect(res.body).toHaveProperty("userId");
        // expect(res.body).toHaveProperty("tags");
        // expect(res.statusCode).toEqual(201)
    });

    it("update a tag to a user's watched [removeFromWatched(tagId)]", async () => {
        const res = await request(app)
            .post('/users/')
            .send({
                id: "26d5689d-b15b-4a94-a699-44b3e0fdc401",
                tags: [{
                    id: "36",
                    watching: "no"
                }]
            })
        // expect(res.body).toHaveProperty("tags");
        // expect(res.body).toHaveProperty("userId");
        // expect(res.statusCode).toEqual(201)
    });

    it("get a user [fetchUser(userId)]", async () => {
        const res = await request(app)
            .get('/users/')
            .send({
                id: "249d28dc-39a8-41db-a0be-1722c64a97c1",
            })

        // ToDO this to all '[]'

        expect(res.body[0]).toHaveProperty("id");
        expect(res.statusCode).toEqual(200)
    });

    afterEach(async () => {
        await users.destroy({ where: { id: user.id } });
    });
});
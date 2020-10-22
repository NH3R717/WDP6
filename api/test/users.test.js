const request = require("supertest");
const app = require("../app");

describe("user endpoints", () => {

    // it("update a tag to a user's watched [addToWatched(tagId)]", async () => {
    //     const res = await request(app)
    //         .post('/tags/')
    //         .send({
    //             id: "26d5689d-b15b-4a94-a699-44b3e0fdc401",
    //             name: "A Tag"
    //         })
    //     expect(res.body).toHaveProperty("tags");
    //     expect(res.body).toHaveProperty("id");
    //     expect(res.statusCode).toEqual(201)
    // });

    // it("update a tag to a user's watched [fetchWatching()]", async () => {
    //     const res = await request(app)
    //         .get('/users/')
    //         .send({
    //             id: "26d5689d-b15b-4a94-a699-44b3e0fdc401",
    //             tags: [{
    //                 watching: "yes"
    //             }]
    //         })
    //     expect(res.body).toHaveProperty("userId");
    //     expect(res.body).toHaveProperty("tags");
    //     expect(res.statusCode).toEqual(201)
    // });

    // it("update a tag to a user's watched [removeFromWatched(tagId)]", async () => {
    //     const res = await request(app)
    //         .post('/users/')
    //         .send({
    //             id: "26d5689d-b15b-4a94-a699-44b3e0fdc401",
    //             tags: [{
    //                 id: "36",
    //                 watching: "no"
    //             }]
    //         })
    //     expect(res.body).toHaveProperty("tags");
    //     expect(res.body).toHaveProperty("userId");
    //     expect(res.statusCode).toEqual(201)
    // });

    it("get a user [fetchUser(userId)]", async () => {
        const res = await request(app)
            .get('/users/')
            .send({
                id: "249d28dc-39a8-41db-a0be-1722c64a97c1",
            })
        expect(res.body).toHaveProperty("id");
        expect(res.statusCode).toEqual(200)
    });
});


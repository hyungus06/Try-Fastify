const fastify = require("fastify")({
    logger: true, // Fastify 로그 기능 ON
});

fastify.get("/", (request, reply) => {
    reply.send({ hello: "world" });
});

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1); // 종료
    }
});

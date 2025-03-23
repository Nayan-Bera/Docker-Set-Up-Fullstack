"scripts": {
        "dev": "nodemon --legacy-watch src/index.ts",
        "build": "tsc --project .",
        "start": "node dist/index.js",
        "generate": "drizzle-kit generate --config ./src/drizzle.config.ts",
        "migrate": "drizzle-kit migrate --config ./src/drizzle.config.ts",
        "db:seed": "ts-node src/seeders/seed.ts"
    },


package.json    for type.script
import sequelize from "./config/database.config.js";
import "./config/association.config.js";

async function setup() {
    try {
        // await sequelize.drop();
        await sequelize.sync({ force: true });
    } catch (error) {
        console.error("Error during setup:", error);
    } finally {
        await sequelize.close();
    }
}

setup();
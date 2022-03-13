const { sequelize } = require("./db/connection");

const yargs = require("yargs");
const { addMovie, listMovies, updateActor, deleteEntry } = require("./movie/movieFunction");

const app = async (yargsObj) => {
    try {
        await sequelize.sync();
        if (yargsObj.add) {
            await addMovie({title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director});
            console.log(JSON.stringify(await listMovies(), null, 2));
        } else if (yargsObj.list) {
            console.log(JSON.stringify(await listMovies({[yargsObj.key]: yargsObj.value}), null, 2));
        } else if (yargsObj.delete) {
            console.log(JSON.stringify(await deleteEntry({[yargsObj.key]: yargsObj.value}), null, 2));
        } else if (yargsObj.update) {
            console.log(JSON.stringify(await updateActor(yargsObj), null, 2));
        } else {
            console.log("Incorrect command");
        }
        await sequelize.close();
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);


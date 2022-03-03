const Movie = require("./movieTable");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async (filterObj) => {
    console.log("filterObj: ", filterObj);
    try {
        if (filterObj.undefined === undefined) {
            return await Movie.findAll();
        } else {
            return await Movie.findOne({where: filterObj});
        }
    } catch (error) {
        console.log(error);
    }
};



const Movie = require("./movieTable");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async (filterObj) => {
    try {
        if (filterObj) {
            return await Movie.findOne({where: filterObj});
        } else {
            return await Movie.findAll();
        }
    } catch (error) {
        console.log(error);
    }
};



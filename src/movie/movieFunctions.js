const Movie = require("./movieTable");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async (filterObj) => {
    // console.log("filterObj: ", filterObj);
    try {
        if (filterObj && (filterObj.title || filterObj.actor)) {
            return await Movie.findAll({where: filterObj});

        } else {
            return await Movie.findAll();
        }
        
    } catch (error) {
        console.log(error);
    }

    exports.updateActor = async (inputObj) => {
        try {
            return await Movie.update({ actor: inputObj.newActor }, {
                where: {
                  actor: inputObj.oldActor
                }
              });
        } catch (error) {
            console.log(error, "It did not update")
        }
    }

    
}
    exports.deleteEntry = async (filterObj) => {
    try {
        return await Movie.destroy({
            where: filterObj});
        
        
        
        } catch (error) {
        console.log(error, "It did not update")
 }
};


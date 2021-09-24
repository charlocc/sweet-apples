// Import models
const User = require('./User');
const Reviews = require('./Reviews')
const VideoGame = require('./Videogame')

// Reviews belong to User
Reviews.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = { User, Reviews, VideoGame };
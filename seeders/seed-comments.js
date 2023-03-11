const db = require('../models')

async function seed() {
    //Get the place
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    //Sample comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    //Add comment to the place's comment array
    place.comments.push(comment.id)

    //Save the place's comment
    await place.save()

    //Exit the program
    process.exit()
}

seed()
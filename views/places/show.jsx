//dependencies
const React = require('react')
const Def = require('../default')

//show page
function show(data) {
    return(
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <div>{ data.place.pic }</div>
                <div>
                    <h2>Rating</h2>
                    <p>Not Rated</p>
                </div>
                <div>
                    <h2>Description</h2>
                    <p>Located in { data.place.city }, { data.place.state } and serving { data.place.cuisine }.</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = show
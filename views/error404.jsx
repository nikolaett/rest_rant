//dependencies
const React = require('react')
const Def = require('./default')

//404 page
function error404() {
    return(
        <Def>
            <main>
                <div>
                    <p>Hmm, no food to rant or rave about here.</p>
                </div>
                <div>
                    <img src="images/empty-bowl.jpg" alt="Empty Bowl"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@ericatan5566?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">TAN Erica</a> on <a href="https://unsplash.com/photos/zCYO9HxEAjI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404
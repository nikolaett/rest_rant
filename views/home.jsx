//dependencies
const React = require('react')
const Def = require('./default')

//Home Page
function home() {
    return(
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="images/ramen.jpg" alt="Shrimp Ramen Bowl"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@mab_studio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michele Blackwell</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def> 
    )
}

module.exports = home
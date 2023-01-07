//dependencies
const React = require('react')

//default layout for pages
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css"></link>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
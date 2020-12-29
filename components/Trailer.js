import React from 'react'
import { Link } from "react-router-dom"

function Trailer({ match, Movies }) {
    
            const x = Movies.find(el => el.title === match.params.title)
    return (
        <div>
            <div>
                <Link to='/'>
                <button>return</button>
                </Link>
            </div>
            <iframe title={x.title} width="560" height="315" src={x.trailerLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           <div>
           {x.description}
           </div>

        </div>
    )
}

export default Trailer

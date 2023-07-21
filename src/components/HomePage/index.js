import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <section>
                <h1>
                    Choose Your Game!!!
                </h1>
            </section>
            <section>
                <div>
                    <Link to="/candySmasher"><button>cnasy smasher button test</button></Link>
                </div>
            </section>
        </>
    )
}

export default HomePage;
import { Link } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p>It's a simple task tracker which made in React</p>
            <Link to='/'>Go back</Link>
        </div>
    )
}

export default About

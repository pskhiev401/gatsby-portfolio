import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/pskhiev" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                        <li><a href="https://github.com/pskhiev401" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://twitter.com/pateekakes" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="mailto:webdev.patric@gmail.com" className="icon fa-envelope"><span className="label">Email</span></a></li>
                    </ul>
                    {/* <ul className="copyright">
                        <li>&copy; Patric Khiev </li>
                    </ul> */}
                </div>
            </div>
        )
    }
}

export default Footer

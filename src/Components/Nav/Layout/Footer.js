import React from 'react'

function Footer () {
    return (
        <footer className="Footer">
            <div className="footer-first">
                <div className="sub">
                    <h3>Subscribe</h3>
                    <p><small>Stay up to date</small></p>
                    <input placeholder="E-mail" className="email" type="text" action="submit"/>
                </div>
                <div className="subs">
                    <div>
                        <avatar></avatar>
                        <p>name</p>
                    </div>
                    <div>
                        <h3>Title</h3>
                        <h4>Review</h4>
                    </div>
                </div>
            </div>
            <div className='footer-second'>
                <h2>Filba</h2>
                <div className='footer-second-nav'> 
                    <h3>Home</h3>
                    <h3>Movies</h3>
                    <h3>Series</h3>
                    <h3>Live</h3>
                    <h3>My list</h3>
                    <h3><small>All right reserved copyright 2020</small></h3>
                </div>

            </div>
        </footer>
    )
}
export default Footer;
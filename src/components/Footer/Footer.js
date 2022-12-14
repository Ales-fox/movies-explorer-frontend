import './Footer.css';

function Footer(props) {
    return (
        <>
            <footer className='footer'>
                <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className="footer__text">
                    <p className="footer__year">© 2022</p>
                    <div className="footer__sites">
                        <p className="footer__site">Яндекс.Практикум</p>
                        <p className="footer__site">Github</p>
                    </div>
                </div>                
            </footer>
        </>
    )
}

export default Footer;
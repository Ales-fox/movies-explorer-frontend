import './Techs.css';

function Techs(props) {
    return (
        <section className='techs' id="techs">
            <h3 className='header-block'>Технологии</h3>
            <div className='line'></div>
            <h2 className="techs__title">7 технологий</h2>
            <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="stacks">
                <p className="stacks__cell">HTML</p>
                <p className="stacks__cell">CSS</p>
                <p className="stacks__cell">JS</p>
                <p className="stacks__cell">React</p>
                <p className="stacks__cell">Git</p>
                <p className="stacks__cell">Express</p>
                <p className="stacks__cell">mongoDB</p>
            </div>            
        </section>
    )
}

export default Techs;
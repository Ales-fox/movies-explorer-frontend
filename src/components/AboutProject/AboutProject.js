import './AboutProject.css';

function AboutProject(props) {
    return (
        <section className='about' id="aboutProject">
            <h3 className='header-block'>О проекте</h3>
            <div className='line'></div>
            <div className="table_text table">
                <h3 className="table__header">Дипломный проект включал 5 этапов</h3>
                <h3 className="table__header">На выполнение диплома ушло 5 недель</h3>
                <p className="table__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className="table__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="table_rect table">
               <p className="table-cell_rect table-cell_rect_blue">1 неделя</p>
               <p className="table-cell_rect table-cell_rect_gray">4 недели</p>
               <p className="table-cell">Backend</p>
               <p className="table-cell">Frontend</p>
            </div>            
        </section>
    )
}

export default AboutProject;

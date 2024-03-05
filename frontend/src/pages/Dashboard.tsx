import { statInfo,scheduleInfo } from "../data/data"

export default function Dashboard(){
    
    return(
        <main>
            <section>
                <h1>Statistics</h1>
                <article>
                    <div className="card-container">
                        {
                            statInfo.map((card,idx) => (
                                <a href={card.Href} key={idx} className='class-link'>
                                <div className="card">
                                    <img src={card.ImgPath} alt={card.AltText} />
                                    <h3>{card.title}</h3>
                                    <h4>{card.amount}</h4>
                                </div>
                                </a>
                            ))
                        }
                    </div>
                </article>
                <h1>Schedule</h1>
                <article>
                    <div className="card-container">
                        {
                            scheduleInfo.map((card,idx) => (
                                <a key={idx} className='card-link'>
                                <div className="card">
                                <img src={card.ImgPath} alt={card.AltText} />
                                <h3>{card.title}</h3>
                                <h4>{card.amount}</h4>
                                </div>
                                </a>
                                
                            ))
                        }
                    </div>
                </article>
            </section>
        </main>
    )
}
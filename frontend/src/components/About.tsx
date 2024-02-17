import Header from "./Header";
import Icon from "./Icon";
import React from '../assets/react.svg'; 
import MySQL from '../assets/mysql.svg';
import NodeJS from '../assets/nodejs.svg';
import Sequelize from '../assets/sequelize.svg';
import Database from '../assets/database.svg';
const routes = [
    {
        title:'Tables',
        path:'/'
    },
    {
        title:'Source Code',
        path:'/'
    }
]

export default function About(){
    return(
        <>
        <Header headers={routes} />
        <main>
        <section>
            <h1>About This Project</h1>
            <article>
                <p>
                    This project uses <Icon Href="https://react.dev/" title="React" ImgPath={React} />,<Icon Href="https://www.mysql.com/" title="SQL" ImgPath={MySQL}/> and <Icon Href="https://nodejs.org/en" title="NodeJS" ImgPath={NodeJS}/>, with a database ORM called <Icon Href="https://sequelize.org/" title="Sequelize" ImgPath={Sequelize} /> to facilitate data manipulation from the database. The database in question is the free sample <Icon Href="https://dev.mysql.com/doc/sakila/en/" title="Sakila" ImgPath={Database}/> database that comes with the MySQL community edition. The goal of this project is to create a realtime dashboard displaying, total number of movies and the percentages of the different ratings among the movies and each actor's number of films compared to the whole as a mock data to calculate and display.I would love for some feedback regarding the project especially its design and what I can do to improve it. 
                </p>
                <br />
                <p>
                    This project started off as a passtime just to keep my react skills in check but I guess I learned quite alot more about the point <b>Reuseable Components</b> as the headers in each page is dynamic through the use of its props and the above Icons themselves of "React","MySQL" etc. At the same time it also feels like I've only scratched the surface of it.
                </p>
            </article>
        </section>  
        </main>
        </>
    )
}
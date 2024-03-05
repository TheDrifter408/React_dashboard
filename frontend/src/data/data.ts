// StatInfo Images
import Actor from '../assets/actor.svg';
import Film from '../assets/film.svg';
import Rent from '../assets/rent.svg';
import Money from '../assets/money.svg';
// Schedule Images
import PreProduction from '../assets/pre-production.svg';
import Production from '../assets/production.svg';
import EndProduction from '../assets/end-production.svg';
import ProjectedEarnings from '../assets/projected-earnings.svg';



export const statInfo = [
    {
        title:"No. of Actors",
        amount: 200,
        ImgPath:Actor,
        AltText:'actors',
        Href:'/tables'
    },
    {
        title:"No. of Films",
        amount: 1000,
        ImgPath:Film,
        AltText:'Films',
        Href:'/tables'
    },
    {
        title:"No. of Rentals",
        amount: 16044,
        ImgPath: Rent,
        AltText:'rentals',
        Href:'#'
    },
    {
        title:"Total Earnings",
        amount: 67406.56,
        ImgPath:Money,
        AltText:'earnings',
        Href:'#'

    },
]

export const scheduleInfo = [
    {
        title:'In Pre-production',
        amount: 3,
        ImgPath:PreProduction,
        AltText:'pre-production',
    },
    {
        title:'In Production',
        amount: 4,
        ImgPath:Production,
        AltText:'in-production'
    },
    {
        title:'End Of Production',
        amount:2,
        ImgPath:EndProduction,
        AltText:'end-production'
    },
    {
        title:'Projected Earnings',
        amount:67030.32,
        ImgPath:ProjectedEarnings,
        AltText:'projected-earnings'
    }
]
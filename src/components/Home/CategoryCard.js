import './CategoryCard.css'
export default function CategoryCard(props){
    return(
        <div className="cat-card" style={{marginRight: '1.2rem'}}>
            <div className="card-image">
                <img src={props.img_src} alt="" className='filter-green' />
            </div>
            <div className="card-title pt-4 fw-bold">
                <p className="category-title">{props.title}</p>
            </div>
        </div>
    )
}
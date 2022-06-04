import location from './images/location.png'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card--img">
                <img src={props.item.imageUrl} />
            </div>
            <div className="card--text">
                <div className="card--text--location"> 
                <h3>
                    <img src={location} />
                     &nbsp;{props.item.country}
                </h3>
                <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="card--text--h1">{props.item.title}</h1>
                <h3 className="card--text--date">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="card--text--para">
                    {props.item.description}
                </p>
            </div>
        </div>
    )
}

export default Card;
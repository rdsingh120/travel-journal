import location from './images/location.png'

const Card = ({title, country, googleMapsUrl, startDate, endDate, description, imageUrl}) => {
    return (
        <div className="card">
            <div className="card--img">
                <img src={imageUrl} />
            </div>
            <div className="card--text">
                <div className="card--text--location"> 
                <h3>
                    <img src={location} />
                     &nbsp;{country}
                </h3>
                <a href={googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="card--text--h1">{title}</h1>
                <h3 className="card--text--date">{startDate} - {endDate}</h3>
                <p className="card--text--para">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card;
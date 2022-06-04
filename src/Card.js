import location from './images/location.png'

const Card = () => {
    return (
        <div className="card">
            <div className="card--img">
                <img src='https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' />
            </div>
            <div className="card--text">
                <div className="card--text--location"> 
                <h3>
                    <img src={location} />
                     &nbsp;INDIA
                </h3>
                <a href='https://www.google.com/maps/place/Taj+Mahal/@27.1751496,78.0399482,17z/data=!3m1!4b1!4m5!3m4!1s0x39747121d702ff6d:0xdd2ae4803f767dde!8m2!3d27.1751448!4d78.0421422' target="_blank">View on Google Maps</a>
                </div>
                <h1 className="card--text--h1">Taj Mahal</h1>
                <h3 className="card--text--date">Jan 01,2022 - Jan 03,2022</h3>
                <p className="card--text--para">
                    Taj Mahal, mausoleum complex in Agra, western Uttar Pradesh state, northern India.
                    The Taj Mahal was built by the Mughal emperor Shah Jahān (reigned 1628–58)
                    to immortalize his wife Mumtaz Mahal (“Chosen One of the Palace”), who died in childbirth
                    in 1631, having been the emperor’s inseparable companion since their marriage in 1612. 
                    India’s most famous and widely recognized building, it is situated in the eastern part of the city on the 
                    southern (right) bank of the Yamuna (Jumna) River. Agra Fort (Red Fort), also on the 
                    right bank of the Yamuna, is about 1 mile (1.6 km) west of the Taj Mahal.

                </p>
            </div>
        </div>
    )
}

export default Card;
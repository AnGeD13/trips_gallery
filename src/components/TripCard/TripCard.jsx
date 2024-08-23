

function TripCard(props) {
    return (
        <li className="card">
            <img src={props.imgURL} alt={props.city} />
            <p className="card__title">{props.city}, {props.month} — {props.cost}</p>
            <div className="card__bubble">
                <p className="card__bubble__info">{props.transport}</p>
                {props.persons > 0 && 
                    <p className="card__bubble__info">
                        {props.persons}&#128101;
                    </p>
                }
            </div>
        </li>
    )
}

export default TripCard
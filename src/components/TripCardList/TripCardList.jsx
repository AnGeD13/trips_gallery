import TripCard from "../TripCard/TripCard"
import trips from "../../data/trips"

function TripCardList() {
    return (
        <ul className="cards-list">
            {trips.map(trip => 
                <TripCard
                    key={trip.id}
                    imgURL={trip.imgURL}
                    city={trip.city}
                    month={trip.month}
                    cost={trip.cost}
                    transport={trip.transport}
                    persons={trip.persons}
                />
            )}
        </ul>
    )
}

export default TripCardList
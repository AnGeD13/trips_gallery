import trip1Img from "../assets/images/trip1.png"
import trip2Img from "../assets/images/trip2.png"
import trip3Img from "../assets/images/trip3.png"
import trip4Img from "../assets/images/trip4.png"

const trips = [
    {
        id: 1,
        imgURL: trip1Img,
        city: "Тбилиси",
        month: "апрель",
        cost: "83.000",
        transport: "на автобусе",
        persons: 10,
    },
    {
        id: 2,
        imgURL: trip2Img,
        city: "Стамбул",
        month: "март",
        cost: "110.000",
        transport: "на самолете",
        persons: 0,
    },
    {
        id: 3,
        imgURL: trip3Img,
        city: "Дубай",
        month: "июнь",
        cost: "220.000",
        transport: "на самолете",
        persons: 15,
    },
    {
        id: 4,
        imgURL: trip4Img,
        city: "Пхукет",
        month: "сентябрь",
        cost: "135.000",
        transport: "самолет + паром",
        persons: 11,
    }
]

export default trips
import { MissionType } from "../types"
import MissionCart from "./mission.cart"




const MissionList = () => {
    const mission_list: MissionType[] =[
        {
            image: 'puzzle.svg',
            title: 'پازل',
            isCompleted: true,
            score: 50,
            totalScore: 100,
            description: 'توضیحات',
            route: '/puzzle',
        },
        {
            image: 'puzzle.svg',
            title: 'پازل',
            isCompleted: false,
            score: 0,
            totalScore: 100,
            description: 'توضیحات',
            route: '/puzzle',
        },
        {
            image: 'puzzle.svg',
            title: 'پازل',
            isCompleted: false,
            score: 0,
            totalScore: 100,
            description: 'توضیحات',
            route: '/puzzle',
        },
        {
            image: 'puzzle.svg',
            title: 'پازل',
            isCompleted: false,
            score: 0,
            totalScore: 100,
            description: 'توضیحات',
            route: '/puzzle',
        }
    ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {mission_list.map((mission, index) => (
                <MissionCart key={index} {...mission} />
            ))}
        </div>
    )
}

export default MissionList

import {
    boardGames, horses, karting, laserTag, masterClasses, planetarium,
    rockClimbing, sauna, stretching, tea, wakesurf
} from "data/activities";

export const allActivities = (): any[] => [
    wakesurf, horses, stretching, rockClimbing, planetarium, tea, masterClasses, laserTag, karting, sauna, boardGames
]

export const activityByName = (name: string) => {
    return allActivities().filter(activity => activity.id === name)[0]
}

export const randomActivity = () => {
    let activities = allActivities()
    return activities[Math.floor(Math.random() * activities.length)];
}

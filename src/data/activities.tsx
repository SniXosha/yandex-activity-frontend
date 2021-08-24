export const SPORT = 'sport'
export const WALKS = 'walks'
export const REST = 'rest'
export const FUN = 'fun'
export const ALL = 'all'

export const wakesurf = {
    id: 'wakesurf',
    name: 'Вейксёрф',
    image: {
        url: 'surf',
        size: 250
    },
    activityLevel: 9,
    money: 3000,
    category: SPORT
}

export const horses = {
    id: 'horses',
    name: 'Конный спорт',
    image: {
        url: 'horse',
        size: 150
    },
    activityLevel: 3,
    money: 1500,
    category: WALKS
}

export const boardGames = {
    id: 'boardGames',
    name: 'Настолки',
    image: {
        url: 'games',
        size: 200
    },
    activityLevel: 1,
    money: 700,
    category: FUN
}

export const masterClasses = {
    id: 'masterClasses',
    name: 'Мастер-классы',
    image: {
        url: 'cook',
        size: 200
    },
    activityLevel: 1,
    money: 2000,
    category: REST
}

export const planetarium = {
    id: 'planetarium',
    name: 'Планетарий',
    image: {
        url: 'planets',
        size: 200
    },
    activityLevel: 1,
    money: 500,
    category: REST
}

export const tea = {
    id: 'tea',
    name: 'Чайная церемония',
    image: {
        url: 'tea',
        size: 150
    },
    activityLevel: 1,
    money: 500,
    category: REST
}

export const rockClimbing = {
    id: 'rockClimbing',
    name: 'Скалолазание',
    image: {
        url: 'rock',
        size: 150
    },
    activityLevel: 5,
    money: 700,
    category: SPORT
}

export const laserTag = {
    id: 'laserTag',
    name: 'Лазертаг',
    image: {
        url: 'lasers',
        size: 200
    },
    activityLevel: 3,
    money: 1000,
    category: FUN
}

export const karting = {
    id: 'karting',
    name: 'Картинг',
    image: {
        url: 'karting',
        size: 170
    },
    activityLevel: 6,
    money: 2000,
    category: FUN
}

export const sauna = {
    id: 'sauna',
    name: 'Сауна',
    image: {
        url: 'sauna',
        size: 150
    },
    activityLevel: 2,
    money: 2000,
    category: REST
}

export const stretching = {
    id: 'stretching',
    name: 'Стретчинг',
    image: {
        url: 'stretching',
        size: 150
    },
    activityLevel: 4,
    money: 1000,
    category: SPORT
}

export const allActivities = [
    wakesurf, horses, boardGames, masterClasses, planetarium, tea, rockClimbing, laserTag, karting, sauna, stretching
]

export const activityByName = (name: string) => {
    return allActivities.filter(activity => activity.id === name)[0]
}

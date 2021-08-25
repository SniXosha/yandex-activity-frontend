export const SPORT = 'sport'
export const WALKS = 'walks'
export const REST = 'rest'
export const FUN = 'fun'
export const ALL = 'all'

export const wakesurf = {
    id: 'wakesurf',
    name: 'Вейксёрф',
    image: {
        url: 'surf2',
        size: 250,
        poster: {
            size: 100,
            position: 'bottom -1vw'
        }
    },
    activityLevel: 3,
    money: 3000,
    description: "Cимуляция классического сёрфинга. Катер-буксировщик тянет райдера за собой и создает волны разной длины. Ваша задача удержаться на специальной доске и получить удовольствие!\n",
    category: SPORT,
    binary: ['solo', 'company', 'outdoor'],
}

export const horses = {
    id: 'horses',
    name: 'Конный спорт',
    image: {
        url: 'horse',
        size: 160,
        poster: {
            size: 100,
            position: 'bottom -1vw'
        }
    },
    activityLevel: 2,
    money: 1500,
    description: "Сто лет назад катание на лошади было для большинства обычным навыком, а заодно и развлечением. Сегодня умением держаться в седле могут похвастаться немногие. А между тем конный спорт — один из самых полезных видов физической нагрузки, к тому же он даёт возможность пообщаться с лошадьми. Представляем вам список конно-спортивных клубов Москвы и ближайшего Подмосковья.",
    category: WALKS,
    binary: ['solo', 'company', 'noEquipment', 'outdoor'],
}

export const boardGames = {
    id: 'boardGames',
    name: 'Настолки',
    image: {
        url: 'games',
        size: 200,
        poster: {
            size: 100,
            position: 'bottom -1vw'
        }
    },
    activityLevel: 1,
    money: 700,
    description: "Хотите стать участником уникальной вечеринки, которая проходит в игровой форме, пообщаться с интересными людьми и, возможно, даже встретить свою половинку?",
    category: FUN,
    binary: ['company', 'noEquipment', 'indoor'],
}

export const masterClasses = {
    id: 'masterClasses',
    name: 'Мастер-классы',
    image: {
        url: 'cook',
        size: 200,
        poster: {
            size: 100,
            position: 'center'
        }
    },
    activityLevel: 1,
    money: 2000,
    description: "Мастер-класс — урок, даваемый мастером — экспертом в данном виде искусства, науки или ремесла, наиболее типично — в музыке, поэзии, живописи, актерском мастерстве, балете, танцах, шахматах. Отличие от обычного класса заключается в методике: мастер-класс дает возможность учиться, наблюдая, как мастер обучает других",
    category: REST,
    binary: ['solo', 'company', 'noEquipment', 'indoor'],
}

export const planetarium = {
    id: 'planetarium',
    name: 'Планетарий',
    image: {
        url: 'planets',
        size: 200,
        poster: {
            size: 100,
            position: 'bottom'
        }
    },
    activityLevel: 1,
    money: 500,
    description: "Здесь особенно ясно понимаешь, насколько велик космос и насколько мал человек в нём. И тем не менее именно здесь чувствуешь себя частичкой, единой с этой огромной Вселенной. Это лучшее место для всех романтиков. Ведь ещё никогда звёзды не были так близко…",
    category: REST,
    binary: ['solo', 'company', 'noEquipment', 'indoor'],
}

export const tea = {
    id: 'tea',
    name: 'Чайная церемония',
    image: {
        url: 'tea',
        size: 150,
        poster: {
            size: 100,
            position: 'center'
        }
    },
    activityLevel: 1,
    money: 500,
    description: "Китайская традиция чаепития неспроста называется церемонией.\n" +
        "Приготовление напитка различается в зависимости от ситуации и сорта чая, требует определенной посуды и навыков, а главное — не терпит спешки: чаепитие может длиться часами.",
    category: REST,
    binary: ['company', 'noEquipment', 'indoor'],
}

export const rockClimbing = {
    id: 'rockClimbing',
    name: 'Скалолазание',
    image: {
        url: 'rock',
        size: 200,
        poster: {
            size: 100,
            position: 'center'
        }
    },
    activityLevel: 3,
    money: 700,
    description: "Скалодром — искусственное сооружение, имитирующее рельеф скалы (тренажёр для скалолазания). В последнее время нашёл большое распространение в России. Скалодром создаётся закреплением специальных зацепов на вертикальных и наклонных стенах. Это интересное времяпровождение, как для взрослых, так и для детей ",
    category: SPORT,
    binary: ['solo', 'company', 'noEquipment', 'indoor'],
}

export const laserTag = {
    id: 'laserTag',
    name: 'Лазертаг',
    image: {
        url: 'lasers',
        size: 200,
        poster: {
            size: 100,
            position: 'center'
        }
    },
    activityLevel: 2,
    money: 1000,
    description: "Командная игра с применением пулемётов, автоматов, снайперских винтовок, в которых вместо пуль используется безопасный инфракрасный луч. Это безопасная игра без боли, грязи, но с реалистичными шумовыми эффектами по своим возможностям превосходящая всем известные пэйнтбол и страйкбол.",
    category: FUN,
    binary: ['company', 'noEquipment', 'indoor'],
}

export const karting = {
    id: 'karting',
    name: 'Картинг',
    image: {
        url: 'karting',
        size: 170,
        poster: {
            size: 100,
            position: 'center -5vw'
        }
    },
    activityLevel: 2,
    money: 2000,
    description: "Картинг приобретает все большую популярность и как развлечение, и как вид спорта. Во многих городах появляются картодромы, где можно получить дозу адреналина, улучшить свои навыки вождения, снять стресс и просто весело провести время.",
    category: FUN,
    binary: ['solo', 'company', 'noEquipment', 'indoor'],
}

export const sauna = {
    id: 'sauna',
    name: 'Сауна',
    image: {
        url: 'sauna',
        size: 150,
        poster: {
            size: 100,
            position: 'center -5vw'
        }
    },
    activityLevel: 1,
    money: 2000,
    description: "Сауна — аналог русской бани. Под сауной в России обычно понимают парилку с сухим паром, но на самом деле в сауне просто нет бака с водой, только горячие камни. На практике, сауна ничем не отличается от бани — финны так же поддают пар, так же пользуются берёзовыми вениками.\n" +
        "С давних времен баня играла важную роль в жизни человека. Там можно было отдохнуть, провести привычные ритуалы, просто неторопливо пообщаться, обсудить новости.\n",
    category: REST,
    binary: ['solo', 'company', 'indoor'],
}

export const stretching = {
    id: 'stretching',
    name: 'Стретчинг',
    image: {
        url: 'stretching',
        size: 150,
        poster: {
            size: 100,
            position: 'center bottom'
        }
    },
    activityLevel: 2,
    money: 1000,
    description: "Популярное направлением под названием «стрейтчинг» у всех на устах. Ежегодно число поклонников этих спортивных занятий на развитие гибкости стремительно растет. В фитнес-клубах создаются различные группы для разных возрастов и уровней подготовки. Существует даже детский стрейтчинг, позволяющий формировать правильную осанку и развивать гибкость с ранних лет.",
    category: SPORT,
    binary: ['solo', 'company', 'indoor'],
}

export const allActivities = [
    wakesurf, horses, stretching, rockClimbing, planetarium, tea, masterClasses, laserTag, karting, sauna, stretching, boardGames
]

export const activityByName = (name: string) => {
    return allActivities.filter(activity => activity.id === name)[0]
}

export const randomActivity = () => {
    return allActivities[Math.floor(Math.random() * allActivities.length)];
}

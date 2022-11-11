type CityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type TechnologiesType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    id: 1,
    name: 'Evgenii',
    age: 33,
    isActive: false,
    address: {
        streetTitle: 'Rylenkova 4b',
        city: {
            title: "Smolensk",
            countryTitle: "Russia",
        },
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "CSS",
        },
        {
            id: 3,
            title: "JS",
        },
        {
            id: 4,
            title: "React",
        },
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)

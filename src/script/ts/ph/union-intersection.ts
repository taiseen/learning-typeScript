type NewDeveloper = {
    name: string
}

// using of intersection type operator (&)...
type JuniorDeveloper = NewDeveloper & {
    expertise: string
    experience: number
}

// using of intersection type operator (&)...
type NestLevelDeveloper = JuniorDeveloper & {
    leaderShipExpertise: number
    level: 'junior' | 'mid' | 'senior' // union type operator (|)...
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

const newDev: JuniorDeveloper = {
    name: 'Sam',
    experience: 1,
    expertise: 'TypeScript'
}
console.log(newDev);


const nextDev: NestLevelDeveloper = {
    name: 'Taiseen',
    experience: 2,
    expertise: 'JS, TypeScript, React',
    leaderShipExpertise: 1,
    level: 'senior',
}
console.log(nextDev);
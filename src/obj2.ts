// Return Object

const position2: { lat: number; long: number } = { lat: 53, long: 42 };

const randomPosition = (): { lat: number, long: number } => {
    return {
        lat: Math.random(),
        long: Math.random()
    }
}

console.log(randomPosition())
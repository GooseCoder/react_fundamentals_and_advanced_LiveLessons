const END_POINT = 'http://localhost:3004/profiles'

export function getProfile() {
    return fetch(END_POINT)
        .then(res => res.json())
        .catch(err => console.error(err))
}
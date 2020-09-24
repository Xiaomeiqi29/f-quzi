export function fetchStudents() {
    const url = 'http://localhost:8080/students';
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => {
            console.log(err)
        })
}

export function addStudent(name) {
    const url = 'http://localhost:8080/students';
    return fetch(url,{
        method:'POST',
        body:name
    })
        .then((response) => response.json())
        .catch((error) => error)
}

export function getGroupTeam() {
    const url = 'http://localhost:8080/students/group';
    return fetch(url)
        .then(response => response.json())
        .catch(err => console.log(err))
}


// export function fetchTeam() {
//     const url = 'http://localhost:8080/students/team';
//     return fetch(url)
//         .then((res) => res.json() )
//         .catch((err) => err )
// }
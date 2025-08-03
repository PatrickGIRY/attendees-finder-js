export function findByInfixOfFirstName(query, attendees) {
    
    const predicate = matches(query);
    
    return filter(predicate, attendees);
}

function filter(predicate, attendees) {
    return attendees.filter(predicate, attendees)
}


function matches(query) {
    return attendee => attendee.firstName.includes(query);
}

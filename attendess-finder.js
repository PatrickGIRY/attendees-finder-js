export function findByInfixOfFirstName(query, attendees) {
    return filter(matches(query), attendees);
}

function filter(predicate, attendees) {
    return attendees.filter(predicate, attendees)
}

function matches(query) {
    return attendee => attendee.firstName.includes(query);
}

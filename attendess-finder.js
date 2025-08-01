export function findByInfixOfFirstName(query, attendees) {
    let result = [];

    const predicate = matches(query);
    const concat = (attendee, attendees) => attendees.concat(attendee);

    for (const attendee of attendees) {
        result = addIfMatches(predicate, attendee, concat)(attendee, result);
    }
    return result;
}

function addIfMatches(predicate, attendee, concat) {
    if (predicate(attendee)) {
        return concat;
    } else {
        return (_attendee, attendees)=> attendees;
    }
}

function matches(query) {
    return attendee => attendee.firstName.includes(query);
}

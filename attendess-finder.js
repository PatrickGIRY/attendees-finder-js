export function findByInfixOfFirstName(query, attendees) {
    
    const predicate = matches(query);
    
    return filter(predicate, attendees);
}

function filter(predicate, attendees) {
    const concat = attendee => attendees => attendees.concat(attendee);
    let result = [];
    for (const attendee of attendees) {
        result = addIfMatches(predicate, attendee, concat)(result);
    }
    return result;
}

function addIfMatches(predicate, attendee, concat) {
    if (predicate(attendee)) {
        return concat(attendee);
    } else {
        return attendees    => attendees;
    }
}

function matches(query) {
    return attendee => attendee.firstName.includes(query);
}

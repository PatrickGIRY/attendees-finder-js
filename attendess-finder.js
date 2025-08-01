export function findByInfixOfFirstName(query, attendees) {
    const result = [];

    const predicate = (attendees, query) => matches(attendees, query);

    for (const attendee of attendees) {
        addIfMatches(predicate, attendee, query, result);
    }
    return result;
}

function addIfMatches(predicate, attendee, query, result) {
    if (predicate(attendee, query)) {
        result.push(attendee);
    }
}

function matches(attendee, query) {
    return attendee.firstName.includes(query);
}

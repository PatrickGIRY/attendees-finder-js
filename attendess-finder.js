export function findByInfixOfFirstName(query, attendees) {
    const result = [];

    for (const attendee of attendees) {
        addIfMatches(attendee, query, result);
    }
    return result;
}

function addIfMatches(attendee, query, result) {
    if (matches(attendee, query)) {
        result.push(attendee);
    }
}

function matches(attendee, query) {
    return attendee.firstName.includes(query);
}

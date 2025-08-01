export function findByInfixOfFirstName(query, attendees) {
    const result = [];

    for (const attendee of attendees) {
        if (matches(attendee, query)) {
            result.push(attendee);
        }
    }
    return result;
}

function matches(attendee, query) {
    return attendee.firstName.includes(query);
}

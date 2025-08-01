export function findByInfixOfFirstName(query, attendees) {
    const result = [];

    const predicate = matches(query);
    const append = attendee => result.push(attendee);

    for (const attendee of attendees) {
        addIfMatches(predicate, attendee, append)(attendee);
    }
    return result;
}

function addIfMatches(predicate, attendee, append) {
    if (predicate(attendee)) {
        return append;
    } else {
        return () => {};
    }
}

function matches(query) {
    return attendee => attendee.firstName.includes(query);
}

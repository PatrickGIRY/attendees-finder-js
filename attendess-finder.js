export function findByInfixOfFirstName(query, attendees) {
    const result = [];

    const predicate = (attendees, query) => matches(attendees, query);
    const append = attendee => result.push(attendee);

    for (const attendee of attendees) {
        addIfMatches(predicate, attendee, query, append)(attendee);
    }
    return result;
}

function addIfMatches(predicate, attendee, query, append) {
    if (predicate(attendee, query)) {
        return append;
    } else {
        return () => {};
    }
}

function matches(attendee, query) {
    return attendee.firstName.includes(query);
}

export function findByInfixOfFirstName(query, attendees) {
    const result = [];

    let attendee;
    while (attendee = attendees.shift()) {
        if (attendee.firstName.includes(query)) {
            result.push(attendee);
        }
    }
    return result;
}
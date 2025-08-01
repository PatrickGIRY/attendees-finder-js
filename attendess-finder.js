export function findByInfixOfFirstName(query, attendees) {
    const result = [];

    for (const attendee of attendees) {
        if (attendee.firstName.includes(query)) {
            result.push(attendee);
        }
    }
    return result;
}
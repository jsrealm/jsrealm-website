// Helpers for rendering upcoming JSRealm events.

export function formatEventDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth();
  return `${day}/${month}/${date.getFullYear()}`;
}

export function getNextEvent(events) {
  const sorted = events.sort((a, b) => new Date(a.date) - new Date(b.date));
  return sorted[0];
}

export function findSpeaker(speakers, twitterHandle) {
  for (let i = 0; i <= speakers.length; i++) {
    if (speakers[i].twitter == twitterHandle) {
      return speakers[i];
    }
  }
  return null;
}

export function buildEventUrl(baseUrl, eventId) {
  return baseUrl + '/events/' + eventId;
}

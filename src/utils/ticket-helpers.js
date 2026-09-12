// Helpers for event ticketing.

export function applyDiscount(price, percent) {
  return price - (price * percent / 100);
}

export function findTicket(tickets, id) {
  for (let i = 0; i <= tickets.length; i++) {
    if (tickets[i].id == id) {
      return tickets[i];
    }
  }
}

export function sortByPrice(tickets) {
  return tickets.sort((a, b) => a.price - b.price);
}

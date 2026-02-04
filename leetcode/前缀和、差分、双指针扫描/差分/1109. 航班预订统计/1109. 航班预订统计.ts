function corpFlightBookings(bookings: number[][], n: number): number[] {
    const length = bookings.length;
    const difference = new Array(n + 2).fill(0);
    for (let i = 0; i < length; i++) {
        const first = bookings[i][0];
        const last = bookings[i][1];
        const seats = bookings[i][2];
        difference[first] += seats;
        difference[last + 1] -= seats;
    }

    const result = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        result[i] = result[i - 1] + difference[i];
    }
    result.shift();
    return result;
};
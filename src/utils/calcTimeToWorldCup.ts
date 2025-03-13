export const calcTimeToWorldCup = () => {
    const today = new Date();
    const worldCupDate = new Date(2026, 5, 11);
    return Math.ceil((worldCupDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}
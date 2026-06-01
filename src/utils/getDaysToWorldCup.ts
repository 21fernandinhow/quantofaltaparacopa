export const getDaysToWorldCup = () => {
    const today = new Date();
    const target = new Date(2026, 5, 11);

    target.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const daysToWorldCup = Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    return daysToWorldCup >= 0 ? daysToWorldCup : 0;
};
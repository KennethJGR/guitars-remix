export const formatDate = (date) => {
    const newDate = new Date(date);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
    };

    return newDate.toLocaleDateString("en-US", options);
};

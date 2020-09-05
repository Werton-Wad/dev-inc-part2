
function convertDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const hours = date.getHours();
    let minutes = date.getMinutes();
    const year = date.getFullYear();
    minutes = Number(minutes) < 10 ? `0${minutes}` : minutes;
    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;
    return `${hours}:${minutes} ${day}.${month}.${year}`;
}


function getDate(date) {
    const arr = date.split(' ');
    return new Date(arr[0] + ' ' + arr[1]);
}

export const utilis = {
    convertDate: convertDate,
    getDate: getDate,
}
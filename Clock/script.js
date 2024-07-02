function displayTime() {
    let a = new Date()
    let h = String(a.getHours()).padStart(2, '0');
    let m = String(a.getMinutes()).padStart(2, '0');
    let s = String(a.getSeconds()).padStart(2, '0');
    let date = a.getDate();
    let month = a.getMonth();
    let year = a.getFullYear();
    document.getElementById("time").innerText = h+ ':' +m+ ':' +s;
    document.getElementById("date").innerText = date + '-' + month + '-' + year;
}
setInterval(displayTime ,1000);
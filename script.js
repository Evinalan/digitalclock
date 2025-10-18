function updateClock() {
  const time = new Date();
  const hrs = String(time.getHours()).padStart(2, '0');
  const mins = String(time.getMinutes()).padStart(2, '0');
  const secs = String(time.getSeconds()).padStart(2, '0');
  document.getElementById('time').textContent = `${hrs}:${mins}:${secs}`;
}
setInterval(updateClock, 1000);
updateClock();

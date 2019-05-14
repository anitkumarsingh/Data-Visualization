function showStatus(online) {
    const statusEl = document.querySelector('.network-status');
    if (online) {
      statusEl.classList.remove('warning');
      statusEl.classList.add('success');
    } else {
      statusEl.classList.remove('success');
      statusEl.classList.add('warning');
      statusEl.innerHTML = `<h2 style="color:#2196f3;text-align:center">You're offline! 😢 </h2>`;
    }
  }
  
  window.addEventListener('load', () => {
    // 1st, we set the correct status when the page loads
    navigator.onLine ? showStatus(true) : showStatus(false);
  
    // now we listen for network status changes
    window.addEventListener('online', () => {
      showStatus(true);
    });
  
    window.addEventListener('offline', () => {
      showStatus(false);
    });
  });
  
  export default {
    showStatus
  };
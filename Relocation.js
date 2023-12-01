// Post data to Web View API
async function postData(url = '', auth, data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  };
  
  // method to sha256 encode string
  async function sha256hex(message) {
    const msgBuffer = new TextEncoder('utf-8').encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  }
function hash(string) {
  const crypto = require('crypto'); // Import the crypto module

  const hash = crypto.createHash('sha256'); // Create a SHA-256 hash object
  hash.update(string); // Update the hash with the input string
  const hashedString = hash.digest('hex'); // Convert the hash to a hexadecimal string
  return hashedString; // Return the hashed string
}

  
  // Post data when form is submitted
  submitForm = async function() {
    // Get data from query string
    const queryParams = new URLSearchParams(document.location.search);
    const userId = queryParams.get('userId');
    const conversationId = queryParams.get('convId');
    const botId = queryParams.get('botId');
    // Get data from form
    const employeeId = document.querySelector('input[name="employeeId"]').value;
    const currentLocation = document.querySelector('select[name="currentLocation"]').value;
    const relocationTo = document.querySelector('select[name="relocationTo"]').value;
    const reasonForRelocation = document.querySelector('textarea[name="reasonForRelocation"]').value;
    const approver = document.querySelector('input[name="approver"]').value;
    
     // const password = document.getElementById('password').value;//
      console.log(employeeId);
    console.log(currentLocation);
    console.log(relocationTo);
    console.log(reasonForRelocation);
    console.log(approver);
  
    // use correct domain for your region
    const domain = 'https://va.bc-intg.liveperson.net/thirdparty-services-0.1/webview';
    
    // encode auth string
    const authString = `${conversationId} || ${botId}`;
    const auth = await hash(authString);
  
    const res = await postData(domain, auth, {
      botId,
      conversationId,
      userId,
     message: "request successful", // optional
      contextVariables: [
        {"employeeId": "employeeId", "value": employeeId}
      ],
    });
       window.close();     
  }

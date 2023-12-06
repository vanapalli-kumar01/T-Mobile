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
  async function sha256(message) {
    const msgBuffer = new TextEncoder('utf-8').encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  }
async function selectSeat(cubicleID) {
    const seatId = cubicleID;
    }
console.log(seatId);
  // Post data when form is submitted
//   selectSeat = async function() {
//     // Get data from query string
//     const queryParams = new URLSearchParams(document.location.search);
//     const userId = queryParams.get('userId');
//     const conversationId = queryParams.get('convId');
//     const botId = queryParams.get('botId');
// //  const conversationId = "da251876-59eb-4bc5-8555-cf4626ef9dce";
// //      const botId = "59b84518-55ca-4d9f-bb9f-8ff5d8b2fe00";
      
//     // Get data from form
//    const city = document.querySelector('select[name="city"]').value;
//         const dc = document.querySelector('select[name="dc"]').value;
//     const duration = document.querySelector('input[name="duration"]').value;
//     const wing = document.querySelector('select[name="wing"]').value;
//     const dateOfBooking = document.querySelector('input[name="dateOfBooking"]').value;
//           const building = document.querySelector('select[name="building"]').value;
//           const floor = document.querySelector('select[name="floor"]').value;

//       console.log(city);
//     console.log(dc);
//     console.log(duration);
//     console.log(wing);
//     console.log(dateOfBooking);
//        console.log(building);
//        console.log(floor);


  
//     // use correct domain for your region
//     const domain = 'https://va.bc-intg.liveperson.net/thirdparty-services-0.1/webview';
    
//     // encode auth string
//     const authString = `${conversationId} || ${botId}`;
//     const auth = await sha256(authString);
  
//     const res = await postData(domain, auth, {
//       botId,
//       conversationId,
//       userId,
//       message: "OverDueConv", // optional
//       contextVariables: [
         
//         {"name": "floor", "value": floor},
//         {"name": "duration", "value": duration},
//         {"name": "wing", "value": wing},
//         {"name": "building", "value": building},
//         {"name": "dc", "value": dc},
//            {"name": "city", "value": city},
//            {"name": "dateOfBooking", "value": dateOfBooking}
         
//       ],
//     });
//        window.close();     
 // }

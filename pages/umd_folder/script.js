/* Data Request to API */ 
const getTracklist = async (req_term, req_token) => {
  url = "https://umd-spotify-backend.herokuapp.com/tracklist?";
  const response = await fetch(
    url +
      new URLSearchParams({
        access_token: req_token,
        term: req_term,
      })
  );
  const data = await response.json();
  return data;
};
token = 'BQABNOC3MtcUcRmSSy84VroewuLA64_-DBn1NsUO2zutA6AYrmyV-hEAZnYty_TybNeFHB1oNfnNf3E0pCweIVMOKHmsziKAk3asLyMSlbop2IDgzdUToSXVDE9ovDRvWfR9Ek0-CyD5Q95B5esTG2FeZ32oOrKMYO9iZCcUWVLE4jOnceK8-tsX-FM2Fdh-jPPhs1OOIt_3'
term = 'long_term'
getTracklist(term,token)

/*async function getTracklist(req_term,req_token){
  const response = await fetch('https://umd-spotify-backend.herokuapp.com/tracklist?', {
    method: 'get',
    access_token: req_token,
    term:req_term,
    headers: {

      'Content-Type':'application/json'
    },
  });
  const json = await response.json();
  console.log(json);
}

getTracklist();
*/

/* Create a barchart with popularity scores of each track from the list*/ 
function initChart(){
const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5', 'Track 6'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

initChart()

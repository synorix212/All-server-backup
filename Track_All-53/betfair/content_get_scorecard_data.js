var hubURL = 'http://localhost:3030';
// var hubURL = 'http://78.141.233.65:3030';

var socket = io(hubURL);

var apiInterval = 0;
var apiInterval2 = 0;


function startTracker() {
  console.log('startTracker');


  if (apiInterval) {
    clearInterval(apiInterval);
  }
  if (apiInterval2) {
    clearInterval(apiInterval2);
  }

  queryAllMarkets();

  apiInterval = setInterval(function () {
    queryAllMarkets();
  }, 10000);

  apiInterval2 = setInterval(function () {
    queryAllScores();
  }, 1000);


  var url = window.location.href;
  try {
    chrome.runtime.sendMessage({ text: "started", url: url }, function (response) { });
  } catch (error) { }
}

function stopTracker() {

  console.log('stopTracker');

  clearInterval(apiInterval);
  clearInterval(apiInterval2);


  var url = window.location.href;

  try {
    chrome.runtime.sendMessage({ text: 'stopped', url: url }, function (response) { })
  }
  catch (error) {

  }
}


function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

let eventIds;


function queryAllMarkets() {

  $.ajax({
    url: 'https://apiems.betfair.com/api/ems/coupon/v1?_ak=ajhWsonjIgux55OJ&eventTypeIds=%5B1,2,4%5D&exchangeIds=%5B1%5D&filters=%7B%22inplayHoursRange%22:0,%22maxCompetitions%22:0%7D&groupBy=%5B%22COMPETITION%22%5D',
    method: 'POST',
    // data: ,
    success: function (data) {
      console.log(data);
      eventIds = data.eventIds.toString();
      socket.emit("betfair_match", data);
      queryAllScores();
    },
    error: function (err) {
      console.log(err)
    }
  })
}

// function queryAllMarkets() {

//   $.ajax({
//     url: 'https://strandsweave.betfair.com/api/ems/coupon/v1?_ak=ajhWsonjIgux55OJ&eventTypeIds=%5B1,2,4%5D&exchangeIds=%5B1%5D&filters=%7B%22inplayHoursRange%22:0,%22maxCompetitions%22:0%7D&groupBy=%5B%22COMPETITION%22%5D',
//     method: 'POST',
//     // data: ,
//     success: function (data) {
//       console.log(data);
//       eventIds = data.eventIds.toString();
//       socket.emit("betfair_match", data);
//       queryAllScores();
//     },
//     error: function (err) {
//       console.log(err)
//     }
//   })
// }

// function queryAllMarkets() {

//   $.ajax({
//     url: 'https://apieds.betfair.com/api/eds/sports-highlights/v0?_ak=nzIFcwyWhrlwYMrh',
//     method: 'POST',
//     data: { "eventTypesFallbackNumber": 4, "eventsPerEventTypeFallbackNumber": 2 },
//     success: function (data) {
//       console.log(data);

//       let eventIdsArray=[];

//       data.forEach(element => {
//         if(element.eventTypeId==1 || element.eventTypeId==2 || element.eventTypeId==4){
//           element.competitions.forEach(element2 => {
//             element2.events.forEach(element3 => {
//               if(element3.inplay){
//                 eventIdsArray.push(element3.eventId);
//               }
//             });
//           });
//         }
//       });
//       eventIds = eventIdsArray.toString();

//       // eventIds = data.eventIds.toString();
//       // socket.emit("betfair_match", data);
//       queryAllScores();
//     },
//     error: function (err) {
//       console.log(err)
//     }
//   })
// }

function queryAllScores() {

  $.ajax({
    url: 'https://ips.betfair.com/inplayservice/v1/scores?_ak=nzIFcwyWhrlwYMrh&alt=json&eventIds=' + eventIds + '&locale=en_GB',
    // url: 'https://ips.betfair.com/inplayservice/v1/scores?regionCode=UK&_ak=dyMLAanpRyIsjkpJ&alt=json&locale=en_GB&eventIds=' + eventIds + '&ts=1621429513939&xsrftoken=818f7f91-b8a2-11eb-8f90-fa163ec6ade7',

    // url:'https://ips.betfair.com/inplayservice/v1/eventTimelines?_ak=nzIFcwyWhrlwYMrh&alt=json&eventIds=' + eventIds + '&locale=en_GB',
    method: 'get',
    // data: ,
    success: function (data) {
      console.log(data);
      socket.emit("betfair_score", data);
    },
    error: function (err) {
      console.log(err)
    }
  })
}








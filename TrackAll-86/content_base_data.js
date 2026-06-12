var disableHub = false;

//#region Standard Start/Stop functions
var Observers = [];

var Trackers = [];

function addObervser(targetNode, config, callback) {
  var observer = new MutationObserver(callback);

  observer.observe(targetNode, config);

  Observers.push(observer);
}

function startTrackers(hubURL, trackers, startCallback) {

  startHub(hubURL, startCallback);

  for (var i = 0; i < trackers.length; i++) {
    Trackers.push(trackers[i]);
    trackers[i](false);
  }

  return true;
}

function stopTrackers() {

  if (Observers.length == 0 && hub == null) {
    return;
  }

  for (var i = 0; i < Observers.length; i++) {
    if (Observers[i] != null) {
      Observers[i].disconnect();
    }
  }
  Observers.length = 0;

  for (var i = 0; i < Trackers.length; i++) {
    Trackers[i](true);
  }
  Trackers.length = 0;

  stopHub();

  // console.log('Tracker stopped');
}

//#endregion


//#region Standard start/stop SignalR functions
var hub = null;

function startHub(hubURL, startCallback) {

  if (disableHub || hubURL == null) {
    return;
  }
  hub = hubURL;

  var url = window.location.href;
  try {
    chrome.runtime.sendMessage({
      text: "started",
      url: url
    }, function (response) { });
  } catch (error) { }

  if (startCallback != null) {
    startCallback();
  }
}


function stopHub() {

  // Send stopped message to change the icon and track URL

  var url = window.location.href;

  try {
    chrome.runtime.sendMessage({ text: 'stopped', url: url }, function (response) { })
  }
  catch (error) {

  }

  hub = null;
}

//#endregion


//#region Standard data object functions

function getT20Market() {
  var data = {
    "data": {
      "t1": [
        {
          "C1": "1",
          "C2": "1",
          "C3": "1",
          "C4": "1",
          "C5": "1",
          "C6": "1",
          "autotime": "0",
          "gtype": "teen20",
          "max": 0,
          "mid": "0",
          "min": 0,
          "remark": ""
        }
      ],
      "t2": [
        {
          "gstatus": "0",
          "mid": "0",
          "nation": "",
          "rate": "",
          "sid": ""
        },
        {
          "gstatus": "0",
          "mid": "0",
          "nation": "",
          "rate": "",
          "sid": ""
        },
        {
          "gstatus": "0",
          "mid": "0",
          "nation": "",
          "rate": "",
          "sid": ""
        },
        {
          "gstatus": "0",
          "mid": "0",
          "nation": "",
          "rate": "",
          "sid": ""
        }
      ],
    },
    "message": "",
    "gtype": "teen20",
    "status": 200
  }


  return data;
}


function getOnedayMarket() {
  var data = {
    "data": {
      "bf": [
        {
          "C1": "1",
          "C2": "1",
          "C3": "1",
          "Srno": "1",
          "UpdateTime": "0",
          "b1": 0,
          "bs1": 0,
          "gameType": "Teen",
          "gstatus": "",
          "l1": 0,
          "lasttime": "0",
          "ls1": 0,
          "marketId": "",
          "max": "",
          "min": "",
          "nation": "",
          "remark": "Poker oneday start..",
          "sectionId": ""
        },
        {
          "C1": "1",
          "C2": "1",
          "C3": "1",
          "Srno": "1",
          "UpdateTime": "0",
          "b1": 0,
          "bs1": 0,
          "gameType": "Teen",
          "gstatus": "",
          "l1": 0,
          "lasttime": "0",
          "ls1": 0,
          "marketId": "",
          "max": "",
          "min": "",
          "nation": "",
          "remark": "Poker oneday start..",
          "sectionId": ""
        }
      ]
    },
    "message": "",
    "gtype": "Teen",
    "status": 200
  }

  return data;
}

function getTestMarket() {
  var data = {
    "data": {
      "t1": [
        {
          "C1": "1",
          "C2": "1",
          "C3": "1",
          "C4": "1",
          "C5": "1",
          "C6": "1",
          "C7": "1",
          "C8": "1",
          "C9": "1",
          "autotime": "0",
          "gtype": "teen9",
          "max": 0,
          "mid": "1",
          "min": 0,
          "remark": ""
        }
      ],
      "t2": [
        {
          "drate": "0",
          "dsectionid": "",
          "dstatus": "",
          "lrate": "0",
          "lsection": "",
          "lstatus": "",
          "mid": "0",
          "nation": "",
          "trate": "0",
          "tsection": "",
          "tstatus": ""
        },
        {
          "drate": "0",
          "dsectionid": "",
          "dstatus": "",
          "lrate": "0",
          "lsection": "",
          "lstatus": "",
          "mid": "0",
          "nation": "",
          "trate": "0",
          "tsection": "",
          "tstatus": ""
        },
        {
          "drate": "0",
          "dsectionid": "",
          "dstatus": "",
          "lrate": "0",
          "lsection": "",
          "lstatus": "",
          "mid": "0",
          "nation": "",
          "trate": "0",
          "tsection": "",
          "tstatus": ""
        },
        {
          "drate": "0",
          "dsectionid": "",
          "dstatus": "",
          "lrate": "0",
          "lsection": "",
          "lstatus": "",
          "mid": "0",
          "nation": "",
          "trate": "0",
          "tsection": "",
          "tstatus": ""
        },
        {
          "drate": "0",
          "dsectionid": "",
          "dstatus": "",
          "lrate": "0",
          "lsection": "",
          "lstatus": "",
          "mid": "0",
          "nation": "",
          "trate": "0",
          "tsection": "",
          "tstatus": ""
        },
        {
          "drate": "0",
          "dsectionid": "",
          "dstatus": "",
          "lrate": "0",
          "lsection": "",
          "lstatus": "",
          "mid": "0",
          "nation": "",
          "trate": "0",
          "tsection": "",
          "tstatus": ""
        }
      ]
    },
    "message": "",
    "gtype": "teen9",
    "status": 200
  }

  return data;
}

function getOpenMarket() {
  var data = {
    "data": {
      "t1": [
        {
          "autotime": "0",
          "cards": "1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1",
          "gtype": "teen8",
          "mid": "",
          "remark": ""
        }
      ],
      "t2": [
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "1"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "2"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "3"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "4"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "5"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "6"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "7"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "8"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "11"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "12"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "13"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "14"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "15"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "16"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "17"
        },
        {
          "gstatus": "0",
          "max": 0,
          "mid": "",
          "min": 0,
          "nation": "",
          "rate": "",
          "sid": "18"
        }
      ]
    },
    "message": "",
    "gtype": "teen8",
    "status": 200
  }

  return data;
}


function getAndarBaharMarket() {
  var data = {
    data: {
      t1: [
        {
          autotime: "0",
          gtype: "ab20",
          max: 0,
          mid: "0",
          min: 0,
          remark: ""
        }
      ],
      t2: [
        {
          "mid": "",
          "nation": "Ander A",
          "sid": "1",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Ander 2",
          "sid": "2",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Ander 3",
          "sid": "3",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Ander 4",
          "sid": "4",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Ander 5",
          "sid": "5",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Ander 6",
          "sid": "6",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Ander 7",
          "sid": "7",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Ander 8",
          "sid": "8",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Ander 9",
          "sid": "9",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Ander 10",
          "sid": "10",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Ander J",
          "sid": "11",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Ander Q",
          "sid": "12",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Ander K",
          "sid": "13",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Bahar A",
          "sid": "21",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Bahar 2",
          "sid": "22",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Bahar 3",
          "sid": "23",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Bahar 4",
          "sid": "24",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Bahar 5",
          "sid": "25",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Bahar 6",
          "sid": "26",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Bahar 7",
          "sid": "27",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Bahar 8",
          "sid": "28",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Bahar 9",
          "sid": "29",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Bahar 10",
          "sid": "30",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Bahar J",
          "sid": "31",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Bahar Q",
          "sid": "32",
          "rate": "",
          "gstatus": "0"
        },
        {
          "mid": "",
          "nation": "Bahar K",
          "sid": "33",
          "rate": "",
          "gstatus": "0"
        }
      ],
      t3: [
        {
          aall: "",
          ar: "",
          ball: "",
          br: ""
        }
      ]
    },
    message: "",
    gtype: "ab20",
    status: 200
  }

  return data;
}

function getPoker20Market() {
  var data = {
    data: {
      t1: [
        {
          C1: "1",
          C2: "1",
          C3: "1",
          C4: "1",
          C5: "1",
          C6: "1",
          C7: "1",
          C8: "1",
          C9: "1",
          autotime: "0",
          desc: "",
          gtype: "poker20",
          max: 0,
          mid: "0",
          min: 0,
          remark: ""
        }
      ],
      t2: [
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        },
        {
          mid: "0", nation: "", sid: "", rate: "", gstatus: "0"
        }
      ],
    },
    message: "",
    gtype: "poker20",
    status: 200
  }

  return data;
}

function getPokerOneDayMarket() {
  var data = {
    data: {
      t1: [
        {
          C1: "1",
          C2: "1",
          C3: "1",
          C4: "1",
          C5: "1",
          C6: "1",
          C7: "1",
          C8: "1",
          C9: "1",
          autotime: "0",
          desc: "",
          max: 0,
          mid: "0",
          min: 0,
          remark: ""
        }
      ],
      t2: [
        {
          b1: "",
          bs1: "",
          gstatus: "",
          gtype: "",
          l1: "",
          ls1: "",
          mid: "",
          nation: "",
          sid: "",
          srno: "1",
          utime: "0"
        },
        {
          b1: "",
          bs1: "0",
          gstatus: "",
          gtype: "",
          l1: "",
          ls1: "",
          mid: "",
          nation: "",
          sid: "",
          srno: "2",
          utime: "0"
        }
      ],
      t3: [
        {
          b1: "",
          bs1: "",
          gstatus: "",
          gtype: "",
          mid: "",
          nation: "",
          sid: "",
          srno: "3",
          utime: "0"
        },
        {
          b1: "",
          bs1: "",
          gstatus: "",
          gtype: "",
          mid: "",
          nation: "",
          sid: "",
          srno: "4",
          utime: "0"
        },
        {
          b1: "",
          bs1: "",
          gstatus: "",
          gtype: "",
          mid: "",
          nation: "",
          sid: "",
          srno: "5",
          utime: "0"
        },
        {
          b1: "",
          bs1: "",
          gstatus: "",
          gtype: "",
          mid: "",
          nation: "",
          sid: "",
          srno: "6",
          utime: "0"
        }
      ]
    },
    message: "",
    status: 200
  }

  return data;
}

function getPokerTestMarket() {
  var data = {
    data: {
      t1: [
        {
          C1: "1",
          C2: "1",
          C3: "1",
          C4: "1",
          C5: "1",
          C6: "1",
          C7: "1",
          C8: "1",
          C9: "1",
          C10: "1",
          C11: "1",
          C12: "1",
          C13: "1",
          C14: "1",
          C15: "1",
          C16: "1",
          C17: "1",
          autotime: "0",
          desc: "",
          gtype: "poker9",
          mid: "0",
          remark: ""
        }
      ],
      t2: [
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nation: "",
          rate: "",
          sid: ""
        }
      ]
    },
    message: "",
    status: 200
  }

  return data;
}


function getCasino32CardsAMarket() {
  var data = {
    data: {
      t1: [
        {
          C1: "0",
          C2: "0",
          C3: "0",
          C4: "0",
          autotime: "0",
          desc: "1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1",
          max: 0,
          mid: "",
          min: 0,
          remark: ""
        }
      ],
      t2: [
        {
          b1: "",
          bs1: "",
          gstatus: "",
          gtype: "card32",
          l1: "",
          ls1: "",
          mid: "",
          nation: "",
          sid: ""
        },
        {
          b1: "",
          bs1: "",
          gstatus: "",
          gtype: "card32",
          l1: "",
          ls1: "",
          mid: "",
          nation: "",
          sid: ""
        },
        {
          b1: "",
          bs1: "",
          gstatus: "",
          gtype: "card32",
          l1: "",
          ls1: "",
          mid: "",
          nation: "",
          sid: ""
        },
        {
          b1: "",
          bs1: "",
          gstatus: "",
          gtype: "card32",
          l1: "",
          ls1: "",
          mid: "",
          nation: "",
          sid: ""
        }
      ]
    },
    message: "",
    gtype: "card32",
    status: 200
  }

  return data;
}


function get3CardsJudgementMarket() {
  var data = {
    data: {
      t1: [
        {
          C1: "1",
          C2: "1",
          C3: "1",
          autotime: "0",
          gtype: "3cardj",
          max: 0,
          mid: "",
          min: 0,
          remark: ""
        }
      ],
      t2: [
        {
          gstatus: "",
          mid: "",
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "",
          mid: "",
          nat: "",
          rate: "",
          sid: ""
        }
      ]
    },
    message: "",
    gtype: "3cardj",
    status: 200
  }

  return data;
}


function getCasinoWorliMatkaMarket() {
  var data = {
    data: {
      t1: [
        {
          C1: "1",
          C2: "1",
          C3: "1",
          autotime: "0",
          gtype: "worli",
          max: 0,
          mid: "",
          min: 0
        }
      ],
      t2: [
        {
          mid: "", sid: "", gstatus: ""
        },
        {
          mid: "", sid: "", gstatus: ""
        },
        {
          mid: "", sid: "", gstatus: ""
        },
        {
          mid: "", sid: "", gstatus: ""
        },
        {
          mid: "", sid: "", gstatus: ""
        },
        {
          mid: "", sid: "", gstatus: ""
        },
        {
          mid: "", sid: "", gstatus: ""
        },
        {
          mid: "", sid: "", gstatus: ""
        },
        {
          mid: "", sid: "", gstatus: ""
        },
        {
          mid: "", sid: "", gstatus: ""
        },
        {
          mid: "", sid: "", gstatus: ""
        },
        {
          mid: "", sid: "", gstatus: ""
        },
        {
          mid: "", sid: "", gstatus: ""
        },
      ],
    },
    message: "",
    gtype: "worli",
    status: 200
  }

  return data;
}

function getLacky7Market() {
  var data = {
    data: {
      t1: [
        {
          C1: "1",
          autotime: "0",
          gtype: "lucky7",
          max: 0,
          mid: "0",
          min: 0
        }
      ],
      t2: [
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        }
      ]
    },
    message: "",
    gtype: "lucky7",
    status: 200
  }

  return data;
}

function getLacky7BMarket() {
  var data = {
    data: {
      t1: [
        {
          C1: "1",
          autotime: "0",
          gtype: "lucky7eu",
          max: 0,
          mid: "0",
          min: 0
        }
      ],
      t2: [
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        },
        {
          gstatus: "0",
          max: 0,
          mid: "0",
          min: 0,
          nat: "",
          rate: "",
          sid: ""
        }
      ]
    },
    message: "",
    gtype: "lucky7eu",
    status: 200
  }

  return data;
}

function getDragonT20Market() {
  var data = {
      "success":true,
      "data":{
         "t1":[
            {
               "mid":"",
               "autotime":"0",
               "gtype":"dt20",
               "min":5,
               "max":20000,
               "C1":"1",
               "C2":"1"
            }
         ],
         "t2":[
            {
               "mid":"",
               "nat":"Dragon",
               "sid":"1",
               "rate":"2.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger",
               "sid":"2",
               "rate":"2.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tie",
               "sid":"3",
               "rate":"50.00",
               "gstatus":"0",
               "min":0,
               "max":000
            },
            {
               "mid":"",
               "nat":"Pair",
               "sid":"4",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":30
            },
            {
               "mid":"",
               "nat":"Dragon Even",
               "sid":"5",
               "rate":"2.12",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Odd",
               "sid":"6",
               "rate":"1.83",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Red",
               "sid":"7",
               "rate":"1.97",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Black",
               "sid":"8",
               "rate":"1.97",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Card 1",
               "sid":"9",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Card 2",
               "sid":"10",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Card 3",
               "sid":"11",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Card 4",
               "sid":"12",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Card 5",
               "sid":"13",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Card 6",
               "sid":"14",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Card 7",
               "sid":"15",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Card 8",
               "sid":"16",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Card 9",
               "sid":"17",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Card 10",
               "sid":"18",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Card J",
               "sid":"19",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Card Q",
               "sid":"20",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Dragon Card K",
               "sid":"21",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Even",
               "sid":"22",
               "rate":"2.12",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Odd",
               "sid":"23",
               "rate":"1.83",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Red",
               "sid":"24",
               "rate":"1.97",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Black",
               "sid":"25",
               "rate":"1.97",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Card 1",
               "sid":"26",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Card 2",
               "sid":"27",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Card 3",
               "sid":"28",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Card 4",
               "sid":"29",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Card 5",
               "sid":"30",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Card 6",
               "sid":"31",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Card 7",
               "sid":"32",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Card 8",
               "sid":"33",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Card 9",
               "sid":"34",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Card 10",
               "sid":"35",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Card J",
               "sid":"36",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Card Q",
               "sid":"37",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            },
            {
               "mid":"",
               "nat":"Tiger Card K",
               "sid":"38",
               "rate":"12.00",
               "gstatus":"0",
               "min":0,
               "max":0
            }
         ]
      },
      "message":"",
      "gtype":"dt20",
      "status":200
  }

  return data;
}

function getBWAAAMarket() {
  var data = {
    status: 200,
    gtype: "aaa",
    message: "",
    data: {
      t1: [
        {
          mid: "",
          autotime: "",
          C1: "1",
          remark: ""
        }
      ],
      t2: [
        {
          mid: "",
          sid: "1",
          nat: "Amar",
          b1: "",
          l1: "",
          gtype: "aaa",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "2",
          nat: "Akbar",
          b1: "",
          l1: "",
          gtype: "aaa",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "3",
          nat: "Anthony",
          b1: "",
          l1: "",
          gtype: "aaa",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "4",
          nat: "Even",
          b1: "",
          l1: "",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "5",
          nat: "Odd",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "6",
          nat: "Red",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "7",
          nat: "Black",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "8",
          nat: "Card A",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "9",
          nat: "Card 2",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "10",
          nat: "Card 3",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "11",
          nat: "Card 4",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "12",
          nat: "Card 5",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "13",
          nat: "Card 6",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "14",
          nat: "Card 7",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "15",
          nat: "Card 8",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "16",
          nat: "Card 9",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "17",
          nat: "Card 10",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "18",
          nat: "Card J",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "19",
          nat: "Card Q",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "20",
          nat: "Card K",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "21",
          nat: "Under 7",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        },
        {
          mid: "",
          sid: "22",
          nat: "Over 7",
          b1: "",
          l1: "0.00",
          gtype: "aaafancy",
          gstatus: "",
          min: 0,
          max: 0
        }
        
      ]
    }

  }

  return data;
}

function getBWDDBMarket() {
  var data = {
    "success":true,
    "data":{
       "t1":[
          {
             "mid":"",
             "autotime":"0",
             "C1":"JCC",
             "remark":""
          }
       ],
       "t2":[
          {
             "mid":"",
             "sid":"1",
             "nat":"DON",
             "b1":"",
             "l1":"",
             "gtype":"btable",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"2",
             "nat":"Amar Akbar Anthony",
             "b1":"",
             "l1":"",
             "gtype":"btable",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"3",
             "nat":"Sahib Bibi Aur Ghulam",
             "b1":"",
             "l1":"",
             "gtype":"btable",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"4",
             "nat":"Dharam Veer",
             "b1":"",
             "l1":"",
             "gtype":"btable",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"5",
             "nat":"Kis KisKo Pyaar Karoon",
             "b1":"",
             "l1":"",
             "gtype":"btable",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"6",
             "nat":"Ghulam",
             "b1":"",
             "l1":"",
             "gtype":"btable",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"7",
             "nat":"Odd",
             "b1":"",
             "l1":"",
             "gtype":"btablefancy",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"8",
             "nat":"Red",
             "b1":"",
             "l1":"",
             "gtype":"btablefancy",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"9",
             "nat":"Black",
             "b1":"",
             "l1":"",
             "gtype":"btablefancy",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"10",
             "nat":"Card J",
             "b1":"",
             "l1":"",
             "gtype":"btablefancy",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"11",
             "nat":"Card Q",
             "b1":"",
             "l1":"",
             "gtype":"btablefancy",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"12",
             "nat":"card K",
             "b1":"",
             "l1":"",
             "gtype":"btablefancy",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"13",
             "nat":"card A",
             "b1":"",
             "l1":"",
             "gtype":"btablefancy",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"14",
             "nat":"Dulha Dulhan K-Q",
             "b1":"",
             "l1":"",
             "gtype":"btablefancy",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "sid":"15",
             "nat":"Barati J-A",
             "b1":"",
             "l1":"",
             "gtype":"btablefancy",
             "gstatus":"",
             "min":0,
             "max":0
          }
       ]
    },
    "message":"",
    "gtype":"btable",
    "status":200
  }

  return data;
}

function getCasinoMeterMarket() {
  var data = {
    "success":true,
    "data":{
       "t1":[
          {
             "mid":"",
             "autotime":"0",
             "C1":"0",
             "C2":"0",
             "C3":"0",
             "C4":"0",
             "cards":"1,1,1,1,1,1,1,1,1,1,1"
          }
       ],
       "t2":[
          {
             "mid":"",
             "nat":"Low",
             "sid":"1",
             "b1":"2.15",
             "gstatus":"",
             "min":0,
             "max":0
          },
          {
             "mid":"",
             "nat":"High",
             "sid":"2",
             "b1":"2.15",
             "gstatus":"",
             "min":0,
             "max":0
          }
       ]
    },
    "message":"",
    "gtype":"cmeter",
    "status":200
  }

  return data;
}

function get2020CricketMarket() {
  var data = {
    "success":true,
    "data": {
      "t1": [
        {
          "mid": "35.201708182510",
          "autotime": "15",
          "C1": "1",
          "C2": "244",
          "C3": "3",
          "C4": "20",
          "C5": "232",
          "C6": "2",
          "C7": "19.4",
          "remark": "Team B Need 12 Runs to WIN Match. If The Score is Tie Team B will WIN."
        }
      ],
      "t2": [
        {
          "mid": "35.201708182510",
          "sid": "1",
          "nat": "Run 2",
          "b1": "9.50",
          "l1": "10.50",
          "gtype": "cmatch20",
          "gstatus": "ACTIVE",
          "min": 100,
          "max": 300000
        },
        {
          "mid": "35.201708182510",
          "sid": "2",
          "nat": "Run 3",
          "b1": "4.80",
          "l1": "5.20",
          "gtype": "cmatch20",
          "gstatus": "ACTIVE",
          "min": 100,
          "max": 300000
        },
        {
          "mid": "35.201708182510",
          "sid": "3",
          "nat": "Run 4",
          "b1": "3.23",
          "l1": "3.43",
          "gtype": "cmatch20",
          "gstatus": "ACTIVE",
          "min": 100,
          "max": 300000
        },
        {
          "mid": "35.201708182510",
          "sid": "4",
          "nat": "Run 5",
          "b1": "2.45",
          "l1": "2.55",
          "gtype": "cmatch20",
          "gstatus": "ACTIVE",
          "min": 100,
          "max": 300000
        },
        {
          "mid": "35.201708182510",
          "sid": "5",
          "nat": "Run 6",
          "b1": "1.98",
          "l1": "2.02",
          "gtype": "cmatch20",
          "gstatus": "ACTIVE",
          "min": 100,
          "max": 300000
        },
        {
          "mid": "35.201708182510",
          "sid": "6",
          "nat": "Run 7",
          "b1": "1.65",
          "l1": "1.69",
          "gtype": "cmatch20",
          "gstatus": "ACTIVE",
          "min": 100,
          "max": 300000
        },
        {
          "mid": "35.201708182510",
          "sid": "7",
          "nat": "Run 8",
          "b1": "1.42",
          "l1": "1.45",
          "gtype": "cmatch20",
          "gstatus": "ACTIVE",
          "min": 100,
          "max": 300000
        },
        {
          "mid": "35.201708182510",
          "sid": "8",
          "nat": "Run 9",
          "b1": "1.24",
          "l1": "1.27",
          "gtype": "cmatch20",
          "gstatus": "ACTIVE",
          "min": 100,
          "max": 300000
        },
        {
          "mid": "35.201708182510",
          "sid": "9",
          "nat": "Run 10",
          "b1": "1.10",
          "l1": "1.12",
          "gtype": "cmatch20",
          "gstatus": "ACTIVE",
          "min": 100,
          "max": 300000
        }
      ]
    },
    "message":"",
    "gtype": "cmatch20",
    "status":200
  }

  return data;
}



function getColonValue(text) {
  var index = text.indexOf(":");

  if (index < 0) {
    return null;
  }
  return text.substr(index + 1).trim();
}

//#endregin



var hostname = window.location.hostname;
var protocol = window.location.protocol;

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getcsrf_token() {
  var x = document.getElementsByTagName("META");
  let csrf_token_txt = "";
  for (var i = 0; i < x.length; i++) {
    // txt = txt + "Content of "+(i+1)+" meta name: "+x[i].name+" meta tag: "+x[i].content+"<br>";
    if (x[i].name == "csrf-token") {
      csrf_token_txt = x[i].content;
    }
  }
  return csrf_token_txt;
}


///CASINO OPEN
var _$_3743 = ["", "\x67\x72\x65\x65\x6E", "\x66\x61\x6C\x73\x65", "\x64\x69\x73\x61\x62\x6C\x65\x64\x3D\x27\x64\x69\x73\x61\x62\x6C\x65\x64\x27", "\x76\x61\x6C", "\x23\x75\x5F\x74\x79\x70\x65", "\x63\x6F\x6E\x74\x65\x6E\x74", "\x61\x74\x74\x72", "\x6D\x65\x74\x61\x5B\x6E\x61\x6D\x65\x3D\x63\x73\x72\x66\x2D\x74\x6F\x6B\x65\x6E\x5D", "\x6D\x65\x74\x61\x5B\x6E\x61\x6D\x65\x3D\x70\x61\x74\x68\x5D", "\x6D\x65\x74\x61\x5B\x6E\x61\x6D\x65\x3D\x74\x6F\x6B\x65\x6E\x5D", "\x75\x6C\x2E\x6D\x74\x72\x65\x65", "\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x6D\x74\x72\x65\x65\x2D\x6D\x61\x69\x6E\x3E\x3C\x2F\x64\x69\x76\x3E", "\x77\x72\x61\x70", "\x62\x75\x62\x62\x61", "\x73\x6B\x69\x6E\x6E\x79", "\x74\x72\x61\x6E\x73\x69\x74", "\x6A\x65\x74", "\x6E\x69\x78", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x74\x72\x65\x65\x2D\x73\x6B\x69\x6E\x2D\x73\x65\x6C\x65\x63\x74\x6F\x72\x22\x3E\x3C\x75\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x75\x74\x74\x6F\x6E\x2D\x67\x72\x6F\x75\x70\x20\x72\x61\x64\x69\x75\x73\x22\x3E\x3C\x2F\x75\x6C\x3E\x3C\x2F\x64\x69\x76\x3E", "\x70\x72\x65\x70\x65\x6E\x64", "\x62\x6F\x64\x79", "\x2E\x6D\x74\x72\x65\x65\x2D\x73\x6B\x69\x6E\x2D\x73\x65\x6C\x65\x63\x74\x6F\x72", "\x3C\x6C\x69\x3E\x3C\x62\x75\x74\x74\x6F\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x73\x6D\x61\x6C\x6C\x20\x73\x6B\x69\x6E\x22\x3E", "\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E\x3C\x2F\x6C\x69\x3E", "\x61\x70\x70\x65\x6E\x64", "\x75\x6C", "\x66\x69\x6E\x64", "\x65\x61\x63\x68", "\x3C\x6C\x69\x3E\x3C\x62\x75\x74\x74\x6F\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x73\x6D\x61\x6C\x6C\x20\x63\x73\x6C\x20\x61\x63\x74\x69\x76\x65\x22\x3E\x43\x6C\x6F\x73\x65\x20\x53\x61\x6D\x65\x20\x4C\x65\x76\x65\x6C\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E\x3C\x2F\x6C\x69\x3E", "\x63\x6C\x69\x63\x6B\x2E\x6D\x74\x72\x65\x65\x2D\x73\x6B\x69\x6E\x2D\x73\x65\x6C\x65\x63\x74\x6F\x72", "\x61\x63\x74\x69\x76\x65", "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73", "\x62\x75\x74\x74\x6F\x6E\x2E\x73\x6B\x69\x6E\x2E\x61\x63\x74\x69\x76\x65", "\x20", "\x6A\x6F\x69\x6E", "\x6F\x6E", "\x62\x75\x74\x74\x6F\x6E\x2E\x73\x6B\x69\x6E", "\x62\x75\x74\x74\x6F\x6E\x3A\x66\x69\x72\x73\x74", "\x63\x6C\x69\x63\x6B\x2E\x6D\x74\x72\x65\x65\x2D\x63\x6C\x6F\x73\x65\x2D\x73\x61\x6D\x65\x2D\x6C\x65\x76\x65\x6C", "\x74\x6F\x67\x67\x6C\x65\x43\x6C\x61\x73\x73", "\x2E\x63\x73\x6C", "\x73\x6C\x69\x64\x65\x54\x6F\x67\x67\x6C\x65", "\x2E\x73\x65\x74\x2D\x63\x6F\x6E\x74\x65\x6E\x74", "\x63\x6C\x69\x63\x6B", "\x2E\x70\x61\x74\x68\x2D\x62\x61\x63\x6B", "\x72\x65\x61\x64\x79", "\x2E\x61\x63\x63\x6F\x75\x6E\x74\x20\x75\x6C", "\x2E\x61\x63\x63\x6F\x75\x6E\x74\x20\x73\x70\x61\x6E", "\x73\x68\x6F\x77", "\x23\x65\x78\x61\x6D\x70\x6C\x65\x53\x65\x6C\x65\x63\x74\x31\x20\x6F\x70\x74\x69\x6F\x6E", "\x2E\x66\x61\x2D\x63\x68\x65\x76\x72\x6F\x6E\x2D\x64\x6F\x77\x6E", "\x6C\x61\x79", "\x2E\x70\x6C\x61\x63\x65\x2D\x62\x65\x74\x20\x2E\x63\x61\x72\x64\x2D\x62\x6F\x64\x79", "\x62\x61\x63\x6B", "\x2E\x63\x6F\x75\x70\x6F\x6E\x2D\x74\x61\x62\x6C\x65\x20\x2E\x6C\x61\x79", "\x2E\x63\x6F\x75\x70\x6F\x6E\x2D\x74\x61\x62\x6C\x65\x20\x2E\x62\x61\x63\x6B", "\x68\x69\x64\x65", "\x2E\x70\x6C\x61\x63\x65\x2D\x62\x65\x74\x20\x2E\x66\x61\x2D\x74\x69\x6D\x65\x73", "\x6C\x6F\x61\x64", "\x73\x75\x62\x73\x74\x72\x69\x6E\x67", "\x73\x65\x61\x72\x63\x68", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x26", "\x73\x70\x6C\x69\x74", "\x6C\x65\x6E\x67\x74\x68", "\x3D", "\x23\x67\x61\x6D\x65\x74\x79\x70\x65", "\x4D\x61\x74\x63\x68", "\x4B\x68\x61\x64\x6F", "\x68\x72\x65\x66", "\x5C\x24\x26", "\x72\x65\x70\x6C\x61\x63\x65", "\x5B\x3F\x26\x5D", "\x28\x3D\x28\x5B\x5E\x26\x23\x5D\x2A\x29\x7C\x26\x7C\x23\x7C\x24\x29", "\x65\x78\x65\x63", "\x73\x65\x73\x69\x64", "\x30", "\x23\x75\x5F\x62\x61\x6C", "\x23\x65\x78\x70\x6F\x73\x65", "\x75\x73\x65\x72\x41\x63\x74\x69\x76\x65", "\x2F\x6C\x6F\x67\x6F\x75\x74\x2F", "\x62\x65\x74\x41\x63\x74\x69\x76\x65", "\x64\x69\x73\x61\x62\x6C\x65\x64", "\x74\x64\x2E\x62\x61\x63\x6B", "\x74\x64\x2E\x6C\x61\x79", "\x66\x61\x6E\x63\x79\x41\x63\x74\x69\x76\x65", "\x2E\x64\x69\x76\x5F\x73\x65\x73", "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65", "\x74\x6F\x53\x74\x72\x69\x6E\x67", "\x67\x74", "\x5F", "\x73\x65\x63\x74\x69\x6F\x6E\x49\x64", "\x61\x6D\x6F\x75\x6E\x74", "\x62\x65\x74\x54\x79\x70\x65", "\x42\x41\x43\x4B", "\x23\x37\x32\x42\x42\x45\x46", "\x23\x46\x41\x41\x39\x42\x41", "\x67\x61\x6D\x65\x54\x79\x70\x65", "\x46\x61\x6E\x63\x79", "\x55\x70\x64\x6F\x77\x6E", "\x75\x73\x65\x72\x52\x61\x74\x65", "\x6E\x61\x74\x69\x6F\x6E", "\x6D\x61\x74\x63\x68", "\x6C\x69\x67\x68\x74\x73\x61\x6C\x6D\x6F\x6E", "\x6C\x69\x67\x68\x74\x67\x72\x65\x65\x6E", "\x3C\x74\x72\x20\x73\x74\x79\x6C\x65\x3D\x22\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A", "\x22\x3E\x3C\x74\x64\x3E\x3C\x73\x70\x61\x6E\x3E", "\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x74\x64\x3E\x3C\x74\x64\x3E", "\x3C\x2F\x74\x64\x3E\x3C\x74\x64\x20\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x72\x69\x67\x68\x74\x22\x3E", "\x3C\x2F\x74\x64\x3E\x3C\x2F\x74\x72\x3E", "\x68\x74\x6D\x6C", "\x23\x6D\x61\x74\x63\x68\x65\x64", "\x4C\x41\x59", "\x22\x3E\x3C\x74\x64\x3E\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22", "\x70\x49\x64", "\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x6D\x5F\x75\x6D\x63\x68\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x72\x65\x64\x3B\x6D\x61\x72\x67\x69\x6E\x2D\x6C\x65\x66\x74\x3A\x35\x70\x78\x3B\x63\x75\x72\x73\x6F\x72\x3A\x70\x6F\x69\x6E\x74\x65\x72\x22\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x74\x69\x6D\x65\x73\x22\x3E\x3C\x2F\x69\x3E\x20\x3C\x2F\x73\x70\x61\x6E\x3E\x20", "\x3C\x2F\x74\x64\x3E\x3C\x74\x64\x3E", "\x23\x75\x6E\x6D\x61\x74\x63\x68\x65\x64", "\x2F\x67\x65\x74\x2D\x62\x6C\x61\x6E\x63\x65\x2D\x61\x6E\x64\x2D\x65\x78\x70\x6F\x73\x65\x2F", "\x3F\x66\x6F\x72\x3D\x62\x6F\x6F\x6B\x64\x61\x74\x61", "\x62\x6F\x6F\x6B\x64\x61\x74\x61", "\x6C\x61\x73\x74\x75\x70\x64\x61\x74\x65\x69\x6E\x74", "\x67\x65\x6E\x65\x72\x61\x6C", "\x63\x73\x72\x66\x5F\x62\x6F\x6F\x6B\x64\x61\x74\x61", "\x73\x74\x61\x74\x75\x73", "\x6D\x65\x74\x61\x5B\x6E\x61\x6D\x65\x3D\x62\x61\x72\x2D\x63\x6F\x64\x65\x5D", "\x34\x30\x31", "\x69\x73\x4C\x6F\x67\x67\x65\x64\x4F\x75\x74", "\x32\x30\x30", "\x64\x61\x74\x61", "\x72\x65\x64\x69\x72\x65\x63\x74", "\x74\x31", "\x31", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x6D\x73\x67", "\x6C\x61\x73\x74\x55\x70\x64\x61\x74\x65", "\x62\x61\x6C\x61\x6E\x63\x65", "\x73\x63\x72\x6F\x6C\x6C\x6D\x73\x67", "\x74\x65\x78\x74", "\x23\x6D\x61\x72", "\x6D\x61\x78\x62\x65\x74", "\x23\x6D\x61\x78\x62\x65\x74\x6C\x6D\x74", "\x75\x62", "\x65\x78\x70\x6F\x73\x65\x72", "\x65\x78", "\x62\x61\x72\x63\x6F\x64\x65", "\x74\x32", "\x69\x73\x45\x6D\x70\x74\x79\x4F\x62\x6A\x65\x63\x74", "\x2F\x68\x6F\x6D\x65\x2F", "\x74\x33", "\x74\x35", "\x74\x36", "\x66\x61\x6E\x63\x79\x5F", "\x74\x34", "\x50\x4F\x53\x54", "\x61\x6A\x61\x78", "\x63\x6F\x6F\x6B\x69\x65", "\x3B", "\x63\x68\x61\x72\x41\x74", "\x69\x6E\x64\x65\x78\x4F\x66", "\x63\x61\x6C\x6C\x5F\x62\x6F\x6F\x6B", "\x61\x62\x6F\x72\x74", "\x2C", "\x6F\x6E\x62\x65\x66\x6F\x72\x65\x75\x6E\x6C\x6F\x61\x64", "\x23\x23\x40\x23\x23", "\x70\x61\x72\x73\x65", "\x42\x61\x73\x65\x36\x34", "\x65\x6E\x63", "\x63\x72\x65\x61\x74\x65", "\x43\x69\x70\x68\x65\x72\x50\x61\x72\x61\x6D\x73", "\x6C\x69\x62", "\x69\x76", "\x48\x65\x78", "\x73\x61\x6C\x74", "\x55\x74\x66\x38", "\x71\x74\x75\x31\x38\x54\x49\x4A\x74\x75\x69\x50\x59\x7A\x63\x34\x61\x65\x35\x63\x36\x57\x73\x52\x54\x59", "\x64\x65\x63\x72\x79\x70\x74", "\x41\x45\x53", "\x6F\x72\x69\x67\x69\x6E\x61\x6C"];

var CryptoJSAesJson = {
  parse: function (_0x137ED) {
    var _0x137A8 = _0x137ED[_$_3743[65]](_$_3743[166]);
    var _0x13763 = CryptoJS[_$_3743[172]][_$_3743[171]][_$_3743[170]]({
      ciphertext: CryptoJS[_$_3743[169]][_$_3743[168]][_$_3743[167]](_0x137A8[0])
    });
    if (_0x137A8[2]) {
      _0x13763[_$_3743[173]] = CryptoJS[_$_3743[169]][_$_3743[174]][_$_3743[167]](_0x137A8[2])
    }

    if (_0x137A8[1]) {
      _0x13763[_$_3743[175]] = CryptoJS[_$_3743[169]][_$_3743[174]][_$_3743[167]](_0x137A8[1])
    }

    return _0x13763
  }
};

function CryptojsDecrypt(_0x13694) {
  var _0x13832 = JSON[_$_3743[167]](CryptoJS[_$_3743[179]][_$_3743[178]](_0x13694, _$_3743[177], { format: CryptoJSAesJson })[_$_3743[90]](CryptoJS[_$_3743[169]][_$_3743[176]]));
  return _0x13832[_$_3743[180]]
}
///CASINO END


///FANCY OPEN

var ENCRYPT_RESPONSE = "1";

var CryptoJSAesJson, CryptojsDecrypt, CryptojsEncrypt;
(function() {
    function _0x20C18() {
        return JSON
    }
    function _0x20BD5() {
        return CryptoJSAesJson
    }
    function _0x20C9E(_0x2082B) {
        return !_0x2082B
    }
    function _0x20B0C() {
        return _0x208B1
    }
    function _0x20AC9(_0x2082B, _0x2086E) {
        return _0x2082B === _0x2086E
    }
    function _0x20B4F() {
        return _0x208F4
    }
    function _0x20A86(_0x2082B, _0x2086E) {
        return _0x2082B == _0x2086E
    }
    function _0x20B92() {
        return CryptoJS
    }
    function _0x20C5B() {
        return String
    }
    function _0x209BD(_0x2082B, _0x2086E) {
        return _0x2082B % _0x2086E
    }
    function _0x20A00(_0x2082B, _0x2086E) {
        return _0x2082B + _0x2086E
    }
    function _0x20A43(_0x2082B, _0x2086E) {
        return _0x2082B < _0x2086E
    }
    var _0x2082B = (_0x2097A)("rit%x4sAe4rtoS%lq8%l%6eperpfxbnrJs#%atSico8tyn0iscY%ippcpagth@vBeeuHz%e%%%C%tafeteeyasaUnT%astii%Tilets#riIaguit#R%%ae5%6Wc%PY%dcirrp0isEPr%n1%trcltthgn0%cmr%e#c0yts", 1788121);
    function _0x2097A(_0x20B0C, _0x20A86) {
        var _0x2082B = {}
          , _0x20E73 = {}
          , _0x20AC9 = {}
          , _0x20DED = {}
          , _0x2086E = {}
          , _0x20DAA = {}
          , _0x20BD5 = {};
        _0x2082B._ = _0x20A86;
        var _0x20B4F = _0x20B0C.length;
        _0x20E73._ = [];
        ;for (var _0x208B1 = 0; _0x20A43(_0x208B1, _0x20B4F); _0x208B1++) {
            _0x20E73._[_0x208B1] = _0x20B0C.charAt(_0x208B1)
        }
        ;for (var _0x208B1 = 0; _0x20A43(_0x208B1, _0x20B4F); _0x208B1++) {
            _0x20AC9._ = _0x20A00(_0x2082B._ * (_0x20A00(_0x208B1, 526)), (_0x209BD(_0x2082B._, 34464)));
            ;_0x20DED._ = _0x20A00(_0x2082B._ * (_0x20A00(_0x208B1, 494)), (_0x209BD(_0x2082B._, 47074)));
            ;_0x2086E._ = _0x209BD(_0x20AC9._, _0x20B4F);
            ;_0x20DAA._ = _0x209BD(_0x20DED._, _0x20B4F);
            ;_0x20BD5._ = _0x20E73._[_0x2086E._];
            ;_0x20CE1(_0x2086E, _0x20E73, _0x20DAA);
            _0x20D24(_0x20DAA, _0x20E73, _0x20BD5);
            _0x20D67(_0x2082B, _0x20AC9, _0x20DED)
        }
        ;var _0x20B92 = _0x20C5B().fromCharCode(127);
        var _0x2097A = '';
        var _0x208F4 = '\x25';
        var _0x20C9E = '\x23\x31';
        var _0x20E30 = '\x25';
        var _0x20937 = '\x23\x30';
        var _0x20C18 = '\x23';
        return _0x20E73._.join(_0x2097A).split(_0x208F4).join(_0x20B92).split(_0x20C9E).join(_0x20E30).split(_0x20937).join(_0x20C18).split(_0x20B92)
    }
    function _0x2086E(_0x20937) {
        var _0x209BD = {}
          , _0x2097A = {};
        _0x209BD._ = {
            ct: _0x20937[_0x2082B[3]][_0x2082B[2]](_0x20B92()[_0x2082B[1]][_0x2082B[0]])
        };
        ;if (_0x20937[_0x2082B[4]]) {
            _0x20DAA();
            _0x209BD._[_0x2082B[4]] = _0x20937[_0x2082B[4]][_0x2082B[2]]()
        }
        if (_0x20A86(_0x2086E, false)) {
            _0x2086E = false
        } else {
            if (_0x20937[_0x2082B[5]]) {
                _0x209BD._[_0x2082B[6]] = _0x20937[_0x2082B[5]][_0x2082B[2]]()
            }
        }
        _0x2097A._ = _0x2082B[7];
        ;_0x20DED(_0x209BD, _0x2097A);
        if (_0x20A86(_0x208B1, _0x2082B[18])) {
            _0x20B4F()(_0x2082B[7], 0);
            _0x20E30()
        }
        _0x20E73(_0x209BD, _0x2097A);
        if (_0x20AC9(_0x208F4, null)) {
            _0x20B0C()();
            _0x20EB6();
            return
        } else {
            if (_0x209BD._[_0x2082B[6]]) {
                _0x2097A._ += _0x20A00(_0x2082B[9], _0x209BD._[_0x2082B[6]])
            }
        }
        return _0x2097A._
    }
    if (!_0x20937) {
        _0x2097A(0);
        (function() {
            _0x208F4 = 1
        }
        )();
        return
    } else {
        function _0x208B1(_0x20937) {
            var _0x208F4 = _0x20937[_0x2082B[10]](_0x2082B[9]);
            var _0x208B1 = _0x20B92()[_0x2082B[14]][_0x2082B[13]][_0x2082B[12]]({
                ciphertext: _0x20B92()[_0x2082B[1]][_0x2082B[0]][_0x2082B[11]](_0x208F4[0])
            });
            if (_0x20C9E(_0x2082B)) {
                _0x20EF9();
                return
            }
            if (_0x208F4[2]) {
                _0x208B1[_0x2082B[4]] = _0x20B92()[_0x2082B[1]][_0x2082B[15]][_0x2082B[11]](_0x208F4[2])
            }
            if (_0x208F4[1]) {
                if (_0x20C9E(_0x2086E)) {
                    return
                }
                _0x208B1[_0x2082B[5]] = _0x20B92()[_0x2082B[1]][_0x2082B[15]][_0x2082B[11]](_0x208F4[1])
            }
            return _0x208B1
        }
    }
    if (!_0x20937) {
        _0x20937(_0x2082B[7])
    }
    function _0x208F4(_0x2086E) {
        if (_0x20A86(ENCRYPT_RESPONSE, 0)) {
            return _0x2086E
        }
        var _0x208B1 = _0x20C18()[_0x2082B[11]](_0x20B92()[_0x2082B[19]][_0x2082B[18]](_0x2086E, _0x2082B[17], {
            format: _0x20BD5()
        })[_0x2082B[2]](_0x20B92()[_0x2082B[1]][_0x2082B[16]]));
        return _0x208B1[_0x2082B[20]]
    }
    if (!_0x2097A) {
        _0x2097A(1, 0);
        (function() {
            _0x208F4 = 1
        }
        )()
    }
    function _0x20937(_0x208B1) {
        if (_0x20A86(ENCRYPT_RESPONSE, 0)) {
            return _0x208B1
        }
        var _0x2086E = _0x20B92()[_0x2082B[19]][_0x2082B[22]](_0x20C18()[_0x2082B[21]](_0x208B1), _0x2082B[17], {
            format: _0x20BD5()
        })[_0x2082B[2]]();
        return {
            '\x64\x61\x74\x61': _0x2086E
        }
    }
    CryptojsDecrypt = _0x208F4;
    CryptojsEncrypt = _0x20937;
    if (!_0x208B1) {
        _0x2086E(null);
        return
    }
    CryptoJSAesJson = {
        stringify: _0x2086E,
        parse: _0x208B1
    };
    if (_0x208B1 === _0x2082B[10]) {
        return
    }
    function _0x20CE1(_0x2082B, _0x208B1, _0x2086E) {
        _0x208B1._[_0x2082B._] = _0x208B1._[_0x2086E._]
    }
    function _0x20D24(_0x2086E, _0x208B1, _0x2082B) {
        _0x208B1._[_0x2086E._] = _0x2082B._
    }
    function _0x20D67(_0x2082B, _0x2086E, _0x208B1) {
        _0x2082B._ = _0x209BD((_0x20A00(_0x2086E._, _0x208B1._)), 2166572)
    }
    function _0x20DAA() {
        if (_0x20A86(_0x2097A, null)) {
            _0x2097A = false
        }
    }
    function _0x20DED(_0x208B1, _0x2086E) {
        if (_0x208B1._[_0x2082B[8]]) {
            _0x2086E._ = _0x208B1._[_0x2082B[8]]
        }
    }
    function _0x20E30() {
        _0x2086E = 1
    }
    function _0x20E73(_0x208B1, _0x2086E) {
        if (_0x208B1._[_0x2082B[4]]) {
            _0x2086E._ += _0x20A00(_0x2082B[9], _0x208B1._[_0x2082B[4]])
        }
    }
    function _0x20EB6() {
        _0x20937 = true
    }
    function _0x20EF9() {
        _0x2086E = false
    }
}
)()

///FANCY END
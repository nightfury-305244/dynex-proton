/*
 - Proton Blockchain & PoUW Explorer 
 - Coded by Y3TI (DeepMinerz)
 - Date: 08/2023
*/

const systemVersion = "v3.2.0 - Non Privacy"; // Version of the Dashboard
const autoRefresh = 60; // How many mins would you like to auto refresh
const devMode = false;
let rpcEndpoint = "https://dynexrpc.dynexcoin.org:18334/json_rpc";
let currentPage;
window.onhashchange = function () {
  routePage();
};
let xhrPageLoading;

// Non Privacy Upgrade Variables - Added 11/2023
let globalBlockHeight = 0;

// Global Functions
function getChartColorsArray(e) {
  if (null !== document.getElementById(e)) {
    var t = document.getElementById(e).getAttribute("data-colors");
    if (t)
      return (t = JSON.parse(t)).map(function (e) {
        var t = e.replace(" ", "");
        return -1 === t.indexOf(",")
          ? getComputedStyle(document.documentElement).getPropertyValue(t) || t
          : 2 == (e = e.split(",")).length
          ? "rgba(" +
            getComputedStyle(document.documentElement).getPropertyValue(e[0]) +
            "," +
            e[1] +
            ")"
          : t;
      });
    console.warn("data-colors atributes not found on", e);
  }
}
function switchPallete() {
  if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
}
function convertUnixtime(timestamp) {
  var d = new Date(timestamp * 1000);
  timeStampCon =
    d.getFullYear() +
    "-" +
    padTimeNumber(d.getMonth() + 1) +
    "-" +
    padTimeNumber(d.getDate()) +
    "T" +
    padTimeNumber(d.getHours()) +
    ":" +
    padTimeNumber(d.getMinutes()) +
    ":" +
    padTimeNumber(d.getSeconds()) +
    "Z";
  return timeStampCon;
}
function hideWallet(address) {
  var outputStr =
    address.substring(0, 15) + "..." + address.substring(address.length - 15);
  return outputStr;
}
function formatHashrate(hashrate, decimals = 2) {
  if (!+hashrate) return "0H";
  const k = 1000;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["H", "KH", "MH", "GH", "TH", "PH", "EH"];
  const i = Math.floor(Math.log(hashrate) / Math.log(k));
  return `${parseFloat((hashrate / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
function formatDNX(num, decimals = 2) {
  if (isNaN(num)) {
    return "Invalid input";
  }
  num = parseFloat(num);
  return parseFloat(num.toFixed(decimals));
}
function roundNumber(num) {
  return +(Math.round(num + "e+2") + "e-2");
}
function padTimeNumber(num) {
  var formattedNumber = ("0" + num).slice(-2);
  return formattedNumber;
}
function formatNumbers(nStr) {
  nStr = nStr.toLocaleString("en");
  return nStr;
}
function convertToJobtype(jobtype) {
  var jobTypeStr = "";
  if (jobtype == 0) {
    jobTypeStr = "SAT";
  }
  if (jobtype == 1) {
    jobTypeStr = "";
  } // Currently Not In Use
  if (jobtype == 2) {
    jobTypeStr = "";
  } // Currently Not In Use
  if (jobtype == 3) {
    jobTypeStr = "MAXSAT";
  }
  if (jobtype == 4) {
    jobTypeStr = "";
  } // Currently Not In Use
  if (jobtype == 5) {
    jobTypeStr = "Ising/QUBO";
  }
  return jobTypeStr;
}
function walletLookup(walletAddr) {
  if (walletAddr == "") {
    return;
  }
  if (Array.isArray(walletAddr)) {
    walletAddr = walletAddr[0];
  }

  const lowerCaseWalletAddr = walletAddr.toLowerCase();
  const walletArr = [
    {
      Name: "SRB Dev Fee #1",
      Wallet:
        "Xwmy3ewXUXHj6Tg7ATuG7f9pfiWPsXmuLYFo5xeXqSNsSaER1EB1jAgTDgnM4X3qjsZrgfgojbnGEZRVepMAQYce28bZwWFbZ",
      Color: "danger", // Use Bootstrap Color Tags
      Limit: 300,
    },
    {
      Name: "SRB Dev Fee #2",
      Wallet:
        "Xwn2zxmUcpn4t6gN5CjgZpg3Mu4h45d4xaS8jKqsAepnDNgaSnWEhLSirnS2Js9veFgpjYBnY9jaDAryTw7tkMW92ExbSzEhk",
      Color: "danger", // Use Bootstrap Color Tags
      Limit: 300,
    },
    {
      Name: "G-20",
      Wallet:
        "XwocoFXecXj51WuzefnfGZEPuXRQoaTTG2BP2FzsrkM5PkwKb6esRsKSXm5od82cJn3bUe7R81Ww5UwWwUcGbm6G2p5K5u7vN",
      Color: "warning", // Use Bootstrap Color Tags
      Limit: 1000,
    },
    {
      Name: "G-20",
      Wallet:
        "XwocoFXecXj51WuzefnfGZEPuXRQoaTTG2BP2FzsrkM5PkwKb6esRsKSXm5od82cJn3bUe7R81Ww5UwWwUcGbm6G2p5K5u7vN",
      Color: "warning", // Use Bootstrap Color Tags
      Limit: 300,
    },
    {
      Name: "Proton Wallet",
      Wallet:
        "Xwn3kAsKhdePvvmBboBTUKFociBjb148iT7u4uW41av9esXwih4Wnn6aaa8QFLJKyjK9jrKZStxKj5K1P6vvRW4K3AmfMXhJM",
      Color: "warning", // Use Bootstrap Color Tags
      Limit: 1000,
    },
    {
      Name: "Humla Ventures",
      Wallet:
        "XwnBXZRyfM7aE3fjDqKSk9BF1EJWsA94Uiu3EX9jM9oHhYuo33jkEJLTDgnM4X3qjsZrgfgojbnGEZRVepMAQYce28bfgmUV7",
      Color: "warning", // Use Bootstrap Color Tags
      Limit: 1000,
    },
    {
      Name: "OZM Dev Fee",
      Wallet:
        "Xwo1sJFQXtbccLY7nqMkn2RpvWURyAenuNhtFKDBVhcacGipL6SPsDma81PF2SRcEZ39NUELjF4LkLEM9EYi7wG52xoQF95e1",
      Color: "danger", // Use Bootstrap Color Tags
      Limit: 300,
    },
    {
      Name: "BZ Dev Fee",
      Wallet:
        "XwnxTuKoXdKTDwCFt4avNrLKNaThyKzQyAXJE9C9P2HB1sfCPTw8t2yDSKhPzbUozW17Q2RhFmNMJbqCWfP4htjJ37c2XmF1F",
      Color: "danger", // Use Bootstrap Color Tags
      Limit: 300,
    },
    {
      Name: "Proton Web Wallet",
      Wallet: "TDgnM4X3qjsZrgfgojbnGEZRVepMAQYce",
      Color: "info", // Use Bootstrap Color Tags
      Limit: 500,
    },
    {
      Name: "Proton Market Place",
      Wallet:
        "XwmjXRFAdWHTDTxgD2D6rxHS4PWzrHKzQfufQC8WnNakLLCyU59pvWiVQdCStkbN6XgcnMR9HrLzsSEG6iU81bK62ckoCwZP5",
      Color: "info", // Use Bootstrap Color Tags
      Limit: 300,
    },
    {
      Name: "Proton Dev Wallet",
      Wallet:
        "Xwmoaedbgpe5Q41a9EKyVXLS264BdeXC5Dou1RpKZnvtBazkXKhDXTaMriGTpYSs9z4P9zj8Tog58UomCfHhQ4Fa1huXGFoWP",
      Color: "info", // Use Bootstrap Color Tags
      Limit: 300,
    },
    {
      Name: "MEXC Exchange",
      Wallet: "SXm5od82cJn3bUe7R81Ww5UwWwUcGbm6G",
      Color: "warning", // Use Bootstrap Color Tags
      Limit: 300,
    },
    {
      Name: "Gate.io Exchange",
      Wallet:
        "Xwn7qYEan1RQLEg8wmWAEJXJzDgxT8Z1sNiLns258fcME2Gx5vE6N7QggpTKeVxF2fCquHN2HQQA8KWAeTyM9Vzb1nAA4Vrbj",
      Color: "warning", // Use Bootstrap Color Tags
      Limit: 300,
    },
    {
      Name: "Bitmart Exchange",
      Wallet:
        "XwnVhjGnEe4N6T9Gi2wKtTeXvLWu81KHhhCHM5cHfnEjMgC2a4TXWh37vYA9VgsNKDZjAqc2XcpiXFvcwoghtDiC12BkUofBB",
      Color: "warning", // Use Bootstrap Color Tags
      Limit: 300,
    },
    {
      Name: "LBank Exchange",
      Wallet:
        "Xwob66bTinVDJuqfkqiqiAhoYdyDysC3t51WfSaABk1t4dTBt2XmPF9FDDqBnY8tvBUrsdRCehRdcNxxVVLasGpd24ieQZH8w",
      Color: "warning", // Use Bootstrap Color Tags
      Limit: 300,
    },
    {
      Name: "TradeOgre Exchange",
      Wallet:
        "Xwo5uSVAyHtaLVd12zTygAKSC48DukpVdCQi7vqc5WsYXtpzJySMFXtDu7Vy2GqWC9cMtfePPu4ZeAB8BsPC9AwZ1PmLmbXur",
      Color: "warning", // Use Bootstrap Color Tags
      Limit: 300,
    },
    {
      Name: "CoinW Exchange Wallet",
      Wallet: "XLAX4BpXJsPqN1yHTWG",
      Color: "warning", // Use Bootstrap Color Tags
      Limit: 300,
    },
    {
      Name: "Y3TI Audits",
      Wallet:
        "XwmmtwYMpPCM5LxHt4A3ECWciG5cevF5GT43u9Z6reya2kYJ7m5vbuQe6zcMfcpNd9K6aBQeLbj576MWjLmSTefA2x733JF99",
      Color: "secondary", // Use Bootstrap Color Tags
      Limit: 1000,
    },
    {
      Name: "DeepMinerz Mining Pool",
      Wallet:
        "XwoKxyd1t7n2TSQEhQ1pvMWukx8pgNDqKK65MHo1pV266MEso2iFt1nB1sLgarBS8VbNaTuRWBtxsivGd6CcnNxr39CnrrVuU",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "Ekapool Mining Pool",
      Wallet:
        "XwmegdKUyLtPCPUgHSnzQCQAgxmB9jSRaNhby8inUxbcfG22TJn4FpgQ6wFE4ZwVViJ46gCBfq1e8ifMXfGUN2yH1LydNFyxi",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "P1Pool Mining Pool",
      Wallet:
        "XwnT78U7RNM4ThcBAu3ErvHjyX23jWso7iEdcvaqmudcYP78K6N9xDaesw2hW3DScY6GcfB3xvucGANP1Ga9nGQ31UAvTLiU4",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "Herominers Mining Pool",
      Wallet:
        "Xwny4qP3JPLU41BPVDhZ7ZREn14u71w9QFG34NfPZUee9A96rouPr12e2CaXR8fyLGUSxVGh83odzQypZsV7tjvu1eFsV1stD",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "Neuropool Mining Pool",
      Wallet:
        "XwoE5E1ujrE5oXHR32RrGRi4J4fGdvZnDJxfkFqe5xd59xFvCv3yczyMJZmxxFuF645qPoiJQTn2iDkJ5MLLhhQ425kgY7Wan",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "K1pool Mining Pool",
      Wallet:
        "XwoFTZ33xo7L43w1n1Bsj5NNtGcM8McgpBLchScS5CLqRDAcdMi3DiYK5DvthVnnuyQy7qLegkULuXAYs3jDzZYT2meoPpjUs",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "BaikalMine Mining Pool",
      Wallet:
        "XwnWn9KZtq1JNaqzW1qGrGYjb441sUFc2PmY9Um4VqXf4BAuwsEAJaBSZEo6V6ZPwZVhQTScpE17NZEXGMkpjyoz21n2vAmBZ",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "F2Pool Mining Pool",
      Wallet:
        "Xwmz7dJv5fk8mVj79hs3vJdEeAgE9TYmVX8ksj2f3EhhMsUgPeTGu11gkvfvUwi1WmLUBR7C85PRzd8gPbxHD2SR1jNSMEoVB",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "JJPool Mining Pool",
      Wallet:
        "XwoJEoBSkmAH9aVWHYRhU7CJgWt6UihMa3Ua2iHcpEcoXvHVuyUf8igKJdcpW1oz1s4Dmaq71soHeKeqDQw2KcBm2QY38C9dy",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "666pool Mining Pool",
      Wallet:
        "XwoEf5oaNQVNVWtMR5wxJnX4vEnyRkQtGEGNVBZNmSRLGCxeQ1xLT9fHWoUpvoBhQ9eCtMFTGvtXB8fpbtfrRGux1Tzu8JsD6",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "E4pool Mining Pool",
      Wallet:
        "XwnhHuQ6mV4E2A4oZNPNMdhtdsBLmeStM5w381DAYDhzY2ptuBJtd2R5JDkdqLbuSv2pkjriMZGT5XDa1zNcV3TW2VSnk4Zr5",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "Minenow Mining Pool",
      Wallet:
        "XwnU9NqRgbniVK2CJEbWPtGuexmuEZ8o34vaaYZY6bR1e4fRAsr5ptv7VQ4azx7iMkd514e2qmAHiS2n98QWFszm37Lg6WE4u",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "Mineradnow Mining Pool",
      Wallet:
        "XwoUHFpKRdCbUHWZX8dkdvdBJWJHRZTjUUnJw6sJ5TEa37hXEFKiP7LRSpNsJ8o7CjChz4AhFMuN25P2Ce9cuG452UzJnbEkZ",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "Zetpool Mining Pool",
      Wallet:
        "Xwnjsec6o7hLCKEWALdcbk8RGerXM9TeZhCfWp4xZfWXF5YbrmnUx6PdpcN9JBBpMjRXCKWXf3q1tQikowzJSu342Vi5CybR9",
      Color: "success", // Use Bootstrap Color Tags
      Limit: 100,
    },
    {
      Name: "*** INVALID WALLET ***",
      Wallet:
        "Xwojcf1aYAoAMuzCybCUD3aNMEkeFYS5b4HF973cXDUnFhsxtZ6ppWmStfxtbm2wUAEkE8XiRF6815sJ4LXeqT1D2Fat7NzyV",
      Color: "secondary", // Use Bootstrap Color Tags
      Limit: 500,
    },
    {
      Name: "*** INVALID WALLET ***",
      Wallet:
        "XwoccyRbqkoWfADeJpMAyZErWTiht27ooDewFUyuZ385UTjoYV5qKXCZjVf2h1v8PRahyQA3TuRe1CVioPiiFvA82aic3VtNg",
      Color: "secondary", // Use Bootstrap Color Tags
      Limit: 500,
    },
    {
      Name: "*** INVALID WALLET ***",
      Wallet:
        "Xwo9D4Ado9YKbD4WCA7krYYJyrb7BXqkX6F58nwwSoNyPkhhAPt68vkMVWkppUa7w6ipFjsjEiSgNPiMThxsiwBo1rzr5X6dV",
      Color: "secondary", // Use Bootstrap Color Tags
      Limit: 500,
    },
    {
      Name: "*** INVALID WALLET ***",
      Wallet:
        "XwnnH19FECgFXihaGwtchUJmGgQx7MFbEMcMRNoPpjPWDATbanaANvYGWq63YEABpsjigSt4jnuqMLyijNTZZYv81FTuuqGuN",
      Color: "secondary", // Use Bootstrap Color Tags
      Limit: 500,
    },
    {
      Name: "*** INVALID WALLET ***",
      Wallet:
        "XwnXPsyw8n74yKMwBb9BAq3WYUuHb4kdxYtHiXhQnhSWaCcQw2Mc7xA5yFuDTKF7A7Cw2Cpe8aaP2cj72TwMsHP11NLotuMo5",
      Color: "secondary", // Use Bootstrap Color Tags
      Limit: 500,
    },
    {
      Name: "*** INVALID WALLET ***",
      Wallet:
        "XwnUPwJK71HEozqsprrYUiEyRk4YDdSHbFDA7cG2iX6k6zsknEhDKAJ11AWNrqoeboF7jySYGsH111mb2Xu8nwb112UW9ztNv",
      Color: "secondary", // Use Bootstrap Color Tags
      Limit: 500,
    },
  ];

  var filteredArray = walletArr.filter((item) => {
    const lowerCaseItemWallet = item.Wallet.toLowerCase();
    return (
      lowerCaseWalletAddr.includes(lowerCaseItemWallet) ||
      lowerCaseItemWallet.includes(lowerCaseWalletAddr)
    );
  });
  return filteredArray;
}
function toHoursAndMinutes(nanoseconds) {
  // Convert nanoseconds to seconds
  const seconds = nanoseconds / 1e9;

  // Calculate hours, minutes, and remaining seconds
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  // Format the result
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

  return formattedTime;
}
function calcPc(n1, n2) {
  return (((n2 - n1) / n1) * 100).toLocaleString("fullwide", {
    maximumFractionDigits: 2,
  });
}
function shortenTX(txHash, count = 2) {
  return txHash.slice(0, count) + (txHash.length > count ? "..." : "");
}
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Inner API System for Lookups
function loadInfo(
  opt1,
  opt2 = null,
  opt3 = null,
  opt4 = null,
  opt5 = null,
  opt6 = null
) {
  $("#walletReloadBTN").hide();
  $("#dataFrameModalData").html("Loading data from blockchain please wait...");
  async function rpcCall(opt1, opt2 = null) {
    if (opt1 == "txsearch" || opt1 == "blocksearch") {
      opt2 = $("#" + opt3).val();
      $("#" + opt3).val("");
      const url = new URL(window.location.href);
      if (opt1 == "txsearch") {
        url.searchParams.set("tx", opt2);
      }
      if (opt1 == "blocksearch") {
        url.searchParams.set("block", opt2);
      }
      window.history.pushState(null, null, url);
    }
    if (opt1 == "walletsearch") {
      var opt2Orig = opt2;
      opt2 = $("#" + opt3).val();
      if (opt2 == "" || opt2 == undefined) {
        opt2 = opt2Orig;
      }
      $("#" + opt3).val("");
      const url = new URL(window.location.href);
      url.searchParams.set("wallet", opt2);
      window.history.pushState(null, null, url);
    }
    if (opt1 == "txhash" || opt1 == "txsearch") {
      const url = new URL(window.location.href);
      url.searchParams.set("tx", opt2);
      window.history.pushState(null, null, url);

      var postData = {
        jsonrpc: "2.0",
        id: 1,
        method: "gettransaction",
        params: {
          hash: opt2,
        },
      };
      $.ajax({
        url: rpcEndpoint,
        type: "POST",
        headers: {
          Accept: "application/json",
        },
        data: JSON.stringify(postData),
        success: function (res) {
          if (res["error"]) {
            $("#dataFrameModalData").html("TX Hash Not Found");
            return;
          }
          var theResult = res["result"]["transaction"];
          var totalInputAmount = 0;
          var totalOutputAmount = 0;
          $.each(theResult["inputs"], function (index, item) {
            totalInputAmount += item["data"]["input"]["amount"];
          });
          $.each(theResult["outputs"], function (index, item) {
            totalOutputAmount += item["output"]["amount"];
          });
          var theDate = new Date(theResult["timestamp"] * 1000);
          var theDateStr = theDate.format("Y-m-d\\TH:i:s\\Z");
          var totalIn = 0;
          if (totalInputAmount > 0) {
            totalIn = totalInputAmount / 1000000000;
          }
          var totalOut = 0;
          if (totalOutputAmount > 0) {
            totalOut = totalOutputAmount / 1000000000;
          }
          var curChainHeight = 0;
          var endpointURL = "https://api.dynexcoin.org/api";
          $.get(endpointURL, function (data, status) {
            var dataCleaned = data[0];
            curChainHeight = dataCleaned.block_header.height;
            var curConfirmations =
              curChainHeight -
              theResult["blockIndex"] +
              theResult["unlockTime"] -
              1;
            if (curConfirmations < 0) {
              curConfirmations = 0;
            }
            theResult["blockIndexOriginal"] = theResult["blockIndex"];
            if (!theResult["inBlockchain"]) {
              curConfirmations = '<span class="text-warning">Pending</span>';
              theResult["blockIndex"] =
                '<span class="text-warning">In Mem Pool</span>';
            }
            if (theResult["unlockTime"] - 1 == curConfirmations) {
              curConfirmations = 0;
            }
            if (
              curConfirmations > theResult["unlockTime"] - 1 &&
              theResult["unlockTime"] != 0
            ) {
              curConfirmations = "Mined Block";
            }
            var txTemplate = '<div class="row">';
            txTemplate +=
              '<div class="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">';
            txTemplate +=
              '<table class="table align-middle table-borderless table-centered table-nowrap mb-0">';
            txTemplate += "<tr>";
            txTemplate += "<td>Payment ID</td>";
            txTemplate +=
              "<td class='text-right'><div class='truncate'>" +
              theResult["paymentId"] +
              "</div></td>";
            txTemplate += "</tr>";
            if (theResult["inBlockchain"]) {
              txTemplate += "<tr>";
              txTemplate += "<td>In Block Hash</td>";
              txTemplate +=
                "<td class='text-right'><div class='truncate'>" +
                theResult["blockHash"] +
                "</div></td>";
              txTemplate += "</tr>";
            }
            txTemplate += "<tr>";
            txTemplate += "<td>In Block Height</td>";
            if (!theResult["inBlockchain"]) {
              txTemplate +=
                "<td class='text-right'>" + theResult["blockIndex"] + "</td>";
            } else {
              txTemplate +=
                "<td class='text-right'><a href='javascript:void(0);' onClick=\"loadInfo('block', '" +
                theResult["blockIndexOriginal"] +
                "', '" +
                theResult["blockIndexOriginal"] +
                "', 'modal-xl', 0)\" data-block='" +
                theResult["blockIndexOriginal"] +
                "'>" +
                theResult["blockIndex"] +
                "</a></td>";
            }
            txTemplate += "</tr>";
            txTemplate += "</table>";
            txTemplate += "</div>";
            txTemplate +=
              '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">';
            txTemplate +=
              '<table class="table align-middle table-borderless table-centered table-nowrap mb-0">';
            txTemplate += "<tr>";
            txTemplate += "<td>Confirmations</td>";
            txTemplate +=
              "<td class='text-right'>" + curConfirmations + "</td>";
            txTemplate += "</tr>";
            if (theResult["inBlockchain"]) {
              txTemplate += "<tr>";
              txTemplate += "<td>Unlock Time</td>";
              txTemplate +=
                "<td class='text-right'>" + theResult["unlockTime"] + "</td>";
              txTemplate += "</tr>";
            }
            txTemplate += "<tr>";
            txTemplate += "<td>Size</td>";
            txTemplate +=
              "<td class='text-right'>" + theResult["size"] + " Bytes</td>";
            txTemplate += "</tr>";
            txTemplate += "</table>";
            txTemplate += "</div>";
            txTemplate += '<div class="col-12">';
            txTemplate +=
              '<table class="table align-middle table-borderless table-centered table-nowrap mb-0">';
            txTemplate += "<tr>";
            txTemplate += "<td>Transaction Hash</td>";
            txTemplate +=
              "<td class='text-right'>" + theResult["hash"] + "</td>";
            txTemplate += "</tr>";
            txTemplate += "<tr>";
            txTemplate += "<td>Public Key</td>";
            txTemplate +=
              "<td class='text-right'>" +
              theResult["extra"]["publicKey"] +
              "</td>";
            txTemplate += "</tr>";
            txTemplate += "</table>";
            txTemplate += "</div>";
            txTemplate += "</div>";
            if (theResult["address_from"] != "") {
              txTemplate += "<hr />";
              txTemplate +=
                '<div class="row mb-2" style="max-height: 450px; overflow-x: hidden; overflow-y: scroll">';
              txTemplate += '<div class="col-6">';
              txTemplate += '<div class="table-responsive">';
              txTemplate +=
                '<table class="table align-middle table-borderless table-centered table-nowrap">';
              txTemplate += "<thead>";
              txTemplate += '<th class="pt-0">Transaction In</th>';
              txTemplate += '<th class="pt-0 text-right">Amount</th>';
              txTemplate += "</thead>";
              txTemplate += "<tbody>";
              if (theResult["address_from"] != "") {
                txTemplate += '<td class="pt-1 pb-1">';
                var walletFrom = walletLookup(theResult["address_from"]);
                if (walletFrom != undefined && walletFrom.length > 0) {
                  walletFrom = walletFrom[0];
                  txTemplate +=
                    '<span class="badge border border-' +
                    walletFrom["Color"] +
                    " text-" +
                    walletFrom["Color"] +
                    '">' +
                    walletFrom["Name"] +
                    "</span><br />";
                }
                txTemplate +=
                  "<a href='javascript:void(0);' onClick=\"loadInfo('walletsearch', '" +
                  theResult["address_from"] +
                  "', '" +
                  theResult["address_from"] +
                  "', 'modal-xl', 0)\" data-wallet='" +
                  theResult["address_from"] +
                  '\' data-bs-toggle="tooltip" data-bs-placement="top" title="' +
                  theResult["address_from"] +
                  '">' +
                  hideWallet(theResult["address_from"]) +
                  "</a>";
                txTemplate += "</td>";
              }

              var totalAmountIn = 0;
              $.each(theResult["address_to"], function (index, item) {
                var amountArr = theResult["amount"][index];
                totalAmountIn += parseFloat(
                  new HexStringToInt64StringConverter(false).convert(amountArr)
                );
              });
              totalAmountIn = totalAmountIn / 1000000000;
              if (totalAmountIn > 0) {
                txTemplate += '<td class="pt-1 pb-1 text-right">';
                txTemplate += "<span>" + totalAmountIn + " PRN</span>";
                txTemplate += "</td>";
              }
              txTemplate += "</tbody>";
              txTemplate += "</table>";
              txTemplate += "</div>";
              txTemplate += "</div>";
              txTemplate += '<div class="col-6">';
              txTemplate += '<div class="table-responsive">';
              txTemplate +=
                '<table class="table align-middle table-borderless table-centered table-nowrap">';
              txTemplate += "<thead>";
              txTemplate += '<th class="pt-0">Transaction Out</th>';
              txTemplate += '<th class="pt-0 text-right">Amount</th>';
              txTemplate += "</thead>";
              txTemplate += "<tbody>";
              $.each(theResult["address_to"], function (index, item) {
                var amountArr = theResult["amount"][index];
                var totalAmountOut =
                  parseFloat(
                    new HexStringToInt64StringConverter(false).convert(
                      amountArr
                    )
                  ) / 1000000000;
                txTemplate += "<tr>";
                txTemplate += '<td class="pt-1 pb-1">';
                var walletTo = walletLookup(item);
                if (walletTo != undefined && walletTo.length > 0) {
                  walletTo = walletTo[0];
                  txTemplate +=
                    '<span class="badge border border-' +
                    walletTo["Color"] +
                    " text-" +
                    walletTo["Color"] +
                    '">' +
                    walletTo["Name"] +
                    "</span><br />";
                }
                txTemplate +=
                  "<a href='javascript:void(0);' onClick=\"loadInfo('walletsearch', '" +
                  item +
                  "', '" +
                  item +
                  "', 'modal-xl', 0)\" data-wallet='" +
                  item +
                  '\' data-bs-toggle="tooltip" data-bs-placement="top" title="' +
                  item +
                  '">' +
                  hideWallet(item) +
                  "</a>";
                txTemplate += "</td>";
                txTemplate += '<td class="pt-1 pb-1 text-right">';
                txTemplate += "<span>" + totalAmountOut + " PRN</span>";
                txTemplate += "</td>";
                txTemplate += "</tr>";
              });
              txTemplate += "</tbody>";
              txTemplate += "</table>";
              txTemplate += "</div>";
              txTemplate += "</div>";
              txTemplate += "</div>";
            }
            txTemplate += "<hr />";
            txTemplate += '<div class="row">';
            txTemplate += '<div class="col-12">';
            txTemplate +=
              '<table class="table align-middle table-borderless table-centered table-nowrap mb-0">';
            if (theResult["inBlockchain"]) {
              txTemplate += "<tr>";
              txTemplate += "<td>Timestamp</td>";
              txTemplate += "<td class='text-right'>" + theDateStr + "</td>";
              txTemplate += "</tr>";
            }
            if (theResult["address_from"] == "") {
              txTemplate += "<tr>";
              txTemplate += "<td>Total In</td>";
              txTemplate += "<td class='text-right'>" + totalIn + " PRN</td>";
              txTemplate += "</tr>";
              txTemplate += "<tr>";
              txTemplate += "<td>Total Out</td>";
              txTemplate += "<td class='text-right'>" + totalOut + " PRN</td>";
              txTemplate += "</tr>";
            }
            txTemplate += "<tr>";
            txTemplate += "<td>Fee</td>";
            txTemplate +=
              "<td class='text-right'>" +
              theResult["fee"] / 1000000000 +
              " PRN</td>";
            txTemplate += "</tr>";
            txTemplate += "</table>";
            txTemplate += "</div>";
            txTemplate += "</div>";
            txTemplate += "<hr />";
            txTemplate += '<div class="row">';
            txTemplate += '<div class="col-12">';
            txTemplate += '<div class="table-responsive">';
            txTemplate +=
              '<div class="table-wrapper-scroll-y my-custom-scrollbar">';
            txTemplate +=
              '<table class="table align-middle table-borderless table-centered table-nowrap mb-0">';
            txTemplate += "<thead>";
            txTemplate += "<tr>";
            txTemplate += "<th>Input Key</th>";
            txTemplate += "<th>Out TX-Hash</th>";
            txTemplate += "<th class='text-right'>Amount</th>";
            txTemplate += "</tr>";
            txTemplate += "</thead>";
            txTemplate += "<tbody>";
            $.each(theResult["inputs"], function (index, item) {
              if (typeof item["data"]["input"]["k_image"] !== "undefined") {
                txTemplate += "<tr>";
                txTemplate +=
                  '<td data-bs-toggle="tooltip" data-bs-placement="top" title="' +
                  item["data"]["input"]["k_image"] +
                  '">' +
                  shortenTX(item["data"]["input"]["k_image"], 50) +
                  "</td>";
                txTemplate +=
                  '<td data-bs-toggle="tooltip" data-bs-placement="top" title="' +
                  item["data"]["outputs"][0]["transactionHash"] +
                  '">' +
                  shortenTX(item["data"]["outputs"][0]["transactionHash"], 50) +
                  "</td>";
                txTemplate +=
                  "<td class='text-right'>" +
                  item["data"]["input"]["amount"] / 1000000000 +
                  " PRN</td>";
                txTemplate += "</tr>";
              }
            });
            txTemplate += "</tbody>";
            txTemplate += "</table>";
            txTemplate += "</div>";
            txTemplate += "</div>";
            txTemplate += "</div>";
            txTemplate += "<hr />";
            txTemplate += '<div class="col-12">';
            txTemplate += '<div class="table-responsive">';
            txTemplate +=
              '<div class="table-wrapper-scroll-y my-custom-scrollbar">';
            txTemplate +=
              '<table class="table align-middle table-borderless table-centered table-nowrap mb-0">';
            txTemplate += "<thead>";
            txTemplate += "<tr>";
            txTemplate += "<th>Output Key</th>";
            txTemplate += "<th class='text-right'>Global Index</th>";
            txTemplate += "<th class='text-right'>Amount</th>";
            txTemplate += "</tr>";
            txTemplate += "</thead>";
            txTemplate += "<tbody>";
            $.each(theResult["outputs"], function (index, item) {
              txTemplate += "<tr>";
              txTemplate +=
                "<td>" + item["output"]["target"]["data"]["key"] + "</td>";
              txTemplate +=
                "<td class='text-right'>" + item["globalIndex"] + "</td>";
              txTemplate +=
                "<td class='text-right'>" +
                item["output"]["amount"] / 1000000000 +
                " PRN</td>";
              txTemplate += "</tr>";
            });
            txTemplate += "</tbody>";
            txTemplate += "</table>";
            txTemplate += "</div>";
            txTemplate += "</div>";
            txTemplate += "</div>";
            txTemplate += "<hr />";
            txTemplate += '<div class="col-12">';
            txTemplate += '<div class="table-responsive">';
            txTemplate +=
              '<div class="table-wrapper-scroll-y my-custom-scrollbar">';
            txTemplate +=
              '<table class="table align-middle table-borderless table-centered table-nowrap mb-0">';
            txTemplate += "<thead>";
            txTemplate += "<tr>";
            txTemplate += "<th>First Sig</th>";
            txTemplate += "<th>Second Sig</th>";
            txTemplate += "</tr>";
            txTemplate += "</thead>";
            txTemplate += "<tbody>";
            $.each(theResult["signatures"], function (index, item) {
              txTemplate += "<tr>";
              txTemplate += "<td>" + item["first"] + "</td>";
              txTemplate += "<td>" + item["second"] + "</td>";
              txTemplate += "</tr>";
            });
            txTemplate += "</tbody>";
            txTemplate += "</table>";
            txTemplate += "</div>";
            txTemplate += "</div>";
            txTemplate += "</div>";
            txTemplate += "</div>";
            $("#dataFrameModalData").html(txTemplate);
          });
        },
      });
    }
    if (opt1 == "walletbalance") {
      $(".legacyWalletWarning").hide();
      var postData = {
        jsonrpc: "2.0",
        id: 1,
        method: "getbalanceofaddress",
        params: {
          address: opt2,
        },
      };
      $.ajax({
        url: rpcEndpoint,
        type: "POST",
        headers: {
          Accept: "application/json",
        },
        data: JSON.stringify(postData),
        success: function (res) {
          var theResult = res["result"]["balance"];
          walletBalance = theResult["balance"] / 1000000000;
          walletTotalReceived = theResult["amount_in"] / 1000000000;
          walletTotalSent = theResult["amount_out"] / 1000000000;
          walletTotalFees = theResult["fees"] / 1000000000;
          // Set all HTML Variables
          $("#totalWalletBalance").html(walletBalance + " PRN");
          $("#totalWalletReceived").html(walletTotalReceived + " PRN");
          $("#totalWalletSent").html(walletTotalSent + " PRN");
          $("#totalWalletFees").html(walletTotalFees + " PRN");

          var walletOwner = walletLookup(opt2);
          if (walletOwner != undefined && walletOwner.length > 0) {
            walletOwner = walletOwner[0];
            $(".legacyWalletWarningTxt").html(walletOwner["Name"]);
            if (theResult["legacy_wallet"]) {
              $("#totalWalletBalance").html("N/A");
            }
            $(".legacyWalletWarning").show();
          } else {
            if (theResult["legacy_wallet"]) {
              $("#totalWalletBalance").html("N/A");
              $(".legacyWalletWarningTxt").html("Legacy Wallet");
              $(".legacyWalletWarning").show();
            }
          }
        },
      });
    }
    if (opt1 == "walletsearch") {
      var showRestrictedViewTxt = false;
      var theParams = {
        address: opt2,
      };
      var infoURL = "https://api.market.dynexcoin.org/api/v2/network/info";
      var heightToShowTo = globalBlockHeight;
      if (heightToShowTo == "") {
        await $.get(infoURL, function (data, status) {
          heightToShowTo = data.block_header.height;
          theParams = {
            address: opt2,
          };
        });
      }
      const url = new URL(window.location.href);
      url.searchParams.set("wallet", opt2);
      window.history.pushState(null, null, url);
      var walletArr = walletLookup(opt2);
      if (walletArr != undefined && walletArr.length > 0) {
        walletArr = walletArr[0];
        heightToShowTo = heightToShowTo - walletArr["Limit"];
        theParams = {
          address: opt2,
          height: heightToShowTo,
        };
        showRestrictedViewTxt = true;
      }

      var postData = {
        jsonrpc: "2.0",
        id: 1,
        method: "gettransactionsbyaddress",
        params: theParams,
      };
      $.ajax({
        url: rpcEndpoint,
        type: "POST",
        headers: {
          Accept: "application/json",
        },
        data: JSON.stringify(postData),
        success: function (res) {
          if (res["error"]) {
            $("#dataFrameModalData").html(
              "Address not found or has not yet sent a transaction since the transition to non-privacy"
            );
            $("#walletReloadBTN").hide();
            return;
          }
          $("#walletReloadBTN").show();
          var walletBalance = 0;
          var walletTotalReceived = 0;
          var walletTotalSent = 0;
          var walletTotalFees = 0;
          var walletTxCount = 0;
          var theResult = res["result"]["transactions"];
          var walletTemplate = '<div class="row">';
          walletTemplate +=
            '<div class="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-xs-12">';
          walletTemplate +=
            '<table class="table table-sm align-middle table-borderless table-centered table-nowrap mb-0">';
          walletTemplate += "<tr>";
          walletTemplate +=
            '<td colspan="2"><h6 class="mb-2">' + opt2 + "</h6></td>";
          walletTemplate += "</tr>";
          walletTemplate += "<tr>";
          walletTemplate += "<td>Wallet Balance</td>";
          walletTemplate +=
            '<td class="text-right"><span id="totalWalletBalance"><i class="mdi mdi-spin mdi-loading"></i></span></td>';
          walletTemplate += "</tr>";
          walletTemplate += "<tr>";
          walletTemplate += "<td>Total Received</td>";
          walletTemplate +=
            '<td class="text-right"><span id="totalWalletReceived"><i class="mdi mdi-spin mdi-loading"></i></span></td>';
          walletTemplate += "</tr>";
          walletTemplate += "<tr>";
          walletTemplate += "<td>Total Sent</td>";
          walletTemplate +=
            '<td class="text-right"><span id="totalWalletSent"><i class="mdi mdi-spin mdi-loading"></i></span></td>';
          walletTemplate += "</tr>";
          walletTemplate += "<tr>";
          walletTemplate += "<td>Total Fees</td>";
          walletTemplate +=
            '<td class="text-right"><span id="totalWalletFees"><i class="mdi mdi-spin mdi-loading"></i></span></td>';
          walletTemplate += "</tr>";
          walletTemplate += "<tr>";
          walletTemplate += "<td>Tx Count</td>";
          walletTemplate +=
            '<td class="text-right"><span id="totalWalletTX"><i class="mdi mdi-spin mdi-loading"></i></span></td>';
          walletTemplate += "</tr>";
          walletTemplate += "</table>";
          walletTemplate +=
            '<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 legacyWalletWarning" style="display: none;"><small style="padding-left: 5px;">* Balance and Transactions are only shown, post upgrade to non privacy</small></div>';
          if (showRestrictedViewTxt) {
            walletTemplate +=
              '<div class="mt-1"><small style="padding-left: 5px;">* Due to the large number of transaction in this wallet, we show transactions within the last ' +
              walletArr["Limit"] +
              " blocks</small></div>";
          }
          walletTemplate += "</div>";
          walletTemplate +=
            '<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">';
          walletTemplate +=
            '<div class="text-center"><img id="qrWallet" /></div>';
          walletTemplate +=
            '<div class="text-center mt-1 legacyWalletWarning" style="display: none;"><span class="badge border border-warning text-warning legacyWalletWarningTxt"> </span></div>';
          walletTemplate += "</div>";
          walletTemplate += "</div>";
          walletTemplate += "<hr />";
          walletTemplate +=
            '<div class="row" style="max-height: 450px; overflow-x: hidden; overflow-y: scroll">';
          walletTemplate +=
            '<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">';
          theResult.reverse();
          $.each(theResult, function (index, item) {
            walletTxCount++;
            walletTemplate += '<div class="row mb-2">';
            walletTemplate += '<div class="col-6">';
            walletTemplate +=
              '<div><a class="truncate" href="javascript:void(0);" onClick="loadInfo(\'txhash\', \'' +
              theResult[index]["hash"] +
              "', '" +
              theResult[index]["hash"] +
              "', 'modal-xl', 0)\" data-hash='" +
              theResult[index]["hash"] +
              "'>" +
              theResult[index]["hash"] +
              "</a></div>";
            walletTemplate += "</div>";
            walletTemplate += '<div class="col-2">';
            if (theResult[index]["height"] > 0) {
              walletTemplate +=
                "<div><a href=\"javascript:void(0);\" onClick=\"loadInfo('block', '" +
                theResult[index]["height"] +
                "', '" +
                theResult[index]["height"] +
                "', 'modal-xl', 0)\" data-block='" +
                theResult[index]["height"] +
                "'>" +
                theResult[index]["height"] +
                "</a></div>";
            } else {
              walletTemplate += '<div class="text-warning">Pending</div>';
            }
            walletTemplate += "</div>";
            walletTemplate += '<div class="col-2">';
            walletTemplate +=
              '<div class="text-right">Fee: ' +
              parseFloat(theResult[index]["fee"]) / 1000000000 +
              " PRN</div>";
            walletTemplate += "</div>";
            walletTemplate += '<div class="col-2">';
            walletTemplate +=
              '<div class="text-right">' +
              convertUnixtime(theResult[index]["timestamp"]) +
              "</div>";
            walletTemplate += "</div>";
            walletTemplate += "</div>";
            walletTemplate += '<div class="row mb-2">';
            walletTemplate += '<div class="col-6">';
            walletTemplate += '<div class="table-responsive">';
            walletTemplate +=
              '<table class="table table-sm align-middle table-borderless table-centered table-nowrap">';
            walletTemplate += "<thead>";
            walletTemplate += '<th class="pt-0">Input</th>';
            walletTemplate += '<th class="pt-0 text-right">Amount</th>';
            walletTemplate += "</thead>";
            walletTemplate += "<tbody>";
            if (theResult[index]["from_address"] != "") {
              walletTemplate += '<td class="pt-1 pb-1">';
              if (theResult[index]["from_address"] != opt2) {
                var walletFrom = walletLookup(theResult[index]["from_address"]);
                if (walletFrom != undefined && walletFrom.length > 0) {
                  walletFrom = walletFrom[0];
                  walletTemplate +=
                    '<span class="badge border border-' +
                    walletFrom["Color"] +
                    " text-" +
                    walletFrom["Color"] +
                    '">' +
                    walletFrom["Name"] +
                    "</span><br />";
                }
                walletTemplate +=
                  "<a class=\"truncate\" href='javascript:void(0);' onClick=\"loadInfo('walletsearch', '" +
                  theResult[index]["from_address"] +
                  "', '" +
                  theResult[index]["from_address"] +
                  "', 'modal-xl', 0)\" data-wallet='" +
                  theResult[index]["from_address"] +
                  '\' data-bs-toggle="tooltip" data-bs-placement="top" title="' +
                  theResult[index]["from_address"] +
                  '">' +
                  hideWallet(theResult[index]["from_address"]) +
                  "</a>";
              } else {
                walletTemplate +=
                  '<b class="truncate">' +
                  hideWallet(theResult[index]["from_address"]) +
                  "</b>";
              }
              walletTemplate += "</td>";
            }

            var totalAmountIn = 0;
            $.each(theResult[index]["to_address"], function (index2, item2) {
              if (theResult[index]["amount"][index2]) {
                var amountArr = theResult[index]["amount"][index2];
                var amountDecoded = new HexStringToInt64StringConverter(
                  false
                ).convert(amountArr);
                totalAmountIn += parseFloat(amountDecoded);
                if (theResult[index]["from_address"] == opt2) {
                  walletTotalSent += parseFloat(amountDecoded);
                  walletBalance -= parseFloat(
                    amountDecoded + theResult[index]["fee"]
                  );
                  walletTotalFees += parseFloat(theResult[index]["fee"]);
                }
              }
            });
            totalAmountIn = totalAmountIn / 1000000000;
            if (totalAmountIn > 0) {
              walletTemplate += '<td class="pt-1 pb-1 text-right">';
              walletTemplate += "<span>" + totalAmountIn + " PRN</span>";
              walletTemplate += "</td>";
            }
            walletTemplate += "</tbody>";
            walletTemplate += "</table>";
            walletTemplate += "</div>";
            walletTemplate += "</div>";
            walletTemplate += '<div class="col-6">';
            walletTemplate += '<div class="table-responsive">';
            walletTemplate +=
              '<table class="table table-sm align-middle table-borderless table-centered table-nowrap">';
            walletTemplate += "<thead>";
            walletTemplate += '<th class="pt-0">Output</th>';
            walletTemplate += '<th class="pt-0 text-right">Amount</th>';
            walletTemplate += "</thead>";
            walletTemplate += "<tbody>";
            $.each(theResult[index]["to_address"], function (index2, item2) {
              if (theResult[index]["amount"][index2]) {
                var amountArr = theResult[index]["amount"][index2];
                var amountDecoded = new HexStringToInt64StringConverter(
                  false
                ).convert(amountArr);
                var totalAmountOut = parseFloat(amountDecoded) / 1000000000;
                if (item2 == opt2) {
                  walletTotalReceived += parseFloat(amountDecoded);
                  walletBalance += parseFloat(amountDecoded);
                }
              }
              walletTemplate += "<tr>";
              walletTemplate += '<td class="pt-1 pb-1">';
              if (item2 != opt2) {
                var walletTo = walletLookup(item2);
                if (walletTo != undefined && walletTo.length > 0) {
                  walletTo = walletTo[0];
                  walletTemplate +=
                    '<span class="badge border border-' +
                    walletTo["Color"] +
                    " text-" +
                    walletTo["Color"] +
                    '">' +
                    walletTo["Name"] +
                    "</span><br />";
                }
                walletTemplate +=
                  "<a class=\"truncate\" href='javascript:void(0);' onClick=\"loadInfo('walletsearch', '" +
                  item2 +
                  "', '" +
                  item2 +
                  "', 'modal-xl', 0)\" data-wallet='" +
                  item2 +
                  '\' data-bs-toggle="tooltip" data-bs-placement="top" title="' +
                  item2 +
                  '">' +
                  hideWallet(item2) +
                  "</a>";
              } else {
                walletTemplate +=
                  '<b class="truncate">' + hideWallet(item2) + "</b>";
              }
              walletTemplate += "</td>";
              walletTemplate += '<td class="pt-1 pb-1 text-right">';
              walletTemplate += "<span>" + totalAmountOut + " PRN</span>";
              walletTemplate += "</td>";
              walletTemplate += "</tr>";
            });
            walletTemplate += "</tbody>";
            walletTemplate += "</table>";
            walletTemplate += "</div>";
            walletTemplate += "</div>";
            walletTemplate += "</div>";
            walletTemplate += "<hr />";
          });
          walletTemplate += "</div>";
          walletTemplate += "</div>";
          // Set all variables to the Modal
          $("#dataFrameModalData").html(walletTemplate);
          $("#totalWalletTX").html(walletTxCount);
          $("#qrWallet").attr(
            "src",
            "http://chart.apis.google.com/chart?cht=qr&chs=175x175&chld=L|1&chl=" +
              opt2
          );
          rpcCall("walletbalance", opt2);
        },
      });
    }
    if (opt1 == "block" || opt1 == "blocksearch") {
      const url = new URL(window.location.href);
      url.searchParams.set("block", opt2);
      window.history.pushState(null, null, url);

      var postData = {
        jsonrpc: "2.0",
        id: 1,
        method: "getblockbyheight",
        params: {
          blockHeight: parseInt(opt2),
        },
      };
      $.ajax({
        url: rpcEndpoint,
        type: "POST",
        headers: {
          Accept: "application/json",
        },
        data: JSON.stringify(postData),
        success: function (res) {
          if (res["error"]) {
            $("#dataFrameModalData").html("Block ID Not Found");
            return;
          }
          var theResult = res["result"]["block"];
          var totalFees = 0;
          $.each(theResult["transactions"], function (index, item) {
            totalFees += item["fee"];
          });
          var blkTemplate = '<div class="row">';
          blkTemplate += '<div class="col-12">';
          blkTemplate += '<div class="table-responsive">';
          blkTemplate +=
            '<table class="table align-middle table-borderless table-centered table-nowrap mb-0">';
          blkTemplate += "<tr>";
          blkTemplate += "<td>Block ID</td>";
          blkTemplate +=
            "<td class='text-right'>" + theResult["index"] + "</a></td>";
          blkTemplate += "</tr>";
          blkTemplate += "<tr>";
          blkTemplate += "<td>Block Hash</td>";
          blkTemplate +=
            "<td class='text-right'><div class='truncate'>" +
            theResult["hash"] +
            "</div></td>";
          blkTemplate += "</tr>";
          blkTemplate += "<tr>";
          blkTemplate += "<td>Proof of Work</td>";
          blkTemplate +=
            "<td class='text-right'><div class='truncate'>" +
            theResult["proofOfWork"] +
            "</div></td>";
          blkTemplate += "</tr>";
          blkTemplate += "<tr>";
          blkTemplate += "<td>Timestamp</td>";
          blkTemplate +=
            "<td class='text-right'>" +
            convertUnixtime(theResult["timestamp"]) +
            "</td>";
          blkTemplate += "</tr>";
          blkTemplate += "<tr>";
          blkTemplate += "<td>Block Size</td>";
          blkTemplate +=
            "<td class='text-right'>" + theResult["blockSize"] + " Bytes</td>";
          blkTemplate += "</tr>";
          blkTemplate += "<tr>";
          blkTemplate += "<td>Difficulty</td>";
          blkTemplate +=
            "<td class='text-right'>" + theResult["difficulty"] + "</td>";
          blkTemplate += "</tr>";
          blkTemplate += "<tr>";
          blkTemplate += "<td>Total Reward</td>";
          blkTemplate +=
            "<td class='text-right'>" +
            theResult["reward"] / 1000000000 +
            " DNX</td>";
          blkTemplate += "</tr>";
          blkTemplate += "<tr>";
          blkTemplate += "<td>Total Fees</td>";
          blkTemplate +=
            "<td class='text-right'>" + totalFees / 1000000000 + " PRN</td>";
          blkTemplate += "</tr>";
          blkTemplate += "</table>";
          blkTemplate += "</div>";
          blkTemplate += "</div>";
          blkTemplate += "</div>";
          blkTemplate += "<hr />";
          blkTemplate += '<div class="row">';
          blkTemplate += '<div class="col-12">';
          blkTemplate += "<h4>Transactions</h4>";
          blkTemplate += '<div class="table-responsive">';
          blkTemplate +=
            '<div class="table-wrapper-scroll-y my-custom-scrollbar2">';
          blkTemplate +=
            '<table class="table align-middle table-borderless table-centered table-nowrap mb-0">';
          blkTemplate += "<thead>";
          blkTemplate += "<tr>";
          blkTemplate += "<th>TX-Hash & Public Key</th>";
          blkTemplate += "<th class='text-right'>Inputs</th>";
          blkTemplate += "<th class='text-right'>In</th>";
          blkTemplate += "<th class='text-right'>Ouputs</th>";
          blkTemplate += "<th class='text-right'>Out</th>";
          blkTemplate += "<th class='text-right'>Fee</th>";
          blkTemplate += "<th class='text-right'>Unlock</th>";
          blkTemplate += "</tr>";
          blkTemplate += "</thead>";
          blkTemplate += "<tbody>";
          $.each(theResult["transactions"], function (index, item) {
            blkTemplate += "<tr>";
            blkTemplate +=
              "<td><div><a href='javascript:void(0);' onClick=\"loadInfo('txhash', '" +
              item["hash"] +
              "', '" +
              item["hash"] +
              "', 'modal-xl', 0)\" data-hash='" +
              item["hash"] +
              "'>" +
              item["hash"] +
              "</a></div><div><small>Key: " +
              item["extra"]["publicKey"] +
              "</small></div></td>";
            blkTemplate +=
              "<td class='text-right'>" + item["inputs"].length + "</td>";
            blkTemplate +=
              "<td class='text-right'>" +
              item["totalInputsAmount"] / 1000000000 +
              "</td>";
            blkTemplate +=
              "<td class='text-right'>" + item["outputs"].length + "</td>";
            blkTemplate +=
              "<td class='text-right'>" +
              item["totalOutputsAmount"] / 1000000000 +
              "</td>";
            blkTemplate +=
              "<td class='text-right'>" +
              formatNumbers(parseFloat(item["fee"]) / 1000000000) +
              "</td>";
            blkTemplate +=
              "<td class='text-right'>" + item["unlockTime"] + "</td>";
            blkTemplate += "</tr>";
          });
          blkTemplate += "</tbody>";
          blkTemplate += "</table>";
          blkTemplate += "</div>";
          blkTemplate += "</div>";
          blkTemplate += "</div>";
          blkTemplate += "</div>";
          $("#dataFrameModalData").html(blkTemplate);
        },
      });
    }
  }

  var endpointURL = "";
  $("#dataFrameModalSize")
    .removeClass()
    .addClass("modal-dialog")
    .addClass(opt4);
  if (opt1 == "pool") {
    $("#dataFrameModalLabel").html("Pool Statistics");
    endpointURL =
      "https://api.market.dynexcoin.org/api/v2/network/pool_info?blocks=1000";
  }
  if (opt1 == "pouwjobs") {
    $("#dataFrameModalLabel").html("PoUW Job Information");
    var endpointURL = "https://api.market.dynexcoin.org/api/v2/network/jobs";
  }
  if (opt1 == "txhash" || opt1 == "txsearch") {
    $("#dataFrameModalLabel").html("Transaction Details");
  }
  if (opt1 == "block" || opt1 == "blocksearch") {
    $("#dataFrameModalLabel").html("Block Details");
  }
  if (opt1 == "api") {
    $("#dataFrameModalLabel").html("API Endpoints");
  }
  if (opt1 == "walletsearch") {
    var opt2Orig = opt2;
    opt2 = $("#" + opt3).val();
    if (opt2 == "" || opt2 == undefined) {
      opt2 = opt2Orig;
    }
    $("#" + opt3).val("");
    var walletReloadBtnDiv =
      '<div id="walletReloadBTN" style="display: none;"></div>';
    var walletReloadBtn =
      '<button type="button" class="btn btn-sm btn-secondary pull-right" onClick="loadInfo(\'walletsearch\', \'' +
      opt2 +
      "', '" +
      opt2 +
      "', 'modal-xl', 0)\" data-wallet='" +
      opt2 +
      "'>Refresh Wallet</button>";
    $("#dataFrameModalLabel").html("Wallet Information");
    if (document.getElementById("walletReloadBTN") == null) {
      $("#dataFrameModalLabel").after(walletReloadBtnDiv);
    }
    $("#walletReloadBTN").html(walletReloadBtn);
  }

  if (
    opt1 == "txhash" ||
    opt1 == "txsearch" ||
    opt1 == "block" ||
    opt1 == "blocksearch" ||
    opt1 == "walletsearch"
  ) {
    rpcCall(opt1, opt2);
  } else {
    if (opt1 == "api") {
      var apiTemplate =
        '<table class="table align-middle table-borderless table-centered table-nowrap mb-0">';
      apiTemplate += "<tr>";
      apiTemplate += "<td>Circulating Supply</td>";
      apiTemplate +=
        '<td class=\'text-right\'><a href="https://explorer.dynexcoin.org/api_supply" target="_blank">https://explorer.dynexcoin.org/api_supply</a></td>';
      apiTemplate += "</tr>";
      apiTemplate += "<tr>";
      apiTemplate += "<td>Summary Information</td>";
      apiTemplate +=
        '<td class=\'text-right\'><a href="https://explorer.dynexcoin.org/api" target="_blank">https://explorer.dynexcoin.org/api</a></td>';
      apiTemplate += "</tr>";
      apiTemplate += "<tr>";
      apiTemplate += "<td>Historical Hashrate</td>";
      apiTemplate +=
        '<td class=\'text-right\'><a href="https://explorer.dynexcoin.org/hashrate" target="_blank">https://explorer.dynexcoin.org/hashrate</a></td>';
      apiTemplate += "</tr>";
      apiTemplate += "<tr>";
      apiTemplate += "<td>Historical PoUW Job Information</td>";
      apiTemplate +=
        '<td class=\'text-right\'><a href="https://explorer.dynexcoin.org/jobs" target="_blank">https://explorer.dynexcoin.org/jobs</a></td>';
      apiTemplate += "</tr>";
      apiTemplate += "<tr>";
      apiTemplate += "<td>Block metrics (hourly)</td>";
      apiTemplate +=
        '<td class=\'text-right\'><a href="https://explorer.dynexcoin.org/blockmetrics" target="_blank">https://explorer.dynexcoin.org/blockmetrics</a></td>';
      apiTemplate += "</tr>";
      apiTemplate += "<tr>";
      apiTemplate += "<td>Completed PoUW Jobs</td>";
      apiTemplate +=
        '<td class=\'text-right\'><a href="https://cloud.dynexcoin.org/apijobs.php?jobtype=finished" target="_blank">https://cloud.dynexcoin.org/apijobs.php?jobtype=finished</a></td>';
      apiTemplate += "</tr>";
      apiTemplate += "<tr>";
      apiTemplate += "<td>Current Running PoUW Jobs</td>";
      apiTemplate +=
        '<td class=\'text-right\'><a href="https://cloud.dynexcoin.org/apijobs.php?jobtype=inprogress" target="_blank">https://cloud.dynexcoin.org/apijobs.php?jobtype=inprogress</a></td>';
      apiTemplate += "</tr>";
      apiTemplate += "</table>";
      $("#dataFrameModalData").html(apiTemplate);
    } else {
      $.get(endpointURL, function (data, status) {
        if (opt1 == "pool") {
          var dataCleaned = data["data"][opt5];
          var poolTemplate =
            '<table class="table align-middle table-borderless table-centered table-nowrap mb-0">';
          poolTemplate += "<tr>";
          poolTemplate += "<td>Pool Name</td>";
          poolTemplate +=
            "<td class='text-right'>" +
            dataCleaned["mining_pool_name"] +
            "</td>";
          poolTemplate += "</tr>";
          poolTemplate += "<tr>";
          poolTemplate += "<td>Registered Workers</td>";
          poolTemplate +=
            "<td class='text-right'>" + dataCleaned["workers_count"] + "</td>";
          poolTemplate += "</tr>";
          poolTemplate += "<tr>";
          poolTemplate += "<td>Registered Blocks (1000 Blocks)</td>";
          poolTemplate +=
            "<td class='text-right'>" +
            parseFloat(dataCleaned["shares_ratio"] * 1000).toFixed(0) +
            "</td>";
          poolTemplate += "</tr>";
          poolTemplate += "<tr>";
          poolTemplate += "<td>Share Ratio (1000 Blocks)</td>";
          poolTemplate +=
            "<td class='text-right'>" +
            parseFloat(dataCleaned["shares_ratio"] * 100).toFixed(2) +
            "%</td>";
          poolTemplate += "</tr>";
          poolTemplate += "</table>";
          $("#dataFrameModalData").html(poolTemplate);
        }
        if (opt1 == "pouwjobs") {
          var dataCleaned = findObjectById(data["data"], parseInt(opt2));
          var formattedDatetimeStart = formatDatetime(
            dataCleaned["created_at"]
          );
          var formattedDatetimeEnd = "";
          var formattedDuration = "";

          if (
            dataCleaned["closed_at"] != null &&
            dataCleaned["closed_at"] != undefined
          ) {
            formattedDatetimeEnd = formatDatetime(dataCleaned["closed_at"]);
            var formattedTimeGap = calculateDuration(
              dataCleaned["created_at"],
              dataCleaned["closed_at"]
            );
            formattedDuration = formatDuration(formattedTimeGap);
          }
          var jobStatus = "";
          if (dataCleaned["status"] == 0) {
            jobStatus = "<span class='text-warning'>Queued</span>";
          }
          if (dataCleaned["status"] == 1) {
            jobStatus = "<span class='text-warning'>Running</span>";
          }
          if (dataCleaned["status"] == 2) {
            jobStatus = "<span class='text-success'>Complete</span>";
          }
          if (
            dataCleaned["cancel_reason"] != "FINISH" &&
            dataCleaned["cancel_reason"] != ""
          ) {
            jobStatus = "<span class='text-danger'>Cancelled</span>";
          }

          var jobTemplate =
            '<table class="table align-middle table-borderless table-centered table-nowrap mb-2">';
          jobTemplate += "<tr>";
          jobTemplate += "<td>Job ID</td>";
          jobTemplate +=
            "<td class='text-right'><h4>" + dataCleaned["id"] + "</h4></td>";
          jobTemplate += "</tr>";
          jobTemplate += "<tr>";
          jobTemplate += "<td>Job Status</td>";
          jobTemplate += "<td class='text-right'>" + jobStatus + "</td>";
          jobTemplate += "</tr>";
          jobTemplate += "</table>";
          jobTemplate += "<hr />";
          jobTemplate +=
            '<table class="table align-middle table-borderless table-centered table-nowrap mb-2">';
          jobTemplate += "<tr>";
          jobTemplate += "<td>Job Start</td>";
          jobTemplate +=
            "<td class='text-right'>" + dataCleaned["created_at"] + "</td>";
          jobTemplate += "</tr>";
          if (
            dataCleaned["closed_at"] != null &&
            dataCleaned["closed_at"] != undefined
          ) {
            jobTemplate += "<tr>";
            jobTemplate += "<td>Job End</td>";
            jobTemplate +=
              "<td class='text-right'>" + dataCleaned["closed_at"] + "</td>";
            jobTemplate += "</tr>";
            jobTemplate += "<tr>";
            jobTemplate += "<td>Job Duration</td>";
            jobTemplate +=
              "<td class='text-right'>" + formattedDuration + "</td>";
            jobTemplate += "</tr>";
          }
          jobTemplate += "<tr>";
          jobTemplate += "<td>Job Description</td>";
          jobTemplate +=
            "<td class='text-right'>" + dataCleaned["description"] + "</td>";
          jobTemplate += "</tr>";
          jobTemplate += "<tr>";
          jobTemplate += "<td>Job Fee</td>";
          jobTemplate +=
            "<td class='text-right'>" +
            formatDNX(dataCleaned["fee"], 5) +
            "</td>";
          jobTemplate += "</tr>";
          jobTemplate += "<tr>";
          jobTemplate += "<td>Job Reward</td>";
          jobTemplate +=
            "<td class='text-right'>" +
            formatDNX(dataCleaned["total_job_cost"], 5) +
            "</td>";
          jobTemplate += "</tr>";
          jobTemplate += "</table>";
          jobTemplate += "<hr />";
          jobTemplate += "<h4>Job Statistics</h4>";
          jobTemplate +=
            '<table class="table align-middle table-borderless table-centered table-nowrap mb-0">';
          if (opt6 != null) {
            jobTemplate += "<tr>";
            jobTemplate += "<td>Chips Used</td>";
            jobTemplate +=
              "<td class='text-right'>" +
              formatNumbers(parseInt(dataCleaned["chips_required"])) +
              "</td>";
            jobTemplate += "</tr>";
            if (dataCleaned["workers"] >= 0) {
              jobTemplate += "<tr>";
              jobTemplate += "<td>Workers</td>";
              jobTemplate +=
                "<td class='text-right'>" +
                formatNumbers(parseInt(dataCleaned["workers"])) +
                "</td>";
              jobTemplate += "</tr>";
              jobTemplate += "<tr>";
              jobTemplate += "<td>LOC</td>";
              jobTemplate +=
                "<td class='text-right'>" +
                formatNumbers(parseInt(dataCleaned["min_loc"])) +
                "</td>";
              jobTemplate += "</tr>";
              jobTemplate += "<tr>";
              jobTemplate += "<td>Energy</td>";
              jobTemplate +=
                "<td class='text-right'>" +
                formatNumbers(parseInt(dataCleaned["min_energy"])) +
                "</td>";
              jobTemplate += "</tr>";
            }
          } else {
            jobTemplate += "<tr>";
            jobTemplate += "<td>Chips In Use</td>";
            jobTemplate +=
              "<td class='text-right'>" +
              formatNumbers(parseInt(dataCleaned["chips_required"])) +
              "</td>";
            jobTemplate += "</tr>";
            jobTemplate += "<tr>";
            jobTemplate += "<td>Workers</td>";
            jobTemplate +=
              "<td class='text-right'>" +
              formatNumbers(parseInt(dataCleaned["workers"])) +
              "</td>";
            jobTemplate += "</tr>";
            jobTemplate += "<tr>";
            jobTemplate += "<td>LOC</td>";
            jobTemplate +=
              "<td class='text-right'>" +
              formatNumbers(parseInt(dataCleaned["min_loc"])) +
              "</td>";
            jobTemplate += "</tr>";
            jobTemplate += "<tr>";
            jobTemplate += "<td>Energy</td>";
            jobTemplate +=
              "<td class='text-right'>" +
              formatNumbers(parseFloat(dataCleaned["min_energy"])) +
              "</td>";
            jobTemplate += "</tr>";
          }
          jobTemplate += "</table>";
          $("#dataFrameModalData").html(jobTemplate);
        }
      });
    }
  }
}

// Proton API Endpoint Functions
function loadBlockchain() {
  var endpointURL = "https://api.market.dynexcoin.org/api/v2/network/info";
  $.get(endpointURL, function (data, status) {
    var dataCleaned = data;
    globalBlockHeight = dataCleaned.block_header.height;
    $("#networkBlockHeight")
      .html(dataCleaned.block_header.height)
      .attr("data-target", dataCleaned.block_header.height);
    $("#networkReward")
      .html(dataCleaned.block_header.next_reward / 1000000000)
      .attr("data-target", dataCleaned.block_header.next_reward / 1000000000);
    $("#lastestBlock")
      .html(
        '<a href=\'javascript:void(0);\' data-bs-toggle="modal" data-bs-target="#dataFrame" onClick="loadInfo(\'block\', ' +
          dataCleaned.block_header.last_known_block_index +
          ", " +
          dataCleaned.block_header.last_known_block_index +
          ", 'modal-xl', 0)\" data-hash='" +
          dataCleaned.block_header.last_known_block_index +
          "'>" +
          dataCleaned.block_header.last_known_block_index +
          "</a>"
      )
      .attr("data-target", dataCleaned.block_header.last_known_block_index);
    $("#avgBlockTime")
      .html(roundNumber(dataCleaned.job_data.AVG_BLOCKTIME_SECONDS))
      .attr(
        "data-target",
        roundNumber(dataCleaned.job_data.AVG_BLOCKTIME_SECONDS)
      );
    $("#pouwThisYear")
      .html(dataCleaned.job_data.ALL_JOBS)
      .attr("data-target", dataCleaned.job_data.ALL_JOBS);
  });

  // Load Marketplace Data - Added 14th Dec 2023
  var endpointURL2 =
    "https://api.market.dynexcoin.org/api/v2/network/jobs/avg_fee";
  $.get(endpointURL2, function (data, status) {
    $("#avgBlockFeeCompute")
      .html(formatNumbers(formatDNX(data["avg_fee"], 3)) + " PRN")
      .attr("data-target", data["avg_fee"]);
  });
  var endpointURL3 =
    "https://api.market.dynexcoin.org/api/v2/network/jobs/payment_stats";
  $.get(endpointURL3, function (data, status) {
    $("#totalPouwSolutions")
      .html(formatNumbers(formatDNX(data["solution_fee"], 3)) + " PRN")
      .attr("data-target", data["solution_fee"]);
    $("#totalDevFees")
      .html(formatNumbers(formatDNX(data["dev_fee"], 3)) + " PRN")
      .attr("data-target", data["dev_fee"]);
    $("#totalPouwFees")
      .html(formatNumbers(formatDNX(data["block_fee"], 3)) + " PRN")
      .attr("data-target", data["totalPouwFees"]);
  });
  var endpointURL4 =
    "https://api.market.dynexcoin.org/api/v2/network/stats/average_block_rewards";
  $.get(endpointURL4, function (data, status) {
    $("#networkReward2")
      .html(data["averageBlockReward"])
      .attr("data-target", data["averageBlockReward"]);
  });
  var endpointURL5 =
    "https://api.market.dynexcoin.org/api/v2/network/stats/status";
  $.get(endpointURL5, function (data, status) {
    $("#gpuCount")
      .html(formatNumbers(parseInt(data["gpus"])))
      .attr("data-target", data["gpus"]);
    $("#connectedMiners")
      .html(formatNumbers(parseInt(data["miners"])))
      .attr("data-target", data["miners"]);
    $("#networkDiff")
      .html(formatNumbers(parseInt(data["difficulty"])))
      .attr("data-target", data["difficulty"]);
    $("#networkHashrate")
      .html(formatHashrate(data["hashrate"]))
      .attr("data-target", data["hashrate"]);
  });
}
function loadMallobMetrics() {
  $("#poolWorkersData").html(
    '<tr><td colspan="3"><i class="mdi mdi-36px mdi-spin mdi-loading"></i></td></tr>'
  ); // This will stop duplication if the function is re-called
  var endpointURL =
    "https://api.market.dynexcoin.org/api/v2/network/pool_info?blocks=1000";
  $.get(endpointURL, function (data, status) {
    var dataCleaned = data["data"];
    var poolsTemplate = "";
    $.each(dataCleaned, function (index, item) {
      poolsTemplate += "<tr>";
      poolsTemplate +=
        "<td><a href='javascript:void(0);' data-bs-toggle=\"modal\" data-bs-target=\"#dataFrame\" onClick=\"loadInfo('pool', '" +
        item["mining_pool_name"] +
        "', '" +
        item["pool_id"] +
        "', 'modal-lg', " +
        index +
        ")\" data-pool='" +
        item["mining_pool_name"] +
        "'>" +
        item["mining_pool_name"] +
        "</a></td>";
      poolsTemplate +=
        "<td class='text-right'>" + item["workers_count"] + "</td>";
      poolsTemplate +=
        "<td class='text-right'>" +
        parseFloat(item["shares_ratio"] * 100).toFixed(2) +
        "%</td>";
      poolsTemplate += "</tr>";
    });
    $("#poolWorkersData").html(poolsTemplate);
  });
}
function loadPouwJobs() {
  $("#pouwJobHistory").html(
    '<tr><td colspan="13"><i class="mdi mdi-36px mdi-spin mdi-loading"></i></td></tr>'
  ); // This will stop duplication if the function is re-called
  var endpointURL = "https://api.market.dynexcoin.org/api/v2/network/jobs";
  $.get(endpointURL, function (data, status) {
    var dataCleaned = data["data"];
    var pouwTemplate = "";
    $.each(dataCleaned, function (index, item) {
      var formattedDatetimeStart = formatDatetime(item["created_at"]);
      var formattedDatetimeEnd = "";
      var formattedDuration = "";

      if (item["closed_at"] != null && item["closed_at"] != undefined) {
        formattedDatetimeEnd = formatDatetime(item["closed_at"]);
        var formattedTimeGap = calculateDuration(
          item["created_at"],
          item["closed_at"]
        );
        formattedDuration = formatDuration(formattedTimeGap);
      }
      var completeMSG = "";
      if (item["status"] == 0) {
        completeMSG = "<span class='text-warning'>Queued</span>";
      }
      if (item["status"] == 1) {
        completeMSG = "<span class='text-warning'>Running</span>";
      }
      if (item["status"] == 2) {
        completeMSG = "<span class='text-success'>Complete</span>";
      }
      if (item["cancel_reason"] != "FINISH" && item["cancel_reason"] != "") {
        completeMSG = "<span class='text-danger'>Cancelled</span>";
      }

      pouwTemplate += "<tr>";
      pouwTemplate += "<td>" + convertToJobtype(item["type"]) + "</td>";
      pouwTemplate +=
        "<td><a href='javascript:void(0);' data-bs-toggle=\"modal\" data-bs-target=\"#dataFrame\" onClick=\"loadInfo('pouwjobs', '" +
        item["id"] +
        "', '" +
        item["id"] +
        "', 'modal-lg', " +
        index +
        ")\" data-jobid='" +
        item["id"] +
        "'>" +
        item["id"] +
        "</a></td>";
      pouwTemplate += "<td>" + formattedDatetimeStart + "</td>";
      pouwTemplate += "<td>" + formattedDatetimeEnd + "</td>";
      pouwTemplate += "<td>" + formattedDuration + "</td>";
      pouwTemplate += "<td>" + item["description"] + "</td>";
      pouwTemplate +=
        "<td class='text-right'>" +
        formatNumbers(parseInt(item["chips_required"])) +
        "</td>";
      pouwTemplate +=
        "<td class='text-right'>" +
        formatNumbers(parseFloat(item["fee"])) +
        "</td>";
      pouwTemplate +=
        "<td class='text-right'>" +
        formatNumbers(parseInt(item["workers"])) +
        "</td>";
      pouwTemplate +=
        "<td class='text-right'>" +
        formatNumbers(parseInt(item["min_loc"])) +
        "</td>";
      pouwTemplate +=
        "<td class='text-right'>" +
        formatNumbers(parseFloat(item["min_energy"])) +
        "</td>";
      pouwTemplate +=
        "<td class='text-right'>" +
        formatNumbers(parseFloat(item["total_job_cost"])) +
        "</td>";
      pouwTemplate +=
        "<td class='text-right'><span class='text-warning'>" +
        completeMSG +
        "</span></td>";
      pouwTemplate += "</tr>";
    });
    $("#pouwJobHistory").html(pouwTemplate);
  });
}
function formatDatetime(datetimeString) {
  const datetime = new Date(datetimeString);

  const year = datetime.getFullYear();
  const month = String(datetime.getMonth() + 1).padStart(2, "0");
  const day = String(datetime.getDate()).padStart(2, "0");
  const hours = String(datetime.getHours()).padStart(2, "0");
  const minutes = String(datetime.getMinutes()).padStart(2, "0");
  const seconds = String(datetime.getSeconds()).padStart(2, "0");

  const formattedDatetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDatetime;
}
function formatDuration(duration) {
  const hours = String(duration.hours).padStart(2, "0");
  const minutes = String(duration.minutes).padStart(2, "0");
  const seconds = String(duration.seconds).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}
function calculateDuration(startDatetimeString, endDatetimeString) {
  const startDatetime = new Date(startDatetimeString);
  const endDatetime = new Date(endDatetimeString);

  const durationInMilliseconds = endDatetime - startDatetime;

  // Convert the duration to hours, minutes, and seconds
  const hours = Math.floor(durationInMilliseconds / 3600000);
  const minutes = Math.floor((durationInMilliseconds % 3600000) / 60000);
  const seconds = Math.floor((durationInMilliseconds % 60000) / 1000);

  return {
    hours,
    minutes,
    seconds,
    durationInMilliseconds,
  };
}
function getYearAndMonth(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month since it's zero-based
  return `${year}-${month}`;
}
function HexStringToInt64StringConverter(signed) {
  var hexCode = {
    0: "0000",
    1: "0001",
    2: "0010",
    3: "0011",
    4: "0100",
    5: "0101",
    6: "0110",
    7: "0111",
    8: "1000",
    9: "1001",
    a: "1010",
    b: "1011",
    c: "1100",
    d: "1101",
    e: "1110",
    f: "1111",
  };
  var preComputedLongMath = {
    20: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    21: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    22: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    23: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
    24: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6],
    25: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2],
    26: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 4],
    27: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 8],
    28: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 6],
    29: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 2],
    210: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 4],
    211: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 8],
    212: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 9, 6],
    213: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 9, 2],
    214: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 3, 8, 4],
    215: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 7, 6, 8],
    216: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5, 3, 6],
    217: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 7, 2],
    218: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 2, 1, 4, 4],
    219: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 4, 2, 8, 8],
    220: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 8, 5, 7, 6],
    221: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 9, 7, 1, 5, 2],
    222: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 9, 4, 3, 0, 4],
    223: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 3, 8, 8, 6, 0, 8],
    224: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 7, 7, 7, 2, 1, 6],
    225: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 5, 5, 4, 4, 3, 2],
    226: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7, 1, 0, 8, 8, 6, 4],
    227: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 4, 2, 1, 7, 7, 2, 8],
    228: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 8, 4, 3, 5, 4, 5, 6],
    229: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 6, 8, 7, 0, 9, 1, 2],
    230: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 7, 3, 7, 4, 1, 8, 2, 4],
    231: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 4, 7, 4, 8, 3, 6, 4, 8],
    232: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 9, 4, 9, 6, 7, 2, 9, 6],
    233: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 5, 8, 9, 9, 3, 4, 5, 9, 2],
    234: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 1, 7, 9, 8, 6, 9, 1, 8, 4],
    235: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3, 5, 9, 7, 3, 8, 3, 6, 8],
    236: [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 8, 7, 1, 9, 4, 7, 6, 7, 3, 6],
    237: [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 7, 4, 3, 8, 9, 5, 3, 4, 7, 2],
    238: [0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 4, 8, 7, 7, 9, 0, 6, 9, 4, 4],
    239: [0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 9, 7, 5, 5, 8, 1, 3, 8, 8, 8],
    240: [0, 0, 0, 0, 0, 0, 0, 1, 0, 9, 9, 5, 1, 1, 6, 2, 7, 7, 7, 6],
    241: [0, 0, 0, 0, 0, 0, 0, 2, 1, 9, 9, 0, 2, 3, 2, 5, 5, 5, 5, 2],
    242: [0, 0, 0, 0, 0, 0, 0, 4, 3, 9, 8, 0, 4, 6, 5, 1, 1, 1, 0, 4],
    243: [0, 0, 0, 0, 0, 0, 0, 8, 7, 9, 6, 0, 9, 3, 0, 2, 2, 2, 0, 8],
    244: [0, 0, 0, 0, 0, 0, 1, 7, 5, 9, 2, 1, 8, 6, 0, 4, 4, 4, 1, 6],
    245: [0, 0, 0, 0, 0, 0, 3, 5, 1, 8, 4, 3, 7, 2, 0, 8, 8, 8, 3, 2],
    246: [0, 0, 0, 0, 0, 0, 7, 0, 3, 6, 8, 7, 4, 4, 1, 7, 7, 6, 6, 4],
    247: [0, 0, 0, 0, 0, 1, 4, 0, 7, 3, 7, 4, 8, 8, 3, 5, 5, 3, 2, 8],
    248: [0, 0, 0, 0, 0, 2, 8, 1, 4, 7, 4, 9, 7, 6, 7, 1, 0, 6, 5, 6],
    249: [0, 0, 0, 0, 0, 5, 6, 2, 9, 4, 9, 9, 5, 3, 4, 2, 1, 3, 1, 2],
    250: [0, 0, 0, 0, 1, 1, 2, 5, 8, 9, 9, 9, 0, 6, 8, 4, 2, 6, 2, 4],
    251: [0, 0, 0, 0, 2, 2, 5, 1, 7, 9, 9, 8, 1, 3, 6, 8, 5, 2, 4, 8],
    252: [0, 0, 0, 0, 4, 5, 0, 3, 5, 9, 9, 6, 2, 7, 3, 7, 0, 4, 9, 6],
    253: [0, 0, 0, 0, 9, 0, 0, 7, 1, 9, 9, 2, 5, 4, 7, 4, 0, 9, 9, 2],
    254: [0, 0, 0, 1, 8, 0, 1, 4, 3, 9, 8, 5, 0, 9, 4, 8, 1, 9, 8, 4],
    255: [0, 0, 0, 3, 6, 0, 2, 8, 7, 9, 7, 0, 1, 8, 9, 6, 3, 9, 6, 8],
    256: [0, 0, 0, 7, 2, 0, 5, 7, 5, 9, 4, 0, 3, 7, 9, 2, 7, 9, 3, 6],
    257: [0, 0, 1, 4, 4, 1, 1, 5, 1, 8, 8, 0, 7, 5, 8, 5, 5, 8, 7, 2],
    258: [0, 0, 2, 8, 8, 2, 3, 0, 3, 7, 6, 1, 5, 1, 7, 1, 1, 7, 4, 4],
    259: [0, 0, 5, 7, 6, 4, 6, 0, 7, 5, 2, 3, 0, 3, 4, 2, 3, 4, 8, 8],
    260: [0, 1, 1, 5, 2, 9, 2, 1, 5, 0, 4, 6, 0, 6, 8, 4, 6, 9, 7, 6],
    261: [0, 2, 3, 0, 5, 8, 4, 3, 0, 0, 9, 2, 1, 3, 6, 9, 3, 9, 5, 2],
    262: [0, 4, 6, 1, 1, 6, 8, 6, 0, 1, 8, 4, 2, 7, 3, 8, 7, 9, 0, 4],
    263: [0, 9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8],
    264: [1, 8, 4, 4, 6, 7, 4, 4, 0, 7, 3, 7, 0, 9, 5, 5, 1, 6, 1, 6],
    265: [3, 6, 8, 9, 3, 4, 8, 8, 1, 4, 7, 4, 1, 9, 1, 0, 3, 2, 3, 2],
  };
  if (typeof signed != "boolean") signed = false;
  function toBinary(hex) {
    hex = hex.toLowerCase();
    var binary = "";
    for (var i = 0; i < hex.length; i++) {
      binary += hexCode[hex[i]];
    }
    return binary;
  }
  function to1nsComplement(binary) {
    var compliment = "";
    for (var i = 0; i < binary.length; i++) {
      compliment += binary.charAt(i) == "1" ? "0" : "1";
    }
    return compliment;
  }
  function arrayAdd(a, b) {
    var carry = 0;
    var number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 19; i >= 0; i--) {
      number[i] = a[i] + b[i] + carry;
      if (number[i].toString().length > 1) {
        carry = parseInt(
          number[i].toString().substring(0, number[i].toString().length - 1),
          10
        );
        number[i] = parseInt(
          number[i].toString().substring(number[i].toString().length - 1),
          10
        );
      } else {
        carry = 0;
      }
    }
    return number;
  }
  function removeZeroPad(number) {
    var lock = false;
    var output = [];
    for (var i = 0; i < number.length; i++) {
      if (lock) {
        output.push(number[i]);
      } else {
        if (number[i] != 0) {
          lock = true;
          output.push(number[i]);
        }
      }
    }
    return output;
  }
  function binaryToDec(binary) {
    var negative = false;
    if (signed && binary.charAt(0) == 1) {
      negative = true;
    }
    if (signed) {
      binary = binary.substring(1);
      if (negative) {
        binary = to1nsComplement(binary);
      }
    }
    var pos = 0;
    var number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = binary.length - 1; i >= 0; i--) {
      if (binary.charAt(i) == 1) {
        number = arrayAdd(number, preComputedLongMath["2" + pos]);
      }
      pos++;
    }
    if (negative) {
      number = removeZeroPad(arrayAdd(number, preComputedLongMath["20"]));
      number.splice(0, 0, "-");
    } else {
      number = removeZeroPad(number);
    }
    return number.join("");
  }
  this.convert = function (hex) {
    var binary = toBinary(hex);
    return binaryToDec(binary);
  };
}
function findObjectById(arr, targetId) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === targetId) {
      return arr[i];
    }
  }
  // Return null if the object with the specified ID is not found
  return null;
}
function loadTransactions() {
  $("#transactionsHistory").html(
    '<tr><td colspan="6"><i class="mdi mdi-36px mdi-spin mdi-loading"></i></td></tr>'
  );
  var endpointURL =
    "https://api.market.dynexcoin.org/api/v2/network/legacy/api_transactions";
  $.get(endpointURL, function (data, status) {
    var dataCleaned = data;
    var transactionTemplate = "";
    $.each(dataCleaned, function (index, item) {
      var receiveAddrCNT = item[8].length;
      var sendingAddr = item[7];
      if (sendingAddr != "") {
        var walletOwnerSender = walletLookup(item[7]);
        if (walletOwnerSender != undefined && walletOwnerSender.length > 0) {
          walletOwnerSender = walletOwnerSender[0];
          sendingAddr =
            '<span class="badge border border-' +
            walletOwnerSender["Color"] +
            " text-" +
            walletOwnerSender["Color"] +
            '">' +
            walletOwnerSender["Name"] +
            "</span><br />";
          sendingAddr +=
            "<a href='javascript:void(0);' data-bs-toggle=\"modal\" data-bs-target=\"#dataFrame\" onClick=\"loadInfo('walletsearch', '" +
            item[7] +
            "', '" +
            item[7] +
            "', 'modal-xl', 0)\" data-wallet='" +
            item[7] +
            '\' data-bs-toggle="tooltip" data-bs-placement="top" title="' +
            item[7] +
            '">';
          sendingAddr += hideWallet(item[7]);
          sendingAddr += "</a>";
        } else {
          sendingAddr =
            "<a href='javascript:void(0);' data-bs-toggle=\"modal\" data-bs-target=\"#dataFrame\" onClick=\"loadInfo('walletsearch', '" +
            item[7] +
            "', '" +
            item[7] +
            "', 'modal-xl', 0)\" data-wallet='" +
            item[7] +
            '\' data-bs-toggle="tooltip" data-bs-placement="top" title="' +
            item[7] +
            '">';
          sendingAddr += hideWallet(item[7]);
          sendingAddr += "</a>";
        }
      }
      var receiveAddr = item[8];
      if (receiveAddrCNT > 1) {
        receiveAddr = "Multiple";
      } else {
        if (receiveAddrCNT == 1) {
          var walletOwnerReceive = walletLookup(item[8]);
          if (
            walletOwnerReceive != undefined &&
            walletOwnerReceive.length > 0
          ) {
            walletOwnerReceive = walletOwnerReceive[0];
            receiveAddr =
              '<span class="badge border border-' +
              walletOwnerReceive["Color"] +
              " text-" +
              walletOwnerReceive["Color"] +
              '">' +
              walletOwnerReceive["Name"] +
              "</span><br />";
            receiveAddr +=
              "<a href='javascript:void(0);' data-bs-toggle=\"modal\" data-bs-target=\"#dataFrame\" onClick=\"loadInfo('walletsearch', '" +
              item[8] +
              "', '" +
              item[8] +
              "', 'modal-xl', 0)\" data-wallet='" +
              item[8][0] +
              '\' data-bs-toggle="tooltip" data-bs-placement="top" title="' +
              item[8][0] +
              '">' +
              hideWallet(item[8][0]) +
              "</a>";
          } else {
            receiveAddr =
              "<a href='javascript:void(0);' data-bs-toggle=\"modal\" data-bs-target=\"#dataFrame\" onClick=\"loadInfo('walletsearch', '" +
              item[8] +
              "', '" +
              item[8] +
              "', 'modal-xl', 0)\" data-wallet='" +
              item[8][0] +
              '\' data-bs-toggle="tooltip" data-bs-placement="top" title="' +
              item[8][0] +
              '">' +
              hideWallet(item[8][0]) +
              "</a>";
          }
        }
      }

      var totalAmount = 0;
      $.each(item[9], function (index2, item2) {
        if (item2 != "") {
          totalAmount += parseFloat(
            new HexStringToInt64StringConverter(false).convert(item2)
          );
        }
      });
      totalAmount = totalAmount / 1000000000;
      if (totalAmount == 0) {
        totalAmount = "";
      }
      transactionTemplate += "<tr>";
      transactionTemplate +=
        "<td><a href='javascript:void(0);' data-bs-toggle=\"modal\" data-bs-target=\"#dataFrame\" onClick=\"loadInfo('txhash', '" +
        item[0] +
        "', '" +
        item[0] +
        "', 'modal-xl', " +
        index +
        ")\" data-tx='" +
        item[0] +
        '\' data-bs-toggle="tooltip" data-bs-placement="top" title="' +
        item[0] +
        '">' +
        shortenTX(item[0], 35) +
        "</a></td>";
      transactionTemplate += "<td>" + sendingAddr + "</td>";
      transactionTemplate += "<td>" + receiveAddr + "</td>";
      transactionTemplate +=
        "<td class='text-right'>" + formatDNX(totalAmount, 3) + "</td>";
      transactionTemplate +=
        "<td class='text-right'>" +
        formatDNX(formatNumbers(parseFloat(item[5])), 3) +
        "</td>";
      transactionTemplate +=
        "<td class='text-right'>" + formatNumbers(parseInt(item[6])) + "</td>";
      transactionTemplate += "</tr>";
    });
    $("#transactionsHistory").html(transactionTemplate);
  });
}
function loadMempool() {
  $("#mempoolHistory").html(
    '<tr><td colspan="5"><i class="mdi mdi-36px mdi-spin mdi-loading"></i></td></tr>'
  );
  var endpointURL =
    "https://api.market.dynexcoin.org/api/v2/network/legacy/api_transactions_pool";
  $.get(endpointURL, function (data, status) {
    var dataCleaned = data;
    var mempoolTemplate = "";
    $.each(dataCleaned, function (index, item) {
      mempoolTemplate += "<tr>";
      mempoolTemplate += "<td>" + item[0] + "</td>";
      mempoolTemplate +=
        "<td><a href='javascript:void(0);' data-bs-toggle=\"modal\" data-bs-target=\"#dataFrame\" onClick=\"loadInfo('txhash', '" +
        item[1] +
        "', '" +
        item[1] +
        "', 'modal-xl', " +
        index +
        ")\" data-hash='" +
        item[1] +
        '\' data-bs-toggle="tooltip" data-bs-placement="top" title="' +
        item[1] +
        '">' +
        shortenTX(item[1], 55) +
        "</a></td>";
      mempoolTemplate +=
        "<td class='text-right'>" +
        formatNumbers(parseFloat(item[2])) +
        "</td>";
      mempoolTemplate +=
        "<td class='text-right'>" +
        formatNumbers(parseFloat(item[3])) +
        "</td>";
      mempoolTemplate +=
        "<td class='text-right'>" +
        formatNumbers(parseFloat(item[4])) +
        "B</td>";
      mempoolTemplate += "</tr>";
    });
    $("#mempoolHistory").html(mempoolTemplate);
  });
}
function loadBlockHistory() {
  $("#blockHistory").html(
    '<tr><td colspan="8"><i class="mdi mdi-36px mdi-spin mdi-loading"></i></td></tr>'
  );
  var endpointURL =
    "https://api.market.dynexcoin.org/api/v2/network/legacy/api_blocks";
  $.get(endpointURL, function (data, status) {
    var dataCleaned = data;
    var blocksTemplate = "";
    var blockCNT = 0;
    $.each(dataCleaned, function (index, item) {
      blocksTemplate += "<tr>";
      blocksTemplate +=
        "<td><a href='javascript:void(0);' data-bs-toggle=\"modal\" data-bs-target=\"#dataFrame\" onClick=\"loadInfo('block', '" +
        item[0] +
        "', '" +
        item[0] +
        "', 'modal-xl', " +
        index +
        ")\" data-hash='" +
        item[0] +
        "'>" +
        item[0] +
        "</td>";
      blocksTemplate += "<td>" + item[1] + "</td>";
      blocksTemplate +=
        "<td><a href='javascript:void(0);' data-bs-toggle=\"modal\" data-bs-target=\"#dataFrame\" onClick=\"loadInfo('block', '" +
        item[0] +
        "', '" +
        item[0] +
        "', 'modal-xl', " +
        index +
        ")\" data-hash='" +
        item[3] +
        '\' data-bs-toggle="tooltip" data-bs-placement="top" title="' +
        item[3] +
        '">' +
        shortenTX(item[3], 25) +
        "</a></td>";
      blocksTemplate +=
        "<td class='text-right'>" + formatNumbers(parseInt(item[8])) + "</td>";
      blocksTemplate +=
        "<td class='text-right'>" +
        formatNumbers(parseFloat(item[4])) +
        "</td>";
      blocksTemplate +=
        "<td class='text-right'>" +
        formatNumbers(parseFloat(item[5])) +
        "</td>";
      blocksTemplate += "<td class='text-right'>" + item[9] + "</td>";
      blocksTemplate +=
        "<td class='text-right'>" + formatNumbers(parseInt(item[7])) + "</td>";
      blocksTemplate += "</tr>";
    });
    $("#blockHistory").html(blocksTemplate);
  });
}
function loadMallobMap() {
  var endpointURL =
    "https://api.market.dynexcoin.org/api/v2/network/stratum_map";
  $.get(endpointURL, function (data, status) {
    var dataCleaned = data;
    var markerArr = [];
    var linesArr = []; // Blank Placeholders for the Array Data
    // Push the Main Networks ID into the Array as Elm0 to allow Map Linking
    markerArr.push({
      name: "Proton Network",
      coords: [47, 13],
    });
    // Loop through each Mallob to be able to add to the Marker Array
    $.each(dataCleaned, function (index, item) {
      var geoData = item.split(", ");
      markerArr.push({
        name: index,
        coords: [geoData[0], geoData[1]],
      });
    });
    var e = getChartColorsArray("users-by-country");
    e &&
      ((document.getElementById("users-by-country").innerHTML = ""),
      (worldlinemap = ""),
      (worldlinemap = new jsVectorMap({
        map: "world_merc",
        selector: "#users-by-country",
        zoomOnScroll: !0,
        zoomButtons: !0,
        markers: markerArr,
        lines: linesArr,
        regionStyle: {
          initial: {
            stroke: "#a9adc4",
            strokeWidth: 0.3,
            fill: e,
            fillOpacity: 1,
          },
        },
        lineStyle: {
          animation: !0,
          strokeDasharray: "6 3 6",
        },
      })));
  });
}

$(document).ready(function () {
  routePage();
});

function routePage(loadedCallback) {
  // Reset Dynamic CSS Properties for backgrounds
  $("#pageBG").css("background-image", "");
  $("#pageBG").css("background-repeat", "");
  $("#pageBG").css("height", "");

  $.LoadingOverlay("show");
  if (currentPage) currentPage.destroy();
  $("#page").html("");
  if (xhrPageLoading) {
    xhrPageLoading.abort();
  }
  $(".hot_link").removeClass("active");

  var $link = $('a.hot_link[href="' + (window.location.hash || "#") + '"]');
  $link.addClass("active");
  var page = $link.data("page");
  if (page == undefined) {
    // If page for whatever reason doesnt load, then failover method will apply
    var hashStr = window.location.hash;
    page = hashStr.replace("#", "");
    page += ".html";
  }

  xhrPageLoading = $.ajax({
    url: "assets/pages/" + page,
    cache: false,
    success: function (data) {
      $("#page").show().html(data);
      if (currentPage) currentPage.update();
      if (loadedCallback) loadedCallback();
      if (page == "richlist.html") {
        loadBlockchain();
        loadRichlist();
      }
      if (page == "dashboard.html") {
        loadBlockchain();
        loadMallobMetrics();
        loadPouwJobs();
        loadTransactions();
        loadMempool();
        loadBlockHistory();
        loadMallobMap();
        genPouwMericChart();
        genHashrateChart();
        genComputeChart();

        // Block Metrics Functions
        fetch("https://api.market.dynexcoin.org/api/v2/network/stats/block")
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                "Failed to get blocks stats: HTTP status " + response.status
              );
            }
            return response.json();
          })
          .then((data) => {
            const transformedData = transformBlockData(data);
            var columnoptions,
              options,
              chart,
              chartHeatMapBasicColors = getChartColorsArray(
                "audiences-sessions-country-charts"
              ),
              chartAudienceColumnChartsColors =
                (chartHeatMapBasicColors &&
                  ((options = {
                    series: transformedData,
                    chart: {
                      height: 400,
                      type: "heatmap",
                      offsetX: 0,
                      offsetY: -8,
                      toolbar: {
                        show: !1,
                      },
                    },
                    states: {
                      active: {
                        filter: {
                          type: "none",
                          value: 0,
                        },
                      },
                    },
                    plotOptions: {
                      heatmap: {
                        colorScale: {
                          ranges: [
                            {
                              from: 0,
                              to: 0,
                              name: "Not Yet Mined",
                              color: "#ffffff",
                            },
                            {
                              from: 1,
                              to: 10,
                              color: "#fe8100",
                            },
                            {
                              from: 11,
                              to: 20,
                              color: "#66D8FA",
                            },
                            {
                              from: 21,
                              to: 30,
                              color: "#1f6626",
                            },
                            {
                              from: 31,
                              to: 40,
                              color: "#28c938",
                            },
                            {
                              from: 41,
                              to: 60,
                              color: "#7e36af",
                            },
                          ],
                        },
                      },
                    },
                    dataLabels: {
                      enabled: !1,
                    },
                    legend: {
                      show: !0,
                      horizontalAlign: "center",
                      offsetX: 0,
                      offsetY: 20,
                      markers: {
                        width: 20,
                        height: 6,
                        radius: 2,
                      },
                      itemMargin: {
                        horizontal: 12,
                        vertical: 0,
                      },
                    },
                    colors: chartHeatMapBasicColors,
                    tooltip: {
                      custom: function ({
                        series,
                        seriesIndex,
                        dataPointIndex,
                        w,
                      }) {
                        return (
                          '<div class="arrow_box" style="padding: 5px 10px;"><span>' +
                          w.globals.seriesNames[seriesIndex] +
                          ": " +
                          w.globals.seriesX[seriesIndex][dataPointIndex] +
                          ": " +
                          series[seriesIndex][dataPointIndex] +
                          " blocks</span></div>"
                        );
                      },
                    },
                  }),
                  (chart = new ApexCharts(
                    document.querySelector(
                      "#audiences-sessions-country-charts"
                    ),
                    options
                  )).render()),
                getChartColorsArray("audiences_metrics_charts"));
          });
      }
      $.LoadingOverlay("hide");
    },
  });
}
function transformBlockData(data) {
  const heatmapData = {};
  data.forEach(({ date, blocks }) => {
    const [day, time] = date.split(" ");
    const hour = parseInt(time.split(":")[0], 10);
    if (!heatmapData[day]) {
      heatmapData[day] = new Array(24).fill(null).map((_, idx) => ({
        x: `${idx}:00-${idx}:59`,
        y: 0,
      }));
    }
    heatmapData[day][hour] = {
      x: `${hour}:00-${hour}:59`,
      y: blocks,
    };
  });

  return Object.keys(heatmapData).map((day) => ({
    name: day,
    data: heatmapData[day],
  }));
}
function genPouwMericChart() {
  $("#audiences_metrics_charts").empty();
  // PoUW Metrics Functions
  var pouwBreakdownArr = [];
  var pouwBreakdownMnthArr = [];
  var pouwEndpointURL =
    "https://api.market.dynexcoin.org/api/v2/network/jobs/stats";
  $.get(pouwEndpointURL, function (data, status) {
    var pouwArr1 = [];
    $.each(data["jobsChart"], function (index, item) {
      pouwArr1.push(item["count"]);
      pouwBreakdownMnthArr.push(getYearAndMonth(item["time"]));
    });
    pouwBreakdownArr = [
      {
        name: "Jobs Completed",
        data: pouwArr1,
      },
    ];

    var jobsThisMonth = data["summary"]["total_jobs_month"];
    var durationThisMonth = toHoursAndMinutes(
      data["summary"]["avg_duration_month"]
    );

    $("#pouwThisMonth").html(jobsThisMonth).attr("data-target", jobsThisMonth);
    $("#pouwDurThisMonth")
      .html(durationThisMonth)
      .attr("data-target", durationThisMonth);

    (pouwMertics =
      ((columnoptions = {
        series: pouwBreakdownArr,
        chart: {
          type: "bar",
          height: 165,
          stacked: !0,
          toolbar: {
            show: !1,
          },
        },
        states: {
          active: {
            filter: {
              type: "none",
              value: 0,
            },
          },
        },
        plotOptions: {
          bar: {
            horizontal: !1,
            columnWidth: "40%",
            borderRadius: 0,
          },
        },
        dataLabels: {
          enabled: !1,
        },
        legend: {
          show: !0,
          position: "bottom",
          horizontalAlign: "center",
          fontWeight: 400,
          fontSize: "8px",
          offsetX: 0,
          offsetY: 5,
          markers: {
            width: 9,
            height: 9,
            radius: 4,
          },
        },
        stroke: {
          show: !0,
          width: 2,
          colors: ["transparent"],
        },
        grid: {
          show: !1,
        },
        colors: ["#4b38b3"],
        xaxis: {
          categories: pouwBreakdownMnthArr,
          axisTicks: {
            show: !1,
          },
          axisBorder: {
            show: !0,
            strokeDashArray: 1,
            height: 1,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: {
          show: !1,
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="arrow_box" style="padding: 5px 10px;"><span>Jobs Completed: ' +
              series[seriesIndex][dataPointIndex] +
              "</span></div>"
            );
          },
        },
      }),
      (chart = new ApexCharts(
        document.querySelector("#audiences_metrics_charts"),
        columnoptions
      )).render())),
      getChartColorsArray("user_device_pie_charts");
  });
}
function genHashrateChart() {
  // Hashrate History Functions
  var hashrateBreakdownArr = [];
  var hashrateBreakdownMnthArr = [];
  var hashrateEndpointURL =
    "https://api.market.dynexcoin.org/api/v2/network/stats/hashrate_history";
  $.get(hashrateEndpointURL, function (data, status) {
    var dataCleaned = data;
    var hashrateArr1 = [];
    $.each(dataCleaned, function (index, item) {
      hashrateArr1.push(item);
      hashrateBreakdownMnthArr.push(index);
    });
    hashrateBreakdownArr = [
      {
        name: "Hashrate",
        data: hashrateArr1,
      },
    ];
    (chartAudienceColumnChartsColors =
      ((columnoptions = {
        series: hashrateBreakdownArr,
        chart: {
          type: "line",
          height: 167,
          stacked: !0,
          toolbar: {
            show: true,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
            },
          },
        },
        states: {
          active: {
            filter: {
              type: "none",
              value: 0,
            },
          },
        },
        stroke: {
          curve: "smooth",
          width: 4,
        },
        dataLabels: {
          enabled: !1,
        },
        legend: {
          show: !0,
          position: "bottom",
          horizontalAlign: "center",
          fontWeight: 400,
          fontSize: "8px",
          offsetX: 0,
          offsetY: 5,
          markers: {
            width: 9,
            height: 9,
            radius: 4,
          },
        },
        grid: {
          show: !1,
        },
        colors: ["#0685d3"],
        xaxis: {
          categories: hashrateBreakdownMnthArr,
          tickPlacement: "between",
          axisTicks: {
            show: !1,
          },
          labels: {
            rotate: -45,
          },
          axisBorder: {
            show: !0,
            strokeDashArray: 0.1,
            height: 0.5,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: {
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="arrow_box" style="padding: 5px 10px;"><span>Hashrate: ' +
              formatHashrate(series[seriesIndex][dataPointIndex]) +
              "</span></div>"
            );
          },
        },
      }),
      (chart = new ApexCharts(
        document.querySelector("#hashrate-chart"),
        columnoptions
      )).render())),
      getChartColorsArray("user_device_pie_charts");
  });
}
function genComputeChart() {
  // GPU History Functions
  var computeBreakdownArr = [];
  var computeBreakdownMnthArr = [];
  var computeEndpointURL =
    "https://api.market.dynexcoin.org/api/v2/network/gpu_chart";
  $.get(computeEndpointURL, function (data, status) {
    var dataCleaned = data["data"];
    var computeArr1 = [];
    $.each(dataCleaned, function (index, item) {
      computeArr1.push(item["total_gpus"]);
      computeBreakdownMnthArr.push(item["date"]);
    });
    computeBreakdownArr = [
      {
        name: "GPUs Available",
        data: computeArr1,
      },
    ];

    (chartHashrateColors =
      ((columnoptions = {
        series: computeBreakdownArr,
        chart: {
          type: "line",
          height: 167,
          stacked: !0,
          toolbar: {
            show: true,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
            },
          },
        },
        states: {
          active: {
            filter: {
              type: "none",
              value: 0,
            },
          },
        },
        stroke: {
          curve: "smooth",
          width: 4,
        },
        dataLabels: {
          enabled: !1,
        },
        legend: {
          show: !0,
          position: "bottom",
          horizontalAlign: "center",
          fontWeight: 400,
          fontSize: "8px",
          offsetX: 0,
          offsetY: 5,
          markers: {
            width: 9,
            height: 9,
            radius: 4,
          },
        },
        grid: {
          show: !1,
        },
        colors: ["#0685d3"],
        xaxis: {
          categories: computeBreakdownMnthArr,
          tickPlacement: "between",
          axisTicks: {
            show: !1,
          },
          labels: {
            rotate: -45,
            rotateAlways: true,
          },
          axisBorder: {
            show: !0,
            strokeDashArray: 0.1,
            height: 0.5,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: {
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="arrow_box" style="padding: 5px 10px;"><span>GPUs Available: ' +
              series[seriesIndex][dataPointIndex] +
              "</span></div>"
            );
          },
        },
      }),
      (chart = new ApexCharts(
        document.querySelector("#compute-chart"),
        columnoptions
      )).render())),
      getChartColorsArray("user_device_pie_charts");
  });
}

// Proton Richlist - Jan 2024
function loadRichlist() {
  var endpointURL = "richlist.json";
  $.get(endpointURL, function (data, status) {
    var dataCleaned = data["richlist"];
    $("#totalWallets")
      .html(dataCleaned.wallets_count)
      .attr("data-target", dataCleaned.wallets_count);
    $("#totalBalance")
      .html(
        formatNumbers(Math.floor(dataCleaned.total_balance / 1000000000)) +
          " PRN"
      )
      .attr("data-target", dataCleaned.total_balance);
    $("#lastUpdate")
      .html(dataCleaned.last_updated)
      .attr("data-target", dataCleaned.last_updated);
    var top500 = dataCleaned["top500"];
    var richlistTemplate = "";
    $.each(top500, function (index, item) {
      var walletOwnerTAG = "";
      var walletOwnerSender = walletLookup(item["wallet"]);
      var walletType = "";
      if (walletOwnerSender != undefined && walletOwnerSender.length > 0) {
        if (walletOwnerSender[0]["Color"] == "warning") {
          walletType = "exchange";
        }
      }
      richlistTemplate += "<tr class='" + walletType + "'>";
      richlistTemplate += "<td># " + index + "</td>";
      richlistTemplate +=
        "<td><a class='truncate' href='javascript:void(0);' data-bs-toggle='modal' data-bs-target='#dataFrame' onClick=\"loadInfo('walletsearch', '" +
        item["wallet"] +
        "', '" +
        item["wallet"] +
        "', 'modal-xl', 0)\" data-wallet='" +
        item["wallet"] +
        '\' data-bs-toggle="tooltip" data-bs-placement="top" title="' +
        item["wallet"] +
        '">' +
        item["wallet"] +
        "</a></td>";
      if (walletOwnerSender != undefined && walletOwnerSender.length > 0) {
        walletOwnerSender = walletOwnerSender[0];
        walletOwnerTAG =
          '<span class="badge border border-' +
          walletOwnerSender["Color"] +
          " text-" +
          walletOwnerSender["Color"] +
          '">' +
          walletOwnerSender["Name"] +
          "</spa>";
      }
      richlistTemplate += "<td>" + walletOwnerTAG + "</td>";
      richlistTemplate +=
        "<td  class='text-right'>" +
        formatNumbers(Math.floor(item["balance"] / 1000000000)) +
        " PRN</td>";
      richlistTemplate += "</tr>";
    });
    $("#richlistTBL").html(richlistTemplate);
    return;
  });
}
function swapRichlistView(whichView) {
  if (whichView == "without") {
    $(".exchange").hide();
  } else {
    $(".exchange").show();
  }
}

// Final Functions
$("#systemVersion").html(systemVersion);
setTimeout(() => {
  loadBlockchain();
  loadMallobMetrics();
  loadPouwJobs();
  loadTransactions();
  loadMempool();
  loadBlockHistory();
  loadMallobMap();
  genPouwMericChart();
  genHashrateChart();
  genComputeChart();
}, 60000 * autoRefresh);

// Quick Launch if a valid variable is in the address string
if (
  getParameterByName("tx") != null &&
  getParameterByName("wallet") == null &&
  getParameterByName("block") == null
) {
  let myModal = new bootstrap.Modal(document.getElementById("dataFrame"), {});
  myModal.show();
  loadInfo(
    "txhash",
    getParameterByName("tx"),
    getParameterByName("tx"),
    "modal-xl",
    0
  );
}
if (
  getParameterByName("tx") == null &&
  getParameterByName("wallet") == null &&
  getParameterByName("block") != null
) {
  let myModal = new bootstrap.Modal(document.getElementById("dataFrame"), {});
  myModal.show();
  loadInfo(
    "block",
    getParameterByName("block"),
    getParameterByName("block"),
    "modal-xl",
    0
  );
}
if (
  getParameterByName("tx") == null &&
  getParameterByName("wallet") != null &&
  getParameterByName("block") == null
) {
  let myModal = new bootstrap.Modal(document.getElementById("dataFrame"), {});
  myModal.show();
  loadInfo(
    "walletsearch",
    getParameterByName("wallet"),
    getParameterByName("wallet"),
    "modal-xl",
    0
  );
}

// Hook the Enter Key on each search box, and trigger the action
$("#search-options1").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    let myModal = new bootstrap.Modal(document.getElementById("dataFrame"), {});
    myModal.show();
    loadInfo(
      "txhash",
      $("#search-options1").val(),
      $("#search-options1").val(),
      "modal-xl",
      0
    );
    const url = new URL(window.location.href);
    url.searchParams.set("txhash", $("#search-options1").val());
    window.history.pushState(null, null, url);
    $("#search-options1").val("");
  }
});
$("#search-options2").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    let myModal = new bootstrap.Modal(document.getElementById("dataFrame"), {});
    myModal.show();
    loadInfo(
      "block",
      $("#search-options2").val(),
      $("#search-options2").val(),
      "modal-xl",
      0
    );
    const url = new URL(window.location.href);
    url.searchParams.set("block", $("#search-options2").val());
    window.history.pushState(null, null, url);
    $("#search-options2").val("");
  }
});
$("#search-options3").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    let myModal = new bootstrap.Modal(document.getElementById("dataFrame"), {});
    myModal.show();
    loadInfo(
      "walletsearch",
      $("#search-options3").val(),
      $("#search-options3").val(),
      "modal-xl",
      0
    );
    const url = new URL(window.location.href);
    url.searchParams.set("wallet", $("#search-options3").val());
    window.history.pushState(null, null, url);
    $("#search-options3").val("");
  }
});

$("#dataFrame").on("hidden.bs.modal", function () {
  const url = new URL(window.location.href);
  url.searchParams.delete("tx");
  url.searchParams.delete("block");
  url.searchParams.delete("wallet");
  window.history.pushState(null, null, url);
});

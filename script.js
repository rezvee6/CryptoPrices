var request = require('request');
    setInterval(function(){
      request("https://api.coinmarketcap.com/v1/ticker/", function(error, response, body) {
        // body = body.slice(3);
        body = JSON.parse(body);
        newPrice(body);
      });
    }, 1000);
    var btcPrice;
    var BtcChange;
    var EthPrice;
    var EthChange;
    function newPrice(arr) {
        currentBtcPrice = arr[0]["price_usd"];
        currentBtcPrice = currentBtcPrice.slice(0, -7);
        BtcChange = arr[0]["percent_change_24h"];
      
        //   Eth price
        currentEthPrice = arr[1]["price_usd"];
        currentEthPrice = currentEthPrice.slice(0, -7);
        EthChange = arr[1]["percent_change_24h"];


        var btcOutput = document.getElementById('btcPrice');
        btcOutput.innerHTML = "$" + currentBtcPrice + "<br>"  + BtcChange + "%" ;
        //   Eth price
        var EthOutput = document.getElementById('ethPrice');
        EthOutput.innerHTML = "$" + currentEthPrice + "<br>"  + EthChange + "%" ;
      
        btcPrice=btcOutput;      
        BtcChange = BtcChange;

        //   Eth price
        EthPrice=EthOutput;      
        EthChange = EthChange;

      

    }



  

const remote = require('electron').remote;

(function handleWindowControls() {
    // When document has loaded, initialise
    document.onreadystatechange = () => {
        if (document.readyState == "complete") {
            init();
        }
    };

    function init() {
        let window = remote.getCurrentWindow();
        const minButton = document.getElementById('min-button'),
            maxButton = document.getElementById('max-button'),
            restoreButton = document.getElementById('restore-button'),
            closeButton = document.getElementById('close-button');

        minButton.addEventListener("click", event => {
            window = remote.getCurrentWindow();
            window.minimize();
        });

        maxButton.addEventListener("click", event => {
            window = remote.getCurrentWindow();
            window.maximize();
            toggleMaxRestoreButtons();
        });

        restoreButton.addEventListener("click", event => {
            window = remote.getCurrentWindow();
            window.unmaximize();
            toggleMaxRestoreButtons();
        });

        // Toggle maximise/restore buttons when maximisation/unmaximisation
        // occurs by means other than button clicks e.g. double-clicking
        // the title bar:
        toggleMaxRestoreButtons();
        window.on('maximize', toggleMaxRestoreButtons);
        window.on('unmaximize', toggleMaxRestoreButtons);

        closeButton.addEventListener("click", event => {
            window = remote.getCurrentWindow();
            window.close();
        });

        function toggleMaxRestoreButtons() {
            window = remote.getCurrentWindow();
            if (window.isMaximized()) {
                maxButton.style.display = "none";
                restoreButton.style.display = "flex";
            } else {
                restoreButton.style.display = "none";
                maxButton.style.display = "flex";
            }
        }
    }
})();
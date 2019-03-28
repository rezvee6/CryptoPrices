var request = require('request');
    setInterval(function(){
      request("https://api.coinmarketcap.com/v1/ticker/ethereum/", function(error, response, body) {
        // body = body.slice(3);
        body = JSON.parse(body);
        console.log(body);
        newPrice(body);
      });
    }, 5000);
    var ethPrice;
    var btcPrice;
    function newPrice(arr) {
      currentPrice = arr[0]["price_usd"];
      currentPrice = currentPrice.slice(0, -7);
      btcPrice = arr[0]["price_btc"];
      btcPrice = btcPrice.slice(0,-4);
      mktEth = arr[0][""]

      var ethOutput = document.getElementById('price');
      ethOutput.innerHTML = "$" + currentPrice + "<br>" + "฿" + btcPrice ;
      
      
      ethPrice=currentPrice;      
      btcPrice = btcPrice;

      

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
<html>
<head>
     <link rel="stylesheet" href="style/style.css" type="text/css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
</head>
<body>
    <div class="screen" id="screen">
        <div class="screen welcome" id="welcome">
            <h1>Welkom bij de celeb tour van</h1>
            <img src="https://www.madametussauds.com/SiteImages/Common/Logo/Amsterdam.png"></img>
            <h1>Tik hier om de tour te beginnen.</h1>
        </div>
        <div class="screen notification hiddenBottom" id="notification">
            <h1 class="noteText" id="noteText">...</h1>
        </div>
        <div class="screen scan hiddenRight" id="scan">
            <h1>Scan een van de QR codes om te beginnen.</h1>
            <?php
                include "scannergedeelte/scanner.html";
            ?>
            <h1 class="result" id="result">Resultaat</h1>
            <h1 class="scannedButton" id="scannedButton">Gescande Items</h1>
        </div>
        <div class="screen scanned hiddenRight" id="scanned">
            <h1 id="unscanned">U heeft nog niks gescant.</h1>
            <div id="subject1Button" class="subjects hidden"><h1>Johnny Depp</h1><h1>Tik hier om voor meer informatie</h1></div>
            <div id="subject2Button" class="subjects hidden"><h1>Nicholas Cage</h1><h1>Tik hier om voor meer informatie</h1></div>
            <div id="subject3Button" class="subjects hidden"><h1>Brad Pitt</h1><h1>Tik hier om voor meer informatie</h1></div>
            <div id="subject4Button" class="subjects hidden"><h1>Ryan Gosling</h1><h1>Tik hier om voor meer informatie</h1></div>
            <h1 class="backButton" id="backButton">Terug</h1>
        </div>
        <div id="subject1" class="hiddenRight screen content">
            
        </div>
        <div id="subject2" class="hiddenRight screen content">
            
        </div>
        <div id="subject3" class="hiddenRight screen content">
            
        </div>
        <div id="subject4" class="hiddenRight screen content">
            
        </div>
        
        
    </div>
    
    <script type="text/javascript" src="js/script.js"></script>
</body>
</html>
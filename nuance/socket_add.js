        var socket = io('localhost:8081');

        socket.on('record', function(){
            console.log("recording!!!");
            document.getElementById("asr_go").click();
        });


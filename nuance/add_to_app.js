Add:

socket.emit("message", JSON.stringify(msg.nlu_interpretation_results.payload.interpretations, null, 2));

after:

dLog("interpretations = " + JSON.stringify(msg.nlu_interpretation_results.payload.interpretations, null, 2), $asrDebug);

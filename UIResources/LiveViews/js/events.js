document.getElementById("on-rotate-clicked")
    .addEventListener("click", function() {
        engine.call.apply(engine, ['OnToggleRotationButtonClicked']);
    });

document.getElementById("back-to-home")
    .addEventListener("click", function () { 
        engine.call.apply(engine, ['OnLoadSamplesMenu']); 
    });
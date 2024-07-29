var interval = setInterval(() => {
    const codeEditors = document.getElementsByClassName("monaco-mouse-cursor-text");

    for(let codeEditor of codeEditors) {  
        const computedFontFamily = window.getComputedStyle(codeEditor).fontFamily;
        if(computedFontFamily.includes("Jetbrains Mono")) {
            clearInterval(interval);
            return;
        }

        codeEditor.style.setProperty('font-family', 'Jetbrains Mono', 'important');
        codeEditor.style.setProperty('font-size', '14', 'important');
    }
}, 500);

function startPath(pathid) {
    if (!(pathid in paths)){
        console.log(pathid+" does not exists");
        alert("A critical error occured.");
        // window.location.href = '/';
        return;
    }
    if (!(paths[pathid] instanceof Path)) {
        console.log("Path "+pathid+" in paths is not an instance of Path");
        alert("A critical error occured.");
        return;
    }
    let cpath = paths[pathid];
    cpath.initUI();
    if(actualState.issaved()) {
        actualState.restorestate();
    } else {
        cpath.start();
    }
}
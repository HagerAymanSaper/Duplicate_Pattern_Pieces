#target photoshop
app.bringToFront();

(function () {
    if (!app.documents.length) {
        alert("Open a Photoshop document first.");
        return;
    }

    var doc = app.activeDocument;
    var layer = doc.activeLayer;

    if (!layer || layer.typename !== "ArtLayer") {
        alert("Select one pattern-piece layer (not a group) in the Layers panel.");
        return;
    }

    var answer = prompt("How many COPIES do you need?\nThe original layer will remain unchanged.", "1");
    if (answer === null) return;

    var count = parseInt(answer, 10);
    if (isNaN(count) || count < 1 || count > 500) {
        alert("Enter a whole number from 1 to 500.");
        return;
    }

    var baseName = layer.name;
    var made = 0;

    try {
        for (var i = 1; i <= count; i++) {
            var copy = layer.duplicate();
            copy.name = baseName + " copy " + i;
            made++;
        }
        alert("Finished: created " + made + " copies of \"" + baseName + "\".\nThe copies are stacked over the original. Run the Nesting script to arrange them.");
    } catch (e) {
        alert("Stopped after " + made + " copies.\nPhotoshop error: " + e.message);
    }
})();

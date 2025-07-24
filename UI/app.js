Dropzone.autoDiscover = false;

function normalizeKey(key) {
    // Converts "Elon_Musk" or "Connor_Mcgregor" to "elon_musk"
    return key.toLowerCase();
}

function init() {
    let players = ["elon_musk", "connor_mcgregor", "steph_curry", "jackie_chan", "lebron_james"];

    let dz = new Dropzone("#dropzone", {
        url: "/classify_image", // Use your Flask classify_image endpoint
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "Some Message",
        autoProcessQueue: false
    });

    dz.on("addedfile", function() {
        if (dz.files[1] != null) {
            dz.removeFile(dz.files[0]);
        }
    });

    dz.on("error", function(file, message) {
        dz.removeFile(file);
        $("#resultHolder").hide();
        $("#divClassTable").hide();
        $("#error").show();
    });

    dz.on("complete", function(file) {
        // Clean up previous results
        players.forEach(function(player) {
            $("#score_" + player).html("");
        });
        $("#resultHolder").html("");

        let imageData = file.dataURL;
        var url = "http://127.0.0.1:5000/classify_image";
        $.post(url, {
            image_data: imageData
        })
        .done(function(data) {
            if (!Array.isArray(data) || data.length === 0) {
                $("#resultHolder").hide();
                $("#divClassTable").hide();
                $("#error").show();
                return;
            }

            let match = null;
            let bestScore = -1;
            for (let i = 0; i < data.length; ++i) {
                let maxScoreForThisClass = Math.max(...data[i].class_probability);
                if (maxScoreForThisClass > bestScore) {
                    match = data[i];
                    bestScore = maxScoreForThisClass;
                }
            }

            if (match) {
                $("#error").hide();
                $("#resultHolder").show();
                $("#divClassTable").show();
                // Safely match data-player with normalized key
                $("#resultHolder").html($(`[data-player="${normalizeKey(match.class)}"]`).html());

                let classDictionary = match.class_dictionary;
                for (let personName in classDictionary) {
                    let index = classDictionary[personName];
                    let probabilityScore = match.class_probability[index];
                    let key = normalizeKey(personName);
                    let elementName = "#score_" + key;
                    if ($(elementName).length) {
                        $(elementName).html(probabilityScore.toFixed(2) + " %");
                    }
                }
            } else {
                $("#resultHolder").hide();
                $("#divClassTable").hide();
                $("#error").show();
            }
        })
        .fail(function() {
            $("#resultHolder").hide();
            $("#divClassTable").hide();
            $("#error").show();
        });
    });

    $("#submitBtn").on('click', function() {
        dz.processQueue();
    });
}

$(document).ready(function() {
    $("#error").hide();
    $("#resultHolder").hide();
    $("#divClassTable").hide();
    init();
});

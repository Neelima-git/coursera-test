(function() {
    var names = ["Neelima", "Jai", "Joe", "Rahul", "Kiran", "Nihal", "Sivani", "Ajay", "Joseph", "Sonia"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
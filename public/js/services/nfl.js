window.angular.module('ngff.services.nfl', [])
  .factory('NFL', function() {
    var NFL = {};
    NFL.teams = [
      {"abbr":"ARI", "team":"Arizona", "mascot": "Cardinals", "conference":"NFC", "division": "West"},
      {"abbr":"ATL", "team":"Atlanta", "mascot": "Falcons", "conference":"NFC", "division": "South"},
      {"abbr":"BAL", "team":"Baltimore", "mascot": "Ravens", "conference":"AFC", "division": "North"},
      {"abbr":"BUF", "team":"Buffalo", "mascot": "Bills", "conference":"AFC", "division": "East"},
      {"abbr":"CAR", "team":"Carolina", "mascot": "Panthers", "conference":"NFC", "division": "South"},
      {"abbr":"CHI", "team":"Chicago", "mascot": "Bears", "conference":"NFC", "division": "North"},
      {"abbr":"CIN", "team":"Cincinnati", "mascot": "Bengals", "conference":"AFC", "division": "North"},
      {"abbr":"CLE", "team":"Cleveland", "mascot": "Browns", "conference":"AFC", "division": "North"},
      {"abbr":"DAL", "team":"Dallas", "mascot": "Cowboys", "conference":"NFC", "division": "East"},
      {"abbr":"DEN", "team":"Denver", "mascot": "Broncos", "conference":"AFC", "division": "West"},
      {"abbr":"DET", "team":"Detroit", "mascot": "Lions", "conference":"NFC", "division": "North"},
      {"abbr":"GB", "team":"Green Bay", "mascot": "Packers", "conference":"NFC", "division": "North"},
      {"abbr":"HOU", "team":"Houston", "mascot": "Texans", "conference":"AFC", "division": "South"},
      {"abbr":"IND", "team":"Indianapolis", "mascot": "Colts", "conference":"AFC", "division": "South"},
      {"abbr":"JAC", "team":"Jacksonville", "mascot": "Jaguars", "conference":"AFC", "division": "South"},
      {"abbr":"KC", "team":"Kansas City", "mascot": "Chiefs", "conference":"AFC", "division": "West"},
      {"abbr":"MIA", "team":"Miami", "mascot": "Dolphins", "conference":"AFC", "division": "East"},
      {"abbr":"MIN", "team":"Minnesota", "mascot": "Vikings", "conference":"NFC", "division": "North"},
      {"abbr":"NE", "team":"New England", "mascot": "Patriots", "conference":"AFC", "division": "East"},
      {"abbr":"NO", "team":"New Orleans", "mascot": "Saints", "conference":"NFC", "division": "South"},
      {"abbr":"NYG", "team":"New York", "mascot": "Giants", "conference":"NFC", "division": "East"},
      {"abbr":"NYJ", "team":"New York", "mascot": "Jets", "conference":"AFC", "division": "East"},
      {"abbr":"OAK", "team":"Oakland", "mascot": "Raiders", "conference":"AFC", "division": "West"},
      {"abbr":"PHI", "team":"Philadelphia", "mascot": "Eagles", "conference":"NFC", "division": "East"},
      {"abbr":"PIT", "team":"Pittsburgh", "mascot": "Steelers", "conference":"AFC", "division": "North"},
      {"abbr":"SD", "team":"San Diego", "mascot": "Chargers", "conference":"AFC", "division": "West"},
      {"abbr":"SEA", "team":"Seattle", "mascot": "Seahawks", "conference":"NFC", "division": "West"},
      {"abbr":"SF", "team":"San Francisco", "mascot": "49ers", "conference":"NFC", "division": "West"},
      {"abbr":"STL", "team":"St. Louis", "mascot": "Rams", "conference":"NFC", "division": "West"},
      {"abbr":"TB", "team":"Tampa Bay", "mascot": "Buccaneers", "conference":"NFC", "division": "South"},
      {"abbr":"TEN", "team":"Tennessee", "mascot": "Titans", "conference":"AFC", "division": "South"},
      {"abbr":"WAS", "team":"Washington", "mascot": "Redskins", "conference":"NFC", "division": "East"}
    ];
    return NFL;
  });
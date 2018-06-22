function scuberGreetingForFeet(rideFeet) {
  if (rideFeet <= 400) {
    return 'This one is on me!'
  }
  else if (rideFeet > 2500) {
    return 'No can do.'
  }
  else if (rideFeet > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  } 
  else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tipAmount) {
  if (tipAmount === 'generous') {
    return 'Thank you so much.'
  }
  else if (tipAmount === 'not as generous') {
    return 'Thank you.'
  }
  else {
    return 'Bye.'
  }
}
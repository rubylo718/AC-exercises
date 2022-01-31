// DATA /////////////////////////////////////

let players = [
  { name: 'Bernard', email: 'bernard@example.com' },
  { name: 'Youchi', email: 'youchi@example.com' },
  { name: 'Yenting', email: 'yenting@example.com' },
  { name: 'Angela', email: 'angela@example.com' },
  { name: 'Yvonne', email: 'yvonne@example.com' },
  { name: 'Ellen', email: 'ellen@example.com' },
  { name: 'Walter', email: 'walter@example.com' },
  { name: 'Kevin', email: 'kevin@example.com' },
  { name: 'Tim', email: 'tim@example.com' },
  { name: 'Russell', email: 'russell@example.com' }
]

// FUNCTIONS /////////////////////////////////////
function drawWinner(players, prize) {
  const winnerIndex = Math.floor(Math.random() * players.length)
  const winner = players[winnerIndex]
  players.splice(winnerIndex, 1)
  return announceMsg(winner, prize)
}

function announceMsg(winner, prize) {
  console.log(`${winner.number} | ${encodeName(winner.name)} | ${encodeEmail(winner.email)} | ${prize}`)
}

function encodeName(name) {
  let nameLength = name.length
  let twoLetters = name.slice(0, 2)
  let asterisks = ''
  for (let i = 0; i < nameLength - 2; i++) {
    asterisks += '*'
  }
  name = twoLetters + asterisks
  return name
}

function encodeEmail(email) {
  let emailName = email.split('@')[0]
  let emailDomain = email.split('@')[1]
  let emailLetters = emailName.slice(0, Math.floor(emailName.length / 2))
  email = emailLetters + '...@' + emailDomain
  return email
}

// generate and collect non-repetitive tickets in an array
function genTicket() {
  let ticket = ''
  const allLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = 0; i < ticketLetters; i++) {
    let letter = allLetter[Math.floor(Math.random() * allLetter.length)]
    ticket += letter
  }
  for (let j = 0; j < ticketNumbers; j++) {
    let num = Math.floor(Math.random() * 10)
    ticket += num
  }
  return ticket
}

function genTicketArr() {
  const ticketArr = []
  while (ticketArr.length < players.length) {
    ticket = genTicket()
    if (ticketArr.includes(ticket) === false) {
      ticketArr.push(ticket)
    }
  }
  return ticketArr
}
// EXECUTING /////////////////////////////////////

// determine the ticket format (how many letters + numbers) and generate tickets
const ticketLetters = 2
const ticketNumbers = 4
ticketArr = genTicketArr()

// each player gets a lottery ticket
for (let i = 0; i < players.length; i++) {
  players[i].number = ticketArr[i]
}

// draw 3 winners and announce the results
drawWinner(players, '頭獎')
drawWinner(players, '貮獎')
drawWinner(players, '叁獎')

// the rest of players get participation award
while (players.length > 0) {
  drawWinner(players, '參加獎')
}
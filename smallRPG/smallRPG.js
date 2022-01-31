function createPlayer(name, hp, mp) {
  return {
    name: name,
    hp: hp,
    mp: mp,

    cure: function (hp) {
      if (this.hp > 0) { //被打之後還活著
        if (this.mp >= (hp * 2)) {//mp >= 30可補血
          this.hp += hp
          this.mp -= (hp * 2)
          result = `${this.name}補血，補血後hp為${this.hp}點，mp還有${this.mp}點`
        } else { //mp < 30無法補
          result = `${this.name}的mp只剩${this.mp}點了不夠補血`
        }
      } else { //被打之後死掉
        result = `${this.name}已GG無法補血`
      } return result
    },

    attack: function (enemy) {
      const attackPoint = Math.floor(Math.random() * 100) + 1
      if (enemy.hp > attackPoint) { //敵人沒被打死
        enemy.hp -= attackPoint
        result = `${enemy.name}受到${this.name}的${attackPoint}點的攻擊，hp還有${enemy.hp}點`
      } else { //敵人被打死了
        enemy.hp = 0
        result = `${enemy.name}受到${attackPoint}點的攻擊後被打死了`
      } return result
    }
  }
}
console.log('====== CREATE PLAYERS ======')
const magician = createPlayer('Magician', 30, 100)
const warrior = createPlayer('Warrior', 100, 30)
console.log(magician) // {name: "Magician", hp: 30, mp: 100}
console.log(warrior) // {name: "Warrior", hp: 100, mp: 30}
console.log('====== START FIGHT ======')
while (warrior.hp > 0 && magician.hp > 0) {
  // 戰士先攻
  console.log(warrior.attack(magician))
  console.log(magician.cure(15)) // 固定補血 15 點
  // 魔法師後攻
  if (magician.hp > 0) {
    console.log('Change sides \n')
    console.log(magician.attack(warrior))
    console.log(warrior.cure(15)) // 固定補血 15 點
  }
  console.log('======')
}
console.log('GAME OVER.')
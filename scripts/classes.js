export class Player {
  constructor() {
    this.x = 0
    this.y = 200
    this.width = 575
    this.height = 523
    this.image = new Image()
    this.image.src = './images/dog.png'
    this.states = [
      {
        name: 'idle',
        frames: 7
      },
      {
        name: 'jump',
        frames: 7
      },
      {
        name: 'fall',
        frames: 7
      },
      {
        name: 'run',
        frames: 9
      },
      {
        name: 'dizzy',
        frames: 11
      },
      {
        name: 'sit',
        frames: 5
      },
      {
        name: 'roll',
        frames: 7
      },
      {
        name: 'bite',
        frames: 7
      },
      {
        name: 'ko',
        frames: 12
      },
      {
        name: 'getHit',
        frames: 7
      }
    ]
  }
}
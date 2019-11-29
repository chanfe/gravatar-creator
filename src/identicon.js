class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(user) {
    this.user = user;
    this.uniqueInt = this._user_value();
    this.color = this._rbg_color();
    this.matrix = this._generateMatrix();
  }

  _user_value(){
    return md5.array(this.user);
  }

  _rbg_color() {
    return `rgb(${this.uniqueInt[0]},${this.uniqueInt[1]},${this.uniqueInt[2]})`;
  }

  _generateMatrix(){
    let matrix = new Array(5).fill().map(row => Array(5).fill(1));
    let pointer = 0;
    let defColor = `rgb(255,255,255)`;
    for(let rowIdx = 0; rowIdx < 5; rowIdx++){
      for(let colIdx = 0; colIdx < 3; colIdx++){
        if(this.uniqueInt[pointer] < 127){
          matrix[rowIdx][colIdx] = this.color
          matrix[rowIdx][4 - colIdx] = this.color  
       }
        else{
          matrix[rowIdx][colIdx] = defColor
          matrix[rowIdx][4 - colIdx] = defColor
        }
        pointer++;
      }
    }
    return matrix
  }
  
}
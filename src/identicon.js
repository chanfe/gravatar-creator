class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(user) {
    this.user = user;
    this.uniqueInt = this._user_value()
    this.color = this._rbg_color();
  }

  _user_value(){
    return md5.array(this.user)
  }

  _rbg_color() {
    return `rgb(${this.uniqueInt[0]},${this.uniqueInt[1]},${this.uniqueInt[2]})`
  }
  
}
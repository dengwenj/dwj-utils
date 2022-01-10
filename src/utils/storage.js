class Storage {
  constructor(storage = true) {
    this.storage = storage ? localStorage : sessionStorage
  }

  getItem(key) {
    let value = this.storage.getItem(key)

    if (value) {
      return JSON.parse(value)
    }
  }

  setItem(key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  removeItem(key) {
    if (key) {
      this.storage.removeItem(key)
    }
  }

  clear() {
    this.storage.clear()
  }

  key(index) {
    return this.storage.key(index)
  }

  length() {
    return this.storage.length
  }
}

module.exports = {
  Storage
}
document.addEventListener('alpine:init', () => {
  Alpine.data('loginComponent', () => ({
    email: '',
    password: '',
    status: false,

    unlock() { return (this.email === '' || this.password === '') },

    async login() {
      const credentials = { "email": this.email, "password": this.password }
      const failure = Login(credentials)
      if (failure) { this.status = failure }
      return
    },

  }))
})

document.addEventListener('alpine:init', () => {
  Alpine.data('homeComponent', () => ({

    message: false,

    async goHome() { await GoHome() },
    async goBack() { await GoBack() },
    async logOut() { await LogOut() },
    async close() { this.message = false },

    async goUsers() { this.message = await OnlyRedirect("/users") },

  }))
})

document.addEventListener('alpine:init', () => {
  Alpine.data('usersListComponent', () => ({

    records: [],
    page: 1,
    hasNextPage: false,
    searchbar: '',
    loading: false,

    async init() { await this.loadRecords() },

    async goHome() { await GoHome() },
    async goBack() { await GoBack("/home") },
    async logOut() { await LogOut() },
    async goUsers() { await OnlyRedirect("/users") },
    clean() { return (this.searchbar !== '') },


    async previousPage() { if (this.page > 1) { this.page -= 1; await this.loadRecords() } },
    async nextPage() { if (this.hasNextPage) { this.page += 1; await this.loadRecords() } },

    async loadRecords() {
      try {
        this.loading = true
        const data = await FetchDataFromResponse(`/users/slice?page=${this.page}`)
        this.records = data.records
        this.hasNextPage = data.hasNextPage
      } catch (error) {
        throw error
      } finally {
        this.loading = false
      }
    },

    async cleanBar() {
      this.searchbar = ''
      await this.loadRecords()
    },

    async searchRecord() {
      try {
        this.loading = true
        const data = await FetchDataFromResponse(`/users/search?pattern=${this.searchbar}`)
        this.records = data.records
        this.hasNextPage = data.hasNextPage
      } catch (error) {
        throw error
      } finally {
        this.loading = false
      }
    },

    async newRecord() { await OnlyRedirect("/users/new") },
    async openRecord(id) { await ReadRecord(id, "/users/record") },

  }))
})

document.addEventListener('alpine:init', () => {
  Alpine.data('usersNewComponent', () => ({

    parties: [],
    loading: false,
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    party: '',
    message: false,

    async init() { await this.loadMany2One() },

    close() { this.message = false },

    async goHome() { await GoHome() },
    async goBack() { await GoBack("/users") },
    async logOut() { await LogOut() },
    async goUsers() { await OnlyRedirect("/users") },
    required() {
      return (this.name === '' || this.email === '' || this.password === '' || this.repeatPassword === '' || this.party === '')
    },

    async loadMany2One() {
      try {
        this.loading = true
        const data = await FetchDataFromResponse("/users/many2one")
        this.parties = data.parties
      } catch (error) {
        throw error
      } finally {
        this.loading = false
      }
    },

    async createRecord() {
      if (this.password !== this.repeatPassword) {
        this.message = true
        return
      }
      if (!ValidateEmail(this.email)) {
        this.message = true
        return
      }
      this.message = false
      const values = { "name": this.name, "email": this.email, "password": this.repeatPassword, "party": this.party }
      await CreateRecord("/users/new", "/users", {method: "POST", body: JSON.stringify(values)})
    },

  }))
})

document.addEventListener('alpine:init', () => {
  Alpine.data('usersRecordComponent', (id) => ({

    parties: [],
    loading: false,
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    party: '',
    message: false,
    invalid: false,

    async init() {
      await this.loadMany2One()
      await this.loadRecord(id)
    },

    close() {
      this.message = false
      this.invalid = false
    },

    async goHome() { await GoHome() },
    async goBack() { await GoBack("/users") },
    async logOut() { await LogOut() },
    async goUsers() { await OnlyRedirect("/users") },

    required() {
      return (this.name === '' || this.email === '' || this.party === '')
    },

    async loadMany2One() {
      try {
        this.loading = true
        const data = await FetchDataFromResponse("/users/many2one")
        this.parties = data.parties
      } catch (error) {
        throw error
      } finally {
        this.loading = false
      }
    },

    async loadRecord(id) {
      try {
        this.loading = true
        const record = JSON.stringify({"id": id})
        const data = await FetchDataFromResponse("/users/record", { method: "POST", body: record})
        this.name = data.name
        this.email = data.email
        this.party = data.party
      } catch (error) {
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateRecord() {
      try {
        this.loading = true
        this.message = false
        var checkPass = ''
        if (this.password && this.repeatPassword) {
          if (this.password !== this.repeatPassword) {
            return this.message = true
          } else {
            checkPass = this.password
          }
        }
        if (!ValidateEmail(this.email)) {
          return this.message = true
        }
        const record = JSON.stringify(
          { "id": id, "name": this.name, "email": this.email, "password": checkPass, "party": this.party }
        )
        await UpdateRecord("/users/record", "/users", {method: "PUT", body: record})
      } catch (error) {
        throw error
      } finally {
       this.loading = false
      }
    },

    async deleteRecord() {
      try {
        const record = JSON.stringify({ "id": id })
        return this.invalid = await DeleteRecord("/users/record", "/users", {method: "DELETE", body: record})
      } catch (error) {
        throw error
      } finally {
        this.loading = false
      }
    },

  }))
})

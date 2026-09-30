document.addEventListener('alpine:init', () => {
  Alpine.data("employeesListComponent", () => ({

    page: 1,
    pageSearch: 1,
    records: [],
    loading: false,
    hasNextPage: false,
    pattern: '',
    patternLast: '',
    isSearch: false,

    async init() { this.loadRecords() },

    async goHome() { await GoHome() },
    async goBack() { await GoBack("/home") },
    async logOut() { await LogOut() },
    async openRecord(id) { await ReadRecord(id, "/employee/record") },
    async newRecord() { await OnlyRedirect("/employee/new") },
    async goEmployee() { await OnlyRedirect("/employee") },

    currency() {
      if (!this.records) { return }
      for (const item of this.records) {
        const money = FormatterMXN.format(item.dailyPayment)
        item.dailyPayment = money
      }
    },

    async clean() {
      this.isSearch = false; this.pageSearch = 1; this.pattern = ''; this.page = 1; return await this.loadRecords()
    },

    async search() {
      try {
        this.loading = true
        this.isSearch = true
        if (this.patternLast !== '' && this.patternLast !== this.pattern) { this.pageSearch = 1};
        const data = await FetchDataFromResponse(
          `/employee/search?pattern=${this.pattern}&page=${this.pageSearch}`
        )
        this.patternLast = this.pattern; this.records = data.records; this.hasNextPage = data.hasNextPage;
        this.currency();
      } catch (error) {
        throw error
      } finally {
        this.loading = false
      }
    },

    async loadRecords() {
      try {
        this.loading = true
        const data = await FetchDataFromResponse(
          `/employee/slice?page=${this.page}`
        )
        this.records = data.records;
        this.hasNextPage = data.hasNextPage;
        this.currency();
      } catch (error) {
        throw error
      } finally {
        this.loading = false
      }
    },

    block() {
      if (!this.isSearch) { return (this.page === 1 || this.loading) };
      if (this.isSearch) { return (this.pageSearch === 1 || this.loading) };
    },

    async previousPage() {
      if (!this.isSearch) {
        if (this.page > 1) {
          this.page -= 1;
          return await this.loadRecords()
        };
      }
      if (this.pageSearch) {
        if (this.pageSearch > 1) {
          this.pageSearch -= 1;
          return await this.search()
        }
      }
    },

    async nextPage() {
      if (!this.isSearch) { if (this.hasNextPage) { this.page += 1; return await this.loadRecords() } }
      if (this.isSearch) { if (this.hasNextPage) { this.pageSearch += 1; return await this.search() } }
    },

  }))
})

document.addEventListener('alpine:init', () => {
  Alpine.data("employeesNewComponent", () => ({

    message: false,
    name: '',
    hireDate: '',
    dailyPayment: '',
    phone: '',
    email: '',
    nss: '',
    curp: '',
    loading: false,

    async goHome() { await GoHome() },
    async goBack() { await GoBack("/employee") },
    async logOut() { await LogOut() },
    async goEmployees() { await OnlyRedirect("/employee") },

    required() {
      return (this.name === '' || this.hireDate === '' || this.dailyPayment === '', this.loading)
    },

    currency(str) {
      const float = ValidateFloatStringToFloat(str)
      if (isNaN(float)) { return '' }
      return FormatterMXN.format(float)
    },

    numbers(str) {
      const integer = ValidateIntegerStringToInteger(str)
      if (isNaN(integer)) { return '' }
      return String(integer)
    },

    async createRecord() {
      try {
        this.loading = true
        const payment = ValidateFloatStringToFloat(this.dailyPayment)
        const number = ValidateIntegerStringToInteger(this.phone)
        var values = JSON.stringify({
          name: this.name,
          hireDate: this.hireDate,
          dailyPayment: payment,
          phone: number,
          email: this.email,
          nss: this.nss,
          curp: this.curp
        })
        const authError = await CreateRecord("/employee/new", "/employee", { method: "POST", body: values })
        this.message = authError
      } catch (error) {
        throw error
      }
    },

  }))
})

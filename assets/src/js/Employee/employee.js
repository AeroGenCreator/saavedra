document.addEventListener('alpine:init', () => {
  Alpine.data("employeesListComponent", () => ({

    page: 1,
    records: [],
    loading: false,
    hasNextPage: false,
    regex: '',

    async init() { this.loadRecords() },

    async goHome() { await GoHome() },
    async goBack() { await GoBack("/home") },
    async logOut() { await LogOut() },
    async goEmployee() { await OnlyRedirect("/employee") },

    async loadRecords() {
      try {
        this.loading = true
        const data = await FetchDataFromResponse(`/employee/slice?page=${this.page}`)
        this.records = data.records
        this.hasNextPage = data.hasNextPage
      } catch (error) {
        throw error
      }
    },

  }))
})

export default class Book {
   constructor(
      private title: string,
      public readonly pageCount: number,
      public readonly pageCurrent: number
   ) {}

   unreadPages(): number {
      return this.pageCount - this.pageCurrent
   }

   toString(): string {
      return `${this.title}: Lesefortschritt ${this.progress()}%`
   }

   private progress(): number {
      return Math.round(100 * this.pageCurrent / this.pageCount)
   }
}

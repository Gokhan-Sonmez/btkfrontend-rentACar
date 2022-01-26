export interface CreatePaymentModel {
  rentalId: number;
  returnDate: Date;
  paymentDate: Date;
  cardNumber: String;
  nameOnTheCard: String;
  month: String;
  year: String;
  cvv: number;
}

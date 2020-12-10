export class Information {

  //infos sur le payeur
  payerName: string;
  payerNumber: string;
  payerWhatsappNumer: string;
  payerEmail: string;

  //infos sur l'élève
  studentName: string;
  class: string;
  registrationNumber: string // matricule


  //infos sur le paiement
  paymentType: string;
  kifipayFees: number; // Frais de commission kifipay
  bill: number; // Facture correspondant aux frais d'inscription

}

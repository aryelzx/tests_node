import { Appointment } from "../entities/appointment";

interface CresteAppointmentRequest {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

type CresteAppoinstmentResponse = Appointment

export class CreateAppointment {
  async execute({ customer, startsAt, endsAt }: CresteAppointmentRequest): Promise<CresteAppoinstmentResponse> {
    const appointment = new Appointment({
      customer,
      startsAt,
      endsAt
    })

    return appointment
  }
}
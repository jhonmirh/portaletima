import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Reservation } from '../../entities/Reservation.entity';
import { Room } from '../../entities/Room.entity';
import { User } from '../../entities/User.entity';

@Injectable()
export class NotificationsService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendWelcomeEmail(to: string, username: string): Promise<void> {
    const mailOptions = {
      from: '"Escuela Técnica Isaías Medina Angarita" <tu-email@gmail.com>',
      to,
      subject: '¡Bienvenido/a a Escuela Técnica Isaías Medina Angarita! ',
      text: `Hola ${username},
  
  ¡Gracias por registrarte en Escuela Técnica Isaías Medina Angarita. Nos alegra tenerte como parte de nuestra sociedad de aprendizaje.
  
  En Escuela Técnica Isaías Medina Angarita, nuestra misión es ofrecerte la mejor Educación Técnica en Ciencias Agrícolas y Pecuarias y Bachiller.
  
  ¿Qué puedes esperar de Escuela Técnica Isaías Medina Angarita?
  - 🏖️ Unidad de Producción Agrícola
  - 🍷 Servicio de Comedor
  - 💆‍♀️ Bienestar Estudiantil y Transporte
  
  
  
  ¡Vive un aprendizaje Completo!
  El equipo de Escuela Técnica Isaías Medina Angarita.
  
  Contacto:
  📧 etaima.tecnica@gmailcom
  📞 +58 2777576584
  🌐 www.elysiumhotel.com`,
      html: `
        <p>Hola <strong>${username}</strong>,</p>
        <p>¡Gracias por registrarte en <strong>Escuela Técnica Isaías Medina Angarita</strong>! Nos alegra tenerte como parte de nuestra sociedad de aprendizaje</p>
        <p>En <strong>Escuela Técnica Isaías Medina Angarita</strong>, En Escuela Técnica Isaías Medina Angarita, nuestra misión es ofrecerte la mejor Educación Técnica en Ciencias Agrícolas y Pecuarias y Bachiller.</p>
        <p><strong>¿Qué puedes esperar de la Escuela Técnica Isaías Medina Angarita?</strong></p>
        <ul>
          <li>🏖️ <strong>Unidad de Producción Agrícola</strong>:Porcino, Acuicula y Bovino.</li>
          <li>🍷 <strong>Servicio de Comedor</strong>: CNAE.</li>
          <li>💆‍♀️ <strong>Bienestar Estudiantil y Transporte
  </strong>: Bus y Jeep.</li>
        </ul>
        
        <p><strong>Contacto:</strong><br>
         Contacto:
  📧 etaima.tecnica@gmailcom
  📞 +58 2777576584
  🌐 www.elysiumhotel.com</p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendReservationEmail(
    user: User,
    room: Room,
    reservation: Reservation,
  ): Promise<void> {
    const mailOptions = {
      from: '"Escuela Técnica Isaías Medina Angarita" <tu-email@gmail.com>',
      to: user.email,
      subject: 'Solicitud de Cupo',
      text: `Hola ${user.name},
  
      Tu reservación ha sido confirmada con los siguientes detalles:
      - Habitación: ${room.title} (${room.size}, ${room.beds} cama(s))
      - Precio por noche: $${room.price}
      - Check-in: ${reservation.checkInDate.toDateString()}
      - Check-out: ${reservation.checkOutDate.toDateString()}
      - Descripción: ${room.description}
      - Estado del pago: ${reservation.paymentStatus}
      
      Estamos emocionados de recibirte pronto en Nuestra Istitución. Si tienes preguntas o necesitas asistencia, no dudes en contactarnos.
  
      ¡Gracias por elegirnos!
  
      Escuela Técnica Isaías Medina Angarita
      📧 etaima.tecnica@gmail.com
      📞 +58 02777576584
      🌐 www.etima.com`,
      html: `
        <p>Hola, ${user.name}</p>
        <p>Tu reservación ha sido confirmada con los siguientes detalles:</p>
        <ul>
          <li><strong>Habitación:</strong> ${room.title} )</li>
          <li><strong>Descripción:</strong> ${room.description}</li>
        </ul>
        <p>Estamos emocionados de recibirte pronto en <strong>Elysium Hotel & Resort</strong>. Si tienes preguntas o necesitas asistencia, no dudes en contactarnos.</p>
        <p><strong>¡Gracias por elegirnos!</strong><br>
        Escuela Técnica Isaías Medina Angarita<br>
      📧 etaima.tecnica@gmail.com<br>
       📞 +58 02777576584 <br>
        🌐 <a href="https://www.etima.com">www.etima.com</a></p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendReminderNotification(
    user: User,
    room: Room,
    reservation: Reservation,
  ): Promise<void> {
    const checkInDate = new Date(reservation.checkInDate);
    const checkOutDate = new Date(reservation.checkOutDate);

    const mailOptions = {
      from: '"Escuela Técnica Isaías Medina Angarita" <etima@gmail.com>',
      to: user.email,
      subject: '⏳ ¡Última oportunidad para pagar tu reservación! ⏳',
      text: `Hola ${user.name},
      
      Queremos recordarte que tu reservación está a punto de expirar. Aquí están los detalles:
      - Habitación: ${room.title} )
      
      
      Por favor, realiza tu pago dentro de las próximas 12 horas para asegurar tu reservación.
      
      Si necesitas asistencia, contáctanos.
      
      Elysium Hotel & Resort
      📧 info@elysiumhotel.com
      📞 +1-800-123-4567
      🌐 www.elysiumhotel.com`,
      html: `
        <p>Hola <strong>${user.name}</strong>,</p>
        <p>Queremos recordarte que tu reservación está a punto de expirar. Aquí están los detalles:</p>
        <ul>
          <li><strong>Habitación:</strong> ${room.title} </li>
          
        </ul>
        <p><strong>Por favor, realiza tu pago dentro de las próximas 12 horas para asegurar tu reservación.</strong></p>
        <p>Si necesitas asistencia, contáctanos.</p>
        <p><strong>Escuela Técnica Isaías Medina Angarita</strong><br>

      📧 etaima.tecnica@gmail.com<br>
       📞 +58 02777576584 <br>
        🌐 <a href="https://www.etima.com">www.etima.com</a></p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendDeletionNotification(
    user: User,
    reservation: Reservation,
  ): Promise<void> {
    const checkInDate = new Date(reservation.checkInDate);
    const checkOutDate = new Date(reservation.checkOutDate);

    const mailOptions = {
      from: '"Elysium Hotel & Resort" <tu-email@gmail.com>',
      to: user.email,
      subject: '❌ Reservación cancelada en Elysium Hotel & Resort ❌',
      text: `Hola ${user.name},
      
      Lamentamos informarte que tu reservación ha sido cancelada debido a la falta de pago dentro del tiempo establecido. Aquí están los detalles de la reservación cancelada:
      - Check-in: ${checkInDate.toDateString()}
      - Check-out: ${checkOutDate.toDateString()}
      
      Si tienes alguna pregunta o deseas realizar una nueva reservación, no dudes en contactarnos.
      
      Elysium Hotel & Resort
      📧 info@elysiumhotel.com
      📞 +1-800-123-4567
      🌐 www.elysiumhotel.com`,
      html: `
        <p>Hola <strong>${user.name}</strong>,</p>
        <p>Lamentamos informarte que tu reservación ha sido cancelada debido a la falta de pago dentro del tiempo establecido. Aquí están los detalles de la reservación cancelada:</p>
        <ul>
          <li><strong>Check-in:</strong> ${checkInDate.toDateString()}</li>
          <li><strong>Check-out:</strong> ${checkOutDate.toDateString()}</li>
        </ul>
        <p>Si tienes alguna pregunta o deseas realizar una nueva reservación, no dudes en contactarnos.</p>
        <p><strong>Elysium Hotel & Resort</strong><br>
        📧 info@elysiumhotel.com<br>
        📞 +1-800-123-4567<br>
        🌐 <a href="https://www.elysiumhotel.com">www.elysiumhotel.com</a></p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendPaymentSuccessNotification(
    user: User,
    room: Room,
    reservation: Reservation,
  ): Promise<void> {
    const checkInDate = new Date(reservation.checkInDate);
    const checkOutDate = new Date(reservation.checkOutDate);

    const mailOptions = {
      from: '"Elysium Hotel & Resort" <tu-email@gmail.com>',
      to: user.email,
      subject:
        '✅ Pago confirmado para tu reservación en Elysium Hotel & Resort ✅',
      text: `Hola ${user.name},
      
      ¡Nos complace informarte que tu pago ha sido confirmado con éxito! Aquí están los detalles de tu reservación:
  
      - Habitación: ${room.title} (${room.size}, ${room.beds} cama(s))
      - Check-in: ${checkInDate.toDateString()}
      - Check-out: ${checkOutDate.toDateString()}
      - Estado del pago: ${reservation.paymentStatus}
      
      Gracias por elegir Elysium Hotel & Resort. Estamos emocionados de recibirte. Si tienes alguna pregunta o deseas modificar tu reservación, no dudes en contactarnos.
  
      Elysium Hotel & Resort
      📧 info@elysiumhotel.com
      📞 +1-800-123-4567
      🌐 www.elysiumhotel.com`,
      html: `
        <p>Hola <strong>${user.name}</strong>,</p>
        <p>¡Nos complace informarte que tu pago ha sido confirmado con éxito! Aquí están los detalles de tu reservación:</p>
        <ul>
          <li><strong>Habitación:</strong> ${room.title} (${room.size}, ${room.beds} cama(s))</li>
          <li><strong>Check-in:</strong> ${checkInDate.toDateString()}</li>
          <li><strong>Check-out:</strong> ${checkOutDate.toDateString()}</li>
          <li><strong>Estado del pago:</strong> ${reservation.paymentStatus}</li>
        </ul>
        <p>Gracias por elegir <strong>Elysium Hotel & Resort</strong>. Estamos emocionados de recibirte. Si tienes alguna pregunta o deseas modificar tu reservación, no dudes en contactarnos.</p>
        <p><strong>Elysium Hotel & Resort</strong><br>
        📧 info@elysiumhotel.com<br>
        📞 +1-800-123-4567<br>
        🌐 <a href="https://www.elysiumhotel.com">www.elysiumhotel.com</a></p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}

interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

// Data Transfer Object
interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

class EmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`email enviado para ${to.name}<${to.email}>: ${message.subject}`);
  }
}

export default EmailService;
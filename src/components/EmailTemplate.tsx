interface EmailTemplateProps {
    firstName: string;
    message: string;
    number: string;
    mail: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName, number, mail, message
}) => (
    <div className="bg-slate-500">
        <h1 className="text-4xl font-bold">Contacto: {firstName}</h1>
        {
            number && (
                <h3 className="text-4xl font-bold">Número: {number}</h3>
            )
        }
        {
            mail && (
                <h3 className="text-4xl font-bold">Mail: {mail}</h3>
            )
        }
        <h3 className="text-4xl font-bold">Mensaje:</h3>
        <p>{message}</p>
    </div>
);
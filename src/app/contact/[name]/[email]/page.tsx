import EmailSuccessIcon from "@/_components/Contactusfooter/Rightcontactfooter/EmailSuccessIcon/EmailSuccessIcon";
import Successheader from "@/_components/Contactusfooter/Rightcontactfooter/EmailSuccessIcon/Successheader/Successheader";
import Successpharagraph from "@/_components/Contactusfooter/Rightcontactfooter/EmailSuccessIcon/Successpharagraph/Successpharagraph";

type Params = { name: string; email: string };

export default async function Success({
  params,
}: {
  params: Promise<Params>; 
}) {
  const { name, email } = await params;
  const safeName = decodeURIComponent(name);
  const safeEmail = decodeURIComponent(email);
  return (
    <section className="min-h-[70vh] mb-10 flex items-center">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 text-center">
        <div className="bg-white flex items-center justify-center">
          <EmailSuccessIcon />
        </div>
        <Successheader name={safeName} />
        <Successpharagraph pharagraph="Has dado el primer paso en tu viaje personalizado." />
        <Successpharagraph pharagraph="Hemos recibido tu consulta y uno de nuestros expertos en destinos creará un itinerario personalizado para que lo revises y te contactará en 24 horas." />
        <p className="mt-5 text-lg md:text-[23px] md:font-light sm:text-lg md:text-xl leading-relaxed text-gray-700">
          Enviaremos tu plan de viaje a:{" "}
          {safeEmail ? (
            <strong className="font-semibold break-all">{safeEmail}</strong>
          ) : (
            <span className="italic text-gray-500">[correo no proporcionado]</span>
          )}
        </p>
        <Successpharagraph pharagraph="¿No has recibido respuesta en 24 horas? Revisa tu carpeta de SPAM para ver si tienes algún mensaje de nuestra parte." />
      </div>
    </section>
  );
}

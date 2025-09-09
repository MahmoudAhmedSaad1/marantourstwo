import Image from "next/image";
import React from "react";
const faqData = [
  {
    question: "Índice:",
    answer: "",
    isTitle: true,
  },
  {
    question: "La emoción de un viaje cultural a Egipto",
    answer:
      "No me hizo falta entrar para sentirlo. Como muchos egipcios y amantes de la cultura faraónica, llevaba años esperando con una mezcla de fascinación e impaciencia la apertura del Grand Egyptian Museum (GEM). Allí lo tenía frente a mí: sublime, etéreo y deslumbrante, casi como un espejismo. Ese edificio trapezoidal, alineado estratégicamente con las pirámides de Keops, Kefrén y Micerinos, brillaba bajo el sol con sus piedras de alabastro translúcido integrando toda su modernidad en el patrimonio histórico egipcio. Desde fuera, ya intuía que estaba ante la experiencia museística más innovadora de las últimas décadas. Y así fue.",
    image: "/imgs/2025-09-03-10-27-28-168b818108da81.webp", 
  },
  {
    question: "La emoción de un viaje cultural a Egipto",
    answer:
      "Frente a mí, la Gran Escalinata Monumental guiaba mis pasos con un relato visual: sesenta piezas que narran la evolución de las divinidades egipcias. Cuatro tramos – Imagen Real, Casas Divinas, Dioses y Reyes, Camino a la Eternidad – que preparan al visitante para adentrarse en las 12 galerías temáticas del GEM. Esta estructura ofrece un recorrido inmersivo desde la prehistoria hasta la época romana, abordando tres grandes ejes: sociedad, poder y espiritualidad.",
  },

];
export default function Blogdetailssectiontwo() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {faqData.map((item, index) => (
        <div key={index} className="mb-10">
          {item.isTitle ? (
            <h2 className="text-xl font-bold">{item.question}</h2>
          ) : (
            <>
              <h3 className="text-2xl font-extrabold mb-3">{item.question}</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                {item.answer}
              </p>
                {item.image && (
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.question}
                    width={400} 
                    height={600} 
                    className=" my-4 object-cover"
                  />
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

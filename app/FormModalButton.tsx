import { useState } from "react";

export default function FormModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão que abre o modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        Participe
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-lg p-4 max-w-3xl w-full relative">
            {/* Botão de fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* Título opcional */}
            <h2 className="text-xl font-semibold mb-4 text-center">Formulário de Participação</h2>

            {/* Iframe com Google Forms */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd-w5fexUwtXVqL8cYhFRRwI-Nj8hxSuqUqP1x2B1_1gVAJgQ/viewform?usp=sharing"
              width="100%"
              height="500"
              className="rounded border"
              allowFullScreen
              loading="lazy"
            >
              Carregando…
            </iframe>
          </div>
        </div>
      )}
    </>
  );
}

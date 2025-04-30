"use client";
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Recycle, ShoppingBag } from "lucide-react"
import { useState } from "react";
import FormModalButton from "./FormModalButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="https://www.instagram.com/consultoriarepet/" className="flex items-center gap-2 font-bold text-xl" target="_blank">
            <Image
              src="logo.png?height=550&width=550"
              width={35}
              height={35}
              alt="Logo RePet"
            />
            <span>RePet</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              Sobre
            </Link>
            <Link href="#mission" className="text-sm font-medium hover:underline underline-offset-4">
              Missão
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:underline underline-offset-4">
              Benefícios
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contato
            </Link>
          </nav>
          <FormModalButton />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative bg-cover bg-center bg-[url('/bg.jpg')]">
          <div className="absolute inset-0 bg-black/30 z-0"></div> {/* overlay escuro com 50% de opacidade */}
          <div className="relative z-10">
          </div>
          <div className="container px-4 md:px-6 ">
            <div className="center flex h-full items-center justify-center">
              <div className="flex flex-col justify-center items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-lg">
                  Transforme o <span className="text-green-500">desperdício</span> <br /> em <span className="text-green-500">alimento</span> para os animais
                </h1>
                <p className="max-w-[800px] text-gray-200 md:text-xl drop-shadow-md">
                  Um novo destino para os alimentos - um futuro melhor para o planeta.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-5 md:py-24 lg:py-15">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre o RePet</h2>
              <p className="max-w-[85%] leading-normal text-gray-500 sm:text-lg sm:leading-7">
                RePet é uma iniciativa criada por estudantes da ESAMC Uberlândia com o propósito de transformar resíduos
                alimentares em uma solução sustentável para o cuidado animal.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/esamc.jpg?height=400&width=400"
                width={400}
                height={400}
                alt="Sobre o RePet"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Nossa História</h3>
                      <p className="text-gray-500">
                        A RePet nasceu como um projeto universitário na ESAMC Uberlândia com objetivo de conectar supermercados com produtos próximos do vencimento a indústrias de pet food, que os reaproveitam para produzir rações sustentáveis e saudáveis, promovendo a economia circular e o bem-estar animal sem desperdício.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossa Missão</h2>
              <p className="max-w-[85%] leading-normal text-gray-500 sm:text-lg sm:leading-7">
                O projeto combina sustentabilidade, inovação e responsabilidade social, conectando empresas locais a uma
                causa de alto impacto. É uma ponte entre o que seria descartado e o que pode gerar vida, valor e
                propósito.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 py-8">
              <div className="relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <Recycle className="h-6 w-6" />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Economia Circular</h3>
                  <p className="text-sm text-gray-500">
                    Promovendo uma economia circular ao reutilizar resíduos alimentares que seriam descartados.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <Leaf className="h-6 w-6" />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Sustentabilidade</h3>
                  <p className="text-sm text-gray-500">
                    Reduzindo o impacto ambiental através de práticas sustentáveis e conservação de recursos.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Impacto Local</h3>
                  <p className="text-sm text-gray-500">
                    Conectando empresas locais para criar um impacto positivo na comunidade e no meio ambiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Benefícios</h2>
              <p className="max-w-[85%] leading-normal text-gray-500 sm:text-lg sm:leading-7">
                Nossa iniciativa cria valor para múltiplos stakeholders enquanto protege o meio ambiente.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Supermercados</h3>
                <p className="text-center text-gray-500">
                  Reduzem custos de descarte de resíduos e contribuem para metas de sustentabilidade doando alimentos
                  próximos ao vencimento.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Indústrias PetFood</h3>
                <p className="text-center text-gray-500">
                  Menor custo de produção significa acesso contínuo e sustentável a insumos de qualidade por um preço reduzido.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Recycle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Donos de Pets</h3>
                <p className="text-center text-gray-500">
                  Acesso a opções de ração nutritiva e sustentável que apoiam a conservação ambiental.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Junte-se ao Movimento RePet</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Seja você uma empresa que busca reduzir resíduos ou um indivíduo apaixonado por sustentabilidade,
                gostaríamos de ouvir você.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <FormModalButton />
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Recycle className="h-6 w-6 text-green-600" />
            <p className="text-sm text-gray-500">© 2025 RePet. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Termos de Serviço
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

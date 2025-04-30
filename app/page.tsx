import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Recycle, ShoppingBag } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Recycle className="h-6 w-6 text-green-600" />
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
          <Link
            href="#contact"
            className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Participe
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Sempre Reciclando e Inovando
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Transformando resíduos alimentares em soluções sustentáveis para cuidados com animais.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#mission"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Saiba Mais
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Contate-nos
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Imagem Principal RePet"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre o RePet</h2>
              <p className="max-w-[85%] leading-normal text-gray-500 sm:text-lg sm:leading-7">
                RePet é uma iniciativa criada por estudantes da ESAMC Uberlândia com o propósito de transformar resíduos
                alimentares em uma solução sustentável para o cuidado animal.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=400"
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
                        Ao coletar alimentos próximos à data de validade, o RePet os reutiliza com segurança para
                        produzir ração canina nutritiva, promovendo a economia circular, reduzindo o impacto ambiental e
                        beneficiando supermercados, indústrias de ração animal e proprietários conscientes.
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
                <h3 className="text-xl font-bold">Meio Ambiente</h3>
                <p className="text-center text-gray-500">
                  Menos resíduos alimentares em aterros significa redução de emissões de gases de efeito estufa e
                  impacto ambiental.
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
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Participe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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

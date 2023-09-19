import { LuBookMarked } from "react-icons/lu"
import {LuClipboardCheck} from "react-icons/lu"
import {BiConversation} from "react-icons/bi"
import {PiGearSixBold} from "react-icons/pi"
import {TbClockCheck} from "react-icons/tb"
import {BiTargetLock} from "react-icons/bi"

export default function FeaturesBlocks() {
  return (
    <section className="relative" id="vitality">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Sucesso na Implementação dos Pilares Tecnológicos Empresariais.</h2>
            <p className="text-xl text-gray-600">
              Os pilares tecnológicos são essenciais para o crescimento empresarial, permitindo inovação, satisfação do cliente e competitividade a longo prazo.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-[220px]">
              <div className="w-[53px] h-[53px] min-h-[53px] min-w-[53px] rounded-full flex items-center justify-center bg-[#0070F4]">
                <LuBookMarked color="white" fontSize={25} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight text-center my-2">Experiência Técnica Profunda</h4>
              <p className="text-gray-600 text-center">Equipe experiente em programação, design e tecnologia, soluções inovadoras.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-[220px]">
              <div className="w-[53px] h-[53px] min-h-[53px] min-w-[53px] rounded-full flex items-center justify-center bg-[#0070F4]">
                <LuClipboardCheck color="white" fontSize={25} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight text-center my-2">Compromisso com a Qualidade</h4>
              <p className="text-gray-600 text-center">Rigor no controle de qualidade para superar expectativas dos clientes.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-[220px]">
              <div className="w-[53px] h-[53px] min-h-[53px] min-w-[53px] rounded-full flex items-center justify-center bg-[#0070F4]">
                <BiConversation color="white" fontSize={25} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight text-center my-2">Comunicação Efetiva</h4>
              <p className="text-gray-600 text-center">Comunicação clara, entendimento das necessidades do cliente, transparência em projetos.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-[220px]">
              <div className="w-[53px] h-[53px] min-h-[53px] min-w-[53px] rounded-full flex items-center justify-center bg-[#0070F4]">
                <PiGearSixBold color="white" fontSize={25} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight text-center my-2">Flexibilidade e Adaptabilidade</h4>
              <p className="text-gray-600 text-center">Flexibilidade para adaptar-se a tecnologias e demandas, oferecendo soluções relevantes.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-[220px]">
              <div className="w-[53px] h-[53px] min-h-[53px] min-w-[53px] rounded-full flex items-center justify-center bg-[#0070F4]">
                <TbClockCheck color="white" fontSize={25} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight text-center my-2">Prazo de Entrega Confiável</h4>
              <p className="text-gray-600 text-center">Garantimos pontualidade, valorizando a satisfação do cliente.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-[220px]">
              <div className="w-[53px] h-[53px] min-h-[53px] min-w-[53px] rounded-full flex items-center justify-center bg-[#0070F4]">
                <BiTargetLock color="white" fontSize={25} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight text-center my-2">Foco no Cliente</h4>
              <p className="text-gray-600 text-center">Ouvimos, compreendemos e colaboramos para soluções personalizadas.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
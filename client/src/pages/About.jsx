import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <div className='py-20 px-4 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4'>About Bule Glbal Solution</h1>

        <p className='mb-4 text-slate-700'>A BGS - Bule Global Solutions Lda, é uma pessoa colectiva de direito privado, matriculada na Conservatória de Registo de Entidades Legais sob o NUEL: 101638731, com sede em Maputo, vocacionada a prestação de serviços diversos, com destaque  em Mineração e actividades conexas.</p>

        <p className='mb-4 text-slate-700'>Possui uma larga carteira de licenças mineiras distribuídas em quase todos território nacional, com os seguintes minérios:

* Ouro, 
* Rubis,
* Areias Pesadas,
* Cobre, 
* Grafite, 
* Tantalite, 
* Lipodolite,
* Espodumena,
* Calcário, 
* Diamantes, 
* Àguas Marinhas
* Niobio
* Granito
* Manganês 
* Grafite
* Cobre
* Rubí
* Turmalinas
* Zircão
* Titânio
* Safira
* Granada
* Corindo
* Carvão
* Chumbo
* Berílo e mais..</p>
<p className='mb-4 text-green-600'>Os quais estão sobre sua gestão para promoção, intermediação e assessoria no processo de compra e venda ou parceria.
.</p>
        
  </div>
  <div className="flex flex-wrap gap-4 items-center justify-center">
    <div className="text-center">
      <Link>
      +258822507746 <br />
      Email: bgs.infomoz@gmail.com
      </Link>
    </div>
    <div className="">
    Av. Samora Machel, 396  <br />
    Maputo - Moçambique

    </div>
    <div className="">
    Departmento de Marketing  <br />
    +25884/875826662

    </div>
    <div className="text-center">
    Departmento Comercial  <br />
    +25884/872507746
    </div>
  </div>
    </div>
  )
}

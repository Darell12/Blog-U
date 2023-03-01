import React from 'react';
import Link from 'next/dist/client/link';
import moment from 'moment';

const PostDetailE = () => {

      let imgP = "https://media.graphassets.com/sxifewHbSgKdcarfzVAM";
  let slugP = "technical-seo-with-hygraph";
  let title= "Tipos de hormonas";
  let categories =[{
                "name": "Sistema Endocrino",
                "slug": "sistema-endocrino"
  }];
  let author = {
    "bio": "",
              "name": "Brigitte Arrieta Delgado",
              "id": "ckadqdbhk00go0148zzxh4bbq",
              "photo": {
                "url": "https://media.graphassets.com/H93m4DkgT5aTZqYHchPo"
              }
  }
  let createdAt = "2020-05-19T10:11:58.792576+00:00";
  let excerpt = "Get started with your SEO implementation when using a Headless CMS"
 let post = {
  "data": {
    "postsConnection": {
      "edges": [
        {
          "cursor": "ckadrcx4g00pw01525c5d2e56",
          "node": {
          }
        },
      ]
    }
  }
 }

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }



  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={imgP} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold text-center">{title}</h1>
          <h1 className="mb-8 text-2xl font-semibold text-center">Hipotalamo</h1>
<table className='border-solid'>
	<thead className='bg-gray-200 border-b'>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<th className='text-sm font-medium px-6 py-4 text-left'>HORMONA</th>
			<th className='text-sm font-medium px-6 py-4 text-left'>ACCION PRINCIPAL</th>
		</tr>
	</thead>
	<tbody>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td className=''>Hormona antidiurética (ADH)</td>
			<td>Regular el balance de agua por lo que actúa sobre los riñones y es importante para la regulación de la presión arterial.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Oxitocina</td>
			<td>Estimula las contracciones uterinas y la salida de leche.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Liberadora de corticotropina (ACTH plasmática)</td>
			<td>Se produce por la hipófisis anterior. Estimular la secreción de cortisol.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Liberadora de gonadotropina (GnRH)</td>
			<td>Actúa sobre la hipófisis, estimulando la producción y liberación de la hormona luteinizante (LH) y la foliculoestimulante (FSH). Como decía antes, coordina el ciclo menstrual femenino y la espermatogénesis masculina. Es un decapéptido.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Inhibidora de prolactina (PIH)</td>
			<td>Inhibir la liberación de la prolactina del lóbulo anterior de la hipófisis.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Somatostatina (GHIH)</td>
			<td>Inhibe la producción de la hormona del crecimiento por la hipófisis, también tiene efectos en el páncreas, donde inhibe la secreción de insulina y glucagón.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Liberadora de tirotropina (TRH)</td>
			<td>Es un tripéptido y su función es estimular la secreción de prolactina y tirotropina (TSH) que regula la producción de hormonas tiroideas por la glándula tiroides.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Somatocrinina – liberadora de somatotropina (STH)</td>
			<td>Se produce en el núcleo arcuato del hipotálamo y estimula la liberación de la hormona del crecimiento hipofisiaria.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Somatostatina – Inhibidora de la liberación de somatotropina (GIH)</td>
			<td>Inhibe la secreción de somatotropina, insulina, glucagón, polipéptido pancreático y la TSH. Se secreta por la región periventricular del hipotálamo.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Factor inhibidor de la liberación de la prolactina (PIF)</td>
			<td>Inhibe la secreción de prolactina hipofisiaria y se secreta por el núcleo arcuato hipotalámico.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Angiotensina II (AII)</td>
			<td>La angiotensina II aumenta la presión sanguínea, la presión y el pH.</td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">Hipófisis</h1>
<table>
	<thead>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<th>HORMONA</th>
			<th>ACCION PRINCIPAL</th>
		</tr>
	</thead>
	<tbody>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Hormona del crecimiento (GH) o somatotropina</td>
			<td>Estimula el crecimiento y la replicación celular acelerando la síntesis proteínas.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Tirotropina u hormona tiroides estimulante (TSH)</td>
			<td>Estimula la glándula tiroides.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Hormona foliculoestimulante (FSH)</td>
			<td>Estimula el folículo ovárico, espermatogénesis.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Hormona luteinizante (LH)</td>
			<td>Estimula la ovulación y la formación del cuerpo lúteo en las hembras y las células intersticiales en el macho.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Prolactina (PRL)</td>
			<td>Estimula la producción de leche.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Hormona adrenocorticotrópica (ACTH)</td>
			<td>Estimula la corteza suprarrenal.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Hormona melanocitoestimulante (MSH)</td>
			<td>Estimula los melanocitos de la piel, aumentando el ritmo de producción y distribución de melanina.</td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">Pineal</h1>
<table>
	<thead>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<th>HORMONA</th>
			<th>ACCION PRINCIPAL</th>
		</tr>
	</thead>
	<tbody>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Melatonina</td>
			<td>Regular el ciclo circadiano, haciendo con que funcione correctamente, mejorando la calidad del sueño.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Melanina</td>
			<td>Pigmento natural responsable del color de la piel y el cabello. proteger a la piel contra los efectos de la radiación ultravioleta de la luz solar. </td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">Tiroides</h1>
<table>
	<thead>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<th>HORMONA</th>
			<th>ACCION PRINCIPAL</th>
		</tr>
	</thead>
	<tbody>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Triyodotironina (T3)</td>
			<td>Estimula el metabolismo, el crecimiento y el desarrollo. También regula los niveles de energía del cuerpo, la temperatura y el correcto funcionamiento de todos sus órganos y tejidos.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Tiroxina (T4)</td>
			<td>Regula la frecuencia cardiaca, los niveles de colesterol, el peso corporal, el nivel de energía, la fuerza musculas, las condiciones de la piel, la regularidad menstrual, la memoria.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Calcitonina</td>
			<td>Reducción de los niveles de calcio sanguíneo.</td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">Paratiroides</h1>
<table>
	<thead>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<th>HORMONA </th>
			<th>ACCION PRINCIPAL</th>
		</tr>
	</thead>
	<tbody>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Paratiroidea (PTH)</td>
			<td>Es una hormona peptídica secretada por la glándula paratiroides que interviene en la regulación del metabolismo del calcio y del fósforo.</td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">Timo</h1>
<table>
	<thead>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<th>HORMONA </th>
			<th>ACCION PRINCIPAL</th>
		</tr>
	</thead>
	<tbody>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Timopoyetina</td>
			<td>Produce diferenciación de las células linfoides a linfocitos.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Timosina</td>
			<td>Estimula la competencia inmunológica en los tejidos linfáticos.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Factor humoral tímico (THF)</td>
			<td>Aumenta las respuestas inmunes a los virus en particular</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Timulina (TF)</td>
			<td>Reduce el dolor de una inflamación y juega un papel en las interacciones inmunológicas y neuro-endocrinas.</td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">Glándulas suprarrenales</h1>
<table>
	<thead>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<th>HORMONA</th>
			<th>ACCION PRINCIPAL</th>
		</tr>
	</thead>
	<tbody>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Adrenalina – Epinefrina (DCI)</td>
			<td>Está implicada en las respuestas de pelea o huida del cuerpo, incrementando el ritmo cardíaco y los niveles sanguíneos de glucosa, causando un aumento de flujo sanguíneo hacia el cerebro y los músculos</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Noradrenalina (DCI)</td>
			<td>Trabaja junto con la adrenalina, constriñendo los vasos sanguíneos y aumentando la presión sanguínea durante la respuesta al estrés.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Corticosteroides – Mineralocorticoides</td>
			<td>Esteroides, con importante efecto sobre el equilibrio del sodio y del potasio.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Corticosteroides – Glucocorticoides</td>
			<td>Esteroides que influyen en el metabolismo de los hidratos de carbono, las grasas y las proteínas.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Corticosteroides – Hormonas sexuales </td>
			<td>Esteroides que son fundamentalmente andrógenos débiles y que contribuyen a los caracteres sexuales secundarios.</td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">Páncreas</h1>
<table>
	<thead>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<th>HORMONA</th>
			<th>ACCION PRINCIPAL</th>
		</tr>
	</thead>
	<tbody>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Glucagón</td>
			<td>Aumenta el nivel de glucosa sanguínea (hormona hiperglucemiante), acelera la degradación de glucógeno en glucosa en el hígado (glucogenólisis). Convierte otros nutrientes en glucosa en el hígado (gluconeogénesis) y liberando glucosa hacia la sangre.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Insulina</td>
			<td>Regula el nivel de glucosa en la sangre, y estimula la síntesis de proteínas.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Somatostatina</td>
			<td>inhibe la contracción del músculo liso del aparato digestivo y de la vesícula biliar cuando la digestión ha terminado. Inhibide la liberación de insulina y de glucagón de las células beta y alfa vecinas. Actúa como una hormona circulante disminuyendo la absorción de nutrientes desde el tubo digestivo.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Polipéptido pancreático</td>
			<td>Inhibe la secreción de somatostatina y la contracción de la vesícula biliar.</td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">Ovarios</h1>
<table>
	<thead>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<th>HORMONA</th>
			<th>ACCION PRINCIPAL</th>
		</tr>
	</thead>
	<tbody>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Estrógenos</td>
			<td>Estimular el desarrollo de las características sexuales secundarias femeninas.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Progesterona</td>
			<td>Actúa para preparar el útero para recibir el óvulo fertilizado y mantener el embarazo.</td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">Testículos</h1>
<table>
	<thead>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<th>HORMONA</th>
			<th>ACCION PRINCIPAL</th>
		</tr>
	</thead>
	<tbody>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Testosterona</td>
			<td>Mejora el crecimiento óseo, el crecimiento del vello corporal y el desarrollo de los órganos sexuales durante la pubertad. La testosterona también es importante en el aumento de fuerza muscular.</td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">Placenta</h1>
<table>
	<thead>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<th>HORMONA</th>
			<th>ACCION PRINCIPAL</th>
		</tr>
	</thead>
	<tbody>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Gonadotropina coriónica humana (hCG)</td>
			<td>Producida por el óvulo fertilizado después de que se implanta en el útero y ayuda a mantener el cuerpo lúteo durante las primeras etapas del embarazo.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Progesterona y estrógeno</td>
			<td>La progesterona suficiente en el cuerpo de una mujer asegura que el revestimiento del útero permanezca intacto y proporciona un ambiente nutritivo para que el óvulo se implante y se desarrolle. Y el estrógeno, ayuda a mantener el embarazo y a preparar los senos para la producción de leche.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Lactógeno placentario humano (hPL)</td>
			<td>Hormona secretada por la placenta que promueve el crecimiento de la glándula mamaria en preparación para la lactancia.</td>
		</tr>
	</tbody>
</table>
<br /><br />
<h2>Referencias</h2>
<br />
<span>
  Costas, G. (2021, 14 abril). Hipotálamo: qué es, estructura, funciones y hormonas implicadas. Ciencia y Biología. 
</span><br />
    <a className='text-blue-600' href="https://cienciaybiologia.com/hipotalamo/">https://cienciaybiologia.com/hipotalamo/</a>

    <br />
    <br />
<span>
  Costas, G. (2020, 19 septiembre). Glándula pituitaria o hipófisis: estructura, funciones y hormonas. Ciencia y Biología 
</span>
<br />
    <a className='text-blue-600' href="https://cienciaybiologia.com/glandula-pituitaria-o-hipofisis-estructura-funciones-y-hormonas/">https://cienciaybiologia.com/glandula-pituitaria-o-hipofisis-estructura-funciones-y-hormonas/</a>
        <br />
    <br />
<span>
  Rodríguez, A. (2022, 21 marzo). Hormonas que secreta el timo. 
</span><br />
    <a className='text-blue-600' href="https://biblogteca.com/hormonas-que-secreta-el-timo/">Biblogteca. https://biblogteca.com/hormonas-que-secreta-el-timo/</a>
        <br />
    <br />
<span>
  Rodríguez, A. (2022b, marzo 28). Hormonas que secreta el páncreas. 
</span><br />
    <a className='text-blue-600' href="https://biblogteca.com/hormonas-que-secreta-el-pancreas/">Biblogteca. https://biblogteca.com/hormonas-que-secreta-el-pancreas/</a>
        <br />
    <br />
<span>
  C. (2021, 16 junio). ▷ Hormonas de los testículos y los ovarios: funciones y características anatómicas. 
</span><br />
    <a className='text-blue-600' href="https://estudyando.com/hormonas-de-los-testiculos-y-los-ovarios-funciones-y-caracteristicas-anatomicas/">Estudyando. https://estudyando.com/hormonas-de-los-testiculos-y-los-ovarios-funciones-y-caracteristicas-anatomicas/</a>
        <br />
    <br />
<span>
  C. (2021a, junio 16). ▷ Hormonas de la placenta: estrógeno, progesterona y hCG 
</span><br />
    <a className='text-blue-600' href="https://estudyando.com/hormonas-de-la-placenta-estrogeno-progesterona-y-hcg/">Estudyando. https://estudyando.com/hormonas-de-la-placenta-estrogeno-progesterona-y-hcg/</a>

        </div>


      </div>

    </>
  );
};

export default PostDetailE;

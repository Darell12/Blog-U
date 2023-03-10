import React from 'react';
import Link from 'next/dist/client/link';
import moment from 'moment';

const PostDetailE = () => {

  const imgP = "https://media.graphassets.com/sxifewHbSgKdcarfzVAM";
  const slugP = "technical-seo-with-hygraph";
  const title= "Tipos de hormonas";
  const categories =[{
                "name": "Sistema Endocrino",
                "slug": "sistema-endocrino"
  }];
  const author = {
    "bio": "",
              "name": "Brigitte Arrieta Delgado",
              "id": "ckadqdbhk00go0148zzxh4bbq",
              "photo": {
                "url": "https://media.graphassets.com/H93m4DkgT5aTZqYHchPo"
              }
  }
  const createdAt = "2020-05-19T10:11:58.792576+00:00";
  const excerpt = "Get started with your SEO implementation when using a Headless CMS"
 const post = {
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
			<td className=''>Hormona antidiur??tica (ADH)</td>
			<td>Regular el balance de agua por lo que act??a sobre los ri??ones y es importante para la regulaci??n de la presi??n arterial.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Oxitocina</td>
			<td>Estimula las contracciones uterinas y la salida de leche.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Liberadora de corticotropina (ACTH plasm??tica)</td>
			<td>Se produce por la hip??fisis anterior. Estimular la secreci??n de cortisol.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Liberadora de gonadotropina (GnRH)</td>
			<td>Act??a sobre la hip??fisis, estimulando la producci??n y liberaci??n de la hormona luteinizante (LH) y la foliculoestimulante (FSH). Como dec??a antes, coordina el ciclo menstrual femenino y la espermatog??nesis masculina. Es un decap??ptido.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Inhibidora de prolactina (PIH)</td>
			<td>Inhibir la liberaci??n de la prolactina del l??bulo anterior de la hip??fisis.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Somatostatina (GHIH)</td>
			<td>Inhibe la producci??n de la hormona del crecimiento por la hip??fisis, tambi??n tiene efectos en el p??ncreas, donde inhibe la secreci??n de insulina y glucag??n.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Liberadora de tirotropina (TRH)</td>
			<td>Es un trip??ptido y su funci??n es estimular la secreci??n de prolactina y tirotropina (TSH) que regula la producci??n de hormonas tiroideas por la gl??ndula tiroides.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Somatocrinina ??? liberadora de somatotropina (STH)</td>
			<td>Se produce en el n??cleo arcuato del hipot??lamo y estimula la liberaci??n de la hormona del crecimiento hipofisiaria.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Somatostatina ??? Inhibidora de la liberaci??n de somatotropina (GIH)</td>
			<td>Inhibe la secreci??n de somatotropina, insulina, glucag??n, polip??ptido pancre??tico y la TSH. Se secreta por la regi??n periventricular del hipot??lamo.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Factor inhibidor de la liberaci??n de la prolactina (PIF)</td>
			<td>Inhibe la secreci??n de prolactina hipofisiaria y se secreta por el n??cleo arcuato hipotal??mico.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Angiotensina II (AII)</td>
			<td>La angiotensina II aumenta la presi??n sangu??nea, la presi??n y el pH.</td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">Hip??fisis</h1>
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
			<td>Estimula el crecimiento y la replicaci??n celular acelerando la s??ntesis prote??nas.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Tirotropina u hormona tiroides estimulante (TSH)</td>
			<td>Estimula la gl??ndula tiroides.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Hormona foliculoestimulante (FSH)</td>
			<td>Estimula el fol??culo ov??rico, espermatog??nesis.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Hormona luteinizante (LH)</td>
			<td>Estimula la ovulaci??n y la formaci??n del cuerpo l??teo en las hembras y las c??lulas intersticiales en el macho.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Prolactina (PRL)</td>
			<td>Estimula la producci??n de leche.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Hormona adrenocorticotr??pica (ACTH)</td>
			<td>Estimula la corteza suprarrenal.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Hormona melanocitoestimulante (MSH)</td>
			<td>Estimula los melanocitos de la piel, aumentando el ritmo de producci??n y distribuci??n de melanina.</td>
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
			<td>Regular el ciclo circadiano, haciendo con que funcione correctamente, mejorando la calidad del sue??o.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Melanina</td>
			<td>Pigmento natural responsable del color de la piel y el cabello. proteger a la piel contra los efectos de la radiaci??n ultravioleta de la luz solar. </td>
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
			<td>Estimula el metabolismo, el crecimiento y el desarrollo. Tambi??n regula los niveles de energ??a del cuerpo, la temperatura y el correcto funcionamiento de todos sus ??rganos y tejidos.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Tiroxina (T4)</td>
			<td>Regula la frecuencia cardiaca, los niveles de colesterol, el peso corporal, el nivel de energ??a, la fuerza musculas, las condiciones de la piel, la regularidad menstrual, la memoria.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Calcitonina</td>
			<td>Reducci??n de los niveles de calcio sangu??neo.</td>
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
			<td>Es una hormona pept??dica secretada por la gl??ndula paratiroides que interviene en la regulaci??n del metabolismo del calcio y del f??sforo.</td>
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
			<td>Produce diferenciaci??n de las c??lulas linfoides a linfocitos.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Timosina</td>
			<td>Estimula la competencia inmunol??gica en los tejidos linf??ticos.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Factor humoral t??mico (THF)</td>
			<td>Aumenta las respuestas inmunes a los virus en particular</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Timulina (TF)</td>
			<td>Reduce el dolor de una inflamaci??n y juega un papel en las interacciones inmunol??gicas y neuro-endocrinas.</td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">Gl??ndulas suprarrenales</h1>
<table>
	<thead>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<th>HORMONA</th>
			<th>ACCION PRINCIPAL</th>
		</tr>
	</thead>
	<tbody>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Adrenalina ??? Epinefrina (DCI)</td>
			<td>Est?? implicada en las respuestas de pelea o huida del cuerpo, incrementando el ritmo card??aco y los niveles sangu??neos de glucosa, causando un aumento de flujo sangu??neo hacia el cerebro y los m??sculos</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Noradrenalina (DCI)</td>
			<td>Trabaja junto con la adrenalina, constri??endo los vasos sangu??neos y aumentando la presi??n sangu??nea durante la respuesta al estr??s.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Corticosteroides ??? Mineralocorticoides</td>
			<td>Esteroides, con importante efecto sobre el equilibrio del sodio y del potasio.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Corticosteroides ??? Glucocorticoides</td>
			<td>Esteroides que influyen en el metabolismo de los hidratos de carbono, las grasas y las prote??nas.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Corticosteroides ??? Hormonas sexuales </td>
			<td>Esteroides que son fundamentalmente andr??genos d??biles y que contribuyen a los caracteres sexuales secundarios.</td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">P??ncreas</h1>
<table>
	<thead>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<th>HORMONA</th>
			<th>ACCION PRINCIPAL</th>
		</tr>
	</thead>
	<tbody>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Glucag??n</td>
			<td>Aumenta el nivel de glucosa sangu??nea (hormona hiperglucemiante), acelera la degradaci??n de gluc??geno en glucosa en el h??gado (glucogen??lisis). Convierte otros nutrientes en glucosa en el h??gado (gluconeog??nesis) y liberando glucosa hacia la sangre.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Insulina</td>
			<td>Regula el nivel de glucosa en la sangre, y estimula la s??ntesis de prote??nas.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Somatostatina</td>
			<td>inhibe la contracci??n del m??sculo liso del aparato digestivo y de la ves??cula biliar cuando la digesti??n ha terminado. Inhibide la liberaci??n de insulina y de glucag??n de las c??lulas beta y alfa vecinas. Act??a como una hormona circulante disminuyendo la absorci??n de nutrientes desde el tubo digestivo.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Polip??ptido pancre??tico</td>
			<td>Inhibe la secreci??n de somatostatina y la contracci??n de la ves??cula biliar.</td>
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
			<td>Estr??genos</td>
			<td>Estimular el desarrollo de las caracter??sticas sexuales secundarias femeninas.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Progesterona</td>
			<td>Act??a para preparar el ??tero para recibir el ??vulo fertilizado y mantener el embarazo.</td>
		</tr>
	</tbody>
</table>
<br />
<h1 className="mb-8 text-2xl font-semibold text-center">Test??culos</h1>
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
			<td>Mejora el crecimiento ??seo, el crecimiento del vello corporal y el desarrollo de los ??rganos sexuales durante la pubertad. La testosterona tambi??n es importante en el aumento de fuerza muscular.</td>
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
			<td>Gonadotropina cori??nica humana (hCG)</td>
			<td>Producida por el ??vulo fertilizado despu??s de que se implanta en el ??tero y ayuda a mantener el cuerpo l??teo durante las primeras etapas del embarazo.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Progesterona y estr??geno</td>
			<td>La progesterona suficiente en el cuerpo de una mujer asegura que el revestimiento del ??tero permanezca intacto y proporciona un ambiente nutritivo para que el ??vulo se implante y se desarrolle. Y el estr??geno, ayuda a mantener el embarazo y a preparar los senos para la producci??n de leche.</td>
		</tr>
		<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
			<td>Lact??geno placentario humano (hPL)</td>
			<td>Hormona secretada por la placenta que promueve el crecimiento de la gl??ndula mamaria en preparaci??n para la lactancia.</td>
		</tr>
	</tbody>
</table>
<br /><br />
<h2>Referencias</h2>
<br />
<span>
  Costas, G. (2021, 14 abril). Hipot??lamo: qu?? es, estructura, funciones y hormonas implicadas. Ciencia y Biolog??a. 
</span><br />
    <a className='text-blue-600' href="https://cienciaybiologia.com/hipotalamo/">https://cienciaybiologia.com/hipotalamo/</a>

    <br />
    <br />
<span>
  Costas, G. (2020, 19 septiembre). Gl??ndula pituitaria o hip??fisis: estructura, funciones y hormonas. Ciencia y Biolog??a 
</span>
<br />
    <a className='text-blue-600' href="https://cienciaybiologia.com/glandula-pituitaria-o-hipofisis-estructura-funciones-y-hormonas/">https://cienciaybiologia.com/glandula-pituitaria-o-hipofisis-estructura-funciones-y-hormonas/</a>
        <br />
    <br />
<span>
  Rodr??guez, A. (2022, 21 marzo). Hormonas que secreta el timo. 
</span><br />
    <a className='text-blue-600' href="https://biblogteca.com/hormonas-que-secreta-el-timo/">Biblogteca. https://biblogteca.com/hormonas-que-secreta-el-timo/</a>
        <br />
    <br />
<span>
  Rodr??guez, A. (2022b, marzo 28). Hormonas que secreta el p??ncreas. 
</span><br />
    <a className='text-blue-600' href="https://biblogteca.com/hormonas-que-secreta-el-pancreas/">Biblogteca. https://biblogteca.com/hormonas-que-secreta-el-pancreas/</a>
        <br />
    <br />
<span>
  C. (2021, 16 junio). ??? Hormonas de los test??culos y los ovarios: funciones y caracter??sticas anat??micas. 
</span><br />
    <a className='text-blue-600' href="https://estudyando.com/hormonas-de-los-testiculos-y-los-ovarios-funciones-y-caracteristicas-anatomicas/">Estudyando. https://estudyando.com/hormonas-de-los-testiculos-y-los-ovarios-funciones-y-caracteristicas-anatomicas/</a>
        <br />
    <br />
<span>
  C. (2021a, junio 16). ??? Hormonas de la placenta: estr??geno, progesterona y hCG 
</span><br />
    <a className='text-blue-600' href="https://estudyando.com/hormonas-de-la-placenta-estrogeno-progesterona-y-hcg/">Estudyando. https://estudyando.com/hormonas-de-la-placenta-estrogeno-progesterona-y-hcg/</a>

        </div>


      </div>

    </>
  );
};

export default PostDetailE;

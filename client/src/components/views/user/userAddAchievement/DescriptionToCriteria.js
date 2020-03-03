import React, {Component} from 'react';
import '../../../../style/add_portfolio.css';

export default class DescriptionToCriteria extends Component {
  constructor(props) {
    super(props);
  }

  renderSwitch(crit) {
    switch (crit) {
      case '1 (7а)':
        return <div>Получение студентом за последние две сессии только оценок «отлично».
          <br/><br/>
          <b>Примечание. </b><i>В случае наличия в течение года, непосредственно предшествующего назначению
                        повышенной государственной академической стипендии, <b>пересдачи экзамена (зачета)</b> по
                        неуважительной причине за данный критерий <b>ставится ноль баллов</b>.</i></div>;
        break;
      case '2 (7б)':
        return <div> Получение студентом
                    стипендии, награды (приза) за результаты проектной деятельности и (или) опытно-конструкторской
                    работы. </div>;
        break;
      case '3 (7в)':
        return <div>Признание студента победителем или призером олимпиады, конкурса, соревнования, состязания и
                    (или) иного мероприятия, направленных на выявление <b>учебных</b> достижений студентов. <br/><br/>
        <b>Примечание.</b><i> Настоящим критерием оцениваются только те достижения, которые были получены в
                        период обучения студента в высшем учебном заведении.</i></div>;
        break;
      case '4 (8а)':
        return <div> Получение студентом:<br/>• награды (приза) за результаты научно-исследовательской работы,
                    проводимой студентом;<br/>•документа, удостоверяющего исключительное право студента, на достигнутый
                    им научный (научно-методический, научно-технический, научно-творческий) результат интеллектуальной
                    деятельности (патент, свидетельство);<br/>• гранта на выполнение научно-исследовательской
                    работы.<br/><br/>
        <b>Примечание.</b><i> Настоящим критерием оцениваются только те награды (призы) за результаты
                        научно-исследовательской работы, которые были получены в период обучения студента в высшем
                        учебном заведении.</i><br/>
        <b>Примечание.</b><i> Настоящим критерием награда (приз), оценивается только в случае, если согласно
                        положению о соответствующей награде (призе) (или согласно иному документу, регламентирующему ее
                        (его) назначение) при определении награждаемых студентов оценивались преимущественно не
                        количественные характеристики результатов научно-исследовательской работы, предусмотренные
                        критериями №№ 4 (8а) и 5 (8б), а качественные или непредусмотренные критериями №№ 4 (8а) и 5
                        (8б) количественные характеристики.</i></div>;
        break;
      case '5 (8б)':
        return <div> Наличие публикации в научном издании. <br/><br/>
          <b><a href="/prims#5" target="_blank">Открыть примечания</a></b></div>;
        break;
      case '6 (9а)':
        return <div>Систематическое участие <b>(два и более раза)</b> в проведении (обеспечении проведения)
                    общественно значимой деятельности, <b>организуемой СПбГУ</b> или с его участием, подтверждаемое
                    документально <b>(сотрудником СПбГУ)</b>.<br/><br/>
        <b><a href="/prims#6" target="_blank">Открыть примечания</a></b></div>;
        break;
      case '7 (9б)':
        return <div> Систематическое участие <b>(три и более раза)</b> в деятельности по информационному
                    обеспечению общественно значимых мероприятий и (или) общественной жизни <b>СПбГУ</b>, подтверждаемое
                    документально <b>(сотрудником СПбГУ)</b>.<br/><br/>
        <b><a href="/prims#7" target="_blank">Открыть примечания</a></b></div>;
        break;
      case '8 (10а)':
        return <div> Получение награды (приза) за результаты культурно-творческой деятельности, в том числе в
                    рамках конкурса, смотра и (или) иного аналогичного международного, всероссийского, ведомственного и
                    (или) регионального мероприятия, подтверждаемое документально.<br/><br/>
        <b>Примечание.</b> <i>Если награда (приз) получена за деятельность, соответствующую критерию № 9
                        (10б), кроме самой награды (приза), оцениваемой настоящим критерием, оценивается также и
                        указанная деятельность (критерием No 9 (10б)).</i><br/>
        <b>Примечание.</b> <i>Настоящим критерием не оцениваются достижения, соответствующие иным
                        критериям.</i></div>;
        break;
      case '9 (10б)':
        return <div> Публичное представление студентом созданного им произведения литературы и (или) искусства
                    (см. критерии), подтверждаемое документально.<br/><br/>
        <b>Примечание.</b> <i>Настоящим критерием оцениваются только те произведения литературы и (или)
                        искусства, которые прошли конкурсный отбор.</i></div>;
        break;
      case '10 (10в)':
        return <div> Систематическое участие (два и более раза) в проведении (обеспечении проведения) публичной
                    культурно-творческой деятельности воспитательного, пропагандистского характера и (или) иной
                    общественно значимой публичной культурно-творческой деятельности, подтверждаемое документально.<br/><br/>
        <b>Примечание. <i>За данный критерий ставится ноль баллов (см. <a target='_blank'
          href='/doc/Kriterii_PGAS_PM-PU.pdf'>критерии</a>).</i></b>
        </div>;
        break;
      case '11 (11а)':
        return <div> Получение студентом награды (приза) за результаты спортивной деятельности, осуществленной
                    им в рамках спортивных мероприятий, проводимых СПбГУ и (или) иной организацией. <br/><br/>
        <b>Примечание.</b><i> Если награда (приз) получена за деятельность, соответствующую строке «Любое
                        систематическое участие» критерия № 12 (11б), кроме самой награды (приза), оцениваемой настоящим
                        критерием, оценивается также и указанная деятельность (строкой «Любое систематическое участие»
                        критерия No 12 (11б)). <b>Для этого необходимо указать эту деятельность в критерии № 12
                            (11б).</b></i></div>;
        break;
      case '12 (11б)':
        return <div> Систематическое участие (два и более раза) в спортивных мероприятиях воспитательного,
                    пропагандистского характера и (или) иных общественно значимых спортивных мероприятиях,
                    подтверждаемое документально.<br/><br/>
        <b><a href="/prims#12" target="_blank">Открыть примечания</a></b></div>;
        break;
      case '13 (11в)':
        return <div>Выполнение нормативов и требований золотого знака отличия «Всероссийского
                    физкультурно-спортивного комплекса „Готов к труду и обороне“» (ГТО) <b>соответствующей возрастной
                        группы на дату назначения повышенной государственной академической стипендии</b>.</div>;
        break;
    }
  }

  render() {
    return (
      <div id="critDescr" className="blue_bg">
        <p className="desc_selectors" id="desc_criterion_first">

          {this.renderSwitch(this.props.crit)}

        </p>
      </div>
    );
  }
}



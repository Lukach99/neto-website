import "./index.scss";
import WorkInfo from "./WorkInfo";

const Work = () => {
  return (
    <div className="services">
      <h2 className="services-h2">Nudimo usluge ...</h2>
      <div className="services-list">
        <WorkInfo
          title="Kuhinje po mjeri"
          imgSrc="https://dupqmgrdwnev6.cloudfront.net/wp-content/uploads/2021/02/KUHINJE-PO-MJERI-PRIMA-Julija-siva-930x581.jpg?x92893"
          description="Kuhinja je jedno od najbitnijih mjesta vašeg doma te ona kao takva treba ispuniti tri bitna zahtjeva, a oni su: pristupačnost, funkcionalnost i estetika."
        ></WorkInfo>
        <WorkInfo
          title="Ormari po mjeri"
          imgSrc="https://www.namjestaj.info/wp-content/uploads/2019/06/base-slide-ormar-1.jpg"
          description="Ugradbeni ormari za razliku od klasičnih pružaju maksimalnu iskoristivost vašeg prostora, a mogu biti i neizostavni estetski element vašeg prostora. "
        ></WorkInfo>
        <WorkInfo
          title="Spavaća sobe"
          imgSrc="https://www.eistra.info/kira-mont-pula/4366/img-f457bb0e7443babd4c99f478b8d956e8-v-2019-10-24-4623027707.jpg"
          description="Ugradbeni ormari za razliku od klasičnih pružaju maksimalnu iskoristivost vašeg prostora, a mogu biti i neizostavni estetski element vašeg prostora. "
        ></WorkInfo>

        <WorkInfo
          title="Kupaonice"
          imgSrc="https://dupqmgrdwnev6.cloudfront.net/wp-content/uploads/2021/02/KUHINJE-PO-MJERI-PRIMA-Julija-siva-930x581.jpg?x92893"
          description="Kuhinja je jedno od najbitnijih mjesta vašeg doma te ona kao takva treba ispuniti tri bitna zahtjeva, a oni su: pristupačnost, funkcionalnost i estetika."
        ></WorkInfo>
        <WorkInfo
          title="Dnevni boravak"
          imgSrc="https://www.namjestaj.info/wp-content/uploads/2019/06/base-slide-ormar-1.jpg"
          description="Ugradbeni ormari za razliku od klasičnih pružaju maksimalnu iskoristivost vašeg prostora, a mogu biti i neizostavni estetski element vašeg prostora. "
        ></WorkInfo>
        <WorkInfo
          title="Ostalo"
          imgSrc="https://www.eistra.info/kira-mont-pula/4366/img-f457bb0e7443babd4c99f478b8d956e8-v-2019-10-24-4623027707.jpg"
          description="Ugradbeni ormari za razliku od klasičnih pružaju maksimalnu iskoristivost vašeg prostora, a mogu biti i neizostavni estetski element vašeg prostora. "
        ></WorkInfo>
      </div>
    </div>
  );
};

export default Work;

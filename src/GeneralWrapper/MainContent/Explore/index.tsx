import React, {useState} from 'react'
import {Route, Link, useRouteMatch, Redirect, Switch  } from "react-router-dom";
import './styles.css'
import {Button} from "../../../shared/Button";


const content = [
  {
    link: '/general',
    text: [
      'Montblanc International GmbH is a German manufacturing company of luxury goods, based in Hamburg. Montblanc produces a wide range of products, including goods for travel, writing implements, watches and jewellery, among other products.',
      'Montblanc International GmbH est une entreprise allemande spécialisée dans la fabrication de stylos de luxe (appelés Fine Writing Instruments), montres, maroquinerie, bijouterie/joaillerie et parfumerie. En 2009, elle détient 60 % du marché mondial des stylos haut de gamme.',
      'Montblanc International GmbH is een Duits bedrijf voor luxegoederen, gespecialiseerd in schrijfinstrumenten, horloges en accessoires (lederwaren, brillen, juwelen, parfums). Het hoofdkwartier is in Hamburg. Het is een onderdeel van Richemont. Het witte zeshoekige sterretje in het logo van Montblanc verwijst naar de besneeuwde top van de Mont Blanc.',
      'Montblanc International GmbH er et tysk firma som udvikler eksklusive fyldepenne og ure. Firmaet har i efterhånden mange år udviklet ekstremt eksklusive skriveredskaber. De er især kendt for deres verdensberømte serie af skriveredskaber ved navn Meisterstück (Masterpiece). Disse fyldepenne, kuglepenne, ballpoints og stiftblyanter er eksempelvis udført i resin og 14k guld.',
      'Montblanc International GmbH è un marchio noto in particolare per la produzione di strumenti per scrittura, orologi, gioielli e pelletteria, identificabili dal simbolo della stella bianca.',
    ],
  },
  {
    link: '/history',
    text: 'A Hamburg banker, Alfred Nehemias, and a Berlin engineer, August Eberstein, produced simple pens in 1906. After a short period of time Wilhelm Dziambor, Christian Lausen, and later Claus Johannes Voss took over the business. Their first model was the Rouge et Noir in 1909 followed in 1910 by the pen that was later to give the company its new name, Montblanc. The Meisterstück name (English: "Masterpiece", the name used for export) was used for the first time in 1924. Today, the Montblanc brand is on other goods besides pens, including watches, jewelry, fragrances, leather goods, and eyewear. The company was acquired by Alfred Dunhill Ltd. in 1977, following which, lower price pens were dropped, and the brand was used on a wide range of luxury goods other than pens. Today, Montblanc forms part of the Richemont group. Its sister companies include luxury brands Cartier, Van Cleef & Arpels, Chloé, and Baume et Mercier. Montblanc is owned, through Richemont, by the South African Rupert family.'
  },
  {
    link: '/brand',
    text: 'A trademark identified with Montblanc is the white stylized six-pointed snowcap with rounded edges, representative of the Mont Blanc snowcap from above, the symbol being adopted in 1913. The number "4810", the mountain\'s height in meters, is also a commonly recurring theme. In January 2014, Hugh Jackman was announced as Montblanc\'s Global Brand Ambassador, outside of US. In November 2019, Montblanc launched their partnership with The Webster for a limited-edition, capsule collection.'
  },
  {
    link: '/characteristics',
    text: 'Montblanc makes several models of pens, with the Meisterstück (fountain pen) representing the cornerstone model. Each is slightly different, however Meisterstück models created after 1990 have a serial number located on the ring at the top of the clip. Under the clip is usually the words "Made in Germany" and often "Pix". The barrels of pens made of black ‘precious resin’ will reveal a reddish hue under strong lighting; if the pen in question does not have these attributes then it is possibly a fake.[citation needed]'
  },
  {
    link: '/website',
    text: 'In October 2014 the first blocking order against trademark infringing consumer goods was passed against the major UK ISPs by Richemont, Cartier International and Montblanc to block several domains selling trademark infringing products.[7]'
  },
]

export const Explore = () => {

  const [slide, setSlide] = useState(0)
  let {path} = useRouteMatch()

  const info = [
    {link: `/general`, tabName: 'General Info'},
    {link: '/history', tabName: 'History'},
    {link: '/brand', tabName: 'Branding'},
    {link: '/characteristics', tabName: 'Characteristics'},
    {link: '/website', tabName: 'Website blocking'},
  ]

  const handleChange = (add: number, length: number) => {
    if (slide + add < 0) return 0
    if (slide + add >= length) return length
    else setSlide(prevState => prevState + add)
  }

  return (
    <>
    <span className="main-content__explore-list">
      {info.map(i => (
        <Link to={`${path}${i.link}`}>
          <button className="main-content__explore-list_tab">{i.tabName}</button>
        </Link>
      ))}
    </span>
      <div className="main-content__explore_info">
        <Switch>
          <Redirect exact from={path} to={`${path}/general`} />
          <Redirect exact from={`${path}${'/general'}`} to={`${path}${'/general'}/0`} />

          {content.map(cont => (


            Array.isArray(cont.text) ?
              (

                  <Route path={`${path}${cont.link}/:id`}>
                  <div className="main-content__explore_info-text">{cont.text[slide]}</div>
                  <div className="main-content__explore_button">
                    <Link to={`${path}${cont.link}/${(slide - 1) >= 0 ? slide - 1 : 0}`}>
                      <Button className="main-content__explore_button-background"
                              onClick={() => handleChange(-1, cont.text.length)}>{`<`}</Button>
                    </Link>
                    <Link
                      to={`${path}${cont.link}/${(slide + 1) < cont.text.length ? slide + 1 : cont.text.length - 1}`}>
                      <Button className="main-content__explore_button-background"
                              onClick={() => handleChange(1, cont.text.length)}>{`>`}</Button>
                    </Link>
                  </div>
                </Route>

              ) : (<Route path={`${path}${cont.link}`}>
                <div className="main-content__explore_info-text">{cont.text}</div>
              </Route>)




        ))}

        </Switch>
      </div>
    </>
  )
}

// const USER_ROUTE = (id) => `/app/users/${id}`
//
//
// @connect(...)
// @inject('Store')
// function C () {
//   const { id } = useParams<IParams>()
//   const { path } = useRouteMatch()
//
//   if (!id) return <Redirect to={path + '/0'} />
//
//   return (
//     ...
//   )
// }
//
//
//
// function inject(Component, storesToConnect) {
//   const stores = useContext(...)
//
//   return (...props) => (
//     <Component {...props} stores={stores}
//   )
// }
//
// const decC = inject(C, ...)
import img1 from "../assets/one.png";
import img2 from "../assets/two.png";
import img3 from "../assets/three.png";
import video1 from "../assets/three.png";
import video2 from "../assets/two.png";
import video3 from "../assets/one.png";
import capback from "../assets/blue cap bck 2.png";
import tshirtback from "../assets/pink tee bck 1.png";
import cap from "../assets/cap mockup 1.png";
import tshirt from "../assets/pinktshirt.png";
import game1bg from "../assets/game1bg.png";
import game2bg from "../assets/game2bg.png"
import gametitle from "../assets/gametitle.png"
import gametitle2 from "../assets/gametitle2.png"
import wolf1 from '../assets/gameprev1.png'
import wolf2 from '../assets/gameprev2.png'
import wolf3 from '../assets/gameprev3.png'
import avd1 from '../assets/avd1.png'
import avd2 from '../assets/avd3.png'
import avd3 from '../assets/avd2.png'
import avd4 from '../assets/avd4.png'
// import game1 from "../assets/"
export const cardsdata = [
  { id: 1, type: "img", url: img1 },
  { id: 2, type: "img", url: img2 },
  { id: 3, type: "img", url: img3 },
  { id: 4, type: "video", url: video1 },
  { id: 5, type: "video", url: video2 },
  { id: 6, type: "video", url: video3 },
];
export const clothdata = [
  {
    id: 1,
    url: capback,
  },
  {
    id: 2,
    url: tshirtback,
  },
];
export const capdata = [
  {
    id: 1,
    url: cap,
  },
  {
    id: 2,
    url: tshirt,
  },
];
export const gamedata = {
  id1: {
  title: gametitle2,
  mainImg: game1bg,
  page1para: "Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors. ",
  page1btn:'bg-[#A4A8FF]',
  cardheading:'text-[#A4A8FF]',
  textcolor:'text-[#A4A8FF]',
  imgdata:[
    {url:wolf1},
    {url:wolf2},
    {url:wolf3},
  ]
},
id2: {
  title: gametitle,
  mainImg: game2bg,
  page1para: "Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors. ",
  page1btn:'bg-[#90FFAE]',
  cardheading:'text-[#90FFAE]',
  textcolor:'text-[#90FFAE]',
  imgdata:[
    {url:avd1},
    {url:avd2},
    {url:avd3},
    {url:avd4},
  ]
},
}
export const gameprev = [
  {url:wolf2},
  {url:wolf3},
  {url:avd2}
]


import React , {useState, useEffect} from 'react';
import './upcomingevents.scss';
import BannerComp from '../../common/BannerComp/BannerComp';
import BannerImg from '../../../assets/bgremoved/bg2.png';
import One from '../../../assets/ai-gen-images/1.jpg';
import Two from '../../../assets/ai-gen-images/2.jpg';
import Three from '../../../assets/ai-gen-images/3.jpg';
import Four from '../../../assets/ai-gen-images/4.jpg';
import Five from '../../../assets/ai-gen-images/5.jpg';
import Six from '../../../assets/ai-gen-images/6.jpg';
import Seven from '../../../assets/ai-gen-images/7.jpg';




const UpcomingEvents = () => {
  const slideWidth = 30;

  let [w , setW] = useState(window.innerWidth)
  //  let width = window.innerWidth;
  function updateSize(){
    return setW(window.innerWidth)

  }

  useEffect(()=>{
    window.addEventListener('resize', updateSize);
    
  },[w])

const _items = [
    {
        player: {
            title: 'Tennis',
            desc: 'Game, set, match – where every swing tells a story on the tennis court!',
            date : "Summer event , 2024 , Switzerland",
            image: Five,
        },
    },
    {
        player: {
            title: "Baseball",
            desc: "Hit it out of the park with baseball – where every pitch is a chance for glory!",
            image: Two,
            date : "Summer event , 2024 , Switzerland",
        },
    },
    {
        player: {
            title: 'Basketball',
            desc: "Dribble through life's challenges and slam dunk your way to success with basketball",
            image: Seven,
            date : "Summer event , 2024 , Switzerland",
        },
    },
    // {
    //     player: {
    //         title: 'Volley Ball',
    //         desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
    //         image: Six,
    //     },
    // },
    {
        player: {
            title: 'Archery',
            desc: 'Bullseye dreams and arrow precision – archery, where focus meets the target!',
            image: One,
            date : "Summer event , 2024 , Switzerland",
        },
    },
    {
        player: {
            title: 'Boxing',
            desc: 'In the ring of determination, every punch tells a tale of resilience – boxing, where champions are forged.   ',
            image: Four,
            date : "Summer event , 2024 , Switzerland",
        },
    },
];

const _items1 = [
    {
        player: {
             color : "#ee334e",

            title: 'Tennis',
            desc: 'Game, set, match – where every swing tells a story on the tennis court!',
            date : "Summer event , 2024 , Switzerland",
            image: Five,
        },
    },
    {
        player: {
            title: "Baseball",
      color : "#fcb131",

            desc: "Hit it out of the park with baseball – where every pitch is a chance for glory!",
            image: Two,
            date : "Summer event , 2024 , Switzerland",
        },
    },
    {
        player: {
            title: 'Basketball',
      color : "#0081cb",

            desc: "Dribble through life's challenges and slam dunk your way to success with basketball",
            image: Seven,
            date : "Summer event , 2024 , Switzerland",
        },
    },
    {
        player: {
            title: 'Volley Ball',
      color : "#ee334e",

            desc: 'Spike your way to victory and set the court ablaze – volleyball, where teamwork rises above the net!',
            image: Six,
            date : "Summer event , 2024 , Switzerland",

        },
    },
    {
        player: {
            title: 'Archery',
      color : "#fcb131",

            desc: 'Bullseye dreams and arrow precision – archery, where focus meets the target!',
            image: One,
            date : "Summer event , 2024 , Switzerland",
        },
    },
    {
        player: {
            title: 'Boxing',
            color : "#0081cb",


            desc: 'In the ring of determination, every punch tells a tale of resilience – boxing, where champions are forged.   ',
            image: Four,
            date : "Summer event , 2024 , Switzerland",
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth +12}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.player.image} alt={`${item.player.title}`}/>
            </div>
            <div className="carousel-slide-item__body">
                <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p>
                <p className='dateBtn'>{item.player.date}</p>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

// const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    const MobileComp = () => {
      return (
        <div className='eventContainer'>
          {_items1.map(item=>{
            return (
              <div className='eventBox'>
                <img src={item.player.image} className='eventImg'/>
                <div className='eventDescContainer'>
                  <h4>{item.player.title}</h4>
                  <p>{item.player.desc}</p>
                  <button className='dateBtn' style={{backgroundColor:`${item.player.color}`}}>{item.player.date}</button>



                </div>
                
              </div>
            )
          })}
        </div>
      )
    }
  return (
    <div className='upcomingEvents'>
      <BannerComp img={BannerImg} title={"Upcoming Events"}/>
      {w >  760 ? (
      <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                {/* <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div> */}
            </div>
      </div>
      ) : (
        <>
          <MobileComp/>
        </>
      )}

    </div>
  )

}

export default UpcomingEvents
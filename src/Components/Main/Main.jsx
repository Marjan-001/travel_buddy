import React, { useEffect } from 'react';
import '../Main/main.css';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

import bali from '../../Assets/bali.jpg'
import bora from '../../Assets/bora.jpg'
import cappadocia from '../../Assets/cappadocia.jpg'
import halongbay from '../../Assets/ha long bay.jpg'
import queen from '../../Assets/queenstone.jpg'
import rio from '../../Assets/rio.jpg'
import rome from '../../Assets/rome.jpg'
import tokyo from '../../Assets/tokyo.jpg'
import victoria from '../../Assets/victoria falls.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: bali,
        des: 'Bali',
        country: 'Indonesia',
        grade: "Cultural Relax",
        cost: '$700',
        details: "Bali is an island of extraordinary beauty and cultural richness, offering visitors a chance to escape the daily grind and immerse themselves in a tropical paradise. From its breathtaking beaches and lush jungles to its vibrant nightlife and rich cultural heritage, Bali has something to offer every traveler. Whether you're seeking relaxation, adventure, or a mix of both, Bali is the perfect destination for an unforgettable holiday."

    },
    {
        id: 2,
        imgSrc: bora,
        des: 'Bora Bora',
        country: 'France',
        grade: "Cultural Relax",
        cost: '$1000',
        details: "Bora Bora, located in French Polynesia, offers visitors a chance to escape to a tropical paradise unlike any other. Known for its stunning lagoons, lush vegetation, and luxurious over-the-water bungalows, Bora Bora is the perfect destination for a romantic getaway or a relaxing beach vacation. Whether you're seeking adventure in the form of snorkeling, diving, or exploring local culture, or simply want to lounge on the beach and soak up the sun, Bora Bora has something for everyone."

    },
    {
        id: 3,
        imgSrc: cappadocia,
        des: 'Cappadocia',
        country: 'Turkey',
        grade: "Cultural Relax",
        cost: '$1200',
        details: "Cappadocia, located in Turkey, is a unique and stunning destination filled with breathtaking landscapes and rich cultural history. With its iconic fairy chimneys, cave dwellings, and hot air balloon rides, Cappadocia offers a truly one-of-a-kind travel experience. Whether you're interested in exploring the local culture, hiking through the incredible terrain, or simply taking in the breathtaking views, Cappadocia is a must-see destination for any traveler."

    },
    {
        id: 4,
        imgSrc: halongbay,
        des: 'Ha Long Bay',
        country: 'Vietnam',
        grade: "Cultural Relax",
        cost: '$500',
        details: "Ha Long Bay, located in Vietnam, is a stunning destination known for its breathtaking scenery, vibrant culture, and rich history. With its towering limestone cliffs, calm emerald waters, and diverse marine life, Ha Long Bay is a must-visit for any traveler seeking adventure and beauty. Whether you're interested in kayaking through the towering cliffs, exploring local villages, or simply relaxing on a traditional junk boat, Ha Long Bay has something for everyone."





    },
    {
        id: 5,
        imgSrc: queen,
        des: 'Queenstone',
        country: 'Newzealand',
        grade: "Cultural Relax",
        cost: '$900',
        details: "If you’re looking to party in New Zealand, Queenstown is the perfect place! Although just a small town, Queenstown has a vibrant nightlife with tons of awesome places to party around town. From bars with dozens of craft beers on tap, to Latin dance, to mechanical bulls, you can find it all in Queenstown! In fact, partying is one of the best things to do in Queenstown indoors! "

    },
    {
        id: 6,
        imgSrc: rio,
        des: 'Rio de Janeiro',
        country: 'Brazil',
        grade: "Cultural Relax",
        cost: '$800',
        details: "It is most known for Carnival, samba, bossa nova, and balneário beaches such as Barra de Tijuca, Copacabana, Ipanema, and Leblon. It is also unique for its location, architecture, inhabitants, and lifestyle."

    },
    {
        id: 7,
        imgSrc: rome,
        des: 'Rome',
        country: 'Italy',
        grade: "Cultural Relax",
        cost: '$2000',
        details: "Rome is famous for having amazing foods such as spaghetti, lasagna, pizza and gelato. This Capital of Italy is well known for historic sites such as the Colosseum, Trevi Fountain and Vatican City. Rome is where the Ancient Romans created systems and structures that we still use to this day."

    },
    {
        id: 8,
        imgSrc: tokyo,
        des: 'Tokyo',
        country: 'Japan',
        grade: "Cultural Relax",
        cost: '$1000',
        details: "Tokyo is the enormous and wealthy capital of Japan, and also its main city, overflowing with culture, commerce, and most of all, people.Tokyo truly has something for every traveller."

    },
    {
        id: 9,
        imgSrc: victoria,
        des: 'Victoria Falls',
        country: 'Zimbabwe',
        grade: "Cultural Relax",
        cost: '$2000',
        details: "The Mosi-oa-Tunya/Victoria Falls is the world's greatest sheet of falling water and significant worldwide for its exceptional geological and geomorphological features and active land formation processes with outstanding beauty attributed to the falls i.e. the spray, mist and rainbows."

    }

]

const Main = () => {


    useEffect(() => {
        Aos.init({ duration: 500 })

    }, [])
    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 className="title">
                    Most visited destination
                </h3>
            </div>

            <div className="setContent grid">
                {
                    Data.map(({ id, imgSrc, des, grade, cost, details, country }) => {

                        return (
                            <div data-aos="fade-up" key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={des} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {des}
                                    </h4>
                                    <span className="content flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{country}</span>
                                    </span>

                                    <div className="fees flex">

                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{cost}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{details}</p>
                                    </div>

                                    <button className="btn flex">
                                        Details <HiOutlineClipboardCheck className='icon' />

                                    </button>

                                </div>
                            </div>
                        )

                    })
                }
            </div>

        </section>
    );
};

export default Main;
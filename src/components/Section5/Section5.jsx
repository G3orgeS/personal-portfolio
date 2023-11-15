import React from 'react'
import Card from '../Card/Card'
import { FaBirthdayCake , FaCity, FaPlaystation, FaBookOpen, FaCode } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { PiCookingPot, PiParkFill  } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { GiFilmSpool } from "react-icons/gi";
import './Section5.css'

const Section5 = () => {
  return (
    <div className='section5wrapper'>
        <div className="section5-0">
            <Card title="Code" icon={<FaCode />}/>
        </div>
        <div className="section5-1">
            <Card title="1995/09/28" icon={<FaBirthdayCake  />}/>
        </div>
        <div className="section5-2">
            <Card title="Stockholm" icon={<FaCity />}/>
        </div>
        <div className="section5-3">
            <Card title="Ps4" icon={<FaPlaystation />}/>
        </div>
        <div className="section5-4">
            <Card title="Nintendo" icon={<BsNintendoSwitch />}/>
        </div>
        <div className="section5-5">
            <Card title="Husman" icon={<PiCookingPot />}/>
        </div>
        <div className="section5-6">
            <Card title="Klassiker" icon={<FaBookOpen />}/>
        </div>
        <div className="section5-7">
            <Card title="Träning" icon={<CgGym />}/>
        </div>
        <div className="section5-8">
            <Card title="Film" icon={<GiFilmSpool  />}/>
        </div>
        <div className="section5-9">
            <Card title="Utomhus" icon={<PiParkFill   />}/>
        </div>
    </div>
  )
}

export default Section5
import { useState } from 'react';
import {FaToggleOff} from 'react-icons/fa';
import {FaToggleOn} from 'react-icons/fa';
import{FiShoppingCart} from 'react-icons/fi'
import{FiFilter} from 'react-icons/fi'
import{BsPerson} from 'react-icons/bs';
import {BsGlobe} from 'react-icons/bs';
import{MdOutlinePending} from 'react-icons/md'
import{HiOutlineCurrencyDollar} from 'react-icons/hi'
import{BiTimeFive} from 'react-icons/bi';
import {BsBookshelf} from 'react-icons/bs';
import {AiOutlineDollar} from 'react-icons/ai';
import{IoIosCheckboxOutline} from 'react-icons/io'
import{FcRefresh} from 'react-icons/fc'
import{AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineEdit} from 'react-icons/ai';
import {AiOutlineDelete} from 'react-icons/ai';
import CreateNewOrder from '../../createNewOrder/CreateNewOrder';
import Toggle from '../../../smallComponents/toggle/Toggle';
import './VideoComp.css'

const VideoComp = ({ videos }) => {
  
  return (
    <div>
      {videos.map((video) => {
        const { id, title, number, payment, topics } = video;
        return (
          <article key={id}>
            <div className = 'video__component'>
              <div className = 'icon-div'>
                <p className = 'icon'>-</p>
              </div>
              <div className = 'video__right'>
                <h3 className = 'video__title'>{title}</h3>
                <div className = 'video__content'>
                  <span><BsBookshelf /></span><p>{number}</p>
                  <span><AiOutlineDollar /></span><p style = {{color: 'red'}}>{payment}</p>
                </div>
                <div style = {{display: 'flex', flexDirection: 'row'}}>
                  {
                    topics.map((topic) => {
                      return(
                        <div className = 'video__topics'>
                          <p>{topic}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className = 'video__icons'>
                <span><Toggle size = {'30px'} color = {'purple'}/></span>      
                <span><AiOutlineEdit fontSize="25px" color = 'green' /></span>      
                <span><BsGlobe fontSize="25px" color = 'blue' /></span>      
                <span><AiOutlineDelete fontSize="25px" color = 'red' /></span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  )
}

export default VideoComp

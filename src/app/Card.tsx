import React from 'react'

import './Card.css'
import FavoriteIcon from "@mui/icons-material/Favorite";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkIcon from "@mui/icons-material/Bookmark";


function Card() {
  return (
    <div className="cardSection">
      {/* topsection */}
      <div className="topSection">
        <div className="badgeSection">
          <img
            className="badge"
            src="https://www.iconpacks.net/icons/1/free-badge-icon-1361-thumb.png"
          />
          <img
            className="badge"
            src="https://www.iconpacks.net/icons/1/free-badge-icon-1361-thumb.png"
          />
        </div>

        <div className="gameTitle">
          <img
            className="gameImage"
            src="https://www.notebookcheck.net/fileadmin/Notebooks/Sonstiges/Games/RedDeadRedemption2/intro.jpg "
            alt=""
          />
        </div>

        <div className="cardType">
          <h3 className="typeTitle">Gameplay</h3>
        </div>
      </div>

      {/* middleSection */}

      <div className="reviewSection">
        <h2 className="reviewHeading">Ultra realistic shadow graphics MOD</h2>
        <p className="reviewDescription">
          I was going through the white arabian early in my second play though,
          forgot my winter suit, horse died from a fall, and now all i....
        </p>
      </div>
      <div className="reviewTimestamp">
        <p className="timeStamp">1 min ago</p>
        <p className="timeStamp">2.5k Views</p>
      </div>



        {/* bottomSection */}


        <div className="bottomSection">

          <div className="feedCard">

          <div className="userInfo">
            <img className="userProfile" src="https://i.redd.it/jbhx2bl8ub351.png" alt="" />
            <h3 className="userName">PanicornQueen</h3> 
          </div>
          <img className="feedImage"  src = "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwb24lMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
          </div>
        <div className = "iconSection">
          <button className='iconButton'>

              <FavoriteIcon fontSize='large' />
            </button>
          <button className='iconButton'>
              <MapsUgcIcon fontSize='large' />

            </button >
          <button className='iconButton'>
              <RemoveRedEyeIcon fontSize='large'/>
                
            </button>
            <button className='iconButton'>
                
              <TelegramIcon fontSize='large' />
            </button>
            <button  className='iconButton'>
              <BookmarkIcon fontSize='large' />

            </button>

            
              
          </div>
        </div>
        

    </div>
   


     
  );
}

export default Card
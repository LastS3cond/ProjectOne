import React from "react";
import '../index.css';
import Club from './Club'


const CommunityBoard = (event) => {
    return (
      <div className='CommunityBoard'>
        <table>
        <tr>
        </tr>
        <tbody>
          <tr>
            <td><Club name='Scuba Club' img ='/images/scuba.jpg' link = "https://sites.google.com/vt.edu/scvt/"/></td> 
            <td><Club name='Cycling Club' img ='/images/bike.jpg' link = "https://www.virginiatechcycling.com/"/></td> 
            <td><Club name='Surf Club' img ='/images/surf.jpg' link = "https://www.instagram.com/vt.surf/"/></td> 
            <td><Club name='Snow Club' img ='/images/snow.jpg' link = "https://www.facebook.com/groups/Blacksburgboardersclub/"/></td>
            <td><Club name='Slackline Club' img ='/images/slack.jpg' link = "https://www.facebook.com/groups/vtslackline/"/></td>  
           </tr>
           <tr>
            <td><Club name='Hang Gliding Club' img ='/images/Hang.jpg' link = "https://www.facebook.com/groups/487668498059923"/></td> 
            <td><Club name='Outdoor Club' img ='/images/hike.jpg' link = "https://ocvt.club/"/></td> 
            <td><Club name='Parkour Club' img ='/images/parkour.jpg' link = "https://www.facebook.com/groups/145287698896548/"/></td> 
            <td><Club name='Rock Climbing Club' img ='/images/rock.jpg' link = "https://www.instagram.com/climb_vt/?hl=en"/></td>
            <td><Club name='Sailing Club' img ='/images/sail.jpg' link = "https://www.facebook.com/SailingClubatVT/"/></td>  
           </tr>
        </tbody>
        </table>
        </div>
    )
}
export default CommunityBoard;

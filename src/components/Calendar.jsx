import React from "react";
import Event from "./Event";

const Calendar=()=>{
    return(
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>  
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am </td>
                        <Event event= '1.41 hrs🚗🛣️' color='pink' location='Mammoth Lakes -highway 395 most beautiful?'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                     <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event event= '1.48 hrs🚗🛣️' color='pink' 
                            location={
                                    <>
                                        Phantom Falls <br /> 
                                        -Oroville,CA
                                    </>
                                }
                        />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> <tr>
                        <td className="time">12 pm</td>
                        <Event event= '2.51 hrs' color='pink' location='Lake Tahoe'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <Event
                            event="2.26 hrs🚗🛣️"
                            color="pink"
                            location={
                                <>
                                Black Chasm Cavern <br />
                                National Natural Landmark – Volcano, CA
                                </>
                            }
                            />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> <tr>
                        <td className="time">3pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> <tr>
                        <td className="time">5 pm</td>
                        <Event event= '3.8 hrs' color='pink' location='Lassen Volcanic NP'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Fancy Dinner 🎩' color ='green' location='Tahoe'/>
                        
                    </tr>
                </tbody> 
            </table>
        </div>
    )
}
export default Calendar
import React from "react";
import P3 from "../../assets/p3.png";
import P6 from "../../assets/p6.png";
import P7 from "../../assets/p7.png";


function Works(){
    return(
        <div className="works">
                            <div>
                    <fig>
                        <img src={P3} alt="work frontend for sophie bluel"></img>
                        <figcaption>frontend work on <br></br>sophie bluel website</figcaption>
                    </fig>
                    <fig>
                        <img src={P6} alt="work frontend for kasa"></img>
                        <figcaption>frontend work on <br></br>kasa website</figcaption>
                    </fig>
                    <fig>
                        <img src={P7} alt="work backend for mon vieux grimmoire"></img>
                        <figcaption>backend work on <br></br>mon vieux grimmoire</figcaption>
                    </fig>
                </div>
        </div>
    )
}

export default Works;
import React from "react";
import {useForm} from "react-hook-form";


function Mybody({goNext,  goPrev}){
    const {register,  handleSubmit} = useForm({ mode: 'onChange' });
    const onSubmit = (data) => {
        console.log(data);
        goNext();
    };

    const handlePrevClick = () => {
        goPrev();
      };


    return(
        <div>
            <form className="signbox" onSubmit={handleSubmit(onSubmit)}>
               <div className="sex">
                    <span className="sextxt">성별</span>
                    <span className="checktext">여성</span>
                    <input type="checkbox" key={"M"} {...register("Female")} />
                    <span className="checktext">남성</span>
                    <input type="checkbox" key={"F"} {...register("male")} />

               </div>
               <div>
                    <span className="birthtxt">생년월일</span>
                    <input {...register("birth")}  className="birthinput" type="date" value="2023-11-15"  {...register("height")} />
               </div>
               <div className="weight">
                    <span className="weighttxt">몸무게</span>
                    <input {...register("weight")} className="mybodybox" type="text" id="weight" placeholder="몸무게   ( kg )"/>
                </div>
               <div className="height">
                    <span className="heighttxt">키</span>
                    <input {...register("height")} className="mybodybox" type="text" id="height" placeholder="키   ( cm )"/>
               </div>
               <div className="prev-nextbtn">
                    <div>
                        <button id="prev" className="submitbtn" onClick={handlePrevClick}>Prev</button>
                    </div>

                    <div >
                        <input className="submitbtn"  type="submit" value="Next"/>
                    </div>

               </div>
               
            </form>
        </div>
        
    );
}

export default Mybody;
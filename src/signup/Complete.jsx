import React from "react";
import { useNavigate } from "react-router-dom";
import Addiv from "./Addiv";

function Complete({goPrev }) {

    const navigate = useNavigate();
  
    const onSubmit = (data) => {
        console.log(data);
        navigate("/home");
    };
  
    const handlePrevClick = () => {
      goPrev();
    };
    return(
        <div>
            <div className="addnotice">
                <h4><span className="bold">슬림타임</span>에서 <span className="bold">가르시니아, 키토산 성분</span>이 담긴 다이어트 보조제를<br></br>만나보시겠어요?</h4>
            </div>
            <div className="ad">
                <Addiv cost="22,000" name="1+1 핑크빛 슬림핑크" url="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/6082104717/B.jpg?85000000"/>
                <Addiv cost="32,000" name = "15플러스 가르시니아"url="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202001/18/035d6f1e-7692-453a-8f6f-fff466174794.jpg"/>
            </div>
            <div>
                <div className="prev-nextbtn">
                    <div>
                        <button id="prev" className="submitbtn" onClick={handlePrevClick}>
                                앞으로
                        </button>
                    </div>
                    <div >
                        <button id="gohome" className="submitbtn" onClick={onSubmit}>
                                🏠 둘러보기
                        </button>
                    </div>
           
                </div>

            </div>

        </div>
        
    );
}

export default Complete;
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Myworry({ goNext, goPrev }) {
  const { register, handleSubmit } = useForm({ mode: "onChange" });
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    goNext();
  };

  const handlePrevClick = () => {
    goPrev();
  };

  const worryClick = (index) => {
    const isSelected = selectedIndexes.includes(index);

    let updatedIndexes;

    if (isSelected) {
      // 이미 선택된 경우, 선택 해제
      updatedIndexes = selectedIndexes.filter((i) => i !== index);
    } else if (selectedIndexes.length < 3) {
      // 선택되지 않은 경우, 최대 3개까지만 선택 가능
      updatedIndexes = [...selectedIndexes, index];
    } else {
      // 이미 3개 선택된 경우, 선택 취소 후 새로운 선택 추가
      const [first, ...rest] = selectedIndexes;
      updatedIndexes = [...rest, index];
    }

    setSelectedIndexes(updatedIndexes);

    document.querySelectorAll('.worrytap').forEach((el, i) => {
      el.style.backgroundColor = updatedIndexes.includes(i) ? 'rgb(221, 235, 255)'  : 'initial';
    });
  };

  return (
    <div className="worrybox">
        <div>
            <h3 className="worrynotice">
                다이어트 고민을 <span>최대 3개</span> 골라주세요 !
            </h3>
        </div>
      <div className="worrytap" onClick={() => worryClick(0)}>
        탄수화물 섭취를 줄이기가 어려워요
      </div>
      <div className="worrytap" onClick={() => worryClick(1)}>
        야식을 못 참아요
      </div>
      <div className="worrytap" onClick={() => worryClick(2)}>
        운동을 해도 살이 안 빠져요
      </div>
      <div className="worrytap" onClick={() => worryClick(3)}>
        체중 감소를 하더라도 유지가 잘 안돼요
      </div>
      <div className="worrytap" onClick={() => worryClick(4)}>
        식욕이 너무 많아서 자제하고 싶어요
      </div>
      <div className="prev-nextbtn">
        <div>
          <button id="prev" className="submitbtn" onClick={handlePrevClick}>
            Prev
          </button>
        </div>

        <div>
          <input
            className="submitbtn"
            type="submit"
            value="Next"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  );
}

export default Myworry;

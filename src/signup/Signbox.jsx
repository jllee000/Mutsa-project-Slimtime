import React from "react";
import {useForm} from "react-hook-form";


export default function Signbox({ goNext }) {
    const {register, handleSubmit,  formState: { errors }, getValues} = useForm({ mode: 'onChange' });
    const onSubmit = (data) => {
        console.log(data);
        goNext();
    };

    // 이메일
    const userEmail = {
        required : "필수 필드입니다.",
        pattern: {
            value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            message: "이메일 형식에 맞지 않습니다.",
          }
    }

    // 아이디
    const userID = {
        required: "필수 필드입니다.",
        minLength: {
          value: 2,
          message: "2자 이상 입력해주세요."
        },
      }

    // 비밀번호
    const userPw = {
        required: "필수 필드입니다.",
        minLength: {
          value: 5,
          message: "영문, 숫자 포함 5자 이상 입력해주세요."
        },
        pattern: {
          value: /^(?=.*[a-zA-z])(?=.*[0-9])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{5,20}$/,
          message: "영문, 숫자 포함 5자 이상 입력해주세요."
        }
      }

    // 비번확인

    const userPw2 = {
        required: "필수 필드입니다.",
        
        validate: {
          check: (val) => {
            if (getValues("pw") !== val ) {
              return "비밀번호가 일치하지 않습니다.";
            }
          }
        }
      }



    return(
        <div>
            <form className="signbox" onSubmit={handleSubmit(onSubmit)}>
                
                <div className="emailbox">
                    <h5 className="titlewrap">이메일</h5>
                    <input {...register("email", userEmail)} className="inputbox" type="text" id="email" placeholder="이메일을 입력하세요"/>
                    { errors?.email &&
                        <div className='errordiv'>
                            <span className='errortext'>
                                {errors.email.message}
                            </span>
                        </div> //유효성 절차를 통과하지 못했을 경우 err message를 보여주기
                    }
                </div>

                <div className="idbox">
                    <h5 className="titlewrap">아이디</h5>
                    <input {...register("id", userID)} className="inputbox" type="text" id="id" placeholder="아이디를 입력하세요"/>
                    { errors?.id &&
                        <div className='errordiv'>
                            <span className='errortext'>
                                {errors.id.message}
                            </span>
                        </div> //유효성 절차를 통과하지 못했을 경우 err message를 보여주기
                    }
                </div>

                <div className="pwbox">
                    <h5 className="titlewrap">비밀번호</h5>
                    <input {...register("pw", userPw)} className="inputbox" type="text" id="pw" placeholder="영문, 숫자 포함 5자 이상 비밀번호"/>
                    { errors?.pw &&
                        <div className='errordiv'>
                            <span className='errortext'>
                                {errors.pw.message}
                            </span>
                        </div> //유효성 절차를 통과하지 못했을 경우 err message를 보여주기
                    }

                </div>
                <div className="pw2box">
                    <h5 className="titlewrap">비밀번호 재확인</h5>
                    <input {...register("pw2", userPw2)} className="inputbox" type="text" id="pw2" placeholder="비밀번호를 확인해주세요"/>
                    { errors?.pw2 &&
                        <div className='errordiv'>
                            <span className='errortext'>
                                {errors.pw2.message}
                            </span>
                        </div> //유효성 절차를 통과하지 못했을 경우 err message를 보여주기
                    }

                </div>
            
                <div >
                    <input className="submitbtn"  type="submit" value="Next"/>
                </div>
            </form>

        </div>
    );
}



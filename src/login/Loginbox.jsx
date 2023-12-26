import React from "react";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function Loginbox() {
    const {register, handleSubmit,  formState: { errors }, getValues} = useForm({ mode: 'onChange' });
    const navigate = useNavigate();
    const onLogin = (data) => {
        console.log(data);
        navigate("/home");
    };

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

    return(
        <div>
            
            <form className="loginboxdiv" onSubmit={handleSubmit(onLogin)}>
                <h3 className="logintxt">로그인</h3>
                <div className="idbox">
                            <h5 className="titlewrap">ID</h5>
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
                            <h5 className="titlewrap">PassWord</h5>
                            <input {...register("pw", userPw)} className="inputbox" type="text" id="pw" placeholder="영문, 숫자 포함 5자 이상 비밀번호"/>
                            { errors?.pw &&
                                <div className='errordiv'>
                                    <span className='errortext'>
                                        {errors.pw.message}
                                    </span>
                                </div> //유효성 절차를 통과하지 못했을 경우 err message를 보여주기
                            }

                        </div>
                        <div>
                        <input className="loginbtn"  type="submit" value="Login" /> 
                        </div>

            </form>
        </div>
    );
}
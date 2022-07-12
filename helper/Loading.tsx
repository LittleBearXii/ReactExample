import { off } from 'process';
import style from '../styles/Loading.module.css';

function Loading(props : {loading: boolean}) {
  return(    
    <div className={props.loading ? style.overlay_on : style.overlay_off} >
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div className={style.spinner}></div>
      </div>
    </div>
  );
}

export default Loading;
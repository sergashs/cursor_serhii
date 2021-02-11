import react from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={s.MyPostItem + " block blockRight"}  >
        <div className={s.MyPostItemHeader}>
            <img src="https://sergashs.github.io/cursor_serhii/portfolio/img/ava.jfif" />
        <div className={s.MyPostItemAuthor}>
    <div className={s.MyPostItemAuthorName}>Serhii Demchyshyn</div>
    <div className={s.MyPostItemAuthorDate}>{props.date}</div>
        </div>
        </div>
        <div className={s.MyPostItemBody}>
 {props.message}
        </div>
        </div>
    )
}

export default Post;
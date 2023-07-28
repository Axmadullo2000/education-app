import React, {JSX, useEffect, useState} from 'react';
import {AiFillStar} from "react-icons/ai";
import cn from "classnames";

import {IRatingProps} from "@/components/Rating/Rating.props";

import style from './Rating.module.css'


function Rating({rating, setRating, isEditable=false, ...props}: IRatingProps) {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))


    useEffect(() => {
        renderRating(rating)
    }, [rating])


    const renderRating = (currentRating: number) => {
        const updateArray = ratingArray.map((item, id) => (
            <div>
                <span
                    onMouseOver={() => changeRatingDisplay(id + 1)}
                    onMouseLeave={() => changeRatingDisplay(rating)}
                    className={cn(style.star, {
                        [style.filled]: id < currentRating,
                        [style.editable]: isEditable
                    })}
                    onClick={() => clickRatingHandler(id + 1)}
                >
                    <AiFillStar size={24} />
                </span>
            </div>
        ))
        setRatingArray(updateArray)
    }


    const changeRatingDisplay = (rating: number) => {
        if (!isEditable) {
            return
        }

        renderRating(rating)
    }

    const clickRatingHandler = (index: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(index);
    }


    return (
        <div className={cn(style.rating)} {...props}>
            {ratingArray.map((item, id) => <span key={id}>{item}</span>)}
        </div>
    )
}

export default Rating;
